import React from 'react';
import './Hero.css';

const Hero = ({ onArrowClick }) => {
  return (
    <section id="hero">
      <div className="title">CRYPTID GAMES</div>
      <div className="fade-container">
        <div className="fade-main">
          <span className="static-text">we are&nbsp;</span>
          <span className="rotating-text">
            <span>devs</span>
            <span>spooky</span>
            <span>cryptic</span>
            <span data-pyrit="true">qold's portfolio</span>
          </span>
        </div>
        <div className="fade-subtext" id="pyritSubtext">and pyrits too!</div>
      </div>
      <button className="arrow-button" onClick={onArrowClick}>↓</button>
    </section>
  );
};

export default Hero;
