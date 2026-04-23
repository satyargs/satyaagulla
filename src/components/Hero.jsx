import { ArrowRight, Download } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './Hero.css';

const Hero = () => {
  const { name, title, subtitle, resumeLink } = portfolioData.hero;

  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <div className="glow glow-1"></div>
        <div className="glow glow-2"></div>
      </div>
      
      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          <p className="greeting">Hi, I am</p>
          <h1 className="name">{name}</h1>
          <h2 className="title text-gradient">{title}</h2>
          <p className="subtitle">{subtitle}</p>
          
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Projects <ArrowRight size={18} />
            </a>
            <a href={resumeLink} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
              Download Resume <Download size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
