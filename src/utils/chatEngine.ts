import { KNOWLEDGE_BASE } from '../data/knowledgeBase';

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
  suggestedQuestions?: string[];
}

export const STARTER_QUESTIONS = [
  '👨‍💻 Tell me about Mohammed',
  '🧠 What are his AI/ML skills?',
  '🚀 Show me his projects',
  '🤖 Tell me about his RAG chatbot',
  '💼 What experience does he have?',
  '📩 How can I contact him?'
];

export function generateBotResponse(userQuery: string): { text: string; suggestedQuestions?: string[] } {
  // Normalize string for keyword matching
  const q = userQuery.toLowerCase().trim();

  // 1. Tell me about Mohammed
  if (
    q.includes('tell me about mohammed') ||
    q.includes('who is mohammed') ||
    q.includes('who is shahzad') ||
    q.includes('about shahzad') ||
    q.includes('about mohammed') ||
    q.includes('who is he') ||
    q.includes('kaun hai') ||
    q.includes('tell me about')
  ) {
    return {
      text: `Mohammed Shahzad is an aspiring AI/ML Engineer with hands-on experience in Machine Learning, Generative AI, RAG, NLP, and Computer Vision. He enjoys building practical AI applications and has worked on projects involving document-based AI chatbots, stock market prediction, and vehicle number plate detection. His goal is to grow as an AI/ML Engineer and contribute to real-world AI solutions.`,
      suggestedQuestions: [
        '🧠 What are his AI/ML skills?',
        '🚀 Show me his projects',
        '💼 What experience does he have?',
        '📩 How can I contact him?'
      ]
    };
  }

  // 2. What are his AI/ML skills?
  if (
    q.includes('ai/ml skills') ||
    q.includes('skills') ||
    q.includes('tech') ||
    q.includes('programming') ||
    q.includes('python') ||
    q.includes('tool') ||
    q.includes('stack')
  ) {
    return {
      text: `Mohammed has skills in Python, Machine Learning, Deep Learning, NLP, Computer Vision, Generative AI, and Statistics. He works with tools and frameworks such as Scikit-learn, TensorFlow, OpenCV, LangChain, Hugging Face, Pandas, NumPy, and basic PyTorch. He also has experience with Docker, Streamlit, REST APIs, Git, and GitHub.`,
      suggestedQuestions: [
        '🚀 Show me his projects',
        '🤖 Tell me about his RAG chatbot',
        '💼 What experience does he have?'
      ]
    };
  }

  // 3. Show me his projects
  if (
    q.includes('show me his projects') ||
    q.includes('projects') ||
    q.includes('work') ||
    q.includes('portfolio')
  ) {
    return {
      text: `Mohammed has built three main AI/ML projects:\n\n📄 **RAG-Based Document Chatbot:** A chatbot that lets users ask natural-language questions about PDF documents.\n\n📈 **Stock Market Prediction System:** A machine learning application that uses historical stock data and LightGBM for stock-trend prediction and visualization.\n\n🚗 **Vehicle Number Plate Detection System:** A computer vision system that uses YOLO, OpenCV, and EasyOCR to detect vehicle number plates and extract their text.`,
      suggestedQuestions: [
        '🤖 Tell me about his RAG chatbot',
        '🧠 What are his AI/ML skills?',
        '📩 How can I contact him?'
      ]
    };
  }

  // 4. Tell me about his RAG chatbot
  if (
    q.includes('rag chatbot') ||
    q.includes('rag') ||
    q.includes('document chatbot')
  ) {
    return {
      text: `Mohammed built a RAG-Based Document Chatbot that allows users to query multiple PDF documents using natural language. It retrieves relevant information from documents and uses it as context to generate useful answers. The project was built using Python, LangChain, ChromaDB, Hugging Face, Gemini/OpenAI APIs, Docker, and Streamlit.`,
      suggestedQuestions: [
        '🚀 Show me his projects',
        '🧠 What are his AI/ML skills?',
        '📩 How can I contact him?'
      ]
    };
  }

  // 5. What experience does he have?
  if (
    q.includes('experience') ||
    q.includes('internship') ||
    q.includes('training') ||
    q.includes('vizztal') ||
    q.includes('interns elite')
  ) {
    return {
      text: `Mohammed completed a 2-month Artificial Intelligence internship at Interns Elite, where he gained hands-on experience with Python, Machine Learning, model training, hyperparameter tuning, and evaluation. He also completed a 3-month Data Science with Generative AI training program at Vizztal Academy, where he worked on ML pipelines, EDA, feature engineering, model evaluation, and deployment.`,
      suggestedQuestions: [
        '🧠 What are his AI/ML skills?',
        '🚀 Show me his projects',
        '📩 How can I contact him?'
      ]
    };
  }

  // 6. How can I contact him?
  if (
    q.includes('contact') ||
    q.includes('reach') ||
    q.includes('email') ||
    q.includes('linkedin') ||
    q.includes('github') ||
    q.includes('hire')
  ) {
    return {
      text: `You can contact Mohammed through the Contact section of this portfolio or connect with him on LinkedIn and GitHub. He is interested in AI/ML career opportunities and professional collaborations.\n\n- 📧 **Email:** [mdshahzad6202@gmail.com](mailto:mdshahzad6202@gmail.com)\n- 💼 **LinkedIn:** [mohammed-shahzad07](${KNOWLEDGE_BASE.contact.linkedin})\n- 🐙 **GitHub:** [MdShahzad786-AI](${KNOWLEDGE_BASE.contact.github})`,
      suggestedQuestions: [
        '👨‍💻 Tell me about Mohammed',
        '🚀 Show me his projects',
        '💼 What experience does he have?'
      ]
    };
  }

  // Fallback greeting / general response
  return {
    text: `👋 **Hello! I am Mohammed's AI Assistant.**\n\nAsk me anything about Mohammed Shahzad's AI/ML skills, RAG projects, internships, education, or contact details!`,
    suggestedQuestions: STARTER_QUESTIONS
  };
}
