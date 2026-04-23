import { portfolioData } from '../data/portfolioData';
import './Skills.css';

const Skills = () => {
  const { skills } = portfolioData;

  return (
    <section className="section skills" id="skills">
      <div className="container">
        <h2 className="section-title">
          Technical <span>Skills</span>
        </h2>
        
        <div className="skills-grid">
          {skills.map((skillGroup, index) => (
            <div key={index} className="skill-card glass">
              <h3 className="skill-category">{skillGroup.category}</h3>
              <ul className="skill-list">
                {skillGroup.items.map((item, idx) => (
                  <li key={idx} className="skill-item">
                    <span className="skill-dot"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
