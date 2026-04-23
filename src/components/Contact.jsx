import { Mail, Phone, Globe, Code2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './Contact.css';

const Contact = () => {
  const { contact } = portfolioData;

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <h2 className="section-title">
          Let's Work <span>Together</span>
        </h2>
        
        <div className="contact-container glass">
          <div className="contact-info">
            <p className="contact-intro">
              I'm always open to discussing new opportunities, performance testing strategies, and AI automation workflows. Let's connect!
            </p>
            
            <div className="contact-links">
              <a href={`mailto:${contact.email}`} className="contact-link">
                <div className="contact-icon">
                  <Mail size={20} />
                </div>
                <span>{contact.email}</span>
              </a>
              
              <a href={`tel:${contact.phone}`} className="contact-link">
                <div className="contact-icon">
                  <Phone size={20} />
                </div>
                <span>{contact.phone}</span>
              </a>
              
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">
                <div className="contact-icon">
                  <Globe size={20} />
                </div>
                <span>LinkedIn Profile</span>
              </a>
              
              <a href={contact.github} target="_blank" rel="noopener noreferrer" className="contact-link">
                <div className="contact-icon">
                  <Code2 size={20} />
                </div>
                <span>GitHub Profile</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
