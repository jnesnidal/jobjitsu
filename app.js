const elements = {
  apiKey: document.querySelector("#apiKey"),
  rememberKey: document.querySelector("#rememberKey"),
  toggleKey: document.querySelector("#toggleKey"),
  model: document.querySelector("#model"),
  resumeFile: document.querySelector("#resumeFile"),
  fileStatus: document.querySelector("#fileStatus"),
  extraInfo: document.querySelector("#extraInfo"),
  buildKnowledge: document.querySelector("#buildKnowledge"),
  clearKnowledge: document.querySelector("#clearKnowledge"),
  knowledgePreview: document.querySelector("#knowledgePreview"),
  jobDescription: document.querySelector("#jobDescription"),
  analyzeButton: document.querySelector("#analyzeButton"),
  tailorButton: document.querySelector("#tailorButton"),
  statusLine: document.querySelector("#statusLine"),
  heroScore: document.querySelector("#heroScore"),
  atsScore: document.querySelector("#atsScore"),
  scoreNote: document.querySelector("#scoreNote"),
  exactCount: document.querySelector("#exactCount"),
  closeCount: document.querySelector("#closeCount"),
  exactKeywords: document.querySelector("#exactKeywords"),
  closeKeywords: document.querySelector("#closeKeywords"),
  missingKeywords: document.querySelector("#missingKeywords"),
  fitStatus: document.querySelector("#fitStatus"),
  resumePreview: document.querySelector("#resumePreview"),
  refitButton: document.querySelector("#refitButton"),
  copyButton: document.querySelector("#copyButton"),
  downloadButton: document.querySelector("#downloadButton"),
  pdfButton: document.querySelector("#pdfButton"),
  printButton: document.querySelector("#printButton"),
  printRoot: document.querySelector("#printRoot"),
  toast: document.querySelector("#toast"),
};

const heroHeroText = document.querySelector(".hero > div:first-child");
const heroCard = document.querySelector(".hero-card");
const openAiPanel = document.querySelector(".control-panel .panel-block:first-child");
const atsScoreCard = document.querySelector(".scoreboard article:first-child");
const skillsBox = document.querySelector(".keyword-board");
const previewToolbar = document.querySelector(".preview-toolbar");

const storageKeys = {
  apiKey: "resumejitsu-openai-key",
  knowledgeBase: "resumejitsu-knowledge-base",
  rawResume: "resumejitsu-raw-resume",
  extraInfo: "resumejitsu-extra-info",
};

let rawResumeText = "";
let knowledgeBase = null;
let latestAnalysis = null;
let latestTailoredResume = null;
let fitTimer = null;
let heroHeightTimer = null;
let openAiHeightTimer = null;

const schemaStringArray = {
  type: "array",
  items: { type: "string" },
};

const knowledgeBaseSchema = {
  type: "object",
  additionalProperties: false,
  required: [
    "candidateName",
    "headline",
    "contact",
    "summary",
    "skills",
    "experience",
    "projects",
    "education",
    "certifications",
    "additionalFacts",
  ],
  properties: {
    candidateName: { type: "string" },
    headline: { type: "string" },
    contact: {
      type: "object",
      additionalProperties: false,
      required: ["email", "phone", "location", "links"],
      properties: {
        email: { type: "string" },
        phone: { type: "string" },
        location: { type: "string" },
        links: schemaStringArray,
      },
    },
    summary: { type: "string" },
    skills: schemaStringArray,
    experience: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        required: ["company", "title", "location", "dates", "bullets", "tools"],
        properties: {
          company: { type: "string" },
          title: { type: "string" },
          location: { type: "string" },
          dates: { type: "string" },
          bullets: schemaStringArray,
          tools: schemaStringArray,
        },
      },
    },
    projects: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        required: ["name", "subtitle", "technologies", "bullets"],
        properties: {
          name: { type: "string" },
          subtitle: { type: "string" },
          technologies: schemaStringArray,
          bullets: schemaStringArray,
        },
      },
    },
    education: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        required: ["school", "degree", "location", "dates", "details"],
        properties: {
          school: { type: "string" },
          degree: { type: "string" },
          location: { type: "string" },
          dates: { type: "string" },
          details: schemaStringArray,
        },
      },
    },
    certifications: schemaStringArray,
    additionalFacts: schemaStringArray,
  },
};

const analysisSchema = {
  type: "object",
  additionalProperties: false,
  required: ["jobTitle", "company", "keywords", "roleSignals", "recommendations"],
  properties: {
    jobTitle: { type: "string" },
    company: { type: "string" },
    keywords: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        required: [
          "term",
          "category",
          "importance",
          "supportLevel",
          "resumeEvidence",
          "whyItMatters",
        ],
        properties: {
          term: { type: "string" },
          category: {
            type: "string",
            enum: ["hard_skill", "soft_skill", "tool", "domain", "responsibility", "credential"],
          },
          importance: { type: "integer" },
          supportLevel: { type: "string", enum: ["exact", "close", "missing"] },
          resumeEvidence: schemaStringArray,
          whyItMatters: { type: "string" },
        },
      },
    },
    roleSignals: schemaStringArray,
    recommendations: schemaStringArray,
  },
};

const tailoredResumeSchema = {
  type: "object",
  additionalProperties: false,
  required: ["name", "contactLine", "summary", "skills", "experience", "projects", "education"],
  properties: {
    name: { type: "string" },
    contactLine: { type: "string" },
    summary: { type: "string" },
    skills: {
      type: "object",
      additionalProperties: false,
      required: ["Languages", "Technologies", "Tools", "Professional"],
      properties: {
        Languages: schemaStringArray,
        Technologies: schemaStringArray,
        Tools: schemaStringArray,
        Professional: schemaStringArray,
      },
    },
    experience: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        required: ["company", "title", "location", "dates", "bullets"],
        properties: {
          company: { type: "string" },
          title: { type: "string" },
          location: { type: "string" },
          dates: { type: "string" },
          bullets: schemaStringArray,
        },
      },
    },
    projects: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        required: ["name", "subtitle", "technologies", "bullets"],
        properties: {
          name: { type: "string" },
          subtitle: { type: "string" },
          technologies: schemaStringArray,
          bullets: schemaStringArray,
        },
      },
    },
    education: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        required: ["school", "degree", "location", "dates", "details"],
        properties: {
          school: { type: "string" },
          degree: { type: "string" },
          location: { type: "string" },
          dates: { type: "string" },
          details: schemaStringArray,
        },
      },
    },
  },
};

function normalize(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9+#.]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function unique(values) {
  return [...new Map(values.filter(Boolean).map((value) => [normalize(value), value])).values()];
}

const skillTokenMap = new Map(
  Object.entries({
    ai: "AI",
    ml: "ML",
    nlp: "NLP",
    sql: "SQL",
    nosql: "NoSQL",
    api: "API",
    apis: "APIs",
    rest: "REST",
    restful: "RESTful",
    graphql: "GraphQL",
    html: "HTML",
    css: "CSS",
    javascript: "JavaScript",
    typescript: "TypeScript",
    nodejs: "Node.js",
    "node.js": "Node.js",
    nextjs: "Next.js",
    "next.js": "Next.js",
    reactjs: "React",
    react: "React",
    vuejs: "Vue",
    vue: "Vue",
    angularjs: "Angular",
    angular: "Angular",
    dotnet: ".NET",
    ".net": ".NET",
    "asp.net": "ASP.NET",
    csharp: "C#",
    "c#": "C#",
    cpp: "C++",
    "c++": "C++",
    aws: "AWS",
    gcp: "GCP",
    azure: "Azure",
    ci: "CI",
    cd: "CD",
    cicd: "CI/CD",
    devops: "DevOps",
    ios: "iOS",
    android: "Android",
    powerbi: "Power BI",
    github: "GitHub",
    gitlab: "GitLab",
    jira: "Jira",
    postgresql: "PostgreSQL",
    mysql: "MySQL",
    mongodb: "MongoDB",
    redis: "Redis",
    docker: "Docker",
    kubernetes: "Kubernetes",
    tableau: "Tableau",
    pandas: "Pandas",
    numpy: "NumPy",
    pytorch: "PyTorch",
    tensorflow: "TensorFlow",
    openai: "OpenAI",
    githubactions: "GitHub Actions",
  }),
);

function formatSkillToken(token) {
  const cleaned = String(token || "").trim();
  if (!cleaned) return "";
  const normalized = cleaned.toLowerCase().replace(/\s+/g, "");
  if (skillTokenMap.has(normalized)) return skillTokenMap.get(normalized);
  if (/^[A-Z0-9][A-Za-z0-9.+/#-]*$/.test(cleaned) && /[A-Z]/.test(cleaned.slice(1))) {
    return cleaned;
  }
  if (/^[A-Z]{2,}(?:\/[A-Z]{2,})+$/.test(cleaned)) return cleaned;
  return cleaned.charAt(0).toUpperCase() + cleaned.slice(1).toLowerCase();
}

function formatSkillLabel(skill) {
  return String(skill || "")
    .trim()
    .split(/(\s+|\/|-|\(|\))/)
    .map((part) => (/^\s+$|^[/()\-]$/.test(part) ? part : formatSkillToken(part)))
    .join("")
    .replace(/\bAnd\b/g, "and");
}

const keywordRejectPhrases = new Set([
  "required",
  "preferred",
  "strongly preferred",
  "optional",
  "nice to have",
  "nice-to-have",
  "plus",
  "bonus",
  "minimum qualifications",
  "preferred qualifications",
  "responsibilities",
  "requirements",
  "qualifications",
  "equal opportunity",
  "competitive benefits",
  "paid time off",
  "health insurance",
]);

const keywordRejectPatterns = [
  /\b(strongly\s+)?preferred\b/i,
  /\b(optional|nice[-\s]?to[-\s]?have|bonus|plus)\b/i,
  /\b(required|requirements?|qualifications?|responsibilit(?:y|ies))\b/i,
  /\b(equal opportunity|work authorization|sponsorship|background check)\b/i,
  /\b(benefits?|insurance|salary|compensation|pto|paid time off|401k)\b/i,
  /\b(bachelor'?s|masters?|master'?s|phd|doctorate|associate'?s)\s+(degree|preferred|required)?\b/i,
  /\bdegree\s+(in|preferred|required)\b/i,
  /\b(high school diploma|ged|college degree)\b/i,
];

const roleTitlePattern =
  /\b(senior|sr\.?|junior|jr\.?|staff|principal|lead|associate|entry[-\s]?level)?\s*(software|systems?|data|business|product|project|program|qa|quality|devops|cloud|security|frontend|front[-\s]?end|backend|back[-\s]?end|full[-\s]?stack)?\s*(engineer|developer|analyst|manager|specialist|administrator|architect|consultant|coordinator|intern|lead)\b/i;

function isLikelyNonKeyword(term, category, jobTitle = "") {
  const value = String(term || "").trim();
  const normalized = normalize(value);
  if (!normalized || normalized.length < 2) return true;
  if (keywordRejectPhrases.has(normalized)) return true;
  if (normalize(jobTitle) && normalized === normalize(jobTitle)) return true;
  if (keywordRejectPatterns.some((pattern) => pattern.test(value))) return true;
  if (category !== "responsibility" && roleTitlePattern.test(value)) return true;
  return false;
}

function cleanAnalysisKeywords(analysis) {
  const seen = new Set();
  const keywords = (analysis.keywords || [])
    .filter((keyword) => keyword && typeof keyword.term === "string")
    .map((keyword) => ({ ...keyword, term: keyword.term.trim() }))
    .filter((keyword) => !isLikelyNonKeyword(keyword.term, keyword.category, analysis.jobTitle))
    .filter((keyword) => {
      const key = normalize(keyword.term);
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  return { ...analysis, keywords };
}

function isRenderableSkill(skill) {
  return !isLikelyNonKeyword(skill, "hard_skill", latestAnalysis?.jobTitle || "");
}

function setStatus(message) {
  elements.statusLine.textContent = message;
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => elements.toast.classList.remove("show"), 2800);
}

function getApiKey() {
  return elements.apiKey.value.trim();
}

function saveSessionState() {
  localStorage.setItem(storageKeys.extraInfo, elements.extraInfo.value);
  if (knowledgeBase) {
    localStorage.setItem(storageKeys.knowledgeBase, JSON.stringify(knowledgeBase));
  } else {
    localStorage.removeItem(storageKeys.knowledgeBase);
  }
  if (rawResumeText) {
    localStorage.setItem(storageKeys.rawResume, rawResumeText);
  }
  if (elements.rememberKey.checked && getApiKey()) {
    localStorage.setItem(storageKeys.apiKey, getApiKey());
  } else {
    localStorage.removeItem(storageKeys.apiKey);
  }
}

function restoreSessionState() {
  const savedKey = localStorage.getItem(storageKeys.apiKey) || "";
  if (savedKey) {
    elements.apiKey.value = savedKey;
    elements.rememberKey.checked = true;
  }

  rawResumeText = localStorage.getItem(storageKeys.rawResume) || "";
  elements.extraInfo.value = localStorage.getItem(storageKeys.extraInfo) || "";
  const savedKnowledge = localStorage.getItem(storageKeys.knowledgeBase);
  if (savedKnowledge) {
    try {
      knowledgeBase = JSON.parse(savedKnowledge);
      renderKnowledgePreview();
    } catch {
      localStorage.removeItem(storageKeys.knowledgeBase);
    }
  }
}

function textFromResponse(payload) {
  if (typeof payload?.output_text === "string") return payload.output_text;
  if (typeof payload?.outputText === "string") return payload.outputText;
  if (typeof payload?.text === "string") return payload.text;
  const outputText = Array.isArray(payload?.output)
    ? payload.output
        .flatMap((item) =>
          Array.isArray(item?.content)
            ? item.content.map((content) => content?.text || content?.value || "")
            : [],
        )
        .join("")
    : "";
  if (outputText) return outputText;
  return (payload.candidates || [])
    .flatMap((candidate) => candidate?.content?.parts?.map((part) => part.text || "") || [])
    .join("");
}

function stripJsonFences(value) {
  return String(value || "")
    .trim()
    .replace(/^```(?:json)?\s*/i, "")
    .replace(/\s*```$/i, "")
    .trim();
}

function parseJsonResponse(value) {
  const text = stripJsonFences(value);
  try {
    return JSON.parse(text);
  } catch {
    const start = text.indexOf("{");
    const end = text.lastIndexOf("}");
    if (start >= 0 && end > start) {
      return JSON.parse(text.slice(start, end + 1));
    }
    throw new Error("OpenAI returned malformed JSON. Try again.");
  }
}

async function callOpenAI({ name, schema, developer, user }) {
  const apiKey = getApiKey();
  if (!apiKey) throw new Error("Enter an OpenAI API key first.");

  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: elements.model.value.trim() || "gpt-5.5",
      reasoning: { effort: "low" },
      input: [
        {
          role: "developer",
          content: [{ type: "input_text", text: developer }],
        },
        {
          role: "user",
          content: [{ type: "input_text", text: user }],
        },
      ],
      text: {
        format: {
          type: "json_schema",
          name,
          strict: true,
          schema,
        },
      },
    }),
  });

  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    const message =
      payload?.error?.message ||
      payload?.message ||
      `OpenAI request failed with status ${response.status}.`;
    throw new Error(message);
  }

  const text = textFromResponse(payload);
  if (!text) throw new Error("OpenAI returned no JSON content.");

  return parseJsonResponse(text);
}

async function readFileAsArrayBuffer(file) {
  return file.arrayBuffer();
}

async function readFileAsText(file) {
  return file.text();
}

function findEndOfCentralDirectory(bytes) {
  for (let index = bytes.length - 22; index >= 0; index -= 1) {
    if (
      bytes[index] === 0x50 &&
      bytes[index + 1] === 0x4b &&
      bytes[index + 2] === 0x05 &&
      bytes[index + 3] === 0x06
    ) {
      return index;
    }
  }
  return -1;
}

async function inflateRaw(bytes) {
  if (!("DecompressionStream" in window)) {
    throw new Error("This browser cannot decompress DOCX files. Save the resume as TXT instead.");
  }
  const stream = new Blob([bytes]).stream().pipeThrough(new DecompressionStream("deflate-raw"));
  return new Uint8Array(await new Response(stream).arrayBuffer());
}

async function extractDocxText(file) {
  const buffer = await readFileAsArrayBuffer(file);
  const bytes = new Uint8Array(buffer);
  const view = new DataView(buffer);
  const eocd = findEndOfCentralDirectory(bytes);
  if (eocd < 0) throw new Error("Could not read DOCX archive.");

  const entryCount = view.getUint16(eocd + 10, true);
  const centralOffset = view.getUint32(eocd + 16, true);
  let offset = centralOffset;

  for (let entry = 0; entry < entryCount; entry += 1) {
    if (view.getUint32(offset, true) !== 0x02014b50) break;
    const method = view.getUint16(offset + 10, true);
    const compressedSize = view.getUint32(offset + 20, true);
    const nameLength = view.getUint16(offset + 28, true);
    const extraLength = view.getUint16(offset + 30, true);
    const commentLength = view.getUint16(offset + 32, true);
    const localOffset = view.getUint32(offset + 42, true);
    const name = new TextDecoder().decode(bytes.slice(offset + 46, offset + 46 + nameLength));

    if (name === "word/document.xml") {
      const localNameLength = view.getUint16(localOffset + 26, true);
      const localExtraLength = view.getUint16(localOffset + 28, true);
      const dataStart = localOffset + 30 + localNameLength + localExtraLength;
      const compressed = bytes.slice(dataStart, dataStart + compressedSize);
      const xmlBytes = method === 0 ? compressed : await inflateRaw(compressed);
      const xml = new TextDecoder("utf-8").decode(xmlBytes);
      return xml
        .replace(/<w:tab\/>/g, "\t")
        .replace(/<\/w:p>/g, "\n")
        .replace(/<[^>]+>/g, "")
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, '"')
        .replace(/&apos;/g, "'")
        .replace(/\n{3,}/g, "\n\n")
        .trim();
    }

    offset += 46 + nameLength + extraLength + commentLength;
  }

  throw new Error("Could not find resume text inside the DOCX file.");
}

async function extractPdfText(file) {
  const buffer = await readFileAsArrayBuffer(file);
  const raw = new TextDecoder("latin1").decode(buffer);
  const matches = [...raw.matchAll(/\(([^()]{2,})\)\s*Tj|\[([^\]]{2,})\]\s*TJ/g)];
  const text = matches
    .map((match) => (match[1] || match[2] || "").replace(/\\[()\\]/g, ""))
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
  if (text.length < 120) {
    throw new Error("PDF text extraction was too limited. Upload a DOCX or TXT version instead.");
  }
  return text;
}

async function parseResumeFile(file) {
  const extension = file.name.split(".").pop().toLowerCase();
  if (extension === "docx") return extractDocxText(file);
  if (extension === "pdf") return extractPdfText(file);
  return readFileAsText(file);
}

function buildKnowledgePrompt() {
  return {
    developer:
      "You are a precise resume parser. Extract only facts present in the uploaded resume and extra notes. Do not invent dates, employers, metrics, skills, degrees, certifications, locations, or outcomes. Preserve source wording where useful but normalize into structured JSON.",
    user: `Uploaded resume text:\n${rawResumeText || "(none)"}\n\nExtra user information:\n${
      elements.extraInfo.value.trim() || "(none)"
    }\n\nCreate a structured candidate knowledge base. If a field is unknown, use an empty string or empty array.`,
  };
}

async function buildKnowledgeBase() {
  if (!rawResumeText.trim() && !elements.extraInfo.value.trim()) {
    throw new Error("Upload a resume or add extra information first.");
  }

  setStatus("Building knowledge base with OpenAI...");
  const prompt = buildKnowledgePrompt();
  knowledgeBase = await callOpenAI({
    name: "resumejitsu_knowledge_base",
    schema: knowledgeBaseSchema,
    developer: prompt.developer,
    user: prompt.user,
  });
  saveSessionState();
  renderKnowledgePreview();
  return knowledgeBase;
}

function resetAnalysisPreview() {
  latestAnalysis = null;
  elements.atsScore.textContent = "0%";
  elements.exactCount.textContent = "0";
  elements.closeCount.textContent = "0";
  elements.scoreNote.textContent = "Analyze a job description to begin.";
  elements.exactKeywords.innerHTML = "<span class='chip chip-placeholder'>None yet</span>";
  elements.closeKeywords.innerHTML = "<span class='chip chip-placeholder'>None yet</span>";
  elements.missingKeywords.innerHTML = "<span class='chip chip-placeholder'>None yet</span>";
  elements.tailorButton.disabled = true;
}

function flattenKnowledge() {
  return [rawResumeText, elements.extraInfo.value, JSON.stringify(knowledgeBase || {})]
    .filter(Boolean)
    .join("\n\n");
}

function containsExactPhrase(haystack, needle) {
  const normalizedHaystack = ` ${normalize(haystack)} `;
  const normalizedNeedle = normalize(needle);
  if (!normalizedNeedle) return false;
  return normalizedHaystack.includes(` ${normalizedNeedle} `);
}

function tokenOverlapScore(term, knowledgeText) {
  const termTokens = normalize(term)
    .split(" ")
    .filter((token) => token.length > 2);
  if (!termTokens.length) return 0;
  const knowledge = new Set(normalize(knowledgeText).split(" "));
  const hits = termTokens.filter((token) => knowledge.has(token)).length;
  return hits / termTokens.length;
}

function scoreKeywords(keywords) {
  const knowledgeText = flattenKnowledge();
  const scored = keywords
    .filter((keyword) => keyword.term && keyword.term.trim())
    .map((keyword) => {
      const exact = containsExactPhrase(knowledgeText, keyword.term);
      const evidenceExact = (keyword.resumeEvidence || []).some((evidence) =>
        containsExactPhrase(knowledgeText, evidence),
      );
      const overlap = tokenOverlapScore(keyword.term, knowledgeText);
      const close =
        !exact &&
        (keyword.supportLevel === "close" ||
          keyword.supportLevel === "exact" ||
          evidenceExact ||
          overlap >= 0.55);
      const status = exact ? "exact" : close ? "close" : "missing";
      return {
        ...keyword,
        importance: Math.min(5, Math.max(1, Number(keyword.importance) || 1)),
        status,
        overlap,
      };
    });

  const totalWeight = scored.reduce((sum, keyword) => sum + keyword.importance, 0) || 1;
  const earned = scored.reduce((sum, keyword) => {
    if (keyword.status === "exact") return sum + keyword.importance;
    if (keyword.status === "close") return sum + keyword.importance * 0.38;
    return sum;
  }, 0);

  return {
    keywords: scored.sort(
      (a, b) =>
        b.importance - a.importance ||
        ["exact", "close", "missing"].indexOf(a.status) -
          ["exact", "close", "missing"].indexOf(b.status),
    ),
    score: Math.round((earned / totalWeight) * 100),
  };
}

function buildAnalysisPrompt() {
  return {
    developer:
      "You are an ATS keyword analyst. Extract only high-signal ATS keywords: concrete tools, platforms, programming languages, frameworks, methods, domains, certifications, and specific responsibilities. Favor exact employer terminology over synonyms. Do not extract job titles, degree names, preference labels, section headings, benefits, generic filler, or standalone words that are not searchable candidate qualifications. Compare against the candidate knowledge base, but never mark a keyword supported unless the knowledge base provides direct or strongly equivalent evidence.",
    user: `Candidate knowledge base:\n${JSON.stringify(knowledgeBase, null, 2)}\n\nRaw resume and notes:\n${flattenKnowledge()}\n\nJob description:\n${elements.jobDescription.value.trim()}\n\nReturn 18 to 30 ATS-relevant keywords. Use exact wording from the job description in each keyword term.

Good keyword examples:
- React
- TypeScript
- REST APIs
- SQL
- data visualization
- stakeholder communication
- CI/CD
- cloud-based applications
- Agile development

Do not return:
- job titles such as Software Engineer, Data Analyst, Project Manager, or Intern
- degree phrases such as bachelor's degree, master's degree, degree in computer science, or high school diploma
- preference wording such as strongly preferred, optional, nice to have, required, plus, or bonus
- headings such as responsibilities, qualifications, requirements, minimum qualifications, or preferred qualifications
- benefits, compensation, location, work authorization, or equal opportunity language
- vague filler such as strong, excellent, ability, team, successful, motivated, fast-paced, or communication by itself`,
  };
}

async function analyzeJob() {
  if (!elements.jobDescription.value.trim()) {
    throw new Error("Paste a job description first.");
  }
  if (!knowledgeBase) {
    await buildKnowledgeBase();
  }

  setStatus("Analyzing exact ATS keyword alignment...");
  const prompt = buildAnalysisPrompt();
  const aiAnalysis = await callOpenAI({
    name: "resumejitsu_ats_analysis",
    schema: analysisSchema,
    developer: prompt.developer,
    user: prompt.user,
  });
  const cleanedAnalysis = cleanAnalysisKeywords(aiAnalysis);
  latestAnalysis = {
    ...cleanedAnalysis,
    ...scoreKeywords(cleanedAnalysis.keywords || []),
  };
  renderAnalysis();
  elements.tailorButton.disabled = false;
  saveSessionState();
  return latestAnalysis;
}

function buildTailoringPrompt() {
  const exactKeywords = latestAnalysis.keywords
    .filter((keyword) => keyword.status === "exact")
    .map((keyword) => ({
      term: keyword.term,
      importance: keyword.importance,
      evidence: keyword.resumeEvidence,
    }));

  const closeKeywords = latestAnalysis.keywords
    .filter((keyword) => keyword.status === "close")
    .map((keyword) => ({
      term: keyword.term,
      importance: keyword.importance,
      evidence: keyword.resumeEvidence,
      whyItMatters: keyword.whyItMatters,
    }));

  const missingKeywords = latestAnalysis.keywords
    .filter((keyword) => keyword.status === "missing")
    .map((keyword) => keyword.term);

  return {
    developer:
      "You are a truthful resume editor. Your main job is to convert close-but-not-exact resume language into the exact job-description keywords when the candidate knowledge base already supports those terms. Prefer replacing nearby synonyms and generic wording with exact employer terminology instead of merely adding keywords. Do not invent skills, employers, dates, credentials, metrics, tools, outcomes, or responsibilities. Keep the resume concise enough for one page.",
    user: `Candidate knowledge base:\n${JSON.stringify(
      knowledgeBase,
      null,
      2,
    )}\n\nTarget job title: ${latestAnalysis.jobTitle}\nCompany: ${
      latestAnalysis.company
    }\n\nAlready exact keywords. Keep them when useful, but do not spend rewrite effort on them first:\n${JSON.stringify(
      exactKeywords,
      null,
      2,
    )}\n\nClose-but-not-exact keywords. These are the highest-priority rewrite targets. Rephrase as many supported resume phrases as possible into these exact job-description terms:\n${JSON.stringify(
      closeKeywords,
      null,
      2,
    )}\n\nMissing keywords that must NOT be inserted as claims:\n${JSON.stringify(
      missingKeywords,
      null,
      2,
    )}\n\nCreate a tailored one-page resume.

Rewrite rules:
1. Prioritize converting close matches into exact job-description wording.
2. Replace generic verbs, tools, and responsibility phrases with exact close-keyword terms whenever the knowledge base supports them.
3. Try to use as many close-keyword terms as possible across summary, skills, experience, and projects without making the writing unnatural.
4. Do not force missing keywords into the resume.
5. Keep bullets factual, readable, and concise.

Formatting rules:
- Use 2 to 4 bullets for recent experience.
- Use 1 to 3 bullets for projects.
- Keep the skills section compact and ATS-readable.
- Put work experience in reverse chronological order when dates are available.`,
  };
}

async function tailorResume() {
  if (!latestAnalysis) await analyzeJob();

  setStatus("Tailoring resume bullets toward close-match exact keywords...");
  const prompt = buildTailoringPrompt();
  latestTailoredResume = await callOpenAI({
    name: "resumejitsu_tailored_resume",
    schema: tailoredResumeSchema,
    developer: prompt.developer,
    user: prompt.user,
  });
  renderResume(latestTailoredResume);
  fitResumeToPage();
  setStatus("Tailored resume ready for editing.");
  showToast("Tailored resume generated");
}

function renderKnowledgePreview() {
  if (!knowledgeBase) {
    elements.knowledgePreview.textContent = "No knowledge base built yet.";
    return;
  }
  const count = [
    `${knowledgeBase.experience.length} role${knowledgeBase.experience.length === 1 ? "" : "s"}`,
    `${knowledgeBase.projects.length} project${knowledgeBase.projects.length === 1 ? "" : "s"}`,
    `${knowledgeBase.skills.length} skill${knowledgeBase.skills.length === 1 ? "" : "s"}`,
  ];
  elements.knowledgePreview.innerHTML = `
    <strong>${escapeHtml(knowledgeBase.candidateName || "Candidate knowledge base")}</strong><br />
    ${escapeHtml(knowledgeBase.headline || "Parsed resume profile")}<br />
    ${escapeHtml(count.join(" / "))}
  `;
}

function clearKnowledgeBase() {
  knowledgeBase = null;
  latestAnalysis = null;
  latestTailoredResume = null;
  localStorage.removeItem(storageKeys.knowledgeBase);
  renderKnowledgePreview();
  resetAnalysisPreview();
  saveSessionState();
  setStatus("Knowledge base cleared.");
  showToast("Knowledge base cleared");
}

function chip(keyword) {
  return `<span class="chip ${keyword.status}" title="${escapeHtml(
    keyword.whyItMatters || "",
  )}">${escapeHtml(keyword.term)}</span>`;
}

function renderAnalysis() {
  const exact = latestAnalysis.keywords.filter((keyword) => keyword.status === "exact");
  const close = latestAnalysis.keywords.filter((keyword) => keyword.status === "close");
  const missing = latestAnalysis.keywords.filter((keyword) => keyword.status === "missing");

  elements.atsScore.textContent = `${latestAnalysis.score}%`;
  elements.exactCount.textContent = exact.length;
  elements.closeCount.textContent = close.length;
  elements.scoreNote.textContent =
    latestAnalysis.score >= 82
      ? "Strong exact keyword alignment."
      : latestAnalysis.score >= 62
        ? "Good evidence, but exact terminology can improve."
        : "Important exact job-description terms are missing.";

  elements.exactKeywords.innerHTML =
    exact.map(chip).join("") || "<span class='chip chip-placeholder'>None yet</span>";
  elements.closeKeywords.innerHTML =
    close.map(chip).join("") || "<span class='chip chip-placeholder'>None yet</span>";
  elements.missingKeywords.innerHTML =
    missing.map(chip).join("") || "<span class='chip'>None detected</span>";
  setStatus(`Analyzed ${latestAnalysis.keywords.length} ATS keywords.`);
}

function renderSkills(skills) {
  return Object.entries(skills)
    .map(([category, values]) => [
      category,
      unique(values || [])
        .filter(isRenderableSkill)
        .map(formatSkillLabel),
    ])
    .filter(([, values]) => values.length)
    .map(
      ([category, values]) =>
        `<p class="skills-line"><strong>${escapeHtml(category)}:</strong> ${escapeHtml(
          values.join(", "),
        )}</p>`,
    )
    .join("");
}

function projectTechLine(entry) {
  return unique(entry.technologies || [])
    .map(formatSkillLabel)
    .slice(0, 5)
    .join(", ");
}

function renderEntry(entry, type) {
  const title = type === "project" ? entry.name : entry.company;
  const right = type === "project" ? "" : entry.dates;
  const projectTech = type === "project" ? projectTechLine(entry) : "";
  const subLeft = type === "project" && projectTech ? `${entry.subtitle} | ${projectTech}` : type === "project" ? entry.subtitle : entry.title;
  const subRight = type === "project" ? "" : entry.location;
  const bullets = (entry.bullets || [])
    .map((bullet, index) => `<li data-trim="${index > 0 ? "optional" : "keep"}">${escapeHtml(bullet)}</li>`)
    .join("");
  return `
    <div class="entry" data-entry-type="${type}">
      <div class="entry-head"><span>${escapeHtml(title)}</span><span>${escapeHtml(right)}</span></div>
      <div class="entry-subhead"><span>${escapeHtml(subLeft)}</span><span>${escapeHtml(subRight)}</span></div>
      <ul>${bullets}</ul>
    </div>
  `;
}

function renderResume(resume) {
  const education = (resume.education || [])
    .map(
      (item) => `
        <div class="entry">
          <div class="entry-head"><span>${escapeHtml(item.school)}</span><span>${escapeHtml(
            item.dates,
          )}</span></div>
          <div class="entry-subhead"><span>${escapeHtml(item.degree)}</span><span>${escapeHtml(
            item.location,
          )}</span></div>
          <p class="skills-line">${escapeHtml((item.details || []).join(" | "))}</p>
        </div>
      `,
    )
    .join("");

  elements.resumePreview.innerHTML = `
    <header class="resume-header">
      <h2>${escapeHtml(resume.name || knowledgeBase?.candidateName || "Candidate")}</h2>
      <div class="resume-contact">${escapeHtml(resume.contactLine || "")}</div>
    </header>
    <section class="resume-section">
      <h3>Professional Summary</h3>
      <p class="summary">${escapeHtml(resume.summary || "")}</p>
    </section>
    <section class="resume-section">
      <h3>Skills</h3>
      ${renderSkills(resume.skills || {})}
    </section>
    <section class="resume-section">
      <h3>Work Experience</h3>
      ${(resume.experience || []).map((entry) => renderEntry(entry, "experience")).join("")}
    </section>
    <section class="resume-section">
      <h3>Projects</h3>
      ${(resume.projects || []).map((entry) => renderEntry(entry, "project")).join("")}
    </section>
    <section class="resume-section">
      <h3>Education</h3>
      ${education}
    </section>
  `;
}

function setFitVariables({ fontSize, lineHeight, gap, paddingX, paddingY, bulletIndent, bulletPadding }) {
  elements.resumePreview.style.setProperty("--resume-font-size", `${fontSize}pt`);
  elements.resumePreview.style.setProperty("--resume-line-height", lineHeight);
  elements.resumePreview.style.setProperty("--resume-section-gap", `${gap}px`);
  if (paddingX) elements.resumePreview.style.setProperty("--resume-padding-x", `${paddingX}px`);
  if (paddingY) elements.resumePreview.style.setProperty("--resume-padding-y", `${paddingY}px`);
  if (bulletIndent) {
    elements.resumePreview.style.setProperty("--resume-bullet-indent", `${bulletIndent}px`);
  }
  if (bulletPadding !== undefined) {
    elements.resumePreview.style.setProperty("--resume-bullet-padding", `${bulletPadding}px`);
  }
}

function pageOverflow() {
  return elements.resumePreview.scrollHeight - elements.resumePreview.clientHeight;
}

function fitResumeToPage() {
  if (!latestTailoredResume && !elements.resumePreview.querySelector(".resume-header")) {
    elements.fitStatus.textContent = "Tailor the resume to create a one-page preview.";
    return false;
  }

  let fontSize = 10.4;
  let lineHeight = 1.22;
  let gap = 8;
  let paddingX = 48;
  let paddingY = 48;
  let bulletIndent = 12;
  let bulletPadding = 0;
  setFitVariables({ fontSize, lineHeight, gap, paddingX, paddingY, bulletIndent, bulletPadding });

  for (let attempt = 0; attempt < 6 && pageOverflow() > 0; attempt += 1) {
    paddingX = Math.max(40, paddingX - 1.5);
    bulletIndent = Math.max(9, bulletIndent - 0.5);
    setFitVariables({ fontSize, lineHeight, gap, paddingX, paddingY, bulletIndent, bulletPadding });
  }

  for (let attempt = 0; attempt < 24 && pageOverflow() > 0; attempt += 1) {
    fontSize = Math.max(8.6, fontSize - 0.12);
    lineHeight = Math.max(1.12, lineHeight - 0.004);
    gap = Math.max(4, gap - 0.25);
    paddingX = Math.max(38, paddingX - 0.4);
    setFitVariables({ fontSize, lineHeight, gap, paddingX, paddingY, bulletIndent, bulletPadding });
  }

  const removable = [
    ...elements.resumePreview.querySelectorAll('li[data-trim="optional"]'),
  ].reverse();
  while (pageOverflow() > 0 && removable.length) {
    removable.shift().remove();
  }

  const optionalProjects = [
    ...elements.resumePreview.querySelectorAll('[data-entry-type="project"]'),
  ].reverse();
  while (pageOverflow() > 0 && optionalProjects.length > 1) {
    optionalProjects.shift().remove();
  }

  while (pageOverflow() > 0 && fontSize > 7.8) {
    fontSize -= 0.1;
    setFitVariables({ fontSize, lineHeight, gap, paddingX, paddingY, bulletIndent, bulletPadding });
  }

  while (elements.resumePreview.clientHeight - elements.resumePreview.scrollHeight > 30 && fontSize < 11.3) {
    fontSize += 0.08;
    setFitVariables({ fontSize, lineHeight, gap, paddingX, paddingY, bulletIndent, bulletPadding });
    if (pageOverflow() > 0) {
      fontSize -= 0.08;
      setFitVariables({ fontSize, lineHeight, gap, paddingX, paddingY, bulletIndent, bulletPadding });
      break;
    }
  }

  const remaining = pageOverflow();
  elements.fitStatus.textContent =
    remaining <= 0
      ? `One-page fit confirmed. ${Math.max(
          0,
          elements.resumePreview.clientHeight - elements.resumePreview.scrollHeight,
        )}px remaining.`
      : `Still overflowing by ${remaining}px. Shorten edited text or remove a bullet.`;
  return remaining <= 0;
}

function scheduleFit() {
  window.clearTimeout(fitTimer);
  fitTimer = window.setTimeout(fitResumeToPage, 250);
}

async function handleResumeUpload() {
  const file = elements.resumeFile.files[0];
  if (!file) return;
  try {
    elements.fileStatus.textContent = `Reading ${file.name}...`;
    rawResumeText = await parseResumeFile(file);
    knowledgeBase = null;
    latestAnalysis = null;
    latestTailoredResume = null;
    elements.tailorButton.disabled = true;
    elements.fileStatus.textContent = `${file.name}: extracted ${rawResumeText.length.toLocaleString()} characters.`;
    saveSessionState();
    renderKnowledgePreview();
  } catch (error) {
    elements.fileStatus.textContent = error.message;
    showToast(error.message);
  }
}

async function guarded(action, busyButton) {
  const originalText = busyButton?.textContent;
  try {
    if (busyButton) {
      busyButton.disabled = true;
      busyButton.textContent = "Working...";
    }
    await action();
  } catch (error) {
    setStatus(error.message);
    showToast(error.message);
  } finally {
    if (busyButton) {
      busyButton.disabled = false;
      busyButton.textContent = originalText;
    }
    elements.tailorButton.disabled = !latestAnalysis;
  }
}

function plainResumeText() {
  return elements.resumePreview.innerText.replace(/\n{3,}/g, "\n\n").trim();
}

function normalizePdfText(value) {
  return String(value || "")
    .replace(/\u2018|\u2019/g, "'")
    .replace(/\u201c|\u201d/g, '"')
    .replace(/\u2013|\u2014/g, "-")
    .replace(/\u2022/g, "-")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/[^\x20-\x7e]/g, "");
}

function escapePdfText(value) {
  return normalizePdfText(value)
    .replace(/\\/g, "\\\\")
    .replace(/\(/g, "\\(")
    .replace(/\)/g, "\\)");
}

function getPdfFontName(style) {
  const weight = Number.parseInt(style.fontWeight, 10);
  if (style.fontStyle === "italic") return "F3";
  if (Number.isFinite(weight) && weight >= 700) return "F2";
  return "F1";
}

function getMeasureContext() {
  const canvas = getMeasureContext.canvas || document.createElement("canvas");
  getMeasureContext.canvas = canvas;
  return canvas.getContext("2d");
}

function buildPdfDocument(stream) {
  const objects = [
    "<< /Type /Catalog /Pages 2 0 R >>",
    "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
    "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R /F2 5 0 R /F3 6 0 R >> >> /Contents 7 0 R >>",
    "<< /Type /Font /Subtype /TrueType /BaseFont /Georgia /Encoding /WinAnsiEncoding >>",
    "<< /Type /Font /Subtype /TrueType /BaseFont /Georgia-Bold /Encoding /WinAnsiEncoding >>",
    "<< /Type /Font /Subtype /TrueType /BaseFont /Georgia-Italic /Encoding /WinAnsiEncoding >>",
    `<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`,
  ];
  let pdf = "%PDF-1.4\n";
  const offsets = [0];

  objects.forEach((object, index) => {
    offsets.push(pdf.length);
    pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
  });

  const xrefOffset = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  offsets.slice(1).forEach((offset) => {
    pdf += `${String(offset).padStart(10, "0")} 00000 n \n`;
  });
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;
  return pdf;
}

function parseCssColor(value, fallback = [0, 0, 0]) {
  const match = String(value || "").match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
  if (!match) return fallback;
  return [Number(match[1]) / 255, Number(match[2]) / 255, Number(match[3]) / 255];
}

function drawPdfText(commands, text, x, y, fontName, fontSize, color = [0, 0, 0]) {
  const safeText = escapePdfText(text);
  if (!safeText) return;
  commands.push(
    `BT /${fontName} ${fontSize.toFixed(2)} Tf ${color.map((channel) => channel.toFixed(3)).join(" ")} rg 1 0 0 1 ${x.toFixed(2)} ${y.toFixed(2)} Tm (${safeText}) Tj ET`,
  );
}

function drawPdfLine(commands, x1, y1, x2, y2, width = 0.7, color = [0, 0, 0]) {
  commands.push(
    `${width.toFixed(2)} w ${color.map((channel) => channel.toFixed(3)).join(" ")} RG ${x1.toFixed(2)} ${y1.toFixed(2)} m ${x2.toFixed(2)} ${y2.toFixed(2)} l S`,
  );
}

function drawPdfRect(commands, x, y, width, height, color) {
  commands.push(
    `${color.map((channel) => channel.toFixed(3)).join(" ")} rg ${x.toFixed(2)} ${y.toFixed(2)} ${width.toFixed(2)} ${height.toFixed(2)} re f`,
  );
}

function drawPdfCircle(commands, x, y, radius, color = [0, 0, 0]) {
  const control = radius * 0.5522847498;
  commands.push(
    `${color.map((channel) => channel.toFixed(3)).join(" ")} rg ` +
      `${(x + radius).toFixed(2)} ${y.toFixed(2)} m ` +
      `${(x + radius).toFixed(2)} ${(y + control).toFixed(2)} ${(x + control).toFixed(2)} ${(y + radius).toFixed(2)} ${x.toFixed(2)} ${(y + radius).toFixed(2)} c ` +
      `${(x - control).toFixed(2)} ${(y + radius).toFixed(2)} ${(x - radius).toFixed(2)} ${(y + control).toFixed(2)} ${(x - radius).toFixed(2)} ${y.toFixed(2)} c ` +
      `${(x - radius).toFixed(2)} ${(y - control).toFixed(2)} ${(x - control).toFixed(2)} ${(y - radius).toFixed(2)} ${x.toFixed(2)} ${(y - radius).toFixed(2)} c ` +
      `${(x + control).toFixed(2)} ${(y - radius).toFixed(2)} ${(x + radius).toFixed(2)} ${(y - control).toFixed(2)} ${(x + radius).toFixed(2)} ${y.toFixed(2)} c f`,
  );
}

function transformPdfWord(word, style) {
  if (style.textTransform === "uppercase") return word.toUpperCase();
  if (style.textTransform === "lowercase") return word.toLowerCase();
  if (style.textTransform === "capitalize") {
    return word.replace(/\b\w/g, (letter) => letter.toUpperCase());
  }
  return word;
}

function getPdfStyleKey(style) {
  return [
    getPdfFontName(style),
    style.fontSize,
    style.fontStyle,
    style.fontWeight,
    style.color,
  ].join("|");
}

function groupPdfLineRuns(words) {
  const runs = [];
  words.forEach((word) => {
    const key = getPdfStyleKey(word.style);
    const currentRun = runs[runs.length - 1];
    if (currentRun && currentRun.key === key) {
      currentRun.words.push(word);
      return;
    }
    runs.push({ key, words: [word] });
  });
  return runs;
}

function addPdfRenderedWords(commands, element, paperRect, scaleX, scaleY) {
  const renderedWords = [];
  const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    const text = node.nodeValue || "";
    const parent = node.parentElement;
    if (!parent || !text.trim()) continue;

    const style = window.getComputedStyle(parent);
    const range = document.createRange();
    const words = text.matchAll(/\S+/g);
    for (const match of words) {
      range.setStart(node, match.index);
      range.setEnd(node, match.index + match[0].length);
      [...range.getClientRects()]
        .filter((rect) => rect.width > 0 && rect.height > 0)
        .forEach((rect) => {
          renderedWords.push({
            text: transformPdfWord(match[0], style),
            top: Math.round(rect.top),
            left: rect.left,
            rect,
            style,
          });
        });
    }
    range.detach();
  }

  const lines = new Map();
  renderedWords.forEach((word) => {
    if (!lines.has(word.top)) lines.set(word.top, []);
    lines.get(word.top).push(word);
  });

  [...lines.entries()]
    .sort(([topA], [topB]) => topA - topB)
    .forEach(([, words], lineIndex) => {
      const sortedWords = words.sort((a, b) => a.left - b.left);
      if (element.tagName === "LI" && lineIndex === 0) {
        const firstWord = sortedWords[0];
        const listStyle = window.getComputedStyle(element);
        const fontSizePx = Number.parseFloat(listStyle.fontSize);
        const fontSizePt = Math.max(5.5, fontSizePx * scaleY);
        const y = 792 - (firstWord.rect.top - paperRect.top + fontSizePx * 0.82) * scaleY;
        const bulletX = (element.getBoundingClientRect().left - paperRect.left - 6) * scaleX;
        const bulletY = y + fontSizePt * 0.33;
        drawPdfCircle(commands, bulletX, bulletY, Math.max(1.15, fontSizePt * 0.16), parseCssColor(listStyle.color));
      }

      groupPdfLineRuns(sortedWords).forEach((run) => {
        const firstWord = run.words[0];
        const style = firstWord.style;
        const fontSizePx = Number.parseFloat(style.fontSize);
        const fontSizePt = Math.max(5.5, fontSizePx * scaleY);
        const text = run.words.map((word) => word.text).join(" ");
        const x = Math.max(0, (firstWord.rect.left - paperRect.left) * scaleX);
        const y = 792 - (firstWord.rect.top - paperRect.top + fontSizePx * 0.82) * scaleY;
        const context = getMeasureContext();
        context.font = `${style.fontStyle} ${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
        const elementRect = element.getBoundingClientRect();
        const availableWidth = Math.max(20, (elementRect.right - firstWord.rect.left) * scaleX);
        const measuredWidth = context.measureText(text).width * scaleX;
        const fitRatio = measuredWidth > availableWidth ? Math.max(0.86, (availableWidth / measuredWidth) * 0.98) : 1;
        drawPdfText(commands, text, x, y, getPdfFontName(style), fontSizePt * fitRatio, parseCssColor(style.color));
      });
    });
}

function createSelectablePdfBlob() {
  fitResumeToPage();
  const paper = elements.resumePreview;
  const paperRect = paper.getBoundingClientRect();
  const scaleX = 612 / paperRect.width;
  const scaleY = 792 / paperRect.height;
  const commands = [];
  drawPdfRect(commands, 0, 0, 612, 792, parseCssColor(window.getComputedStyle(paper).backgroundColor, [1, 0.992, 0.973]));
  const selectors = [
    ".resume-header h2",
    ".resume-contact",
    ".resume-section h3",
    ".summary",
    ".skills-line",
    ".entry-head span",
    ".entry-subhead span",
    "li",
    ".empty-state",
  ].join(", ");

  paper.querySelectorAll(selectors).forEach((element) => {
    if (!element.innerText.trim()) return;
    addPdfRenderedWords(commands, element, paperRect, scaleX, scaleY);
  });

  paper.querySelectorAll(".resume-header, .resume-section h3").forEach((element) => {
    const rect = element.getBoundingClientRect();
    const style = window.getComputedStyle(element);
    const x1 = (rect.left - paperRect.left) * scaleX;
    const x2 = (rect.right - paperRect.left) * scaleX;
    const y = 792 - (rect.bottom - paperRect.top) * scaleY;
    drawPdfLine(commands, x1, y, x2, y, element.classList.contains("resume-header") ? 1.1 : 0.7, parseCssColor(style.borderBottomColor));
  });

  const pdf = buildPdfDocument(commands.join("\n"));
  return new Blob([pdf], { type: "application/pdf" });
}

function downloadBlob(blob, filename) {
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
  URL.revokeObjectURL(link.href);
}

function ensureFileExtension(filename, extension) {
  const cleanName = String(filename || "").trim().replace(/[<>:"/\\|?*\x00-\x1f]/g, "-");
  if (!cleanName) return "";
  return cleanName.toLowerCase().endsWith(extension) ? cleanName : `${cleanName}${extension}`;
}

async function savePdfWithNamePrompt(blob) {
  const suggestedName = "JobJitsu-resume-tailoring-dojo.pdf";

  if (window.showSaveFilePicker) {
    try {
      const handle = await window.showSaveFilePicker({
        suggestedName,
        types: [
          {
            description: "PDF document",
            accept: { "application/pdf": [".pdf"] },
          },
        ],
      });
      const writable = await handle.createWritable();
      await writable.write(blob);
      await writable.close();
      return true;
    } catch (error) {
      if (error.name === "AbortError") return false;
      throw error;
    }
  }

  const filename = ensureFileExtension(window.prompt("Name this PDF file:", suggestedName), ".pdf");
  if (!filename) return false;
  downloadBlob(blob, filename);
  return true;
}

function clearPrintResume() {
  elements.printRoot.replaceChildren();
  elements.printRoot.setAttribute("aria-hidden", "true");
}

function syncTopBannerState() {
  const topBanner = document.querySelector(".top-banner");
  if (!topBanner) return;
  topBanner.classList.toggle("is-compact", window.scrollY > 16);
}

function syncHeroCardHeight() {
  if (!heroHeroText || !heroCard) return;
  heroCard.style.setProperty(
    "--hero-heading-height",
    `${Math.ceil(heroHeroText.getBoundingClientRect().height)}px`,
  );
}

function scheduleHeroCardHeightSync() {
  window.cancelAnimationFrame(heroHeightTimer);
  heroHeightTimer = window.requestAnimationFrame(syncHeroCardHeight);
}

function syncOpenAiPanelHeight() {
  if (!openAiPanel || !atsScoreCard || !skillsBox || !previewToolbar) return;
  const totalHeight =
    atsScoreCard.getBoundingClientRect().height +
    14 +
    skillsBox.getBoundingClientRect().height +
    14 +
    previewToolbar.getBoundingClientRect().height;
  openAiPanel.style.setProperty("--openai-panel-height", `${Math.ceil(totalHeight)}px`);
}

function scheduleOpenAiPanelHeightSync() {
  window.cancelAnimationFrame(openAiHeightTimer);
  openAiHeightTimer = window.requestAnimationFrame(syncOpenAiPanelHeight);
}

function stripEditableAttributes(node) {
  if (node.nodeType !== Node.ELEMENT_NODE) return;
  node.removeAttribute("contenteditable");
  node.removeAttribute("spellcheck");
  node.removeAttribute("aria-label");
  node.removeAttribute("id");
  [...node.children].forEach(stripEditableAttributes);
}

function preparePrintResume() {
  fitResumeToPage();
  const clone = elements.resumePreview.cloneNode(true);
  stripEditableAttributes(clone);
  clone.classList.add("print-paper");
  elements.printRoot.replaceChildren(clone);
  elements.printRoot.setAttribute("aria-hidden", "false");
}

elements.toggleKey.addEventListener("click", () => {
  const showing = elements.apiKey.type === "text";
  elements.apiKey.type = showing ? "password" : "text";
  elements.toggleKey.textContent = showing ? "Show" : "Hide";
});

elements.rememberKey.addEventListener("change", saveSessionState);
elements.apiKey.addEventListener("change", saveSessionState);
elements.extraInfo.addEventListener("change", saveSessionState);
elements.resumeFile.addEventListener("change", handleResumeUpload);
elements.buildKnowledge.addEventListener("click", () =>
  guarded(async () => {
    await buildKnowledgeBase();
    setStatus("Knowledge base built.");
    showToast("Knowledge base updated");
  }, elements.buildKnowledge),
);
elements.clearKnowledge.addEventListener("click", clearKnowledgeBase);
elements.analyzeButton.addEventListener("click", () =>
  guarded(analyzeJob, elements.analyzeButton),
);
elements.tailorButton.addEventListener("click", () =>
  guarded(tailorResume, elements.tailorButton),
);
elements.refitButton.addEventListener("click", fitResumeToPage);
elements.resumePreview.addEventListener("input", scheduleFit);
elements.copyButton.addEventListener("click", async () => {
  await navigator.clipboard.writeText(plainResumeText());
  showToast("Resume text copied");
});
elements.downloadButton.addEventListener("click", () => {
  const blob = new Blob([plainResumeText()], { type: "text/plain;charset=utf-8" });
  downloadBlob(blob, "JobJitsu-resume-tailoring-dojo.txt");
});
elements.pdfButton.addEventListener("click", async () => {
  try {
    const saved = await savePdfWithNamePrompt(createSelectablePdfBlob());
    if (saved) showToast("Selectable PDF saved");
  } catch (error) {
    showToast(error.message);
  }
});
elements.printButton.addEventListener("click", () => {
  preparePrintResume();
  window.print();
});
window.addEventListener("beforeprint", preparePrintResume);
window.addEventListener("afterprint", clearPrintResume);
window.addEventListener("scroll", syncTopBannerState, { passive: true });
window.addEventListener("resize", scheduleHeroCardHeightSync, { passive: true });
window.addEventListener("resize", scheduleOpenAiPanelHeightSync, { passive: true });

restoreSessionState();
if (!latestAnalysis) resetAnalysisPreview();
syncTopBannerState();
scheduleHeroCardHeightSync();
scheduleOpenAiPanelHeightSync();
if (document.fonts?.ready) {
  document.fonts.ready.then(scheduleHeroCardHeightSync);
  document.fonts.ready.then(scheduleOpenAiPanelHeightSync);
}
if (window.ResizeObserver) {
  const heroObserver = heroHeroText ? new ResizeObserver(scheduleHeroCardHeightSync) : null;
  if (heroObserver && heroHeroText) heroObserver.observe(heroHeroText);
  const openAiObserver = new ResizeObserver(scheduleOpenAiPanelHeightSync);
  [atsScoreCard, skillsBox, previewToolbar].forEach((element) => {
    if (element) openAiObserver.observe(element);
  });
}
