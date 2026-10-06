// ============================================================
// Central content for the site. Edit values here to update the
// website. Everything is typed so mistakes surface early.
//
// Tone: professional and neutral. Internal/proprietary tool
// names are intentionally generalized into impact-focused
// descriptions.
//
// Privacy pass: internal scale metrics (record counts, program
// counts, specific $ / % figures from internal award writeups),
// customer/government-specific references, and granular
// day-to-day process detail have been deliberately omitted or
// kept qualitative. Only publicly verifiable achievements
// (published papers, public grants, media, IEEE service) retain
// hard numbers.
// ============================================================

export const site = {
  name: "Ravi Monani",
  role: "System Design Engineer",
  shortBio:
    "System design engineer specializing in high-performance CPU cores, hardware security, and large-scale validation - bridging industry engineering with academic research.",
  // Update once your domain is connected in Netlify.
  url: "https://www.ravimonani.com",
  photo: "/ravi-monani.jpg",
};

// ------------------------------------------------------------
// Contact + social. Replace placeholders with your real links.
// ------------------------------------------------------------
export const contact = {
  email: "ravimonani@gmail.com",
  location: "Sacramento, California",
  linkedin: "https://www.linkedin.com/in/ravi-monani-391395116",
  // TODO: paste your Google Scholar profile URL.
  googleScholar: "https://scholar.google.com/citations?user=Ravi-Monani",
};

// ------------------------------------------------------------
// Calendly booking. Paste your scheduling link below (e.g.
// "https://calendly.com/your-handle/mentorship"). Leave empty
// to show a graceful email fallback instead of the calendar.
// ------------------------------------------------------------
export const CALENDLY_URL = "https://calendly.com/ravimonani/30min";

// ------------------------------------------------------------
// Navigation (drives the top nav + mobile menu).
// ------------------------------------------------------------
export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Research", href: "/research" },
  { label: "Publications", href: "/publications" },
  { label: "Projects", href: "/projects" },
  { label: "Achievements", href: "/achievements" },
  { label: "Featured", href: "/featured" },
  { label: "Mentoring & Service", href: "/mentoring" },
  { label: "Tech Updates", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

// ------------------------------------------------------------
// Professional summary (neutral, generalized)
// ------------------------------------------------------------
export const summary =
  "Accomplished system design engineer with dual master's degrees and a track record of innovation across industry and academia. I work on next-generation server and client CPU cores, with deep expertise in microcode, silicon security mitigations, and automation that has saved significant engineering cost and time. Earlier, I helped bring up AI inference accelerators and led validation across large-scale data-center clusters. Alongside industry work, I conducted nationally funded research on low-power hardware security, producing FPGA and CMOS demonstrators, peer-reviewed publications, and recognition for advancing secure, energy-efficient systems.";

export const bio: string[] = [
  "I am a system design engineer focused on the parts of modern processors that most people never see: microcode, security mitigations, and the validation infrastructure that keeps complex silicon trustworthy. My work spans owning CPU-core microcode features end to end and building automation that turns weeks of manual effort into minutes.",
  "Before my current work on high-performance CPU cores, I helped bring up AI inference accelerators and led power, performance, and stability validation across large data-center clusters - experiences that shaped how I think about scale, reliability, and customer impact.",
  "My academic research explored chaos-based encryption for resource-constrained devices, supported by national funding. That work produced peer-reviewed publications, FPGA and CMOS demonstrators, and a lasting interest in the intersection of hardware design and security.",
];

// ------------------------------------------------------------
// Headline stats for the home page (generalized, no internal names)
// ------------------------------------------------------------
export const stats: { value: string; label: string }[] = [
  { value: "10+", label: "Years across silicon, validation & research" },
  { value: "IEEE", label: "Senior Member (2025)" },
  { value: "30+", label: "Students mentored & Industry Advisory Council member" },
  { value: "50+", label: "Peer-reviewed manuscripts evaluated for IEEE" },
  { value: "$300K", label: "National Science Foundation research funding" },
];

// ------------------------------------------------------------
// What I do - focus areas (home + about)
// ------------------------------------------------------------
export const focusAreas: { title: string; body: string }[] = [
  {
    title: "CPU Microcode & Core Design",
    body: "Owning CPU-core microcode features end to end - from specification and patch integration to conformance triage and production handoff.",
  },
  {
    title: "Hardware Security",
    body: "Leading validation and release for publicly disclosed processor security advisories and confidential-computing mitigations.",
  },
  {
    title: "Validation Automation",
    body: "Designing automation frameworks and analytics that cut manual effort dramatically and save substantial engineering cost.",
  },
  {
    title: "Research in Secure Hardware",
    body: "Nationally funded research on low-power, chaos-based encryption for IoT - from algorithmic modeling to silicon.",
  },
];

// ------------------------------------------------------------
// Experience
// ------------------------------------------------------------
export type Role = {
  company: string;
  title: string;
  team?: string;
  location: string;
  period: string;
  summary: string;
  points: string[];
};

export const experience: Role[] = [
  {
    company: "Advanced Micro Devices (AMD)",
    title: "Senior System Design Engineer",
    team: "Silicon Core Design & Debug",
    location: "Folsom, CA",
    period: "Dec 2022 - Present",
    summary:
      "Driving next-generation server and client CPU-core development, with ownership of microcode, security validation, and large-scale automation.",
    points: [
      "Contribute to an in-house automation platform that streamlines integration of microcode and firmware images for CPU-core patches, working across firmware and platform teams.",
      "Designed a microcode deployment approach that enables field-issue remediation without firmware re-spins, with verification and sign-off checkpoints built into the standard release process.",
      "Built analytics and traceability tooling that helps synthesize validation focus areas, improving planning efficiency and leadership visibility into coverage.",
      "Contributed to validation and release coordination for publicly disclosed CPU security advisories, helping align readiness across industry partners.",
      "Built an internal CPU-virtualization execution harness that helped isolate pre-tape-out silicon issues and supported rapid fix-and-retest cycles.",
      "Contributed to a shift-left security release process that improves early defect interception and sign-off quality.",
      "Perform deep core debug using disassembly traces, cache-footprint analysis, and low-level hardware debug tooling to root-cause functional, performance, and stability anomalies.",
    ],
  },
  {
    company: "California State University, Long Beach",
    title: "Graduate Research Assistant",
    team: "Electrical Engineering Department",
    location: "Long Beach, CA",
    period: "May 2021 - Jan 2023",
    summary:
      "Nationally funded research on CMOS-based, chaos-driven encryption for on-chip integration with low-power sensors.",
    points: [
      "Conducted proof-of-concept research on CMOS-based security encryption for on-chip integration with sensors, supported by national research funding.",
      "Explored optimization techniques for delay reduction and alternative chaotic oscillator systems to support higher-frequency data with further power and area savings.",
      "Implemented multiple chaotic circuits (Chua's, Lorenz, SprottD, and others) in LTspice and MATLAB to extract power, sensitivity, and design-load characteristics.",
      "Targeted designs onto an FPGA via a model-based hardware toolchain for hardware co-simulation and resource (LUT) utilization measurement.",
      "Prepared low-power circuit designs for foundry fabrication and manufacturing-test validation.",
    ],
  },
  {
    company: "Intel Corporation",
    title: "Software Engineer",
    team: "Data Center Group",
    location: "Bangalore, IN",
    period: "Jun 2018 - Jan 2021",
    summary:
      "Led volume validation and power/performance work for AI inference accelerators and server platforms at scale.",
    points: [
      "Led volume validation at scale for an AI inference product, mimicking customer data-center environments with open-standard server racks and collaborating cross-geo with customer engineers to surface critical issues before release.",
      "Contributed to the power-on team for an AI inference accelerator, executing a critical role in power-on exit.",
      "Owned stress and stability execution for AI workloads across volume nodes and discovered critical stability issues.",
      "Helped design a custom tool providing single-server access to hundreds of nodes through a centralized management system, enabling full automation for volume validation across 300+ nodes.",
      "As power & performance validation lead for server platforms, ran full-life-cycle measurements to meet customer performance-per-watt targets using standard memory, integer, and floating-point workloads.",
      "As automation engineer, designed a centralized, remote power-and-performance validation ecosystem that improved cross-geo co-validation and reduced per-project cost.",
    ],
  },
  {
    company: "Intel Corporation",
    title: "Graduate Intern",
    team: "Data Center Group",
    location: "Bangalore, IN",
    period: "May 2017 - May 2018",
    summary:
      "Server software integration and validation automation, including custom low-cost test hardware.",
    points: [
      "Joined the server software integration team validating internal component integration and evaluating regressions before customer release.",
      "Contributed to an automation framework for multi-domain automation, reducing software release time to customers.",
      "Designed a custom low-cost test fixture using a single-board computer and relay switches to replace expensive automation setups.",
      "Performed hands-on power and performance architecture work on an advanced driver-assistance (ADAS) platform.",
    ],
  },
];

// ------------------------------------------------------------
// Education
// ------------------------------------------------------------
export type Education = {
  school: string;
  degree: string;
  detail: string;
  location: string;
  year: string;
};

export const education: Education[] = [
  {
    school: "California State University, Long Beach",
    degree: "M.S. in Electrical Engineering",
    detail: "",
    location: "Long Beach, CA",
    year: "2022",
  },
  {
    school: "Nirma University",
    degree: "M.Tech in ECE - Embedded Systems",
    detail: "Gold Medalist (1st position)",
    location: "Ahmedabad, IN",
    year: "2018",
  },
  {
    school: "Ahmedabad Institute of Technology",
    degree: "B.E. in Electronics & Communication Engineering",
    detail: "Gujarat Technological University",
    location: "Ahmedabad, IN",
    year: "2016",
  },
];

// ------------------------------------------------------------
// Skills
// ------------------------------------------------------------
export const skillGroups: { title: string; items: string[] }[] = [
  { title: "Programming", items: ["C", "C++", "Assembly", "Python", "Shell"] },
  { title: "Hardware Description", items: ["VHDL", "Verilog"] },
  { title: "Architectures", items: ["x86 CPU cores", "ARM", "8051", "8085"] },
  {
    title: "Operating Systems",
    items: ["Linux", "Windows", "FreeRTOS", "Mbed RTOS", "Micropython"],
  },
  {
    title: "EDA & Design Tools",
    items: ["Cadence Virtuoso", "Vivado", "Simulink / MATLAB", "LTspice", "Microwind"],
  },
  {
    title: "Validation & Debug",
    items: ["Scan / in-target probes", "Disassembly traces", "Grafana", "Docker", "Virtualization"],
  },
];

export const interests: string[] = [
  "Processor architecture and microarchitecture",
  "Hardware security and side-channel resilience",
  "Cache design and bus-interface standards",
  "Low-power CMOS and on-chip security",
  "Power & performance tuning and optimization",
  "Applied machine learning for engineering workflows",
];

// ------------------------------------------------------------
// Research (narrative + areas)
// ------------------------------------------------------------
export const researchSummary =
  "My research centers on making security practical for the smallest, most constrained devices. Supported by national research funding (a grant of approximately $300K), I developed chaos-based encryption architectures for low-power IoT and wearable systems - taking ideas from mathematical models all the way to FPGA and CMOS silicon demonstrators.";

export type ResearchArea = {
  title: string;
  body: string;
};

export const researchAreas: ResearchArea[] = [
  {
    title: "Chaos-Based Hardware Cryptography",
    body: "Designing encryption primitives from chaotic systems (Chua's, Lorenz, SprottD) that provide secure communication with extremely low power and area - suitable for implantable and wearable devices.",
  },
  {
    title: "Low-Power CMOS & FPGA Implementation",
    body: "Translating algorithmic models into synthesized RTL and physical design at 45nm, and validating on FPGA - achieving microwatt-scale power and sub-0.01 mm^2 footprints.",
  },
  {
    title: "Secure Communication for Constrained Devices",
    body: "Analyzing attacks on continuous chaotic communication and developing remedies, including memristor-based transceivers resilient to eavesdroppers and untrusted foundries.",
  },
];

// ------------------------------------------------------------
// Publications
// ------------------------------------------------------------
export type Publication = {
  title: string;
  venue: string;
  date: string;
  description: string;
};

export const externalPublications: Publication[] = [
  {
    title: "Digital IC Design of a 45nm CMOS Chua Encryption Architecture for Resource-Limited Devices",
    venue: "IEEE ISVLSI 2025",
    date: "2025",
    description:
      "A discrete-time Chua chaos-encryption core taken from model to synthesized RTL and 45nm physical design. The pipelined datapath reaches 100 kHz @ 0.9V at 0.486 uW and 0.005 mm^2 (76% utilization) - a lightweight on-chip secure-link primitive for constrained endpoints.",
  },
  {
    title: "Digital IC Design of a 45nm CMOS Chua Encryption Architecture (Poster)",
    venue: "WISE 2024 - Workshop for Women in Hardware & Systems Security",
    date: "2024",
    description:
      "Early prototype of a discrete-time Chua chaotic encryption pipeline, presenting a methodology that bridges algorithmic chaos modeling to a manufacturable low-power IC.",
  },
  {
    title: "Attacks on Continuous Chaos Communication and Remedies for Resource-Limited Devices",
    venue: "ISQED 2023 - International Symposium on Quality Electronic Design",
    date: "2023",
    description:
      "Analyzes vulnerabilities in chaotic encryption for constrained IoT devices and proposes countermeasures against physical and encryption attacks using Chua's equation.",
  },
  {
    title: "Reliable and Secure Memristor-Based Chaotic Communication Against Eavesdroppers and Untrusted Foundries",
    venue: "Discover Internet of Things (Springer)",
    date: "2022",
    description:
      "A memristor-based Chua chaotic transceiver that improves both communication reliability and manufacturing security for constrained wearables and wireless sensors.",
  },
  {
    title: "Implementation of Chaotic Encryption Architecture on FPGA for On-Chip Secure Communication",
    venue: "IEEE IGESSC 2022",
    date: "2022",
    description:
      "A novel encryption architecture for low-power edge devices using chaotic equations, demonstrated through FPGA hardware co-simulation with efficient resource utilization.",
  },
  {
    title: "Master's Thesis - CMOS-Based Encryption Architecture for Implantable & Wearable Devices via Chaotic Equation",
    venue: "California State University, Long Beach",
    date: "2022",
    description:
      "Developed an encryption architecture using Time-Scaling Chaotic Shift Keying based on Chua's system, validated with comprehensive SPICE and FPGA simulations.",
  },
  {
    title: "A Comprehensive Analysis of Chaos-Based Secure Systems",
    venue: "SVCC 2021 - Springer CCIS, vol. 1536",
    date: "2021",
    description:
      "An in-depth examination of chaotic systems (Lorenz, Chua's, SprottD) for secure communication, analyzing power, area, and robustness as alternatives to software-based solutions.",
  },
];

export const presentations: Publication[] = [
  {
    title: "34th Annual Student Research Competition - Presenter",
    venue: "California State University, Long Beach",
    date: "2022",
    description: "Presented chaos-based CMOS encryption architecture on FPGA for secure communication.",
  },
  {
    title: "Western Regional Honors Council Conference - Presenter",
    venue: "University of New Mexico",
    date: "2022",
    description:
      "Selected from 190 submissions to present chaos-based CMOS encryption research with LTspice simulation and FPGA implementation.",
  },
  {
    title: "Silicon Valley Cybersecurity Conference - Presenter",
    venue: "Springer CCIS",
    date: "2021",
    description: "Presented 'Toward CMOS-Based Secure Communication with Low-Power Chaos Implementation.'",
  },
];

export const industryPublications: Publication[] = [
  {
    title: "Automation for Microcode & Firmware Validation",
    venue: "Internal technical conference",
    date: "2025",
    description:
      "Presented an automation framework that reduces manual effort in microcode and firmware validation for CPU-core programs.",
  },
  {
    title: "A Shift-Left Approach to Microcode Validation",
    venue: "Internal technical conference",
    date: "2025",
    description:
      "Presented a re-engineered validation pipeline that improves early defect interception and traceability for security-critical patches.",
  },
  {
    title: "Analytics for Validation Planning & Traceability",
    venue: "Internal technical conference",
    date: "2025",
    description:
      "Presented an analytics approach for validation traceability and automated test-plan synthesis.",
  },
  {
    title: "A Methodology for Zero-Downtime Silicon Workaround Deployment",
    venue: "Internal technical conference",
    date: "2025",
    description:
      "Presented a microcode-based methodology for deploying silicon workarounds without a firmware re-spin.",
  },
  {
    title: "Security-Focused Microcode Validation Practices",
    venue: "Internal technical conference",
    date: "2025",
    description:
      "Presented a multi-tier framework for validating microcode against a range of processor security considerations.",
  },
  {
    title: "Machine Learning for Post-Silicon Failure Triage",
    venue: "Internal technical conference",
    date: "2019",
    description:
      "Presented a machine-learning approach to clustering and triaging post-silicon validation failures.",
  },
  {
    title: "A Methodology for Remote Power & Performance Validation",
    venue: "Internal technical conference",
    date: "2019",
    description:
      "Presented a remote validation methodology enabling multi-site collaboration on platform power and performance testing.",
  },
];

// ------------------------------------------------------------
// Projects (generalized, impact-focused)
// ------------------------------------------------------------
export type Project = {
  title: string;
  category: string;
  description: string;
  impact: string[];
  tags: string[];
};

export const projects: Project[] = [
  {
    title: "Microcode Integration & Validation Automation Platform",
    category: "Automation",
    description:
      "An in-house platform that automates microcode and firmware integration for CPU-core programs, with built-in checks and onboarding for new core patches.",
    impact: [
      "Substantially reduced manual validation effort",
      "Freed up engineering capacity for higher-value work",
      "Improved consistency across releases",
    ],
    tags: ["Python", "CI/CD", "Validation", "Automation"],
  },
  {
    title: "Zero-Downtime Microcode Patch-Data Deployment",
    category: "Silicon Methodology",
    description:
      "A patch-based methodology that deploys silicon workarounds and tuning without a firmware re-spin or reboot.",
    impact: [
      "Reduced remediation cycles from weeks to minutes",
      "Lowered engineering cost of fixing field issues",
      "No firmware re-spin required",
    ],
    tags: ["Microcode", "Silicon", "Methodology"],
  },
  {
    title: "Validation Analytics & Traceability Dashboard",
    category: "Data & Analytics",
    description:
      "An analytics dashboard providing design-to-firmware traceability and automated test-plan synthesis.",
    impact: [
      "Reduced manual planning effort",
      "Improved leadership visibility into validation coverage",
      "Replaced fragmented, manual tracking methods",
    ],
    tags: ["Grafana", "SQL", "Analytics"],
  },
  {
    title: "Shift-Left Security Validation Pipeline",
    category: "Process & Security",
    description:
      "A re-engineered, gated, stakeholder-owned release pipeline with a register-verification framework and expanded regression matrix to intercept defects earlier.",
    impact: [
      "Earlier defect interception",
      "Stronger traceability and accountability",
      "Faster, higher-quality secure-patch delivery",
    ],
    tags: ["Security", "Process", "Validation"],
  },
  {
    title: "CPU Virtualization Execution Harness",
    category: "Pre-Silicon Debug",
    description:
      "An internal harness for CPU-virtualization execution that isolated pre-tape-out silicon issues across multiple hypervisor paths and enabled rapid fix-and-retest cycles.",
    impact: [
      "Earlier silicon-bug detection",
      "Targeted microcode test vectors",
      "Faster retest turnaround",
    ],
    tags: ["Virtualization", "Debug", "Silicon"],
  },
  {
    title: "ML-Based Post-Silicon Failure Triage",
    category: "Machine Learning",
    description:
      "A machine-learning tool for data-center post-silicon validation that clusters failures and extracts signatures to help automate triage.",
    impact: ["Meaningfully reduced manual triage time", "Faster root-cause identification for critical issues"],
    tags: ["Machine Learning", "Validation"],
  },
  {
    title: "Remote Power & Performance Validation Framework",
    category: "Automation",
    description:
      "A unified automation and remote-orchestration framework enabling multi-site co-validation of server platforms.",
    impact: ["Lowered per-project hardware deployment cost", "Enabled multi-site co-validation at scale"],
    tags: ["Automation", "Power & Performance"],
  },
  {
    title: "Chaos-Based Hardware Encryption Core",
    category: "Research",
    description:
      "A discrete-time chaotic encryption core for resource-limited IoT, taken from model to 45nm CMOS and FPGA demonstrators.",
    impact: ["100 kHz @ 0.9V", "0.486 uW power, 0.005 mm^2 area", "Peer-reviewed publications"],
    tags: ["FPGA", "CMOS", "Security", "Research"],
  },
];

// ------------------------------------------------------------
// Achievements
// ------------------------------------------------------------
export type Award = {
  title: string;
  org: string;
  date: string;
  description: string;
};

export const industryRecognition: Award[] = [
  {
    title: "Company-Wide CEO Recognition Award",
    org: "AMD",
    date: "2025",
    description:
      "Top-tier company recognition for exceptional contributions to a major processor product launch, with impact on performance, efficiency, and scalability.",
  },
  {
    title: "Innovation Award - Validation Automation Platform",
    org: "AMD",
    date: "2024",
    description:
      "Recognized by senior leadership for contributions to an automation platform that streamlined firmware integration and reduced manual engineering effort.",
  },
  {
    title: "Innovation Award - Microcode Deployment Methodology",
    org: "AMD",
    date: "2024",
    description:
      "Recognized for a microcode deployment methodology that resolves silicon issues without a firmware re-spin, reducing turnaround time for customers.",
  },
  {
    title: "Recognition - Virtualization Execution & Pre-Silicon Debug",
    org: "AMD",
    date: "2023 - 2024",
    description:
      "Acknowledged for identifying silicon bugs in virtualization execution and providing critical debug support before silicon tape-out, plus mentoring teammates on the tooling.",
  },
  {
    title: "Recognition - Timely Microcode & Firmware Releases",
    org: "AMD",
    date: "2023",
    description:
      "Recognized for contributions to microcode patches and critical firmware releases essential for silicon bring-up and customer deployments.",
  },
  {
    title: "Leadership Award - Large-Scale AI Validation",
    org: "Intel",
    date: "",
    description:
      "Recognized for leading volume validation for major AI customers, managing 300+ nodes of AI inference accelerators through a centralized system.",
  },
  {
    title: "Recognition - AI Silicon Power-On",
    org: "Intel",
    date: "",
    description:
      "Acknowledged for contributions to an AI inference silicon power-on, including feature enabling and customer platform configuration support.",
  },
];

export const academicHonors: Award[] = [
  {
    title: "IEEE Senior Member",
    org: "Institute of Electrical and Electronics Engineers",
    date: "2025",
    description:
      "Elevated to Senior Member grade in recognition of professional accomplishment and technical leadership in processor architecture, hardware security, and post-silicon validation.",
  },
  {
    title: "Nationally Funded Graduate Researcher",
    org: "National Science Foundation project (~$300K)",
    date: "2021",
    description:
      "Selected as a graduate research assistant on a nationally funded project advancing efficient, reliable, and secure chaotic communication for wearable devices.",
  },
  {
    title: "Student Summer Research Award",
    org: "California State University, Long Beach",
    date: "2021",
    description:
      "One of only 34 university-wide recipients, selected on proposal quality and merit to fund chaos-based secure-communication research.",
  },
  {
    title: "Gold Medalist - M.Tech (Embedded Systems)",
    org: "Nirma University",
    date: "2018",
    description:
      "Awarded a Gold Medal for first position in the M.Tech (Embedded Systems) program with the highest cumulative performance index.",
  },
];

// ------------------------------------------------------------
// Featured (media / interviews / recognition)
// Add a `url` to any item to make its title a link.
// ------------------------------------------------------------
export type Media = {
  title: string;
  outlet: string;
  date: string;
  description: string;
  url?: string;
};

export const featured: Media[] = [
  {
    title: "Alumni Spotlight - Laying the Foundation for Secure Hardware Innovation",
    outlet: "CSULB College of Engineering",
    date: "2025",
    description:
      "Featured for pioneering chaos-based encryption architectures for IoT and embedded devices, bridging academic research and industry application in processor security.",
    url: "https://www.csulb.edu/college-of-engineering/article/alumni-spotlight",
  },
  {
    title: "Order Out of Chaos - Using Chaos Theory Encryption to Protect OT and IoT",
    outlet: "SecurityWeek",
    date: "2025",
    description:
      "Featured in a global security publication for nationally funded chaos-encryption research and its relevance to industrial OT/IoT security and low-power cryptography.",
    url: "https://www.securityweek.com/order-out-of-chaos-using-chaos-theory-encryption-to-protect-ot-and-iot/",
  },
  {
    title: "Exemplars in Engineering (webcast)",
    outlet: "California State University",
    date: "2023",
    description:
      "Research collaboration highlighted in a university webcast for laying the groundwork toward on-chip security in future IoT implementations.",
    url: "https://www.calstate.edu/impact-of-the-csu/research/stem-net/Pages/webcasts/csu-exemplars-in-engineering-.aspx",
  },
  {
    title: "Wearables of Tomorrow - Virtual Research Cafe",
    outlet: "California State University",
    date: "2022",
    description:
      "Research contributions referenced in a presentation on future directions in wearable technology and intercampus research collaboration.",
    url: "https://www.calstate.edu/impact-of-the-csu/research/stem-net/Pages/2022-Virtual-Research-Cafe.aspx",
  },
  {
    title: "Researchers Tackle IoT Security",
    outlet: "CSULB College of Engineering",
    date: "2021",
    description:
      "Highlighted contributions to a multidisciplinary team securing wearable computing and IoT devices, supported by national research funding.",
    url: "https://www.csulb.edu/college-of-engineering/article/coe-researchers-tackle-iot-security",
  },
];

// ------------------------------------------------------------
// Mentoring & service
// ------------------------------------------------------------
export type ServiceItem = {
  title: string;
  org: string;
  date: string;
  description: string;
};

export const mentoringStats: { value: string; label: string }[] = [
  { value: "30+", label: "Students mentored" },
  { value: "50+", label: "Manuscripts peer-reviewed" },
  { value: "7+", label: "IEEE journals, conferences & program committees" },
];

export const peerReview: ServiceItem[] = [
  {
    title: "Peer Reviewer - IEEE Access",
    org: "IEEE Access",
    date: "2025 - Present",
    description:
      "Invited repeatedly as an expert reviewer; completed 35+ journal reviews across hardware security, processor architecture, FPGA systems, and cryptographic implementations.",
  },
  {
    title: "Peer Reviewer - IEEE Embedded Systems Letters",
    org: "IEEE Embedded Systems Letters",
    date: "2026",
    description:
      "Invited by the Associate Editor to review multiple submitted manuscripts for the journal's embedded systems and hardware track.",
  },
  {
    title: "Peer Reviewer - IEEE Micro",
    org: "IEEE Micro",
    date: "2026",
    description:
      "Invited reviewer for IEEE Micro, providing technical and editorial feedback on a submitted manuscript.",
  },
  {
    title: "Peer Reviewer - IEEE APCCAS",
    org: "Asia Pacific Conference on Circuits and Systems",
    date: "2026",
    description:
      "Reviewed multiple submitted papers on integrated circuits, digital systems, embedded computing, and hardware design methodologies.",
  },
  {
    title: "Peer Reviewer - IEEE DCAS",
    org: "Dallas Circuits and Systems Conference",
    date: "2025",
    description:
      "Domain-expert reviews of TinyML FPGA pre-distortion and area-efficient filter designs, evaluating optimization and synthesis trade-offs.",
  },
  {
    title: "Technical Program Committee - IEEE IGESSC",
    org: "Green Energy and Smart Systems Conference",
    date: "2022",
    description: "Served as a TPC member reviewing work on enterprise security and network function virtualization.",
  },
  {
    title: "Technical Program Committee - IEEE GESS 2026",
    org: "Green Energy and Sustainable Systems Conference",
    date: "2026",
    description:
      "Serving on the Technical Program Committee; completed reviews for multiple submitted manuscripts in sustainable systems and emerging technologies.",
  },
  {
    title: "Session Chair & Technical Program Committee - IEEE MWSCAS 2026",
    org: "Midwest Symposium on Circuits and Systems",
    date: "2026",
    description:
      "Invited to chair a technical session and serve on the program committee for one of IEEE's flagship Circuits and Systems Society conferences.",
  },
];

export const serviceRoles: ServiceItem[] = [
  {
    title: "Industry Advisory Council Member - Computer Engineering",
    org: "California State University, Sacramento",
    date: "2026 - Present",
    description:
      "Provide industry guidance on curriculum development, workforce readiness, emerging technology trends, and industry-academia collaboration.",
  },
  {
    title: "Industry Advisory Council - Chair Candidate",
    org: "California State University, Sacramento",
    date: "2026",
    description:
      "Nominated as a candidate for Chair of the Industry Advisory Council, representing industry stakeholders and program growth.",
  },
  {
    title: "Graduate Mentor",
    org: "CSULB Graduate Mentor Program",
    date: "2021 - Present",
    description: "Mentored 30+ students, supporting their academic and early-career development.",
  },
  {
    title: "Tutorial Speaker - Post-Silicon Validation & Hardware Security",
    org: "International design automation conference",
    date: "2026",
    description:
      "Selected to present a tutorial on post-silicon validation, system-on-chip security, and performance optimization in modern processors.",
  },
];

// ------------------------------------------------------------
// References (shown on Contact - available on request)
// ------------------------------------------------------------
export type Reference = {
  name: string;
  role: string;
  org: string;
};

export const references: Reference[] = [
  { name: "Available on request", role: "Industry leadership", org: "Semiconductor industry" },
  { name: "Available on request", role: "Faculty mentor", org: "Academia" },
];
