import { Briefcase } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './Experience.css';

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section className="section experience" id="experience">
      <div className="container">
        <h2 className="section-title">
          Work <span>Experience</span>
        </h2>
        
        <div className="timeline">
          {experience.map((exp, index) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-dot">
                <Briefcase size={16} />
              </div>
              
              <div className="timeline-content glass">
                <div className="timeline-header">
                  <h3>{exp.role}</h3>
                  <span className="timeline-period">{exp.period}</span>
                </div>
                <h4 className="timeline-company">{exp.company}</h4>
                <p className="timeline-desc">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
