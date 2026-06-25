# MatchCraft

A local-first resume tailoring app. Paste a job description and MatchCraft:

- detects hard skills, responsibilities, aliases, and multi-word technical phrases;
- weights required qualifications more heavily than general job-posting text;
- identifies supported and unsupported keywords;
- builds an ATS-oriented skills section using exact job priorities, normalized
  terminology, conventional technical categories, and alias deduplication;
- attempts to include up to ten evidence-backed adjacent skills from relevant
  technical categories, subject to the one-page fit limit;
- guarantees at least 15 evidence-backed hard skills and prevents page fitting
  from trimming below that floor;
- consolidates skills into four ATS-readable rows: Languages, Technologies,
  Data & Cloud, and Soft Skills;
- recognizes 100 soft skills and includes up to four employer-requested traits
  when the source resume contains supporting evidence;
- offers a Stretch mode that requires explicit confirmation before adding
  unsupported job skills;
- suggests recurring job-description terms to add to a browser-persistent keyword database;
- ranks existing experience and projects by relevance;
- generates an editable, single-column ATS-friendly resume that measures the
  Letter page and retains as much relevant content as fits;
- optionally adds Minneapolis, Jordan ZIP, or full Jordan street-address
  location text to the contact line;
- exports plain text or a one-page PDF made from selectable text and vector
  lines, without rasterized resume content.

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
