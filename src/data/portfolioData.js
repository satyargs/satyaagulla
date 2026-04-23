export const portfolioData = {
  hero: {
    name: "Satya Agulla",
    title: "Performance Test Engineer & AI Automation Specialist",
    subtitle: "Improving scalability, performance, and automation to build highly reliable, optimized systems.",
    resumeLink: "#" // To be replaced with actual PDF
  },
  about: {
    summary: "I am a problem solver and performance optimizer with 5+ years of experience bridging the gap between deep performance testing and cutting-edge AI automation. I specialize in building robust, high-performance systems and streamlining workflows using advanced tools and automation techniques."
  },
  skills: [
    {
      category: "Performance Testing",
      items: ["JMeter", "LoadRunner", "API Testing"]
    },
    {
      category: "Automation & AI",
      items: ["n8n", "OpenAI APIs", "Workflow Automation"]
    },
    {
      category: "Monitoring Tools",
      items: ["Grafana", "Performance Tuning", "Log Analysis"]
    },
    {
      category: "DevOps & Cloud",
      items: ["GitHub", "Cloudflare", "CI/CD Integration"]
    }
  ],
  projects: [
    {
      id: 1,
      title: "High-Load E-commerce Testing",
      problem: "The e-commerce platform struggled with scalability during peak traffic, leading to slow load times and checkout failures.",
      approach: "Designed and executed comprehensive load testing scenarios simulating high concurrency to identify bottlenecks in the database and application layers.",
      tools: ["JMeter", "Grafana"],
      results: "Identified key bottlenecks, leading to architecture adjustments that improved response time by 40% and successfully supported 10,000 concurrent users."
    },
    {
      id: 2,
      title: "API Performance Optimization",
      problem: "Microservices APIs exhibited high latency and poor error handling under sustained load.",
      approach: "Conducted rigorous stress and endurance testing on REST APIs, optimizing payload sizes and implementing better error handling strategies.",
      tools: ["Postman", "JMeter"],
      results: "Reduced API latency by 35%, increased throughput, and established a more resilient error recovery system."
    },
    {
      id: 3,
      title: "AI Workflow Automation",
      problem: "The support and operations teams spent excessive time on repetitive, manual tasks and data entry.",
      approach: "Integrated AI-driven workflow automation to handle common queries and data processing pipelines without manual intervention.",
      tools: ["n8n", "OpenAI APIs", "REST APIs"],
      results: "Reduced manual tasks by 60%, significantly improving team efficiency and reducing operational overhead."
    }
  ],
  experience: [
    {
      id: 1,
      role: "AI Automation Intern",
      company: "Hiremystudios",
      period: "Recent",
      description: "Automated business workflows and integrated AI solutions to streamline operations."
    },
    {
      id: 2,
      role: "Performance Test Engineer",
      company: "Neuron Mobility",
      period: "Previous",
      description: "Led performance testing initiatives to ensure the mobility platform's reliability and scalability under load."
    },
    {
      id: 3,
      role: "Associate Support Engineer",
      company: "7-Eleven",
      period: "Previous",
      description: "Provided technical support, diagnosed system issues, and ensured high availability of core services."
    }
  ],
  contact: {
    email: "satyaagulla@outlook.com",
    phone: "9281077768",
    linkedin: "https://linkedin.com/in/satyaagulla", // Placeholder
    github: "https://github.com/satyaagulla" // Placeholder
  }
};
