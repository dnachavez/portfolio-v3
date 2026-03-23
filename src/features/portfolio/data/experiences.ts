import type { Experience } from "../types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "aeva",
    companyName: "Aeva AI Receptionist",
    positions: [
      {
        id: "1",
        title: "Full Stack Developer",
        employmentPeriod: {
          start: "02.2026",
        },
        employmentType: "Contract",
        icon: "code",
        description: `- Spearheading full stack development of Aeva, an AI-powered phone receptionist serving ~500 clinics and processing 100+ calls daily, working closely with the CTO to build the end-to-end call handling platform using React and Node.js hosted on Heroku; enabling 24/7 automated appointment booking, rescheduling, caller identification, and cancellations across Australia, New Zealand, UK, Ireland, and Canada.
- Architected voice AI integration layer connecting VAPI with custom voice models, conversation flows, real-time transcription, and squad-based assistant routing, Cliniko for practice management, and Twilio for telephony; designed multi-provider telephony architecture supporting 5 country-specific configurations with carrier-level call routing and failover.
- Led strategic initiative to migrate backend services and AI agents from Make.com to code after identifying scalability limitations as customer volume grew; completed notification system migration eliminating 100% of previously widespread missed-notification issues across the customer base.
- Driving integration of additional practice management systems including Splose, Halaxy, and Jane App, expanding platform compatibility and broadening addressable market by an estimated 40%.`,
        skills: [
          "React",
          "Node.js",
          "Heroku",
          "VAPI",
          "Twilio",
          "Cliniko",
          "Make.com",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "goteam",
    companyName: "GoTeam",
    positions: [
      {
        id: "1",
        title: "AI Specialist",
        employmentPeriod: {
          start: "06.2025",
          end: "02.2026",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Led design and rollout of multi-agent AI automation platform across research, analysis, and project management workflows, balancing cost, latency, and reliability constraints to reduce operational load by 70% for cross-functional U.S. client teams.
- Architected n8n-based orchestration engine with intelligent task routing after evaluating event-driven vs schedule-based execution; chose hybrid approach to minimize latency while controlling API costs, eliminating 100% of manual triage.
- Drove model selection for research agents by benchmarking OpenAI's o4-mini vs o3-deep-research, identifying 40% cost savings with o4-mini for routine research while reserving o3-deep-research for complex analysis, cutting research time by 80%.
- Designed financial analysis agent applying custom business validation logic to operational data; traded strict schema enforcement for flexible JSON output to reduce parsing failures by 85%.
- Built comment-triggered automation system that parses natural language inputs to update task metadata; implemented NLP-based intent classification that saved 15+ hours weekly with 95% accuracy.
- Developed document generator agents with memory-equipped processing and curated knowledge banks; chose template-based generation to ensure brand consistency while reducing document cycle time by 90%.
- Designed cross-system data synchronization workflows between project management platforms and external databases; chose Zapier over custom ETL to minimize development burden, improving data consistency by 95%.
- Architected Next.js conversational agents with Supabase backends for goal setting and content publishing; chose Vercel Edge Functions for lower cold-start latency, increasing content output by 100% while maintaining sub-100ms response times.
- Designed bidirectional calendar synchronization system with Power Automate workflow, eliminating 100% of manual calendar duplication and reducing scheduling conflicts by 80%.`,
        skills: [
          "n8n",
          "OpenAI",
          "Next.js",
          "Supabase",
          "Vercel",
          "Zapier",
          "Power Automate",
          "NLP",
        ],
      },
    ],
  },
  {
    id: "framework",
    companyName: "Framework",
    positions: [
      {
        id: "1",
        title: "Founding Engineer",
        employmentPeriod: {
          start: "09.2024",
          end: "03.2025",
        },
        employmentType: "Contract",
        icon: "code",
        description: `- Owned end-to-end design and solo development of AI responder system under ambiguous product requirements, evaluating RAG vs fine-tuning approaches; chose RAG for faster iteration and lower training costs, achieving 92% response accuracy while reducing implementation time by 60%.
- Architected AI Task Manager from zero to production, defining scope and technical strategy without external oversight; chose event-driven architecture over polling-based approach to minimize latency and resource consumption, reducing customer response cycles by 50%.
- Designed serverless infrastructure balancing cost and performance constraints; evaluated Lambda vs ECS Fargate, chose Lambda with concurrent execution limits and dead-letter queues, maintaining 99.9% uptime and cutting infrastructure spend by 40%.
- Identified integration bottleneck risks early in third-party API dependencies; implemented circuit breaker pattern and exponential backoff retry logic, reducing API timeout errors by 85%.
- Drove technical decisions autonomously as sole engineer, establishing design patterns, API contracts, and error handling standards that became foundation for future team scaling.`,
        skills: [
          "RAG",
          "AWS Lambda",
          "Serverless",
          "Event-driven Architecture",
          "API Design",
        ],
      },
    ],
  },
  {
    id: "tolstoy",
    companyName: "Tolstoy",
    positions: [
      {
        id: "1",
        title: "Full Stack Engineer & AI Engineer",
        employmentPeriod: {
          start: "08.2024",
          end: "03.2025",
        },
        employmentType: "Contract",
        icon: "code",
        description: `- Led architecture and rollout of multi-agent AI communication system for interactive video platform serving 10,000+ businesses; implemented parallel agent execution with 2-second timeout SLA, boosting response accuracy by 65% while maintaining sub-3s response times.
- Designed agent orchestration strategy; chose weighted parallel approach with confidence-based ranking, reducing drafting time by 75% and cutting token consumption by 40%.
- Established prompt engineering framework and quantitative evaluation metrics (accuracy, relevance, coherence); introduced systematic A/B testing that improved response quality scores by 40% and task completion rates by 55%.
- Architected unified inbox consolidating 5+ communication channels; chose hybrid pull/push model to balance real-time delivery with API rate limit constraints.
- Re-architected serverless infrastructure; migrated to SQS-based queue system with concurrent Lambda execution, enabling 3x request volume (30k→90k monthly) while maintaining 99.9% uptime.
- Optimized cloud costs by profiling execution patterns and right-sizing resources, cutting infrastructure spend by 20% while reducing p95 latency by 60%.
- Drove Linear API integration to automate task management workflows; designed webhook-triggered automation reducing manual workload by 30%.
- Designed parallel ETL pipeline architecture; chose hybrid batch/streaming approach achieving 250% data throughput improvement.
- Implemented idempotency keys, at-least-once delivery guarantees, and dead-letter queue monitoring, reducing data loss incidents from 12/month to 0.
- Mentored 3 junior engineers through structured onboarding, design reviews, and pair programming; reduced production bugs by 35% and enabled juniors to own features independently within 6 weeks.
- Championed adoption of AI development tools (GitHub Copilot, Claude, Windsurf), reducing development cycle time by 30% across 8-person engineering team.
- Prototyped automated customer onboarding system, reducing average onboarding time from 6 weeks to 3 weeks and improving product activation rate by 40%.
- Architected technical foundation for no-code AI workflow builder using React Flow-based visual editor.`,
        skills: [
          "TypeScript",
          "AWS Lambda",
          "SQS",
          "AI Agents",
          "Linear API",
          "React Flow",
          "ETL",
          "Serverless",
        ],
      },
    ],
  },
  {
    id: "bilis-delivery",
    companyName: "Bilis Delivery",
    positions: [
      {
        id: "1",
        title: "Lead Full Stack Developer",
        employmentPeriod: {
          start: "04.2024",
          end: "12.2025",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Led architecture and development of food delivery platform from concept to production, scaling to 10,000+ orders and 2,000+ users in first year; chose Laravel-based modular monolith with async job processing, maintaining 99.9% uptime during peak traffic.
- Designed real-time order tracking system with WebSocket and fallback to long-polling, integrated Google Maps API with client-side position interpolation to reduce API calls by 60%, cutting customer support inquiries by 50%.
- Architected payment integration supporting multiple methods (COD, credit card, in-app wallet); implemented payment gateway abstraction layer with Laravel Passport OAuth2 and SMS-based OTP, increasing payment success rate by 35%.
- Designed zone-based driver matching algorithm with composite ranking (proximity, vehicle type, availability) and Redis-cached driver state, reducing wait time from 5 minutes to 90 seconds.
- Diagnosed performance bottleneck causing 3.2s page loads; profiled queries with Laravel Telescope, implemented eager loading and strategic indexing with Redis caching, reducing p95 load time to 0.8s (75% improvement).
- Implemented optimistic locking, batch processing with Laravel queues, and atomic database transactions, enabling 100+ concurrent orders during lunch rush without overselling inventory.
- Designed multi-guard authentication supporting 4 user types with distinct permission models using Laravel Passport and custom guards.
- Built granular RBAC system with JSON-configured permissions enabling business team to adjust access across 12+ modules via config without engineering involvement.
- Architected backend as modular monolith using nwidart/laravel-modules with strict module boundaries, reducing code coupling and improving maintainability by 60%.`,
        skills: [
          "Laravel",
          "Redis",
          "WebSocket",
          "Google Maps API",
          "Laravel Passport",
          "Laravel Telescope",
          "MySQL",
          "nwidart/laravel-modules",
        ],
      },
    ],
  },
  {
    id: "develop-kreativity",
    companyName: "Develop Kreativity",
    positions: [
      {
        id: "1",
        title: "Co-Founder & Chief Technology Officer",
        employmentPeriod: {
          start: "11.2023",
          end: "12.2025",
        },
        employmentType: "Full-time",
        icon: "business",
        description: `- Co-founded digital agency from zero to 15+ clients across healthcare, retail, and technology sectors; chose integrated offering (brand strategy, AI automation, software development, UI/UX, content production) to increase deal size and client LTV.
- Directed technical strategy and delivery for 30+ client projects; established standardized project frameworks and reusable components to reduce custom development by 40%, enabling 50% reduction in project timelines while maintaining 95% client satisfaction.
- Built AI automation practice integrating tools into client marketing workflows; chose no-code platforms (Make, Zapier) for speed-to-value, reducing manual client operations by 50% and creating recurring revenue stream representing 30% of agency income.
- Architected technology stack strategy across client engagements; established decision matrix based on technical complexity, timeline, and budget constraints, enabling 20+ clients to scale digital operations 3x.
- Led brand strategy practice, increasing average client engagement by 60% and follower growth by 120% while reducing strategy development time by 50%.
- Established UI/UX design practice with Figma; delivered 25+ redesigns improving average user satisfaction by 45% while reducing design iteration cycles from 4 weeks to 2 weeks.
- Built content production pipeline; produced 100+ brand assets increasing client social engagement by 80% while cutting production time by 35%.
- Drove AI chatbot integration strategy for client lead generation, improving response times by 70% and lead conversion rates by 35%.
- Scaled cross-functional team from 2 co-founders to 10+ developers, designers, and marketers.`,
        skills: [
          "Next.js",
          "Laravel",
          "WordPress",
          "Make",
          "Zapier",
          "Figma",
          "Adobe Creative Suite",
          "AI Automation",
        ],
      },
    ],
  },
  {
    id: "uspf",
    companyName: "University of Southern Philippines Foundation",
    positions: [
      {
        id: "1",
        title: "Full Stack Developer",
        employmentPeriod: {
          start: "07.2023",
          end: "07.2026",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Designed multi-agent AI chat system addressing 40% support request volume in student services; chose LangGraph state-graph pipeline with specialized agents (admissions, registrar, financial), achieving 85% query resolution accuracy and reducing support staff workload by 40%.
- Architected mobile app consolidating 4 separate student services (digital ID, RFID attendance, statement-of-account, payments); chose React Native with REST API integration to Pinnacle ERP, increasing digital service adoption by 35% while reducing IT support requests by 25%.
- Built queue management system serving 500+ students daily with Laravel/Vue.js and real-time WebSocket updates, reducing wait times by 80% from 2-hour average across 6 service offices.
- Developed secure online election platform with MySQL, cryptographic vote hashing and audit trails, enabling 3,000+ voters and reducing counting time from 1 hour to 15 minutes.
- Created digital repository system for 2,000+ theses and research papers; built Laravel-based system with Elasticsearch for advanced search, improving research accessibility by 70%.
- Led PowerEdge R440 server infrastructure upgrade and document management system deployment; chose on-premise with virtualization due to data residency requirements, improving workflow efficiency by 60%.`,
        skills: [
          "LangGraph",
          "React Native",
          "Laravel",
          "Vue.js",
          "Elasticsearch",
          "MySQL",
          "WebSocket",
          "Pinnacle ERP",
        ],
      },
    ],
  },
  {
    id: "mytoolz",
    companyName: "MyToolz",
    positions: [
      {
        id: "1",
        title: "Back End Developer",
        employmentPeriod: {
          start: "07.2021",
          end: "12.2021",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Rebuilt high-traffic Blogger link locker after identifying critical security vulnerability in client-side base64 masking; migrated to externally hosted API with AES encryption and database ID obfuscation, improving security posture by 90% while maintaining sub-200ms response times.
- Implemented strict referrer validation layer; chose HTTP referrer validation with origin verification, reducing unauthorized access by 70% without impacting legitimate traffic.
- Developed multi-purpose PHP API toolkit consolidating validation services (proxy detection, email verification, crypto balances, account checks); designed RESTful interface with rate limiting and caching to handle 10,000+ daily requests with sub-500ms p95 latency.
- Migrated validation logic from third-party APIs to in-house validation, reducing external API dependency by 40%, cutting operational costs by 50%, and improving uptime from 97% to 99.5%.`,
        skills: ["PHP", "AES Encryption", "REST API", "cURL", "Rate Limiting"],
      },
    ],
  },
  {
    id: "education",
    companyName: "Education",
    positions: [
      {
        id: "1",
        title: "University of Southern Philippines Foundation",
        employmentPeriod: {
          start: "2022",
          end: "2026",
        },
        icon: "education",
        description: `- Bachelor of Science in Computer Science (Expected: 2026)
- Thesis: Design and Implementation of a Cloud-Native Artificial Intelligence (AI) Call Center using Amazon Web Services and OpenAI
- Honors: Dean's List (2022 - Present)`,
        skills: ["Computer Science", "AWS", "OpenAI", "Software Engineering"],
      },
    ],
  },
  {
    id: "the-beginning",
    companyName: "Where It All Started",
    positions: [
      {
        id: "1",
        title: "Self-taught Developer",
        employmentPeriod: {
          start: "2016",
          end: "2021",
        },
        icon: "code",
        description: `- Started coding through reverse engineering Android applications, learning Smali bytecode by decompiling APKs and understanding how software works from the inside out.
- Self-taught PHP, Java, and web development using early mobile web builders (WAPKA, WAP, XHTML), building websites and tools from scratch before any formal education.
- Explored cloud infrastructure early on, working with GCP and Windows servers on Azure; learned security fundamentals through dorking and penetration testing tools like Havij.
- Collaborated with developer communities including ZyberPH Developers, Dark Developers, and DDEV Philippines, contributing to projects and learning from peers in the Filipino dev scene.`,
        skills: [
          "PHP",
          "Java",
          "Smali",
          "XHTML",
          "GCP",
          "Azure",
          "Reverse Engineering",
        ],
      },
    ],
  },
]
