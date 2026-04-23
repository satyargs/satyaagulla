import { ExternalLink, Database, Activity } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './Projects.css';

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <section className="section projects" id="projects">
      <div className="container">
        <h2 className="section-title">
          Featured <span>Projects</span>
        </h2>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card glass">
              <div className="project-header">
                <div className="project-icon">
                  {project.id === 1 ? <Database size={24} /> : project.id === 2 ? <Activity size={24} /> : <ExternalLink size={24} />}
                </div>
                <h3 className="project-title">{project.title}</h3>
              </div>
              
              <div className="project-body">
                <div className="project-section">
                  <h4>Problem</h4>
                  <p>{project.problem}</p>
                </div>
                
                <div className="project-section">
                  <h4>Approach</h4>
                  <p>{project.approach}</p>
                </div>
                
                <div className="project-section">
                  <h4>Results</h4>
                  <p className="project-results">{project.results}</p>
                </div>
              </div>
              
              <div className="project-footer">
                <div className="project-tools">
                  {project.tools.map((tool, idx) => (
                    <span key={idx} className="tool-tag">{tool}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
