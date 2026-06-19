const resume = {
  name: "John Nesnidal",
  contact:
    "john.nesnidal@gmail.com | (952) 297-4816 | linkedin.com/in/john-nesnidal | github.com/jnesnidal",
  skills: {
    Languages: [
      "Java",
      "Python",
      "TypeScript",
      "JavaScript",
      "Rust",
      "C#",
      "SQL",
      "C",
      "C++",
      "Groovy",
      "Kotlin",
      "Ruby",
      "HTML/CSS",
      "R",
    ],
    "Frameworks & Technologies": [
      ".NET",
      "ASP.NET",
      "Spring Boot",
      "React",
      "Flask",
      "Angular",
      "Cypress",
      "Selenium",
      "Jest",
      "AWS",
      "TensorFlow",
      "PyTorch",
    ],
    Software: [
      "Linux",
      "GitHub",
      "GitLab",
      "Jira",
      "Power BI",
      "MySQL",
      "GraphQL",
      "MongoDB",
      "Neo4j",
      "RStudio",
      "Docker",
      "ROS",
      "Gazebo",
      "Roboflow",
    ],
    Practices: [
      "Scrum",
      "Kanban",
      "Agile",
      "Software Development Life Cycle",
      "CI/CD",
      "UML",
      "Automated Testing",
      "AI-Assisted Coding",
    ],
  },
  experience: [
    {
      company: "The Packaging Lab",
      role: "Data Analyst",
      location: "Brooklyn Park, MN",
      dates: "January 2026 - Present",
      bullets: [
        "Analyze high-volume machine production data and ordering trends to identify inefficiencies, material waste drivers, and performance bottlenecks, providing actionable insights that support waste reduction and operational optimization initiatives.",
        "Develop and maintain structured SQL queries, data transformations, and reporting workflows to extract, clean, and analyze manufacturing and sales data, ensuring accurate and timely decision-making across production and supply chain teams.",
        "Build analytical dashboards and visualizations using Python to communicate key metrics, track performance trends, and highlight cost-saving opportunities to leadership and operations stakeholders.",
      ],
    },
    {
      company: "INNERGY",
      role: "Software Developer",
      location: "Sauk Rapids, MN",
      dates: "May 2024 - November 2024",
      bullets: [
        "Developed and enhanced front-end and back-end features for a cloud-based 3D CAD/CAM platform using TypeScript, React, and C#, implementing responsive UI components and optimizing application performance.",
        "Designed and implemented computational geometry algorithms to manipulate architectural drawings and 3D models.",
        "Engineered industry-standard tools for 2D and 3D modeling platforms, integrating with existing frameworks.",
        "Wrote and maintained automated tests using Jest and Cypress, achieving 100% code coverage for key components.",
        "Applied Agile methodologies, participated in Scrum meetings, and used a Kanban board in Jira for issue tracking and feature requests.",
        "Collaborated directly with customers to assess needs and implement solutions that enhanced functionality and user experience.",
      ],
    },
  ],
  education: {
    school: "Iowa State University",
    dates: "August 2021 - May 2025",
    degree: "Bachelor of Science, Computer Science",
    location: "Ames, IA",
    details: [
      "Minor: Data Science",
      "Dean's List: Spring 2024, Fall 2024, Spring 2025",
    ],
  },
  projects: [
    {
      name: "Autonomous Chess System",
      subtitle: "Robotics Research Project Lead - Iowa State University",
      tech: ["Python", "ROS", "PyTorch", "OpenCV", "Linux"],
      bullets: [
        "Led a team of 5 engineers to design a Linux-based robotic system that plays chess on a physical chessboard.",
        "Integrated Stockfish and OpenCV so a camera could identify chess pieces and detect an opponent's moves.",
        "Trained and annotated machine learning models using Roboflow and PyTorch.",
        "Designed embedded software for the robot arm, interfaced with hardware drivers through ROS, and enabled automatic calibration and physical piece movement.",
      ],
    },
    {
      name: "ChatASL",
      subtitle: "Sign Language Recognition App - CitrusHack at UC Riverside",
      tech: ["TypeScript", "Next.js", "Roboflow", "Gemini API", "Supabase", "PostgreSQL"],
      bullets: [
        "Developed a Next.js web application that uses a webcam and a neural network hosted on Roboflow to teach American Sign Language.",
        "Created a coaching feature using Google Gemini image recognition to identify errors and provide corrective feedback.",
      ],
    },
    {
      name: "Real-Time Group Study App",
      subtitle: "Iowa State University",
      tech: ["Java", "Spring Boot", "Android", "Hibernate", "MySQL", "GitLab CI/CD"],
      bullets: [
        "Developed back-end services for an Android application using Java, Spring Boot, and MySQL, deployed through GitLab CI/CD in Linux.",
        "Designed the MySQL schema and integrated it with the back end using Hibernate for persistent data storage.",
        "Implemented WebSocket-based real-time communication for synchronized interactions across active application sessions.",
        "Built secure, scalable RESTful APIs for user login, authentication, and front-end navigation.",
      ],
    },
    {
      name: "Virtual Science Labs for Students",
      subtitle: "Science from Scientists, Inc.",
      tech: ["HTML5", "GameMaker Studio 2", "Supabase", "PostgreSQL"],
      bullets: [
        "Designed, developed, and tested two interactive virtual science labs for online and in-person classrooms.",
        "Created HTML5-compatible web applications with cross-platform support in GameMaker Studio 2.",
        "Designed all embedded graphics to provide a polished, intuitive user experience.",
        "Implemented a PostgreSQL back end in Supabase for authentication and learning-progress analytics.",
      ],
    },
  ],
  languages: ["English - Native", "Spanish - Working Proficiency (B2)"],
};

const skillAliases = {
  "C#": ["c#", "c sharp"],
  "C++": ["c++"],
  ".NET": [".net", "dotnet"],
  "ASP.NET": ["asp.net", "asp net"],
  "Spring Boot": ["spring boot", "spring"],
  "HTML/CSS": ["html", "css", "html5"],
  "CI/CD": ["ci/cd", "continuous integration", "continuous delivery", "continuous deployment"],
  "Automated Testing": ["automated testing", "unit testing", "integration testing", "test automation"],
  "Software Development Life Cycle": ["software development life cycle", "sdlc"],
  "RESTful APIs": ["restful api", "restful apis", "rest api", "rest apis", "api development"],
  PostgreSQL: ["postgresql", "postgres"],
  JavaScript: ["javascript", "js"],
  TypeScript: ["typescript"],
  Python: ["python"],
  React: ["react", "react.js", "reactjs"],
  Angular: ["angular"],
  Java: ["java"],
  SQL: ["sql"],
  MySQL: ["mysql"],
  MongoDB: ["mongodb"],
  GraphQL: ["graphql"],
  Docker: ["docker", "containerization", "containers"],
  AWS: ["aws", "amazon web services"],
  Linux: ["linux", "unix"],
  Agile: ["agile"],
  Scrum: ["scrum"],
  Git: ["git", "github", "gitlab", "version control"],
  Jest: ["jest"],
  Cypress: ["cypress"],
  Selenium: ["selenium"],
  "Power BI": ["power bi", "powerbi"],
  "Machine Learning": ["machine learning", "ml"],
  PyTorch: ["pytorch"],
  TensorFlow: ["tensorflow"],
  "Data Analysis": ["data analysis", "data analytics", "analyze data", "analytics"],
  "Data Visualization": ["data visualization", "dashboards", "visualization"],
  "Object-Oriented Programming": ["object-oriented", "object oriented", "oop"],
  WebSockets: ["websocket", "websockets", "real-time communication"],
  Supabase: ["supabase"],
  Hibernate: ["hibernate"],
  Flask: ["flask"],
  Kotlin: ["kotlin"],
  Rust: ["rust"],
  Kubernetes: ["kubernetes", "k8s"],
  Azure: ["azure", "microsoft azure"],
  GCP: ["gcp", "google cloud", "google cloud platform"],
  "Node.js": ["node.js", "nodejs", "node js"],
  "Next.js": ["next.js", "nextjs", "next js"],
  Vue: ["vue", "vue.js", "vuejs"],
  "Express.js": ["express.js", "expressjs", "express js"],
  Redis: ["redis"],
  Kafka: ["kafka", "apache kafka"],
  Terraform: ["terraform"],
  Jenkins: ["jenkins"],
  "GitHub Actions": ["github actions"],
  "GitLab CI": ["gitlab ci"],
  "Microsoft SQL Server": ["sql server", "mssql", "microsoft sql server"],
  Oracle: ["oracle", "oracle database"],
  DynamoDB: ["dynamodb"],
  Snowflake: ["snowflake"],
  Databricks: ["databricks"],
  Spark: ["spark", "apache spark", "pyspark"],
  Pandas: ["pandas"],
  NumPy: ["numpy"],
  Tableau: ["tableau"],
  Looker: ["looker"],
  Microservices: ["microservice", "microservices", "micro-service"],
  "Unit Testing": ["unit test", "unit tests", "unit testing", "unit and integration tests"],
  "Integration Testing": [
    "integration test",
    "integration tests",
    "integration testing",
    "unit and integration tests",
  ],
  "Relational Databases": ["relational database", "relational databases", "rdbms"],
  DevOps: ["devops", "dev ops"],
  "Data Structures": ["data structure", "data structures"],
  Algorithms: ["algorithm", "algorithms"],
  "Data Modeling": ["data modeling", "data modelling"],
  ETL: ["etl", "extract transform load"],
  "Natural Language Processing": ["natural language processing", "nlp"],
  OpenCV: ["opencv", "open cv"],
  ROS: ["robot operating system", "ros"],
};

const responsibilityPhrases = {
  "cross-functional collaboration": ["cross-functional", "cross functional", "stakeholders", "collaborate"],
  "application development": ["application development", "software development", "develop applications"],
  "front-end development": ["front-end", "frontend", "user interface", "ui development"],
  "back-end development": ["back-end", "backend", "server-side", "server side"],
  "cloud platforms": ["cloud platform", "cloud-based", "cloud environment"],
  "performance optimization": ["performance optimization", "optimize performance", "scalability"],
  "data pipelines": ["data pipeline", "etl", "data transformation", "reporting workflow"],
  authentication: ["authentication", "authorization", "user login"],
  "customer requirements": ["customer needs", "customer requirements", "client requirements"],
  "code quality": ["code quality", "code review", "test coverage", "maintainable code"],
  "technical documentation": ["technical documentation", "document software", "documentation"],
  "continuous improvement": ["continuous improvement", "process improvement"],
  "production support": ["production support", "on-call", "incident response"],
  "system design": ["system design", "software architecture", "architecture design"],
  "requirements gathering": ["requirements gathering", "gather requirements", "business requirements"],
  "data governance": ["data governance", "data quality", "data integrity"],
};

const stopWords = new Set(
  "a an and are as at be by for from has have in into is it its of on or our that the their this to using we will with you your years year required preferred ability strong work role team about across all also applications build building candidate candidates company computer degree design develop developing development engineer environment excellent experience features field full including knowledge maintain must position product related responsibilities responsible science seeking services software solutions stack support systems technical technology understanding users working".split(
    " ",
  ),
);

const keywordStorageKey = "matchcraft-custom-keywords";

const sectionWeights = {
  required: 4,
  qualifications: 4,
  requirements: 4,
  "minimum qualifications": 4,
  "preferred qualifications": 3,
  preferred: 3,
  responsibilities: 2,
  duties: 2,
  "what you'll do": 2,
  "what you will do": 2,
  skills: 3,
  technologies: 3,
  "tech stack": 3,
  "required qualifications": 4,
  "basic qualifications": 4,
  "about us": 0.25,
  benefits: 0.25,
  compensation: 0.25,
};

const phraseLeadPatterns = [
  /(?:experience|proficiency|expertise|knowledge|familiarity|background)\s+(?:with|in|of)\s+(.+)/i,
  /(?:skilled|proficient|experienced)\s+(?:with|in|using)\s+(.+)/i,
  /(?:technologies|tools|languages|frameworks|platforms|stack)\s*:\s*(.+)/i,
];

const candidateNoise = new Set(
  "ability active bachelor bachelors benefits business communication competitive dental deploy employees employment equal excellent healthcare high insurance interpersonal master masters opportunity optimize optimized optimizing organization paid participate people projects responsive salary scalable secure skills successful team teams test tests translate user-facing verbal vision write written".split(
    " ",
  ),
);

const elements = {
  jobDescription: document.querySelector("#jobDescription"),
  targetTitle: document.querySelector("#targetTitle"),
  wordCount: document.querySelector("#wordCount"),
  generateButton: document.querySelector("#generateButton"),
  inputError: document.querySelector("#inputError"),
  loadExample: document.querySelector("#loadExample"),
  emptyState: document.querySelector("#emptyState"),
  resultsContent: document.querySelector("#resultsContent"),
  scoreRing: document.querySelector("#scoreRing"),
  scoreValue: document.querySelector("#scoreValue"),
  scoreLabel: document.querySelector("#scoreLabel"),
  scoreSummary: document.querySelector("#scoreSummary"),
  generatedBadge: document.querySelector("#generatedBadge"),
  metricGrid: document.querySelector("#metricGrid"),
  matchedKeywords: document.querySelector("#matchedKeywords"),
  missingKeywords: document.querySelector("#missingKeywords"),
  coverageCount: document.querySelector("#coverageCount"),
  keywordDatabasePrompt: document.querySelector("#keywordDatabasePrompt"),
  keywordSuggestions: document.querySelector("#keywordSuggestions"),
  customKeyword: document.querySelector("#customKeyword"),
  saveKeywords: document.querySelector("#saveKeywords"),
  dismissKeywordPrompt: document.querySelector("#dismissKeywordPrompt"),
  localMode: document.querySelector("#localMode"),
  geminiMode: document.querySelector("#geminiMode"),
  geminiSettings: document.querySelector("#geminiSettings"),
  geminiApiKey: document.querySelector("#geminiApiKey"),
  toggleApiKey: document.querySelector("#toggleApiKey"),
  generateButtonLabel: document.querySelector("#generateButtonLabel"),
  privacyText: document.querySelector("#privacyText"),
  resumeSection: document.querySelector("#resumeSection"),
  resumePreview: document.querySelector("#resumePreview"),
  copyButton: document.querySelector("#copyButton"),
  downloadButton: document.querySelector("#downloadButton"),
  printButton: document.querySelector("#printButton"),
  toast: document.querySelector("#toast"),
};

let tailoringMode = "local";

const geminiResponseSchema = {
  type: "object",
  properties: {
    keywords: {
      type: "array",
      items: {
        type: "object",
        properties: {
          term: { type: "string" },
          category: {
            type: "string",
            enum: ["hard_skill", "responsibility", "domain", "credential"],
          },
          importance: { type: "integer", minimum: 1, maximum: 5 },
          supported: { type: "boolean" },
        },
        required: ["term", "category", "importance", "supported"],
      },
    },
    summary: { type: "string" },
    experience: {
      type: "array",
      items: {
        type: "object",
        properties: {
          company: { type: "string" },
          bullets: { type: "array", items: { type: "string" } },
        },
        required: ["company", "bullets"],
      },
    },
    projects: {
      type: "array",
      items: {
        type: "object",
        properties: {
          name: { type: "string" },
          bullets: { type: "array", items: { type: "string" } },
        },
        required: ["name", "bullets"],
      },
    },
    cautions: { type: "array", items: { type: "string" } },
  },
  required: ["keywords", "summary", "experience", "projects", "cautions"],
};

const geminiModels = [
  { id: "gemini-3.5-flash", label: "Gemini 3.5 Flash", attempts: 3 },
  { id: "gemini-2.5-flash", label: "Gemini 2.5 Flash", attempts: 2 },
];
const retryableGeminiStatuses = new Set([500, 503, 504]);

const exampleJob = `Full Stack Software Engineer

We are seeking a Full Stack Software Engineer to build reliable cloud-based applications. You will collaborate with cross-functional teams to design, develop, test, and deploy user-facing features and scalable back-end services.

Responsibilities:
- Develop responsive front-end features with React and TypeScript
- Build secure RESTful APIs and back-end services
- Write automated unit and integration tests
- Optimize application performance and maintain high code quality
- Work in an Agile/Scrum environment and participate in code reviews
- Collaborate with product stakeholders to translate customer requirements

Qualifications:
- Bachelor's degree in Computer Science or related field
- Experience with React, TypeScript, JavaScript, C#, and .NET
- SQL and relational database experience
- Git, CI/CD, Docker, and cloud platform experience
- Strong understanding of object-oriented programming and data structures`;

const allResumeText = JSON.stringify(resume).toLowerCase();

function loadCustomKeywords() {
  try {
    const stored = JSON.parse(localStorage.getItem(keywordStorageKey) || "[]");
    return Array.isArray(stored)
      ? stored.filter((keyword) => typeof keyword === "string" && keyword.trim())
      : [];
  } catch {
    return [];
  }
}

function saveCustomKeywords(keywords) {
  try {
    localStorage.setItem(keywordStorageKey, JSON.stringify(keywords));
    return true;
  } catch {
    return false;
  }
}

function registerCustomKeywords() {
  loadCustomKeywords().forEach((keyword) => {
    skillAliases[keyword] = [keyword.toLowerCase()];
  });
}

registerCustomKeywords();

function normalize(text) {
  return text.toLowerCase().replace(/[–—]/g, "-").replace(/\s+/g, " ").trim();
}

function containsAlias(text, aliases) {
  const normalized = normalize(text);
  return aliases.some((alias) => {
    const escaped = alias.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return new RegExp(`(^|[^a-z0-9])${escaped}([^a-z0-9]|$)`, "i").test(normalized);
  });
}

function getWeightedLines(description) {
  let activeWeight = 1;
  return description
    .split(/\r?\n/)
    .map((rawLine) => {
      const text = rawLine.replace(/^\s*[-*•▪◦]\s*/, "").trim();
      const heading = normalize(text.replace(/:$/, ""));
      if (sectionWeights[heading]) {
        activeWeight = sectionWeights[heading];
        return null;
      }
      return text ? { text, weight: activeWeight } : null;
    })
    .filter(Boolean);
}

function countAliasMatches(text, aliases) {
  return aliases.reduce((total, alias) => {
    const escaped = normalize(alias).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const matches = normalize(text).match(
      new RegExp(`(^|[^a-z0-9])${escaped}(?=[^a-z0-9]|$)`, "gi"),
    );
    return total + (matches?.length || 0);
  }, 0);
}

function rankKnownKeywords(lines, database) {
  return Object.entries(database)
    .map(([keyword, aliases]) => ({
      keyword,
      importance: lines.reduce(
        (score, line) => score + countAliasMatches(line.text, aliases) * line.weight,
        0,
      ),
    }))
    .filter(({ importance }) => importance > 0)
    .sort((a, b) => b.importance - a.importance || a.keyword.localeCompare(b.keyword));
}

function cleanCandidate(value) {
  return value
    .replace(/\([^)]*\)/g, " ")
    .replace(/^(?:build|create|deliver|deploy|design|develop|implement|maintain|manage|optimize)\s+/i, "")
    .replace(/^[^a-z0-9+#]+|[^a-z0-9+#]+$/gi, "")
    .replace(/\s+/g, " ")
    .trim();
}

function canonicalTerm(value) {
  return normalize(value).replace(/[^a-z0-9+#]/g, "");
}

function containsKnownKeyword(candidate) {
  return [...Object.values(skillAliases), ...Object.values(responsibilityPhrases)].some(
    (aliases) => containsAlias(candidate, aliases),
  );
}

function isKnownKeywordFragment(candidate) {
  const canonical = canonicalTerm(candidate);
  if (normalize(candidate).includes(" ")) return false;
  return [...Object.values(skillAliases), ...Object.values(responsibilityPhrases)].some(
    (aliases) =>
      aliases.some((alias) =>
        normalize(alias)
          .split(/[^a-z0-9+#.]+/)
          .some((part) => canonicalTerm(part) === canonical),
      ),
  );
}

function isUsefulCandidate(candidate) {
  const words = normalize(candidate).split(/\s+/);
  if (!candidate || words.length > 4 || candidate.length > 45) return false;
  const meaningfulWords = words.filter(
    (word) =>
      word.length >= 3 &&
      !/^\d+$/.test(word) &&
      !stopWords.has(word) &&
      !candidateNoise.has(word),
  );
  if (!meaningfulWords.length) return false;
  return (
    !isKnownKeywordAlias(candidate) &&
    !isKnownKeywordFragment(candidate) &&
    !containsKnownKeyword(candidate)
  );
}

function extractUnknownCandidates(lines) {
  const scores = new Map();
  const phraseEndings =
    /\b(?:api|apis|architecture|automation|computing|database|databases|deployment|design|development|engineering|framework|frameworks|learning|management|modeling|optimizations?|pipelines?|platform|platforms|security|services?|systems?|testing|visualization)$/i;

  function addCandidate(value, weight, bonus = 0) {
    const candidate = cleanCandidate(value);
    if (!isUsefulCandidate(candidate)) return;
    const key = normalize(candidate);
    const current = scores.get(key) || { label: candidate, score: 0 };
    current.score += weight + bonus;
    if (candidate.length > current.label.length) current.label = candidate;
    scores.set(key, current);
  }

  lines.forEach(({ text, weight }) => {
    phraseLeadPatterns.forEach((pattern) => {
      const match = text.match(pattern);
      if (!match) return;
      match[1]
        .split(/[,;|]|\s\/\s|\s+(?:and|or)\s+/i)
        .map(cleanCandidate)
        .forEach((candidate) => addCandidate(candidate, weight, 3));
    });

    const capitalizedTerms =
      text.match(/\b(?:[A-Z][A-Za-z0-9+#.-]*)(?:\s+[A-Z][A-Za-z0-9+#.-]*){0,2}\b/g) || [];
    capitalizedTerms.forEach((candidate) => addCandidate(candidate, weight, 2));

    const clauses = text.split(/[,;|]/);
    clauses.forEach((clause) => {
      const words = clause
        .replace(/[^a-z0-9+#./-]/gi, " ")
        .split(/\s+/)
        .filter(Boolean);
      for (let size = 2; size <= 3; size += 1) {
        for (let index = 0; index <= words.length - size; index += 1) {
          const candidate = words.slice(index, index + size).join(" ");
          if (phraseEndings.test(candidate)) addCandidate(candidate, weight, size);
        }
      }

      words
        .filter(
          (word) =>
            /[+#]|\d|\w\.\w/.test(word) ||
            (/[A-Z]/.test(word.slice(1)) && !/^[A-Z]+$/.test(word)),
        )
        .forEach((candidate) => addCandidate(candidate, weight, 2));
    });
  });

  const ranked = [...scores.values()].sort(
    (a, b) =>
      b.score - a.score ||
      b.label.split(/\s+/).length - a.label.split(/\s+/).length ||
      a.label.localeCompare(b.label),
  );

  return ranked
    .filter((candidate, index) => {
      const normalized = normalize(candidate.label);
      return !ranked.slice(0, index).some((higher) => {
        const higherNormalized = normalize(higher.label);
        return higherNormalized.includes(normalized) && higher.score >= candidate.score;
      });
    })
    .slice(0, 10)
    .map(({ label }) => label);
}

function extractJobKeywords(description) {
  const lines = getWeightedLines(description);
  const rankedSkills = rankKnownKeywords(lines, skillAliases);
  const rankedResponsibilities = rankKnownKeywords(lines, responsibilityPhrases);
  const importance = Object.fromEntries(
    [...rankedSkills, ...rankedResponsibilities].map(({ keyword, importance: score }) => [
      keyword,
      score,
    ]),
  );

  return {
    skills: rankedSkills.map(({ keyword }) => keyword),
    responsibilities: rankedResponsibilities.map(({ keyword }) => keyword),
    recurringTerms: extractUnknownCandidates(lines),
    importance,
  };
}

function isKnownKeywordAlias(term) {
  const canonical = canonicalTerm(term);
  return [...Object.values(skillAliases), ...Object.values(responsibilityPhrases)].some(
    (aliases) => aliases.some((alias) => canonicalTerm(alias) === canonical),
  );
}

function isSupported(keyword) {
  const aliases = skillAliases[keyword] || responsibilityPhrases[keyword] || [keyword];
  return aliases.some((alias) => allResumeText.includes(alias.toLowerCase()));
}

function textScore(text, keywords) {
  const normalized = normalize(text);
  return keywords.reduce((score, keyword) => {
    const aliases = skillAliases[keyword] || responsibilityPhrases[keyword] || [keyword];
    return score + (aliases.some((alias) => normalized.includes(alias)) ? 2 : 0);
  }, 0);
}

function rankByRelevance(items, keywords) {
  return items
    .map((item, index) => ({
      item,
      index,
      score: textScore(JSON.stringify(item), keywords),
    }))
    .sort((a, b) => b.score - a.score || a.index - b.index)
    .map(({ item }) => item);
}

function inferTitle(description) {
  const firstUsefulLine = description
    .split("\n")
    .map((line) => line.trim())
    .find((line) => line.length >= 4 && line.length <= 80);
  return firstUsefulLine || "Software Developer";
}

function getGeminiPrompt(description, title) {
  return `Tailor the resume below to the job description for the target role "${title}".

Rules:
1. Never invent skills, metrics, responsibilities, employers, dates, credentials, or outcomes.
2. A keyword is supported only when the resume contains direct evidence or an unambiguous equivalent.
3. Extract exact ATS terms and multi-word phrases from the job description. Ignore benefits, culture copy, and generic filler.
4. Reword the summary and bullets to emphasize relevant existing evidence and use supported job terminology naturally.
5. Keep the summary under 55 words and every rewritten bullet under 28 words so the resume fits one page.
6. Keep every rewritten bullet factual and readable. Do not keyword-stuff.
7. Return each employer and project with the exact company or project name provided.
8. Put unsupported requirements in keywords with supported=false. Do not insert them into rewritten content.

JOB DESCRIPTION:
${description}

SOURCE RESUME:
${JSON.stringify(resume, null, 2)}`;
}

async function callGemini(description, title, apiKey) {
  const requestBody = JSON.stringify({
    system_instruction: {
      parts: [
        {
          text: "You are a rigorous resume editor and ATS analyst. Preserve truth over match score.",
        },
      ],
    },
    contents: [{ parts: [{ text: getGeminiPrompt(description, title) }] }],
    generationConfig: {
      responseMimeType: "application/json",
      responseSchema: geminiResponseSchema,
      maxOutputTokens: 6000,
    },
  });
  let lastError;

  for (const [modelIndex, model] of geminiModels.entries()) {
    for (let attempt = 0; attempt < model.attempts; attempt += 1) {
      elements.generateButtonLabel.textContent =
        modelIndex === 0
          ? attempt === 0
            ? `${model.label} is tailoring...`
            : `Retrying ${model.label}...`
          : `${model.label} fallback is tailoring...`;

      try {
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/${model.id}:generateContent`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "x-goog-api-key": apiKey,
            },
            body: requestBody,
          },
        );
        const payload = await response.json().catch(() => ({}));

        if (!response.ok) {
          const error = new Error(
            payload?.error?.message ||
              `Gemini request failed with status ${response.status}.`,
          );
          error.retryable = retryableGeminiStatuses.has(response.status);
          error.retryAfter = Number(response.headers.get("retry-after")) || 0;
          throw error;
        }

        const text = payload?.candidates?.[0]?.content?.parts
          ?.map((part) => part.text || "")
          .join("");
        if (!text) throw new Error("Gemini returned no resume analysis.");

        const result = JSON.parse(text);
        result.modelUsed = model.label;
        return result;
      } catch (error) {
        if (error instanceof SyntaxError) {
          throw new Error("Gemini returned an unreadable response. Try again.");
        }

        const isNetworkError = error instanceof TypeError;
        if (isNetworkError) error.retryable = true;
        lastError = error;

        if (!error.retryable) throw error;
        const hasAnotherAttempt = attempt < model.attempts - 1;
        const hasFallback = modelIndex < geminiModels.length - 1;
        if (!hasAnotherAttempt && !hasFallback) break;

        if (hasAnotherAttempt) {
          const exponentialDelay = 1000 * 2 ** attempt;
          const waitMs = Math.max(error.retryAfter * 1000, exponentialDelay);
          await new Promise((resolve) => setTimeout(resolve, waitMs));
        }
      }
    }
  }

  throw new Error(
    `Gemini is still unavailable after retries and a fallback model. ${lastError?.message || "Try again later."}`,
  );
}

function buildGeminiAnalysis(description, geminiResult) {
  const local = buildAnalysis(description);
  const keywords = Array.isArray(geminiResult.keywords)
    ? geminiResult.keywords
        .filter(
          (keyword) =>
            keyword &&
            typeof keyword.term === "string" &&
            keyword.term.trim() &&
            typeof keyword.supported === "boolean",
        )
        .map((keyword) => ({
          ...keyword,
          term: keyword.term.trim(),
          importance: Math.min(5, Math.max(1, Number(keyword.importance) || 1)),
        }))
    : [];

  if (!keywords.length) return { ...local, aiTailoring: geminiResult, source: "gemini" };

  const deduplicated = [
    ...new Map(keywords.map((keyword) => [normalize(keyword.term), keyword])).values(),
  ].sort((a, b) => b.importance - a.importance);
  const matched = deduplicated
    .filter((keyword) => keyword.supported)
    .map((keyword) => keyword.term);
  const missing = deduplicated
    .filter((keyword) => !keyword.supported)
    .map((keyword) => keyword.term);
  const totalWeight = deduplicated.reduce(
    (sum, keyword) => sum + keyword.importance,
    0,
  );
  const matchedWeight = deduplicated
    .filter((keyword) => keyword.supported)
    .reduce((sum, keyword) => sum + keyword.importance, 0);
  const hardSkills = deduplicated.filter(
    (keyword) => keyword.category === "hard_skill" || keyword.category === "domain",
  );
  const responsibilityKeywords = deduplicated.filter(
    (keyword) => keyword.category === "responsibility",
  );

  function categoryCoverage(items) {
    if (!items.length) return 100;
    const total = items.reduce((sum, item) => sum + item.importance, 0);
    const supported = items
      .filter((item) => item.supported)
      .reduce((sum, item) => sum + item.importance, 0);
    return Math.round((supported / total) * 100);
  }

  const keywordCoverage = totalWeight
    ? Math.round((matchedWeight / totalWeight) * 100)
    : 0;
  const score = Math.min(
    99,
    Math.round(keywordCoverage * 0.65) + 15 + 9 + 10,
  );

  return {
    ...local,
    skills: hardSkills.map((keyword) => keyword.term),
    responsibilities: responsibilityKeywords.map((keyword) => keyword.term),
    matched,
    missing,
    score,
    source: "gemini",
    aiTailoring: geminiResult,
    metrics: [
      { label: "Hard skills", value: categoryCoverage(hardSkills) },
      {
        label: "Responsibilities",
        value: categoryCoverage(responsibilityKeywords),
      },
      { label: "ATS formatting", value: 100 },
      { label: "Evidence & impact", value: 90 },
    ],
  };
}

function buildAnalysis(description) {
  const extracted = extractJobKeywords(description);
  const jobKeywords = [...extracted.skills, ...extracted.responsibilities];
  const matched = jobKeywords.filter(isSupported);
  const missing = jobKeywords.filter((keyword) => !isSupported(keyword));

  function weightedCoverage(keywords) {
    const total = keywords.reduce(
      (sum, keyword) => sum + (extracted.importance[keyword] || 1),
      0,
    );
    if (!total) return 100;
    const supported = keywords
      .filter(isSupported)
      .reduce((sum, keyword) => sum + (extracted.importance[keyword] || 1), 0);
    return Math.round((supported / total) * 100);
  }

  const hardSkillCoverage = weightedCoverage(extracted.skills);
  const responsibilityCoverage = weightedCoverage(extracted.responsibilities);
  const hardSkillsScore = Math.round(hardSkillCoverage * 0.45);
  const responsibilityScore = Math.round(responsibilityCoverage * 0.2);
  const formattingScore = 15;
  const impactScore = 9;
  const sectionsScore = 10;
  const score = Math.min(
    99,
    hardSkillsScore +
      responsibilityScore +
      formattingScore +
      impactScore +
      sectionsScore,
  );

  return {
    ...extracted,
    matched,
    missing,
    score,
    metrics: [
      { label: "Hard skills", value: hardSkillCoverage },
      { label: "Responsibilities", value: responsibilityCoverage },
      { label: "ATS formatting", value: 100 },
      { label: "Evidence & impact", value: 90 },
    ],
  };
}

function buildSummary(title, matched) {
  const preferred = matched
    .filter((term) => skillAliases[term])
    .slice(0, 6);
  const skills = preferred.length
    ? preferred.join(", ")
    : "full-stack development, data analysis, and automated testing";
  return `${title} candidate with professional experience in software development and data analytics. Hands-on background with ${skills}. Computer Science graduate experienced in building tested applications, collaborating with stakeholders, and translating requirements into practical technical solutions.`;
}

function orderedSkills(jobKeywords) {
  return Object.fromEntries(
    Object.entries(resume.skills).map(([category, skills]) => [
      category,
      [...skills].sort((a, b) => {
        const aScore = textScore(a, jobKeywords);
        const bScore = textScore(b, jobKeywords);
        return bScore - aScore;
      }),
    ]),
  );
}

function escapeHtml(value) {
  const div = document.createElement("div");
  div.textContent = value;
  return div.innerHTML;
}

function renderResume(title, analysis) {
  const keywords = analysis.matched;
  const skills = orderedSkills(keywords);
  const experience = rankByRelevance(resume.experience, keywords);
  const projects = rankByRelevance(resume.projects, keywords);
  const aiExperience = new Map(
    (analysis.aiTailoring?.experience || []).map((job) => [
      normalize(job.company || ""),
      job.bullets,
    ]),
  );
  const aiProjects = new Map(
    (analysis.aiTailoring?.projects || []).map((project) => [
      normalize(project.name || ""),
      project.bullets,
    ]),
  );
  const aiSummary =
    typeof analysis.aiTailoring?.summary === "string" &&
    analysis.aiTailoring.summary.trim().length >= 40
      ? analysis.aiTailoring.summary.trim()
      : null;

  const experienceHtml = experience
    .map((job, jobIndex) => {
      const rewritten = aiExperience.get(normalize(job.company));
      const bullets =
        Array.isArray(rewritten) && rewritten.length
          ? rewritten.filter((bullet) => typeof bullet === "string" && bullet.trim())
          : rankByRelevance(job.bullets, keywords);
      return `
        <div class="resume-entry experience-entry" data-fit-index="${jobIndex}">
          <h3><span>${escapeHtml(job.company)}</span><span>${escapeHtml(job.dates)}</span></h3>
          <p class="subline"><span>${escapeHtml(job.role)}</span><span>${escapeHtml(job.location)}</span></p>
          <ul>${bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join("")}</ul>
        </div>
      `;
    })
    .join("");

  const projectHtml = projects
    .map((project, projectIndex) => {
      const rewritten = aiProjects.get(normalize(project.name));
      const bullets =
        Array.isArray(rewritten) && rewritten.length
          ? rewritten
              .filter((bullet) => typeof bullet === "string" && bullet.trim())
          : rankByRelevance(project.bullets, keywords);
      return `
        <div class="resume-entry project-entry" data-fit-index="${projectIndex}">
          <h3><span>${escapeHtml(project.name)} | ${escapeHtml(project.tech.join(", "))}</span></h3>
          <p class="subline"><span>${escapeHtml(project.subtitle)}</span></p>
          <ul>${bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join("")}</ul>
        </div>
      `;
    })
    .join("");

  elements.resumePreview.innerHTML = `
    <h1 class="resume-name">${escapeHtml(resume.name)}</h1>
    <p class="resume-contact">${escapeHtml(resume.contact)}</p>
    <h2>Professional Summary</h2>
    <p class="summary">${escapeHtml(aiSummary || buildSummary(title, analysis.matched))}</p>
    <h2>Technical Skills</h2>
    ${Object.entries(skills)
      .map(
        ([category, items]) =>
          `<p class="skills-line" data-skills="${encodeURIComponent(JSON.stringify(items))}"><strong>${escapeHtml(category)}:</strong> <span>${escapeHtml(items.join(", "))}</span></p>`,
      )
      .join("")}
    <h2>Professional Experience</h2>
    ${experienceHtml}
    <div class="education-section">
      <h2>Education</h2>
      <h3><span>${escapeHtml(resume.education.school)}</span><span>${escapeHtml(resume.education.dates)}</span></h3>
      <p class="subline"><span>${escapeHtml(resume.education.degree)}</span><span>${escapeHtml(resume.education.location)}</span></p>
      <p class="education-details">${escapeHtml(resume.education.details.join(" | "))}</p>
    </div>
    <div class="projects-section">
      <h2>Projects</h2>
      ${projectHtml}
    </div>
    <div class="optional-section languages-section">
      <h2>Languages</h2>
      <p>${escapeHtml(resume.languages.join(" | "))}</p>
    </div>
  `;
}

function fitResumeToPage() {
  const paper = elements.resumePreview;
  if (window.matchMedia("(max-width: 620px)").matches) return true;

  const overflows = () => {
    void paper.offsetHeight;
    return paper.scrollHeight > paper.clientHeight + 1;
  };
  const removals = [];
  const addBulletRemovals = (entry, minimum) => {
    const bullets = [...entry.querySelectorAll("li")];
    bullets
      .slice(minimum)
      .reverse()
      .forEach((bullet) => removals.push(() => bullet.remove()));
  };

  if (!paper.classList.contains("resume-density-compact")) {
    removals.push(() => paper.classList.add("resume-density-compact"));
  }

  const projectEntries = [...paper.querySelectorAll(".project-entry")];
  projectEntries
    .slice(2)
    .reverse()
    .forEach((entry) => {
      addBulletRemovals(entry, 1);
      removals.push(() => entry.remove());
    });

  [...paper.querySelectorAll(".experience-entry")]
    .reverse()
    .forEach((entry) => addBulletRemovals(entry, 3));

  const skillMinimums = {
    Languages: 8,
    "Frameworks & Technologies": 8,
    Software: 8,
    Practices: 6,
  };
  [...paper.querySelectorAll(".skills-line")].reverse().forEach((line) => {
    const category = line.querySelector("strong").textContent.replace(/:$/, "");
    const values = JSON.parse(decodeURIComponent(line.dataset.skills));
    const minimum = skillMinimums[category] || 6;
    const removableCount = Math.max(0, values.length - minimum);
    for (let index = 0; index < removableCount; index += 1) {
      removals.push(() => {
        values.pop();
        line.querySelector("span").textContent = values.join(", ");
      });
    }
  });

  projectEntries
    .slice(0, 2)
    .reverse()
    .forEach((entry) => addBulletRemovals(entry, 2));

  if (projectEntries[1]) removals.push(() => projectEntries[1].remove());

  [...paper.querySelectorAll(".experience-entry")]
    .reverse()
    .forEach((entry) => addBulletRemovals(entry, 2));

  if (paper.querySelector(".languages-section")) {
    removals.push(() => paper.querySelector(".languages-section")?.remove());
  }

  if (projectEntries[0]) {
    removals.push(() => projectEntries[0].remove());
  }

  [...paper.querySelectorAll(".skills-line")].reverse().forEach((line) => {
    const values = JSON.parse(decodeURIComponent(line.dataset.skills));
    const minimum = 4;
    const removableCount = Math.max(0, values.length - minimum);
    for (let index = 0; index < removableCount; index += 1) {
      removals.push(() => {
        values.pop();
        line.querySelector("span").textContent = values.join(", ");
      });
    }
  });

  const educationDetails = paper.querySelector(".education-details");
  if (educationDetails) removals.push(() => educationDetails.remove());

  if (!paper.classList.contains("resume-density-emergency")) {
    removals.push(() => paper.classList.add("resume-density-emergency"));
  }

  [...paper.querySelectorAll(".experience-entry")]
    .reverse()
    .forEach((entry) => addBulletRemovals(entry, 1));

  let removalIndex = 0;
  let consecutivePasses = 0;
  const maxChecks = removals.length + 12;

  for (let check = 0; check < maxChecks; check += 1) {
    if (!overflows()) {
      consecutivePasses += 1;
      if (consecutivePasses >= 3) {
        paper.classList.remove("resume-overflow");
        return true;
      }
      continue;
    }

    consecutivePasses = 0;
    const remove = removals[removalIndex];
    if (!remove) break;
    removalIndex += 1;
    remove();
  }

  const fits = !overflows();
  paper.classList.toggle("resume-overflow", !fits);
  return fits;
}

function renderChip(keyword, missing = false) {
  const chip = document.createElement("span");
  chip.className = `keyword-chip${missing ? " missing" : ""}`;
  chip.textContent = keyword;
  return chip;
}

function renderKeywordSuggestions(suggestions) {
  elements.keywordSuggestions.replaceChildren(
    ...suggestions.map((keyword) => {
      const label = document.createElement("label");
      label.className = "keyword-option";
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.value = keyword;
      const text = document.createElement("span");
      text.textContent = keyword;
      label.append(checkbox, text);
      return label;
    }),
  );
  elements.keywordDatabasePrompt.hidden = suggestions.length === 0;
}

function renderAnalysis(analysis) {
  elements.emptyState.hidden = true;
  elements.resultsContent.hidden = false;
  elements.scoreRing.style.setProperty("--score", analysis.score);
  elements.scoreValue.textContent = analysis.score;
  elements.scoreLabel.textContent =
    analysis.score >= 85 ? "Excellent alignment" : analysis.score >= 70 ? "Strong alignment" : "Review gaps";
  elements.generatedBadge.textContent =
    analysis.source === "gemini" ? "Gemini-assisted" : "Generated locally";
  elements.scoreSummary.textContent =
    analysis.score >= 85
      ? `${analysis.source === "gemini" ? "Gemini found" : "The resume has"} strong supported keyword coverage and an ATS-safe structure.`
      : "The structure is ATS-safe. Review the missing terms and add only those you can support with evidence.";

  elements.metricGrid.innerHTML = analysis.metrics
    .map(
      (metric) => `
        <div class="metric">
          <div class="metric-top"><span>${escapeHtml(metric.label)}</span><span>${metric.value}%</span></div>
          <div class="metric-bar"><span style="width:${metric.value}%"></span></div>
        </div>
      `,
    )
    .join("");

  elements.matchedKeywords.replaceChildren(
    ...(analysis.matched.length
      ? analysis.matched.map((keyword) => renderChip(keyword))
      : [renderChip("No exact skills detected")]),
  );
  elements.missingKeywords.replaceChildren(
    ...(analysis.missing.length
      ? analysis.missing.map((keyword) => renderChip(keyword, true))
      : [renderChip("No unsupported terms detected", true)]),
  );
  elements.coverageCount.textContent = `${analysis.matched.length} matched / ${analysis.missing.length} gaps`;
  renderKeywordSuggestions(analysis.recurringTerms);
}

async function generate() {
  const description = elements.jobDescription.value.trim();
  if (description.split(/\s+/).length < 25) {
    elements.inputError.textContent =
      "Paste at least 25 words so the app can identify meaningful requirements.";
    elements.jobDescription.focus();
    return;
  }

  elements.inputError.textContent = "";
  const title = elements.targetTitle.value.trim() || inferTitle(description);
  elements.targetTitle.value = title;
  let analysis;

  elements.generateButton.disabled = true;
  elements.generateButtonLabel.textContent =
    tailoringMode === "gemini" ? "Gemini is tailoring..." : "Analyzing...";

  try {
    if (tailoringMode === "gemini") {
      const apiKey = elements.geminiApiKey.value.trim();
      if (!apiKey) {
        elements.inputError.textContent = "Enter a Gemini API key to use Gemini mode.";
        elements.geminiApiKey.focus();
        return;
      }
      const geminiResult = await callGemini(description, title, apiKey);
      analysis = buildGeminiAnalysis(description, geminiResult);
      if (geminiResult.modelUsed !== geminiModels[0].label) {
        showToast(`Generated with ${geminiResult.modelUsed} fallback`);
      }
    } else {
      analysis = buildAnalysis(description);
    }
  } catch (error) {
    elements.inputError.textContent = error.message;
    showToast("Gemini failed; no resume changes were applied");
    return;
  } finally {
    elements.generateButton.disabled = false;
    elements.generateButtonLabel.textContent =
      tailoringMode === "gemini"
        ? "Generate with Gemini"
        : "Generate tailored resume";
  }

  renderAnalysis(analysis);
  renderResume(title, analysis);
  elements.resumeSection.hidden = false;
  elements.resumeSection.classList.add("is-fitting");
  const resumeFits = fitResumeToPage();
  elements.resumeSection.classList.remove("is-fitting");
  if (!resumeFits) {
    elements.resumeSection.hidden = true;
    elements.inputError.textContent =
      "The generated resume could not be fitted safely on one page. No clipped resume was shown.";
    showToast("Resume withheld because it did not pass page-fit checks");
    return;
  }
  elements.resultsContent.animate(
    [
      { opacity: 0, transform: "translateY(12px)" },
      { opacity: 1, transform: "translateY(0)" },
    ],
    { duration: 400, easing: "ease-out" },
  );
  document.querySelector("#resultsPanel").scrollIntoView({ behavior: "smooth", block: "start" });
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("show");
  window.setTimeout(() => elements.toast.classList.remove("show"), 2200);
}

elements.jobDescription.addEventListener("input", () => {
  const text = elements.jobDescription.value.trim();
  elements.wordCount.textContent = `${text ? text.split(/\s+/).length : 0} words`;
});

elements.loadExample.addEventListener("click", () => {
  elements.targetTitle.value = "Full Stack Software Engineer";
  elements.jobDescription.value = exampleJob;
  elements.jobDescription.dispatchEvent(new Event("input"));
  elements.inputError.textContent = "";
});

elements.generateButton.addEventListener("click", generate);

function setTailoringMode(mode) {
  tailoringMode = mode;
  const isGemini = mode === "gemini";
  elements.localMode.classList.toggle("active", !isGemini);
  elements.geminiMode.classList.toggle("active", isGemini);
  elements.localMode.setAttribute("aria-checked", String(!isGemini));
  elements.geminiMode.setAttribute("aria-checked", String(isGemini));
  elements.geminiSettings.hidden = !isGemini;
  elements.generateButtonLabel.textContent = isGemini
    ? "Generate with Gemini"
    : "Generate tailored resume";
  elements.privacyText.textContent = isGemini
    ? "Gemini mode sends the resume and job description to Google's API."
    : "Local mode keeps resume data in this browser.";
  elements.inputError.textContent = "";
}

elements.localMode.addEventListener("click", () => setTailoringMode("local"));
elements.geminiMode.addEventListener("click", () => setTailoringMode("gemini"));

elements.toggleApiKey.addEventListener("click", () => {
  const shouldShow = elements.geminiApiKey.type === "password";
  elements.geminiApiKey.type = shouldShow ? "text" : "password";
  elements.toggleApiKey.textContent = shouldShow ? "Hide" : "Show";
});

elements.saveKeywords.addEventListener("click", () => {
  const selected = [...elements.keywordSuggestions.querySelectorAll("input:checked")].map(
    (input) => input.value,
  );
  const custom = elements.customKeyword.value
    .split(",")
    .map((keyword) => keyword.trim())
    .filter((keyword) => keyword.length >= 2 && keyword.length <= 50);
  const additions = [...new Set([...selected, ...custom])];

  if (!additions.length) {
    showToast("Select or enter at least one keyword");
    elements.customKeyword.focus();
    return;
  }

  const existing = loadCustomKeywords();
  const existingNormalized = new Set(existing.map(normalize));
  const updated = [
    ...existing,
    ...additions.filter((keyword) => !existingNormalized.has(normalize(keyword))),
  ];
  if (!saveCustomKeywords(updated)) {
    showToast("Browser storage is unavailable");
    return;
  }
  additions.forEach((keyword) => {
    skillAliases[keyword] = [keyword.toLowerCase()];
  });
  elements.customKeyword.value = "";
  showToast(`${additions.length} keyword${additions.length === 1 ? "" : "s"} added`);
  generate();
});

elements.dismissKeywordPrompt.addEventListener("click", () => {
  elements.keywordDatabasePrompt.hidden = true;
});

elements.customKeyword.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    elements.saveKeywords.click();
  }
});

elements.copyButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(elements.resumePreview.innerText);
    showToast("Resume copied to clipboard");
  } catch {
    showToast("Clipboard access was blocked");
  }
});

elements.downloadButton.addEventListener("click", () => {
  const title = elements.targetTitle.value.trim().replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "");
  const blob = new Blob([elements.resumePreview.innerText], { type: "text/plain;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `John-Nesnidal-${title || "Tailored-Resume"}.txt`;
  link.click();
  URL.revokeObjectURL(link.href);
  showToast("ATS-safe text resume downloaded");
});

elements.printButton.addEventListener("click", () => {
  elements.resumeSection.classList.add("is-fitting");
  const resumeFits = fitResumeToPage();
  elements.resumeSection.classList.remove("is-fitting");
  if (!resumeFits) {
    showToast("Print blocked: the edited resume does not fit on one page");
    return;
  }
  window.print();
});
