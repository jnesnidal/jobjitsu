# Resumejitsu

Resumejitsu is a local-first static web app for tailoring a resume to a pasted
job description with OpenAI.

## Workflow

1. Upload an existing resume. TXT and DOCX are supported directly; PDF parsing is
   best-effort.
2. Add optional extra context, such as projects, metrics, tools, certifications,
   or location preferences.
3. Build a structured knowledge base from the resume plus extra context.
4. Paste a job description and analyze the ATS score.
5. Tailor the resume bullets with exact job-description keywords.
6. Edit the one-page preview, refit it, copy it, download text, or print/save PDF.

## OpenAI

The app calls the OpenAI Responses API from the browser:

- Endpoint: `https://api.openai.com/v1/responses`
- Default model: `gpt-5.5`
- The API key is entered in the UI. It stays in memory unless "Remember key
  locally" is checked.

Do not deploy this as a public website with a shared API key. For production,
proxy OpenAI requests through a server you control.

## Legacy App

The previous MatchCraft app has been moved to `legacy-matchcraft/`.
