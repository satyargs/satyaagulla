import { Target, Zap, Cpu } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './About.css';

const About = () => {
  const { summary } = portfolioData.about;

  return (
    <section className="section about" id="about">
      <div className="container">
        <h2 className="section-title">
          About <span>Me</span>
        </h2>
        
        <div className="about-content">
          <div className="about-text glass">
            <p>{summary}</p>
            
            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-icon">
                  <Zap size={24} />
                </div>
                <div>
                  <h3>Performance Tuning</h3>
                  <p>Ensuring systems can handle massive scale.</p>
                </div>
              </div>
              
              <div className="highlight-item">
                <div className="highlight-icon">
                  <Cpu size={24} />
                </div>
                <div>
                  <h3>AI Automation</h3>
                  <p>Streamlining complex manual workflows.</p>
                </div>
              </div>
              
              <div className="highlight-item">
                <div className="highlight-icon">
                  <Target size={24} />
                </div>
                <div>
                  <h3>Problem Solving</h3>
                  <p>Identifying bottlenecks and optimizing.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-visual">
            <div className="visual-box glass">
              <div className="code-header">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <pre className="code-content">
                <code>
{`class PerformanceEngineer {
  constructor() {
    this.name = "Satya Agulla";
    this.role = "Performance Test Engineer";
    this.passion = "AI Automation";
  }

  optimizeSystem() {
    return "Scalability & Reliability Achieved";
  }

  automateWorkflow() {
    return "Efficiency Increased by 60%";
  }
}`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
