import React, { useState, useEffect } from "react";
import "./Footer.css";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-logo-section">
            <div className="footer-logo">
            </div>
            <p className="footer-description">
              Full-Stack Developer bringing ideas to life through creativity and code. Thanks for visiting — I'm really happy to have you here!
            </p>
          </div>
          
          <div className="footer-links">
            <div className="footer-section">
              <h4 className="footer-section-title">Navigation</h4>
              <ul className="footer-link-list">
                <li><a href="#Home" className="footer-link">Home</a></li>
                <li><a href="#AboutMe" className="footer-link">About</a></li>
                <li><a href="#Resume" className="footer-link">Resume</a></li>
                <li><a href="#Projects" className="footer-link">Projects</a></li>
                <li><a href="#Contact" className="footer-link">Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4 className="footer-section-title">Projects</h4>
              <ul className="footer-link-list">
                <li><a href="https://github.com/KseniiaLk/e-wallet" className="footer-link" target="_blank" rel="noopener noreferrer">E-wallet</a></li>
                <li><a href="https://github.com/KseniiaLk/RestAPICV" className="footer-link" target="_blank" rel="noopener noreferrer">RestAPICV</a></li>
                <li><a href="https://github.com/KseniiaLk/WealthSpecialists" className="footer-link" target="_blank" rel="noopener noreferrer">WealthSpecialists</a></li>
                <li><a href="https://play.stryda.gg/home" className="footer-link" target="_blank" rel="noopener noreferrer">BattlePass</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4 className="footer-section-title">Connect</h4>
              <ul className="footer-link-list">
                <li><a href="mailto:kseniia.lukanina@outlook.com" className="footer-link">Email</a></li>
                <li><a href="https://www.linkedin.com/in/kseniia-lukanina/" className="footer-link" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="https://github.com/KseniiaLk" className="footer-link" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-social">
          <div className="footer-social-links">
            <a href="https://www.linkedin.com/in/kseniia-lukanina/" className="footer-social-link" target="_blank" rel="noopener noreferrer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6M6 9H2v12h4zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="https://github.com/KseniiaLk" className="footer-social-link" target="_blank" rel="noopener noreferrer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9 18c-4.51 2-5-2-7-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="mailto:kseniia.lukanina@outlook.com" className="footer-social-link">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p className="footer-location">
            Based in Stockholm, Sweden
          </p>
        </div>
    </div>
    
    {/* Scroll to Top Button */}
    {showScrollTop && (
      <button 
        className="scroll-to-top-btn" 
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 19V5M5 12l7-7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    )}
    </footer>
  );
}