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
      "Transformers.js",
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
        "Implemented a PostgreSQL back end in Supabase for authentication and learning-progress analytics.",
      ],
    },
    {
      name: "Hindi Language Learning Application",
      subtitle: "Adaptive Devanagari Learning App",
      tech: ["JavaScript", "HTML/CSS", "Transformers.js", "Text-to-Speech"],
      bullets: [
        "Developed an adaptive Hindi language-learning application combining flashcards, typed recall, and mastery-based progression.",
        "Integrated AI-powered text-to-speech using Meta's MMS/VITS model with browser speech synthesis fallback support.",
        "Implemented learner analytics, progress persistence, adaptive difficulty, and keyboard-accessible interfaces to improve engagement and retention.",
      ],
    },
    {
      name: "MatchCraft ATS Resume Workbench",
      subtitle: "Local-First Resume Tailoring App",
      tech: ["JavaScript", "HTML/CSS", "Gemini API", "DOCX", "PDF"],
      bullets: [
        "Built a browser-based resume tailoring application that parses and formats a resume using generative AI.",
        "Integrated Gemini API mode for semantic keyword scanning and truth-preserving resume rewording, with local keyword matching as a fallback workflow.",
        "Implemented one-page resume fitting, relevant skills selection, keyword database suggestions, location toggles, and reverse chronological work history formatting.",
        "Generated ATS-safe text exports, selectable-text PDFs, and DOCX downloads while preserving a consistent resume layout.",
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
  "Text-to-Speech": ["text-to-speech", "text to speech", "tts", "speech synthesis"],
  "Transformers.js": ["transformers.js", "transformers js", "transformers"],
  "Browser Speech Synthesis": ["browser speech synthesis", "web speech api", "speechsynthesis"],
  "Learner Analytics": ["learner analytics", "learning analytics", "progress analytics"],
  "Gemini API": ["gemini api", "google gemini", "gemini"],
  "ATS Optimization": ["ats", "ats optimization", "applicant tracking system"],
  "Keyword Extraction": ["keyword extraction", "keyword matching", "keyword scanning"],
  "Prompt Engineering": ["prompt engineering", "prompt design"],
  DOCX: ["docx", "word document", "microsoft word"],
  PDF: ["pdf", "selectable-text pdf", "text pdf"],
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

const softSkillCatalog = [
  ["Communication", ["communication skills", "communicate effectively"], ["communicate", "stakeholders", "customers"]],
  ["Written Communication", ["writing skills", "written communication skills"], ["reporting", "documentation", "written"]],
  ["Verbal Communication", ["verbal skills", "oral communication"], ["customers", "meetings", "stakeholders"]],
  ["Presentation", ["presentation skills", "presenting"], ["visualizations", "dashboards", "leadership"]],
  ["Active Listening", ["active listener", "listening skills"], ["assess needs", "customer needs", "requirements"]],
  ["Collaboration", ["collaborative", "collaborate effectively"], ["collaborated", "stakeholders", "scrum"]],
  ["Teamwork", ["team player", "team environment"], ["team of", "collaborated", "scrum"]],
  ["Cross-Functional Collaboration", ["cross-functional", "cross functional"], ["stakeholders", "production and supply chain", "customers"]],
  ["Stakeholder Management", ["stakeholder engagement", "manage stakeholders"], ["stakeholders", "leadership", "customers"]],
  ["Relationship Building", ["build relationships", "relationship management"], ["customers", "stakeholders", "team"]],
  ["Leadership", ["leadership skills", "demonstrated leadership"], ["led a team", "project lead"]],
  ["Team Leadership", ["lead a team", "team lead"], ["led a team", "project lead"]],
  ["Mentoring", ["mentor", "mentorship"], ["led a team", "team of"]],
  ["Coaching", ["coach others", "coaching skills"], ["feedback", "led a team", "teach"]],
  ["Delegation", ["delegate tasks", "effective delegation"], ["led a team", "project lead"]],
  ["Decision Making", ["decision-making", "make decisions"], ["decision-making", "actionable insights"]],
  ["Strategic Thinking", ["strategic mindset", "think strategically"], ["trends", "opportunities", "optimization"]],
  ["Vision Setting", ["set direction", "define vision"], ["led a team", "designed"]],
  ["Influence", ["influencing skills", "influence stakeholders"], ["stakeholders", "leadership", "customers"]],
  ["Conflict Resolution", ["resolve conflict", "conflict management"], ["customer needs", "scrum", "team"]],
  ["Negotiation", ["negotiation skills", "negotiate"], ["customers", "stakeholders", "requirements"]],
  ["Problem Solving", ["problem-solving", "solve problems"], ["inefficiencies", "bottlenecks", "solutions"]],
  ["Critical Thinking", ["critical thinker", "critical-thinking"], ["analyze", "identify", "assess"]],
  ["Analytical Thinking", ["analytical mindset", "analytical skills"], ["analyze", "analytics", "data"]],
  ["Creative Thinking", ["creative problem solving", "think creatively"], ["designed", "graphics", "solutions"]],
  ["Troubleshooting", ["troubleshoot", "diagnose issues"], ["bottlenecks", "tested", "calibration"]],
  ["Root Cause Analysis", ["root-cause analysis", "identify root causes"], ["drivers", "bottlenecks", "inefficiencies"]],
  ["Sound Judgment", ["good judgment", "professional judgment"], ["decision-making", "assess needs"]],
  ["Resourcefulness", ["resourceful", "find solutions"], ["solutions", "from scratch", "integrated"]],
  ["Initiative", ["self-starter", "proactive"], ["led", "built", "designed"]],
  ["Adaptability", ["adaptable", "fast-paced"], ["cross-platform", "front-end and back-end", "multiple"]],
  ["Flexibility", ["flexible", "changing priorities"], ["cross-platform", "multiple", "enhanced"]],
  ["Learning Agility", ["quick learner", "learn quickly"], ["technologies", "frameworks", "trained"]],
  ["Resilience", ["resilient", "perseverance"], ["reliability", "maintained", "tested"]],
  ["Change Management", ["manage change", "organizational change"], ["enhanced", "optimization", "implemented"]],
  ["Stress Management", ["work under pressure", "handle pressure"], ["high-volume", "timely", "active sessions"]],
  ["Time Management", ["manage time", "meet deadlines"], ["timely", "maintain", "deployed"]],
  ["Prioritization", ["prioritize tasks", "manage priorities"], ["key components", "actionable", "track"]],
  ["Organization", ["organizational skills", "highly organized"], ["structured", "maintain", "track"]],
  ["Planning", ["planning skills", "plan projects"], ["designed", "project lead", "workflows"]],
  ["Goal Setting", ["set goals", "goal-oriented"], ["track performance", "initiatives", "outcomes"]],
  ["Accountability", ["accountable", "take accountability"], ["led", "maintain", "ensuring"]],
  ["Ownership", ["take ownership", "sense of ownership"], ["led", "built", "from scratch"]],
  ["Reliability", ["reliable", "dependable"], ["reliability", "maintain", "100% code coverage"]],
  ["Dependability", ["dependable", "consistent"], ["maintain", "timely", "reliability"]],
  ["Self-Motivation", ["self-motivated", "motivated"], ["led", "built", "developed"]],
  ["Independence", ["work independently", "independent worker"], ["from scratch", "designed all", "built"]],
  ["Work Ethic", ["strong work ethic", "dedicated"], ["maintain", "tested", "developed"]],
  ["Integrity", ["high integrity", "ethical"], ["accurate", "ensuring", "secure"]],
  ["Professionalism", ["professional demeanor", "professional"], ["customers", "leadership", "stakeholders"]],
  ["Attention to Detail", ["detail-oriented", "detail oriented"], ["100% code coverage", "accurate", "calibration"]],
  ["Accuracy", ["highly accurate", "accuracy"], ["accurate", "100% code coverage", "ensuring"]],
  ["Quality Focus", ["quality-focused", "quality minded"], ["code quality", "tested", "code coverage"]],
  ["Process Improvement", ["improve processes", "process optimization"], ["inefficiencies", "optimization", "workflows"]],
  ["Continuous Improvement", ["continuous-improvement mindset", "continuous improvement"], ["enhanced", "optimization", "improvement"]],
  ["Customer Focus", ["customer-focused", "customer centric"], ["customers", "customer needs", "user experience"]],
  ["Customer Service", ["service skills", "customer service skills"], ["customers", "customer needs", "feedback"]],
  ["Client Management", ["manage clients", "client relations"], ["customers", "customer needs", "solutions"]],
  ["Empathy", ["empathetic", "understand users"], ["customer needs", "user experience", "teach"]],
  ["Emotional Intelligence", ["emotionally intelligent", "eq"], ["customers", "team", "feedback"]],
  ["Interpersonal Skills", ["people skills", "interpersonal communication"], ["customers", "stakeholders", "team"]],
  ["Cultural Awareness", ["cultural sensitivity", "cross-cultural"], ["spanish", "american sign language", "team"]],
  ["Inclusivity", ["inclusive", "inclusion"], ["accessibility", "american sign language", "students"]],
  ["Diplomacy", ["tactful", "diplomatic"], ["customers", "stakeholders", "feedback"]],
  ["Patience", ["patient", "patience"], ["teach", "students", "customer needs"]],
  ["Curiosity", ["intellectual curiosity", "curious"], ["research", "analyze", "identify"]],
  ["Growth Mindset", ["growth-oriented", "continuous learner"], ["trained", "enhanced", "learning"]],
  ["Openness to Feedback", ["receptive to feedback", "accept feedback"], ["feedback", "customers", "scrum"]],
  ["Giving Feedback", ["provide feedback", "constructive feedback"], ["feedback", "leadership", "teach"]],
  ["Facilitation", ["facilitation skills", "facilitate meetings"], ["meetings", "stakeholders", "team"]],
  ["Meeting Management", ["run meetings", "manage meetings"], ["scrum meetings", "stakeholders"]],
  ["Documentation", ["documentation skills", "document clearly"], ["reporting", "uml", "workflows"]],
  ["Storytelling", ["data storytelling", "tell stories with data"], ["visualizations", "dashboards", "communicate"]],
  ["Persuasion", ["persuasive communication", "persuade"], ["stakeholders", "leadership", "customers"]],
  ["Public Speaking", ["public-speaking", "speak publicly"], ["presentation", "leadership", "communicate"]],
  ["Business Acumen", ["business understanding", "business savvy"], ["sales data", "cost-saving", "ordering trends"]],
  ["Commercial Awareness", ["commercial mindset", "market awareness"], ["sales data", "cost-saving", "ordering trends"]],
  ["Systems Thinking", ["systems thinker", "holistic thinking"], ["system", "front-end and back-end", "supply chain"]],
  ["Design Thinking", ["human-centered design", "design-thinking"], ["user experience", "customer needs", "designed"]],
  ["Innovation", ["innovative", "innovation mindset"], ["engineered", "created", "designed"]],
  ["Creativity", ["creative", "original thinking"], ["graphics", "designed", "created"]],
  ["Ideation", ["generate ideas", "brainstorming"], ["designed", "solutions", "created"]],
  ["Research", ["research skills", "conduct research"], ["research project", "analyze", "trained"]],
  ["Information Synthesis", ["synthesize information", "synthesis"], ["analyze", "insights", "requirements"]],
  ["Data-Informed Decision Making", ["data-driven decisions", "data informed"], ["actionable insights", "decision-making", "metrics"]],
  ["Risk Management", ["manage risk", "risk assessment"], ["secure", "reliability", "ensuring"]],
  ["Crisis Management", ["crisis response", "incident management"], ["bottlenecks", "active sessions", "reliability"]],
  ["Project Coordination", ["coordinate projects", "project coordination"], ["project lead", "team of", "workflows"]],
  ["Project Management", ["manage projects", "project-management"], ["project lead", "jira", "kanban"]],
  ["Results Orientation", ["results-driven", "results oriented"], ["outcomes", "opportunities", "100% code coverage"]],
  ["Outcome Focus", ["outcome-focused", "focus on outcomes"], ["outcomes", "cost-saving", "performance"]],
  ["Efficiency", ["efficient", "efficiency-minded"], ["inefficiencies", "optimization", "performance"]],
  ["Multitasking", ["multi-tasking", "manage multiple tasks"], ["front-end and back-end", "multiple", "across"]],
  ["Remote Collaboration", ["distributed team", "virtual collaboration"], ["cloud-based", "gitlab", "github"]],
  ["Technical Communication", ["explain technical concepts", "technical communicator"], ["customers", "visualizations", "requirements"]],
  ["Requirements Gathering", ["gather requirements", "requirements elicitation"], ["assess needs", "customer needs", "requirements"]],
  ["Consultative Approach", ["consultative", "solution consulting"], ["assess needs", "customers", "solutions"]],
  ["Service Orientation", ["service-oriented", "service mindset"], ["customers", "students", "user experience"]],
  ["Consensus Building", ["build consensus", "align stakeholders"], ["stakeholders", "team", "scrum"]],
  ["Networking", ["professional networking", "build a network"], ["customers", "stakeholders", "team"]],
];

const softSkillAliases = Object.fromEntries(
  softSkillCatalog.map(([skill, aliases]) => [skill, [skill.toLowerCase(), ...aliases]]),
);

const softSkillEvidence = Object.fromEntries(
  softSkillCatalog.map(([skill, , evidence]) => [skill, evidence]),
);

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
  resumeLocation: document.querySelector("#resumeLocation"),
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
  suggestMode: document.querySelector("#suggestMode"),
  suggestPanel: document.querySelector("#suggestPanel"),
  suggestCandidates: document.querySelector("#suggestCandidates"),
  applySuggestedSkills: document.querySelector("#applySuggestedSkills"),
  generateButtonLabel: document.querySelector("#generateButtonLabel"),
  privacyText: document.querySelector("#privacyText"),
  resumeSection: document.querySelector("#resumeSection"),
  resumePreview: document.querySelector("#resumePreview"),
  copyButton: document.querySelector("#copyButton"),
  downloadButton: document.querySelector("#downloadButton"),
  docxButton: document.querySelector("#docxButton"),
  printButton: document.querySelector("#printButton"),
  toast: document.querySelector("#toast"),
};

let tailoringMode = "local";
let lastGeneratedAnalysis = null;
let lastGeneratedTitle = "";
let confirmedSkillsDescription = "";
const confirmedSuggestedSkills = new Set();

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
const retryableGeminiStatuses = new Set([429, 500, 503, 504]);

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
  return [
    ...Object.values(skillAliases),
    ...Object.values(responsibilityPhrases),
    ...Object.values(softSkillAliases),
  ].some((aliases) => containsAlias(candidate, aliases));
}

function isKnownKeywordFragment(candidate) {
  const canonical = canonicalTerm(candidate);
  if (normalize(candidate).includes(" ")) return false;
  return [
    ...Object.values(skillAliases),
    ...Object.values(responsibilityPhrases),
    ...Object.values(softSkillAliases),
  ].some((aliases) =>
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
  const rankedSoftSkills = rankKnownKeywords(lines, softSkillAliases);
  const importance = Object.fromEntries(
    [...rankedSkills, ...rankedResponsibilities, ...rankedSoftSkills].map(
      ({ keyword, importance: score }) => [keyword, score],
    ),
  );

  return {
    skills: rankedSkills.map(({ keyword }) => keyword),
    responsibilities: rankedResponsibilities.map(({ keyword }) => keyword),
    softSkills: rankedSoftSkills.map(({ keyword }) => keyword),
    recurringTerms: extractUnknownCandidates(lines),
    importance,
  };
}

function isKnownKeywordAlias(term) {
  const canonical = canonicalTerm(term);
  return [
    ...Object.values(skillAliases),
    ...Object.values(responsibilityPhrases),
    ...Object.values(softSkillAliases),
  ].some((aliases) =>
    aliases.some((alias) => canonicalTerm(alias) === canonical),
  );
}

function isSupported(keyword) {
  const aliases =
    softSkillEvidence[keyword] ||
    skillAliases[keyword] ||
    responsibilityPhrases[keyword] ||
    [keyword];
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

function experienceStartDate(dateRange) {
  const start = String(dateRange).split(/\s+-\s+/)[0]?.trim();
  const timestamp = Date.parse(start);
  return Number.isNaN(timestamp) ? 0 : timestamp;
}

function reverseChronologicalExperience(items) {
  return items
    .map((item, index) => ({
      item,
      index,
      startDate: experienceStartDate(item.dates),
    }))
    .sort((a, b) => b.startDate - a.startDate || a.index - b.index)
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
  let lastError;

  for (const [modelIndex, model] of geminiModels.entries()) {
    const requestBody = JSON.stringify({
      model: model.id,
      input:
        "You are a rigorous resume editor and ATS analyst. Preserve truth over match score.\n\n" +
        getGeminiPrompt(description, title),
      response_format: {
        type: "text",
        mime_type: "application/json",
        schema: geminiResponseSchema,
      },
    });

    for (let attempt = 0; attempt < model.attempts; attempt += 1) {
      elements.generateButtonLabel.textContent =
        modelIndex === 0
          ? attempt === 0
            ? `${model.label} is tailoring...`
            : `Retrying ${model.label}...`
          : `${model.label} fallback is tailoring...`;

      try {
        const response = await fetch(
          "https://generativelanguage.googleapis.com/v1beta/interactions",
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

        const responseText =
          typeof payload?.output_text === "string"
            ? payload.output_text
            : typeof payload?.outputText === "string"
              ? payload.outputText
              : typeof payload?.output === "string"
                ? payload.output
                : Array.isArray(payload?.candidates)
                  ? payload.candidates
                      .flatMap((candidate) =>
                        candidate?.content?.parts?.map((part) => part.text || "") || [],
                      )
                      .join("")
                  : "";
        if (!responseText) throw new Error("Gemini returned no resume analysis.");

        const result = JSON.parse(responseText);
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
  const jobKeywords = [
    ...extracted.skills,
    ...extracted.responsibilities,
    ...extracted.softSkills,
  ];
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

const atsSkillCategories = [
  {
    label: "Languages",
    terms: new Set([
      "c", "c#", "c++", "groovy", "html/css", "java", "javascript", "kotlin",
      "python", "r", "ruby", "rust", "sql", "typescript",
    ]),
  },
  {
    label: "Technologies",
    terms: new Set([
      ".net", "angular", "asp.net", "express.js", "flask", "hibernate", "jest",
      "next.js", "node.js", "react", "spring boot", "tensorflow", "pytorch", "vue",
      "automated testing", "cypress", "integration testing", "selenium",
      "unit testing",
      "graphql", "microservices", "restful apis", "system design", "websockets",
      "gazebo", "git", "github", "gitlab", "jira", "linux", "opencv", "roboflow",
      "ros",
      "agile", "algorithms", "data structures", "kanban",
      "object-oriented programming", "scrum", "software development life cycle",
      "uml",
    ]),
  },
  {
    label: "Data & Cloud",
    terms: new Set([
      "aws", "azure", "ci/cd", "data analysis", "data modeling",
      "data visualization", "databricks", "devops", "docker", "dynamodb", "etl",
      "gcp", "github actions", "gitlab ci", "jenkins", "kubernetes", "looker",
      "machine learning", "microsoft sql server", "mongodb", "mysql", "neo4j",
      "natural language processing", "numpy", "oracle", "pandas", "postgresql",
      "power bi", "redis", "relational databases", "snowflake", "spark",
      "supabase", "tableau", "terraform",
    ]),
  },
  {
    label: "Soft Skills",
    terms: new Set([
      "adaptability", "attention to detail", "collaboration", "communication",
      "customer focus", "leadership", "problem solving", "teamwork",
    ]),
  },
];

function canonicalSkillLabel(term) {
  const canonical = canonicalTerm(term);
  const known = Object.keys(skillAliases).find((skill) =>
    [skill, ...(skillAliases[skill] || [])].some(
      (alias) => canonicalTerm(alias) === canonical,
    ),
  );
  return known || term.trim();
}

function atsSkillLabel(term) {
  const canonical = canonicalSkillLabel(term);
  const normalizedTerm = normalize(term);
  const normalizedCanonical = normalize(canonical);
  const expandedAcronyms = new Set(["aws", "gcp", "etl", "ci/cd"]);
  if (
    expandedAcronyms.has(normalizedCanonical) &&
    normalizedTerm !== normalizedCanonical &&
    !normalizedTerm.includes(normalizedCanonical)
  ) {
    return `${canonical} (${term.trim()})`;
  }
  return canonical;
}

function skillCategory(term) {
  const normalized = normalize(canonicalSkillLabel(term));
  return (
    atsSkillCategories.find(({ terms }) => terms.has(normalized))?.label ||
    "Technologies"
  );
}

function skillPriority(term, analysis, index) {
  const importance = analysis.importance?.[term] || 0;
  const aiKeyword = (analysis.aiTailoring?.keywords || []).find(
    (keyword) => normalize(keyword.term || "") === normalize(term),
  );
  return (aiKeyword?.importance || importance) * 100 - index;
}

function tailoredSkills(analysis) {
  const supportedJobSkills = (analysis.skills || [])
    .filter((skill) => analysis.matched.some((matched) => normalize(matched) === normalize(skill)))
    .map((skill, index) => ({
      skill: atsSkillLabel(skill),
      exactJobTerm: skill.trim(),
      category: skillCategory(skill),
      priority: skillPriority(skill, analysis, index),
    }));

  const allSourceSkills = Object.values(resume.skills)
    .flat()
    .map((skill, index) => ({
      skill,
      exactJobTerm: skill,
      category: skillCategory(skill),
      priority: textScore(skill, analysis.skills || []) * 25 - index,
    }));
  const sourceSkills = allSourceSkills.filter(({ priority }) => priority > 0);

  const candidates = [...supportedJobSkills, ...sourceSkills]
    .sort((a, b) => b.priority - a.priority)
    .filter((candidate, index, items) => {
      const identity = normalize(canonicalSkillLabel(candidate.skill));
      return (
        items.findIndex(
          (item) => normalize(canonicalSkillLabel(item.skill)) === identity,
        ) === index
      );
    })
    .slice(0, 18);

  const selectedIdentities = new Set(
    candidates.map(({ skill }) => normalize(canonicalSkillLabel(skill))),
  );
  const relevantCategories = new Set(candidates.map(({ category }) => category));
  const categoryCounts = candidates.reduce((counts, { category }) => {
    counts.set(category, (counts.get(category) || 0) + 1);
    return counts;
  }, new Map());
  const adjacentPool = allSourceSkills.filter(
    ({ skill, category }) =>
      relevantCategories.has(category) &&
      !selectedIdentities.has(normalize(canonicalSkillLabel(skill))),
  );
  const orderedCategories = [...relevantCategories]
    .filter((category) => category !== "Soft Skills")
    .sort(
      (a, b) =>
        (categoryCounts.get(a) || 0) - (categoryCounts.get(b) || 0),
    );
  const adjacentByCategory = new Map(
    orderedCategories.map((category) => [
      category,
      adjacentPool
        .filter((skill) => skill.category === category)
        .sort((a, b) => b.priority - a.priority),
    ]),
  );
  const adjacentSkills = [];
  for (let round = 0; adjacentSkills.length < 10; round += 1) {
    let addedInRound = false;
    for (const category of orderedCategories) {
      const candidate = adjacentByCategory.get(category)?.[round];
      if (!candidate) continue;
      adjacentSkills.push(candidate);
      addedInRound = true;
      if (adjacentSkills.length >= 10) break;
    }
    if (!addedInRound) break;
  }
  candidates.push(...adjacentSkills);

  const hardSkillIdentities = new Set(
    candidates.map(({ skill }) => normalize(canonicalSkillLabel(skill))),
  );
  const fallbackCategoryCounts = candidates.reduce((counts, { category }) => {
    counts.set(category, (counts.get(category) || 0) + 1);
    return counts;
  }, new Map());
  while (hardSkillIdentities.size < 15) {
    const fallback = allSourceSkills
      .filter(
        ({ skill }) =>
          !hardSkillIdentities.has(normalize(canonicalSkillLabel(skill))),
      )
      .sort(
        (a, b) =>
          (fallbackCategoryCounts.get(a.category) || 0) -
            (fallbackCategoryCounts.get(b.category) || 0) ||
          b.priority - a.priority,
      )[0];
    if (!fallback) break;
    candidates.push(fallback);
    hardSkillIdentities.add(normalize(canonicalSkillLabel(fallback.skill)));
    fallbackCategoryCounts.set(
      fallback.category,
      (fallbackCategoryCounts.get(fallback.category) || 0) + 1,
    );
  }

  (analysis.softSkills || [])
    .filter(isSupported)
    .slice(0, 4)
    .forEach((skill, index) => {
      candidates.push({
        skill,
        exactJobTerm: skill,
        category: "Soft Skills",
        priority: skillPriority(skill, analysis, index),
      });
    });

  if (elements.suggestMode.checked) {
    [...confirmedSuggestedSkills].forEach((skill, index) => {
      candidates.push({
        skill: atsSkillLabel(skill),
        exactJobTerm: skill,
        category: skillCategory(skill),
        priority: 1000 - index,
        confirmed: true,
      });
    });
  }

  const grouped = Object.fromEntries(
    atsSkillCategories.map(({ label }) => [label, []]),
  );
  candidates
    .sort((a, b) => b.priority - a.priority)
    .forEach(({ skill, exactJobTerm, category, confirmed }) => {
      const output = confirmed ? atsSkillLabel(exactJobTerm) : skill;
      if (!grouped[category].some((item) => normalize(item) === normalize(output))) {
        grouped[category].push(output);
      }
    });

  return Object.fromEntries(
    Object.entries(grouped).filter(([, skills]) => skills.length > 0),
  );
}

function escapeHtml(value) {
  const div = document.createElement("div");
  div.textContent = value;
  return div.innerHTML;
}

function renderResume(title, analysis) {
  const keywords = analysis.matched;
  const skills = tailoredSkills(analysis);
  const experience = reverseChronologicalExperience(resume.experience);
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
  const selectedLocation = elements.resumeLocation.value;
  const contactLine = selectedLocation
    ? `${selectedLocation} | ${resume.contact}`
    : resume.contact;

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
    <p class="resume-contact">${escapeHtml(contactLine)}</p>
    <h2>Professional Summary</h2>
    <p class="summary">${escapeHtml(aiSummary || buildSummary(title, analysis.matched))}</p>
    <h2>Skills</h2>
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
      <h2>Projects <span class="projects-note">(full source code for non-proprietary projects can be found at github.com/jnesnidal)</span></h2>
      ${projectHtml}
    </div>
    <div class="optional-section languages-section">
      <h2>Languages Spoken</h2>
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
  const hardSkillCount = () =>
    [...paper.querySelectorAll(".skills-line")]
      .filter(
        (line) =>
          line.querySelector("strong")?.textContent.replace(/:$/, "") !==
          "Soft Skills",
      )
      .reduce(
        (total, line) =>
          total +
          line
            .querySelector("span")
            .textContent.split(",")
            .map((skill) => skill.trim())
            .filter(Boolean).length,
        0,
      );
  const addSkillRemoval = (line) => {
    removals.push(() => {
      const category = line.querySelector("strong").textContent.replace(/:$/, "");
      const values = line
        .querySelector("span")
        .textContent.split(",")
        .map((skill) => skill.trim())
        .filter(Boolean);
      if (category !== "Soft Skills" && hardSkillCount() <= 15) return;
      values.pop();
      line.querySelector("span").textContent = values.join(", ");
    });
  };
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
      addSkillRemoval(line);
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
      addSkillRemoval(line);
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

function suggestSkillCandidates(analysis) {
  const aiCandidates = (analysis.aiTailoring?.keywords || [])
    .filter(
      (keyword) =>
        keyword &&
        keyword.supported === false &&
        ["hard_skill", "domain"].includes(keyword.category),
    )
    .map((keyword) => keyword.term);
  const localCandidates = (analysis.skills || []).filter((skill) =>
    analysis.missing.includes(skill),
  );

  return [
    ...new Map(
      [...aiCandidates, ...localCandidates]
        .filter((skill) => typeof skill === "string" && skill.trim())
        .map((skill) => [normalize(skill), skill.trim()]),
    ).values(),
  ].slice(0, 12);
}

function renderSuggestPanel(analysis) {
  const candidates = suggestSkillCandidates(analysis);
  const shouldShow = elements.suggestMode.checked && candidates.length > 0;
  elements.suggestPanel.hidden = !shouldShow;
  if (!shouldShow) {
    elements.suggestCandidates.replaceChildren();
    return;
  }

  elements.suggestCandidates.replaceChildren(
    ...candidates.map((skill) => {
      const label = document.createElement("label");
      label.className = "suggest-option";
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.value = skill;
      checkbox.checked = confirmedSuggestedSkills.has(skill);
      const text = document.createElement("span");
      text.textContent = skill;
      label.append(checkbox, text);
      return label;
    }),
  );
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
  renderSuggestPanel(analysis);
}

function renderAndFitResume(title, analysis) {
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
    return false;
  }
  return true;
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
  if (
    confirmedSkillsDescription &&
    confirmedSkillsDescription !== description
  ) {
    confirmedStretchSkills.clear();
  }
  confirmedSkillsDescription = description;
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

  lastGeneratedAnalysis = analysis;
  lastGeneratedTitle = title;
  renderAnalysis(analysis);
  if (!renderAndFitResume(title, analysis)) return;
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

elements.resumeLocation.addEventListener("change", () => {
  if (!lastGeneratedAnalysis) return;
  elements.inputError.textContent = "";
  renderAndFitResume(lastGeneratedTitle, lastGeneratedAnalysis);
});

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

elements.suggestMode.addEventListener("change", () => {
  if (!elements.suggestMode.checked) {
    confirmedSuggestedSkills.clear();
    confirmedSkillsDescription = "";
  }
  if (!lastGeneratedAnalysis) return;
  renderSuggestPanel(lastGeneratedAnalysis);
  if (!elements.suggestMode.checked) {
    elements.inputError.textContent = "";
    renderAndFitResume(lastGeneratedTitle, lastGeneratedAnalysis);
  }
});

elements.applySuggestedSkills.addEventListener("click", () => {
  if (!lastGeneratedAnalysis) return;
  const previous = new Set(confirmedSuggestedSkills);
  const selected = [
    ...elements.suggestCandidates.querySelectorAll("input:checked"),
  ].map((input) => input.value);

  confirmedSuggestedSkills.clear();
  selected.forEach((skill) => confirmedSuggestedSkills.add(skill));
  confirmedSkillsDescription = elements.jobDescription.value.trim();
  elements.inputError.textContent = "";

  if (!renderAndFitResume(lastGeneratedTitle, lastGeneratedAnalysis)) {
    confirmedSuggestedSkills.clear();
    previous.forEach((skill) => confirmedSuggestedSkills.add(skill));
    renderAndFitResume(lastGeneratedTitle, lastGeneratedAnalysis);
    showToast("Confirmed skills were not applied because they did not fit");
    return;
  }

  showToast(
    selected.length
      ? `${selected.length} confirmed skill${selected.length === 1 ? "" : "s"} applied`
      : "Unverified skills removed",
  );
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
  const title = sanitizeFileName(elements.targetTitle.value.trim());
  const blob = new Blob([elements.resumePreview.innerText], { type: "text/plain;charset=utf-8" });
  downloadBlob(blob, `John-Nesnidal-${title || "Tailored-Resume"}.txt`);
  showToast("ATS-safe text resume downloaded");
});

elements.docxButton.addEventListener("click", () => {
  try {
    const title = sanitizeFileName(elements.targetTitle.value.trim());
    downloadBlob(createDocxBlob(), `John-Nesnidal-${title || "Tailored-Resume"}.docx`);
    showToast("DOCX resume downloaded");
  } catch (error) {
    showToast(error.message);
  }
});

function sanitizeFileName(value) {
  return String(value).trim().replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "");
}

function downloadBlob(blob, filename) {
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
  URL.revokeObjectURL(link.href);
}

function escapeXml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function textRunsXml(text, options = {}) {
  const runs = [];
  const segments = String(text).split(/\t/);
  segments.forEach((segment, index) => {
    if (index > 0) runs.push("<w:r><w:tab/></w:r>");
    const runProps = [];
    if (options.bold) runProps.push("<w:b/>");
    if (options.italic) runProps.push("<w:i/>");
    if (options.size) runProps.push(`<w:sz w:val="${Math.round(options.size * 2)}"/>`);
    if (options.font) {
      const font = escapeXml(options.font);
      runProps.push(`<w:rFonts w:ascii="${font}" w:hAnsi="${font}" w:cs="${font}"/>`);
    }
    runs.push(
      `<w:r>${runProps.length ? `<w:rPr>${runProps.join("")}</w:rPr>` : ""}<w:t xml:space="preserve">${escapeXml(segment)}</w:t></w:r>`,
    );
  });
  return runs.join("");
}

function paragraphXml(runs, options = {}) {
  const paragraphProps = [];
  if (options.align) paragraphProps.push(`<w:jc w:val="${options.align}"/>`);
  if (options.spacingBefore || options.spacingAfter || options.line) {
    paragraphProps.push(
      `<w:spacing${options.spacingBefore ? ` w:before="${options.spacingBefore}"` : ""}${options.spacingAfter ? ` w:after="${options.spacingAfter}"` : ""}${options.line ? ` w:line="${options.line}" w:lineRule="auto"` : ""}/>`,
    );
  }
  if (options.indentLeft || options.indentHanging) {
    paragraphProps.push(
      `<w:ind${options.indentLeft ? ` w:left="${options.indentLeft}"` : ""}${options.indentHanging ? ` w:hanging="${options.indentHanging}"` : ""}/>`,
    );
  }
  return `<w:p>${paragraphProps.length ? `<w:pPr>${paragraphProps.join("")}</w:pPr>` : ""}${runs}</w:p>`;
}

function collectDocxParagraphs() {
  const paragraphs = [];
  const paper = elements.resumePreview;

  const addParagraph = (text, options = {}) => {
    const value = String(text).trim();
    if (!value) return;
    paragraphs.push(paragraphXml(textRunsXml(value, options), options));
  };

  const renderNode = (node) => {
    if (node.nodeType !== Node.ELEMENT_NODE) return;
    if (node.matches(".resume-name")) {
      addParagraph(node.textContent, {
        bold: true,
        size: 20,
        align: "center",
        spacingAfter: 80,
      });
      return;
    }

    if (node.matches(".resume-contact")) {
      addParagraph(node.textContent, {
        align: "center",
        size: 9,
        spacingAfter: 90,
      });
      return;
    }

    if (node.tagName === "H2") {
      const note = node.querySelector(".projects-note");
      const heading = [...node.childNodes]
        .filter((child) => child.nodeType === Node.TEXT_NODE)
        .map((child) => child.textContent)
        .join("")
        .trim();
      addParagraph(heading, {
        bold: true,
        size: 12,
        spacingBefore: 180,
        spacingAfter: 60,
      });
      if (note) {
        addParagraph(note.textContent, {
          italic: true,
          size: 8,
          spacingAfter: 30,
        });
      }
      return;
    }

    if (node.classList.contains("summary")) {
      addParagraph(node.textContent, { size: 10, spacingAfter: 80 });
      return;
    }

    if (node.classList.contains("skills-line")) {
      const label = node.querySelector("strong")?.textContent.trim() || "";
      const value = node.querySelector("span")?.textContent.trim() || "";
      const runs = [
        textRunsXml(label, { bold: true, size: 10 }),
        value ? textRunsXml(` ${value}`, { size: 10 }) : "",
      ].join("");
      paragraphs.push(paragraphXml(runs, { spacingAfter: 30 }));
      return;
    }

    if (node.classList.contains("experience-entry") || node.classList.contains("project-entry")) {
      const heading = node.querySelector("h3");
      if (heading) {
        const spans = heading.querySelectorAll(":scope > span");
        const left = spans[0]?.textContent.trim() || heading.textContent.trim();
        const right = spans[1]?.textContent.trim() || "";
        addParagraph(right ? `${left}\t${right}` : left, {
          bold: true,
          size: 10,
          spacingBefore: 80,
          spacingAfter: 20,
        });
      }

      const subline = node.querySelector(".subline");
      if (subline) {
        const spans = subline.querySelectorAll(":scope > span");
        const left = spans[0]?.textContent.trim() || subline.textContent.trim();
        const right = spans[1]?.textContent.trim() || "";
        addParagraph(right ? `${left}\t${right}` : left, {
          italic: true,
          size: 9,
          spacingAfter: 30,
        });
      }

      [...node.querySelectorAll(":scope > ul > li")].forEach((item) => {
        addParagraph(`- ${item.textContent.trim()}`, {
          size: 9.5,
          indentLeft: 360,
          indentHanging: 240,
          spacingAfter: 20,
        });
      });
      return;
    }

    if (node.classList.contains("education-section")) {
      const heading = node.querySelector("h3");
      if (heading) {
        const spans = heading.querySelectorAll(":scope > span");
        const left = spans[0]?.textContent.trim() || heading.textContent.trim();
        const right = spans[1]?.textContent.trim() || "";
        addParagraph(right ? `${left}\t${right}` : left, {
          bold: true,
          size: 10,
          spacingBefore: 80,
          spacingAfter: 20,
        });
      }
      const subline = node.querySelector(".subline");
      if (subline) {
        const spans = subline.querySelectorAll(":scope > span");
        const left = spans[0]?.textContent.trim() || subline.textContent.trim();
        const right = spans[1]?.textContent.trim() || "";
        addParagraph(right ? `${left}\t${right}` : left, {
          italic: true,
          size: 9,
          spacingAfter: 30,
        });
      }
      const details = node.querySelector(".education-details");
      if (details) {
        addParagraph(details.textContent, { size: 10, spacingAfter: 40 });
      }
      return;
    }

    if (node.classList.contains("optional-section")) {
      const heading = node.querySelector("h2");
      if (heading) {
        addParagraph(heading.textContent, {
          bold: true,
          size: 12,
          spacingBefore: 180,
          spacingAfter: 60,
        });
      }
      const body = node.querySelector("p");
      if (body) addParagraph(body.textContent, { size: 10, spacingAfter: 40 });
      return;
    }

    [...node.children].forEach(renderNode);
  };

  [...paper.children].forEach(renderNode);

  return paragraphs;
}

const CRC32_TABLE = (() => {
  const table = new Uint32Array(256);
  for (let index = 0; index < 256; index += 1) {
    let value = index;
    for (let bit = 0; bit < 8; bit += 1) {
      value = value & 1 ? 0xedb88320 ^ (value >>> 1) : value >>> 1;
    }
    table[index] = value >>> 0;
  }
  return table;
})();

function crc32(bytes) {
  let crc = 0xffffffff;
  for (const byte of bytes) {
    crc = CRC32_TABLE[(crc ^ byte) & 0xff] ^ (crc >>> 8);
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function encodeUtf8(value) {
  return new TextEncoder().encode(String(value));
}

function createZipBlob(entries) {
  const fileParts = [];
  const centralParts = [];
  let offset = 0;

  entries.forEach(({ name, data }) => {
    const nameBytes = encodeUtf8(name);
    const contentBytes = data instanceof Uint8Array ? data : encodeUtf8(data);
    const checksum = crc32(contentBytes);

    const localHeader = new ArrayBuffer(30);
    const localView = new DataView(localHeader);
    localView.setUint32(0, 0x04034b50, true);
    localView.setUint16(4, 20, true);
    localView.setUint16(6, 0, true);
    localView.setUint16(8, 0, true);
    localView.setUint16(10, 0, true);
    localView.setUint16(12, 0, true);
    localView.setUint32(14, checksum, true);
    localView.setUint32(18, contentBytes.length, true);
    localView.setUint32(22, contentBytes.length, true);
    localView.setUint16(26, nameBytes.length, true);
    localView.setUint16(28, 0, true);

    const localBytes = new Uint8Array(localHeader);
    fileParts.push(localBytes, nameBytes, contentBytes);

    const centralHeader = new ArrayBuffer(46);
    const centralView = new DataView(centralHeader);
    centralView.setUint32(0, 0x02014b50, true);
    centralView.setUint16(4, 20, true);
    centralView.setUint16(6, 20, true);
    centralView.setUint16(8, 0, true);
    centralView.setUint16(10, 0, true);
    centralView.setUint16(12, 0, true);
    centralView.setUint16(14, 0, true);
    centralView.setUint32(16, checksum, true);
    centralView.setUint32(20, contentBytes.length, true);
    centralView.setUint32(24, contentBytes.length, true);
    centralView.setUint16(28, nameBytes.length, true);
    centralView.setUint16(30, 0, true);
    centralView.setUint16(32, 0, true);
    centralView.setUint16(34, 0, true);
    centralView.setUint16(36, 0, true);
    centralView.setUint32(38, 0, true);
    centralView.setUint32(42, offset, true);

    centralParts.push(new Uint8Array(centralHeader), nameBytes);
    offset += localBytes.length + nameBytes.length + contentBytes.length;
  });

  const centralDirectoryOffset = fileParts.reduce((sum, part) => sum + part.length, 0);
  const centralDirectorySize = centralParts.reduce((sum, part) => sum + part.length, 0);
  const endRecord = new ArrayBuffer(22);
  const endView = new DataView(endRecord);
  endView.setUint32(0, 0x06054b50, true);
  endView.setUint16(4, 0, true);
  endView.setUint16(6, 0, true);
  endView.setUint16(8, entries.length, true);
  endView.setUint16(10, entries.length, true);
  endView.setUint32(12, centralDirectorySize, true);
  endView.setUint32(16, centralDirectoryOffset, true);
  endView.setUint16(20, 0, true);

  const archiveParts = [...fileParts, ...centralParts, new Uint8Array(endRecord)];
  const totalLength = archiveParts.reduce((sum, part) => sum + part.length, 0);
  const archive = new Uint8Array(totalLength);
  let position = 0;
  archiveParts.forEach((part) => {
    archive.set(part, position);
    position += part.length;
  });
  return archive;
}

function buildDocxDocumentXml() {
  const paragraphs = collectDocxParagraphs();
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<w:document xmlns:wpc="http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:m="http://schemas.openxmlformats.org/officeDocument/2006/math" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:wp14="http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing" xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing" xmlns:w10="urn:schemas-microsoft-com:office:word" xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:w14="http://schemas.microsoft.com/office/word/2010/wordml" xmlns:wpg="http://schemas.microsoft.com/office/word/2010/wordprocessingGroup" xmlns:wpi="http://schemas.microsoft.com/office/word/2010/wordprocessingInk" xmlns:wne="http://schemas.microsoft.com/office/word/2006/wordml" xmlns:wps="http://schemas.microsoft.com/office/word/2010/wordprocessingShape" mc:Ignorable="w14 wp14">\n  <w:body>\n    ${paragraphs.join("\n    ")}\n    <w:sectPr>\n      <w:pgSz w:w="12240" w:h="15840"/>\n      <w:pgMar w:top="720" w:right="720" w:bottom="720" w:left="720" w:header="0" w:footer="0" w:gutter="0"/>\n    </w:sectPr>\n  </w:body>\n</w:document>`;
}

function createDocxBlob() {
  const created = new Date().toISOString();
  const files = [
    {
      name: "[Content_Types].xml",
      data: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">\n  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>\n  <Default Extension="xml" ContentType="application/xml"/>\n  <Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>\n  <Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/>\n  <Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/>\n  <Override PartName="/docProps/app.xml" ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml"/>\n</Types>`,
    },
    {
      name: "_rels/.rels",
      data: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">\n  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>\n  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/>\n  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties" Target="docProps/app.xml"/>\n</Relationships>`,
    },
    { name: "word/document.xml", data: buildDocxDocumentXml() },
    {
      name: "word/styles.xml",
      data: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">\n  <w:docDefaults>\n    <w:rPrDefault>\n      <w:rPr>\n        <w:rFonts w:ascii="Calibri" w:hAnsi="Calibri" w:cs="Calibri"/>\n        <w:sz w:val="20"/>\n        <w:szCs w:val="20"/>\n      </w:rPr>\n    </w:rPrDefault>\n    <w:pPrDefault>\n      <w:pPr>\n        <w:spacing w:after="80"/>\n      </w:pPr>\n    </w:pPrDefault>\n  </w:docDefaults>\n  <w:style w:type="paragraph" w:default="1" w:styleId="Normal">\n    <w:name w:val="Normal"/>\n    <w:qFormat/>\n  </w:style>\n  <w:style w:type="paragraph" w:styleId="Title">\n    <w:name w:val="Title"/>\n    <w:rPr><w:b/><w:sz w:val="40"/></w:rPr>\n  </w:style>\n</w:styles>`,
    },
    {
      name: "docProps/core.xml",
      data: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:dcmitype="http://purl.org/dc/dcmitype/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">\n  <dc:title>John Nesnidal Tailored Resume</dc:title>\n  <dc:creator>MatchCraft</dc:creator>\n  <cp:lastModifiedBy>MatchCraft</cp:lastModifiedBy>\n  <dcterms:created xsi:type="dcterms:W3CDTF">${created}</dcterms:created>\n  <dcterms:modified xsi:type="dcterms:W3CDTF">${created}</dcterms:modified>\n</cp:coreProperties>`,
    },
    {
      name: "docProps/app.xml",
      data: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties" xmlns:vt="http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes">\n  <Application>MatchCraft</Application>\n</Properties>`,
    },
  ];

  return new Blob([createZipBlob(files)], {
    type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  });
}

function pdfSafeText(value) {
  return String(value)
    .replace(/[–—]/g, "-")
    .replace(/[‘’]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/•/g, "-")
    .replace(/[^\x20-\x7e]/g, "");
}

function pdfEscape(value) {
  return pdfSafeText(value)
    .replace(/\\/g, "\\\\")
    .replace(/\(/g, "\\(")
    .replace(/\)/g, "\\)");
}

function createTextPdfDocument() {
  const pageWidth = 612;
  const pageHeight = 792;
  const marginX = 36;
  const topY = 760;
  const bottomY = 28;
  const contentWidth = pageWidth - marginX * 2;
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  function textWidth(text, font, size) {
    const weight = font === "F2" ? "700" : "400";
    const style = font === "F3" ? "italic" : "normal";
    context.font = `${style} ${weight} ${size}px Arial`;
    return context.measureText(pdfSafeText(text)).width;
  }

  function wrapText(text, width, font, size) {
    const words = pdfSafeText(text).trim().split(/\s+/).filter(Boolean);
    const lines = [];
    let line = "";
    words.forEach((word) => {
      const candidate = line ? `${line} ${word}` : word;
      if (line && textWidth(candidate, font, size) > width) {
        lines.push(line);
        line = word;
      } else {
        line = candidate;
      }
    });
    if (line) lines.push(line);
    return lines.length ? lines : [""];
  }

  function layout(scale) {
    const commands = [];
    let y = topY;
    const addText = (text, x, baseline, font, size) => {
      commands.push(
        `BT /${font} ${size.toFixed(2)} Tf 1 0 0 1 ${x.toFixed(2)} ${baseline.toFixed(2)} Tm (${pdfEscape(text)}) Tj ET`,
      );
    };
    const addWrapped = (
      text,
      x,
      width,
      font = "F1",
      size = 8.5,
      lineHeight = 10.4,
      indent = 0,
    ) => {
      const lines = wrapText(text, width - indent, font, size * scale);
      lines.forEach((line, index) => {
        addText(line, x + (index ? indent : 0), y, font, size * scale);
        y -= lineHeight * scale;
      });
    };
    const addTwoColumn = (left, right, font, size, lineHeight) => {
      const rightWidth = textWidth(right, font, size * scale);
      const maxLeftWidth = contentWidth - rightWidth - 18;
      const leftLines = wrapText(left, maxLeftWidth, font, size * scale);
      leftLines.forEach((line, index) => {
        addText(line, marginX, y, font, size * scale);
        if (index === 0 && right) {
          addText(right, pageWidth - marginX - rightWidth, y, font, size * scale);
        }
        y -= lineHeight * scale;
      });
    };
    const renderNode = (node) => {
      if (node.nodeType !== Node.ELEMENT_NODE) return;
      const tag = node.tagName.toLowerCase();

      if (tag === "div") {
        [...node.children].forEach(renderNode);
        return;
      }
      if (tag === "h1") {
        const text = node.textContent.trim();
        const size = 18 * scale;
        y -= 2 * scale;
        addText(text, (pageWidth - textWidth(text, "F2", size)) / 2, y, "F2", size);
        y -= 18 * scale;
        return;
      }
      if (node.classList.contains("resume-contact")) {
        const text = node.textContent.trim();
        const size = 8 * scale;
        addText(text, (pageWidth - textWidth(text, "F1", size)) / 2, y, "F1", size);
        y -= 11 * scale;
        return;
      }
      if (tag === "h2") {
        y -= 4 * scale;
        const note = node.querySelector(".projects-note");
        const heading = [...node.childNodes]
          .filter((child) => child.nodeType === Node.TEXT_NODE)
          .map((child) => child.textContent)
          .join("")
          .trim()
          .toUpperCase();
        addText(heading, marginX, y, "F2", 9.5 * scale);
        if (note) {
          const noteText = note.textContent.trim();
          const noteX = marginX + textWidth(`${heading} `, "F2", 9.5 * scale);
          addText(noteText, noteX, y, "F1", 6.8 * scale);
        }
        y -= 2.5 * scale;
        commands.push(
          `q 0 G 0.8 w ${marginX} ${y.toFixed(2)} m ${pageWidth - marginX} ${y.toFixed(2)} l S Q`,
        );
        y -= 9 * scale;
        return;
      }
      if (tag === "h3") {
        const spans = node.querySelectorAll(":scope > span");
        addTwoColumn(
          spans[0]?.textContent.trim() || node.textContent.trim(),
          spans[1]?.textContent.trim() || "",
          "F2",
          8.5,
          10,
        );
        return;
      }
      if (node.classList.contains("subline")) {
        const spans = node.querySelectorAll(":scope > span");
        addTwoColumn(
          spans[0]?.textContent.trim() || node.textContent.trim(),
          spans[1]?.textContent.trim() || "",
          "F3",
          8.1,
          9.5,
        );
        return;
      }
      if (tag === "ul") {
        [...node.querySelectorAll(":scope > li")].forEach((item) => {
          const size = 8.3 * scale;
          const lines = wrapText(item.textContent.trim(), contentWidth - 13, "F1", size);
          lines.forEach((line, index) => {
            if (index === 0) addText("-", marginX + 2, y, "F1", size);
            addText(line, marginX + 13, y, "F1", size);
            y -= 9.7 * scale;
          });
        });
        y -= 1.5 * scale;
        return;
      }
      if (tag === "p") {
        if (node.classList.contains("skills-line")) {
          const label = node.querySelector("strong")?.textContent.trim() || "";
          const value = node.querySelector("span")?.textContent.trim() || "";
          const size = 8.25 * scale;
          const labelWidth = textWidth(`${label} `, "F2", size);
          const lines = wrapText(value, contentWidth - labelWidth, "F1", size);
          lines.forEach((line, index) => {
            if (index === 0) addText(label, marginX, y, "F2", size);
            addText(line, marginX + (index === 0 ? labelWidth : 0), y, "F1", size);
            y -= 9.6 * scale;
          });
        } else {
          addWrapped(node.textContent.trim(), marginX, contentWidth);
        }
        return;
      }
    };

    [...elements.resumePreview.children].forEach(renderNode);
    return { commands, fits: y >= bottomY, finalY: y, scale };
  }

  let minimumScale = 0.72;
  let maximumScale = 1.35;
  let rendered = layout(minimumScale);
  if (!rendered.fits) {
    throw new Error("The resume could not be fitted into a one-page text PDF.");
  }

  for (let iteration = 0; iteration < 16; iteration += 1) {
    const candidateScale = (minimumScale + maximumScale) / 2;
    const candidate = layout(candidateScale);
    if (candidate.fits) {
      rendered = candidate;
      minimumScale = candidateScale;
    } else {
      maximumScale = candidateScale;
    }
  }

  const stream = [
    `% Layout scale ${rendered.scale.toFixed(4)}, bottom ${rendered.finalY.toFixed(2)}`,
    ...rendered.commands,
  ].join("\n");
  const objects = [
    "<< /Type /Catalog /Pages 2 0 R >>",
    "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
    `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${pageWidth} ${pageHeight}] /Resources << /Font << /F1 4 0 R /F2 5 0 R /F3 6 0 R >> >> /Contents 7 0 R >>`,
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>",
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>",
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Oblique /Encoding /WinAnsiEncoding >>",
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

function createTextPdfBlob() {
  return new Blob([createTextPdfDocument()], { type: "application/pdf" });
}

elements.printButton.addEventListener("click", () => {
  elements.resumeSection.classList.add("is-fitting");
  const resumeFits = fitResumeToPage();
  elements.resumeSection.classList.remove("is-fitting");
  if (!resumeFits) {
    showToast("Print blocked: the edited resume does not fit on one page");
    return;
  }
  try {
    const title = elements.targetTitle.value
      .trim()
      .replace(/[^a-z0-9]+/gi, "-")
      .replace(/^-|-$/g, "");
    const link = document.createElement("a");
    link.href = URL.createObjectURL(createTextPdfBlob());
    link.download = `John-Nesnidal-${title || "Tailored-Resume"}.pdf`;
    link.click();
    URL.revokeObjectURL(link.href);
    showToast("Selectable-text PDF downloaded");
  } catch (error) {
    showToast(error.message);
  }
});
