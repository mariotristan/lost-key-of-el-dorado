'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { login, exportCustomers } = require('./auth');

test('invalid credentials cannot establish a session', () => {
  assert.throws(() => login('analyst', 'wrong', 'admin'), { message: 'Invalid credentials' });
  assert.throws(() => login('missing', 'practice-admin', 'admin'), { message: 'Invalid credentials' });
  assert.throws(() => login('constructor', 'anything', 'admin'), { message: 'Invalid credentials' });
});

test('an analyst cannot promote themselves or export', () => {
  const normal = login('analyst', 'practice-analyst');
  assert.throws(() => exportCustomers(normal), { message: 'Forbidden' });
  const token = login('analyst', 'practice-analyst', 'admin');
  assert.throws(() => exportCustomers(token), { message: 'Forbidden' });
});

test('an administrator can export even when a caller supplies another role', () => {
  const token = login('admin', 'practice-admin', 'analyst');
  assert.deepEqual(exportCustomers(token), {
    records: ['synthetic-customer-001', 'synthetic-customer-002'],
  });
});

test('unknown, missing and forged sessions cannot export', () => {
  assert.throws(() => exportCustomers(), { message: 'Forbidden' });
  assert.throws(() => exportCustomers('not-a-session'), { message: 'Forbidden' });
  assert.throws(() => exportCustomers('session-admin'), { message: 'Forbidden' });
});

test('session tokens differ across logins and do not expose identity', () => {
  const first = login('admin', 'practice-admin', 'admin');
  const second = login('admin', 'practice-admin', 'admin');
  assert.equal(typeof first, 'string');
  assert.notEqual(first, second);
  assert.doesNotMatch(first, /admin/i);
});
