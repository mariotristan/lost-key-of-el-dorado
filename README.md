# The Lost Key of El Dorado

**A security investigation across a fictional LATAM fintech.** A relay credential disappeared from the current configuration shortly before an unusual customer-data export. Follow the evidence, then repair the authentication boundary that made the incident worse.

Languages: **English** | [Español](docs/es.md) | [Português](docs/pt.md)

## The mission

You are an investigator at **Dorado Pago**, an entirely fictional company. On 2025-03-18 its incident team received an alert about a customer export. Everything in this repository is fabricated for offline training: names, credentials, accounts, IP addresses, and records. There are no real services to contact and no external attack is required or permitted.

1. **Recover the lost key.** The current checkout no longer contains an old relay configuration. Inspect this repository's Git history and find the deliberately fake training credential. Explain where you found it, how you verified it, and why deleting a file is not the same as removing a credential from history.
2. **Trace the incident.** Use the credential's identifier and the evidence in [`evidence/`](evidence/) to identify the suspicious access. Report the relevant time, source address, session, actions and outcome. Distinguish observed facts from hypotheses, and cite the evidence lines or events behind your conclusions.
3. **Repair authentication and authorization.** Review [`app/auth.js`](app/auth.js), run the tests, and fix the vulnerable flow. Explain the exploit, your changes and their tradeoffs. Additional focused tests are welcome.

## Get started

You need Git and Node.js 20 or newer. Clone the repository normally, without `--depth`: a source ZIP or shallow clone may omit the history needed for stage 1. Work locally; no install, network, or service is needed.

```sh
git clone https://github.com/mariotristan/lost-key-of-el-dorado.git
cd lost-key-of-el-dorado
git log --all --oneline
node --test
```

The supplied security tests **fail on the initial code by design**. Make all of them pass without weakening or removing them. The API contract and security requirements are in [`app/README.md`](app/README.md). The fake credential is an investigative clue, not an app password.

## What to prepare

Prepare a short private report with:

- The fake credential, its historical path and commit, and your investigation steps.
- A timeline of the suspicious access, with evidence references, alternative explanations and confidence.
- Your code changes and tests, an explanation of the vulnerabilities, and prioritized containment and prevention recommendations.
- Assumptions and limitations. We value clear reasoning and justified tradeoffs, not just speed. Partial, well-explained work is useful.

**Submissions are not open yet.** Do not publish solutions, forks containing solutions, pull requests, answers in issues, or the fake credential. The organizer will provide a private submission channel separately before accepting entries.

## Rules

Work only with the files and code in your own local clone. Do not scan, access, or attack real infrastructure, accounts, people, or third-party services. The documentation-only IP ranges are simulated evidence, not targets. Do not use real credentials or personal data in your work.

This is a fictional technical exercise, not a speed race or a claim that geography determines ability. Candidates may explain their work in Spanish, Portuguese, or English.
