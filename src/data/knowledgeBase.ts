export interface ProjectInfo {
  name: string;
  category: string;
  description: string;
  githubUrl: string;
  liveUrl?: string;
  tech: string[];
  highlights: string[];
}

export interface ExperienceInfo {
  title: string;
  organization: string;
  period: string;
  details: string[];
}

export interface EducationInfo {
  degree: string;
  institution: string;
  period: string;
  grade: string;
  location: string;
}

export interface CertificationInfo {
  title: string;
  issuer: string;
  date?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
  description: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
}

export interface PortfolioKnowledge {
  name: string;
  title: string;
  location: string;
  bio: string;
  summary: string;
  contact: ContactInfo;
  education: EducationInfo[];
  experiences: ExperienceInfo[];
  projects: ProjectInfo[];
  certifications: CertificationInfo[];
  skillCategories: SkillCategory[];
  personalDetails: {
    languages: string[];
    hobbies: string[];
  };
}

export const KNOWLEDGE_BASE: PortfolioKnowledge = {
  name: "Mohammed Shahzad",
  title: "AI/ML Engineer | Machine Learning Engineer | AI Engineer",
  location: "Jharkhand, India",
  bio: "Aspiring AI/ML Engineer with hands-on experience building and deploying end-to-end machine learning systems including NLP (RAG, LangChain), Computer Vision (YOLO, OpenCV), and predictive analytics (Scikit-learn, LightGBM). Proficient in Python, deep learning frameworks, model deployment, and cloud platforms (AWS, GCP).",
  summary: "Mohammed Shahzad creates intelligent systems using Python, Machine Learning, Deep Learning, NLP, RAG, Computer Vision, Docker, Flask, and modern web & cloud technologies.",
  
  contact: {
    email: "mdshahzad6202@gmail.com",
    phone: "+91-6207255651",
    location: "Jharkhand, India",
    linkedin: "https://linkedin.com/in/mohammed-shahzad07",
    github: "https://github.com/MdShahzad786-AI",
  },

  education: [
    {
      degree: "Bachelor of Computer Application (BCA)",
      institution: "Srinath University, Jamshedpur",
      period: "2023 – 2026",
      grade: "CGPA: 7.01",
      location: "Jharkhand, India"
    },
    {
      degree: "Senior Secondary – PCM (12th)",
      institution: "Karim City College, Jamshedpur",
      period: "2021 – 2023",
      grade: "Percentage: 76%",
      location: "Jharkhand, India"
    }
  ],

  experiences: [
    {
      title: "Data Science with Gen AI Training",
      organization: "Vizztal Academy",
      period: "20 Feb 2026 to 20 May 2026",
      details: [
        "Completed a 3-month intensive Data Science & Generative AI training program covering ML pipelines, EDA, and model deployment using Python, Pandas, NumPy, and Scikit-learn.",
        "Built and evaluated 5+ ML models across regression and time-series tasks, improving prediction accuracy through feature engineering and hyperparameter tuning.",
        "Successfully delivered the Stock Market Prediction System project, meeting all training objectives and earning an internship completion certificate."
      ]
    },
    {
      title: "Artificial Intelligence Intern",
      organization: "Interns Elite",
      period: "12 July 2025 – 11 Sep 2025",
      details: [
        "Completed a structured 2-month AI internship program, working on 3+ hands-on tasks using Python, Pandas, NumPy, and AI libraries aligned with real-world ML workflows.",
        "Applied Machine Learning techniques including model training, hyperparameter tuning, and evaluation; developed practical problem-solving skills through guided project work.",
        "Completed all assigned project milestones ahead of schedule, strengthening end-to-end AI model development skills."
      ]
    }
  ],

  projects: [
    {
      name: "RAG-Based Document Chatbot",
      category: "Generative AI / RAG Pipeline",
      description: "Built a multi-document-based RAG chatbot enabling natural-language querying across given PDFs, using vector embeddings and ChromaDB for context-aware retrieval.",
      githubUrl: "https://github.com/MdShahzad786-AI/RAG-Based-Document-Chatbot",
      liveUrl: "https://rag-based-document-chatbot.streamlit.app/",
      tech: ["Python", "LangChain", "ChromaDB", "Hugging Face", "Gemini API", "OpenAI API", "Docker", "Streamlit"],
      highlights: [
        "Natural language PDF querying using vector embeddings and ChromaDB.",
        "Containerized with Docker and deployed via Streamlit, cutting manual search time significantly."
      ]
    },
    {
      name: "Stock Market Prediction Using Machine Learning",
      category: "Machine Learning / Forecasting",
      description: "Engineered a stock-trend prediction system using LightGBM and Scikit-learn on historical market data, with feature engineering to boost model accuracy.",
      githubUrl: "https://github.com/MdShahzad786-AI/Stock-market-pridection",
      liveUrl: "https://stockmarketprediction01.streamlit.app/",
      tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "LightGBM", "Streamlit"],
      highlights: [
        "Feature engineering to boost accuracy across historical market datasets.",
        "Interactive Streamlit dashboard for real-time trend visualization and forecasting."
      ]
    },
    {
      name: "Vehicle Number Plate Detection System",
      category: "Computer Vision / Detection",
      description: "Developed a computer vision pipeline to automatically detect and recognize vehicle number plates from images and videos using YOLO and EasyOCR.",
      githubUrl: "https://github.com/MdShahzad786-AI/Vehicle-number-plate-detection",
      liveUrl: "https://vehicle-number-plate-detection0.streamlit.app/",
      tech: ["Python", "OpenCV", "YOLO", "EasyOCR", "Image Processing"],
      highlights: [
        "Automated vehicle identification pipeline across varying lighting and angle conditions."
      ]
    }
  ],

  certifications: [
    {
      title: "Data Science with Generative AI Training",
      issuer: "Vizztal Academy",
      date: "2026"
    },
    {
      title: "AI Training & Internship Program",
      issuer: "Interns Elite",
      date: "2025"
    },
    {
      title: "Gen AI Academy Certification",
      issuer: "Google Cloud & Hack2Skill",
      date: "July 2025"
    },
    {
      title: "Introduction to Generative AI",
      issuer: "Google Cloud",
      date: "Oct 2025"
    }
  ],

  skillCategories: [
    {
      category: "Programming Languages",
      skills: ["Python", "SQL", "C", "C++"],
      description: "Core software engineering, algorithmic logic, and database management."
    },
    {
      category: "ML / DL & Generative AI",
      skills: ["Machine Learning", "Deep Learning", "NLP (RAG, LangChain)", "Computer Vision (YOLO, OpenCV)", "Generative AI", "Statistics"],
      description: "End-to-end ML model development, RAG pipelines, and image detection."
    },
    {
      category: "Data & Libraries",
      skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn"],
      description: "Data analysis, Exploratory Data Analysis (EDA), and numerical computing."
    },
    {
      category: "Frameworks & Tools",
      skills: ["TensorFlow", "PyTorch (basics)", "OpenCV", "LangChain", "Hugging Face", "CI/CD"],
      description: "Deep learning models, NLP pipelines, and computer vision."
    },
    {
      category: "Deployment & Web",
      skills: ["Docker", "Flask", "REST APIs", "Streamlit", "Git & GitHub"],
      description: "Model containerization, microservice APIs, and web deployment."
    },
    {
      category: "Cloud Platforms",
      skills: ["AWS", "GCP", "Azure", "Google Firebase"],
      description: "Multi-cloud hosting and backend infrastructure."
    },
    {
      category: "Development Tools",
      skills: ["Jupyter Notebook", "Google Colab", "Microsoft Office", "Claude Code", "Cursor", "GitHub Copilot"],
      description: "Agentic development tools, notebooks, and IDEs."
    }
  ],

  personalDetails: {
    languages: ["English", "Hindi"],
    hobbies: ["Learning AI tools", "Exploring new tech", "Playing Football"]
  }
};
