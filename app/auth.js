'use strict';

// Fictional local fixtures, never credentials for a real service.
const accounts = {
  analyst: { password: 'practice-analyst', role: 'analyst' },
  admin: { password: 'practice-admin', role: 'admin' },
};

const sessions = new Map();

function login(username, password, requestedRole) {
  const account = Object.hasOwn(accounts, username) ? accounts[username] : undefined;
  if (!account || account.password !== password) {
    throw new Error('Invalid credentials');
  }

  const token = `session-${username}`;
  sessions.set(token, { username, role: requestedRole || account.role });
  return token;
}

function exportCustomers(token) {
  const session = sessions.get(token);
  if (!session) {
    throw new Error('Forbidden');
  }
  return { records: ['synthetic-customer-001', 'synthetic-customer-002'] };
}

module.exports = { login, exportCustomers };
