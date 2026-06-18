# MatchCraft

A local-first resume tailoring app. Paste a job description and MatchCraft:

- detects hard skills, responsibilities, aliases, and multi-word technical phrases;
- weights required qualifications more heavily than general job-posting text;
- identifies supported and unsupported keywords;
- suggests recurring job-description terms to add to a browser-persistent keyword database;
- ranks existing experience and projects by relevance;
- generates an editable, single-column ATS-friendly resume;
- exports plain text or a print-ready PDF.

## Gemini mode

Gemini mode uses `gemini-3.5-flash` to perform semantic keyword extraction and
truth-preserving resume rewording. Paste a Gemini API key into the app; the key
is held only in memory for the current tab and is not stored.

Temporary Gemini capacity failures are retried with exponential backoff. If
`gemini-3.5-flash` remains unavailable, the app automatically tries
`gemini-2.5-flash`.

The static app calls the Gemini API directly for local use. Do not deploy this
client-side key flow to production. Use a backend proxy and keep the API key in
an environment variable or secret manager.

The generator does not fabricate qualifications or silently insert unsupported
keywords. Its score is a transparent alignment estimate, not a guarantee from a
specific applicant tracking system.

## Run

Open `index.html` in a modern browser. No installation, build step, account, or
API key is required.
