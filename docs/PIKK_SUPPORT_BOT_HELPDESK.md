# PIKK Support Bot & Helpdesk
Status: **prototype**. The browser FAQ assistant is rule-based and ticket drafts are saved only in localStorage. The demo does **not** notify PIKK employees, send tickets to an external service, send email, or use a trained AI model.

## Approved product behavior
1. Support entry appears in the navigation drawer and route `#/support`, accessible to signed-in and signed-out visitors.
2. An automated assistant answers common issues about music purchases, permanent downloads, login, payments, livestreaming, rights, and safety. Show an explicit human escalation option on uncertain issues.
3. If the assistant cannot resolve an issue, collect ticket category, subject, description and securely authenticated user/account ID when available. Never request passwords, payment details, identity documents or sensitive secrets in the support chat.
4. After **server-side acceptance only**, show ticket ID, status and expected acknowledgment. Do not pretend a browser-local draft has been sent.
5. Staff dashboard: assigned/open/in progress/waiting/closed; searchable ticket queue, internal notes, response history, severity, categories and owner; only authorized staff can access.
6. Notify user on actual support reply, allow threaded replies and reopening. Track audit history and enforce retention/deletion policy.
7. Privacy and security: API authentication, user-vs-admin authorization, validation, XSS protections, encryption in transit/at rest, rate limits, spam controls, abuse reporting, access logging and configurable retention; no training on customer support content without consent and appropriate disclosures.
8. Automated answers must be grounded in verified current PIKK policies and capabilities. Use intent classification and approved knowledge base first, then optional LLM-assisted answers with safeguards. Unknown answers escalate, no hallucinated refunds or account changes.
9. Integrate real email/in-app notifications only after a configured service exists; don't hardcode destination mailboxes or fabricate delivery confirmations.
10. Test the lifecycle from user ticket submission through staff response and user receipt before exposing a production support claim.

## Current implementation
- Front-end `src/pages/support.js` shows six FAQ categories, interactive input and a prototype ticket draft.
- Drafts stay *on this browser* only, maximum 20, and cannot be read by a remote support team.
- `tests/pikk-support-bot.test.mjs` verifies bot topics, escalation and clear limitations.
