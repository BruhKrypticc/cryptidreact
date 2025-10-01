import React from 'react';
import './Projects.css';

const Projects = ({ onCardClick }) => {
  const projectData = [
    { game: 'ironbound', logo: 'https://github.com/BruhKrypticc/cryptidgames/blob/main/imgs/ironbound.PNG?raw=true' },
    { game: 'hideout', logo: 'https://github.com/BruhKrypticc/cryptidgames/blob/main/imgs/hideout.PNG?raw=true' },
    { game: 'undershadows', logo: 'https://github.com/BruhKrypticc/cryptidgames/blob/main/imgs/undershadows.PNG?raw=true' },
  ];

  return (
    <section id="projects">
      <div className="projects-title-container">
        <div className="roblox-game-title">ROBLOX GAME</div>
        <h2>PROJECTS</h2>
      </div>
      <div className="projects-container">
        {projectData.map((p, i) => (
          <div
            key={i}
            className="project-card animate-in"
            onClick={() => onCardClick(p.game, p.logo)}
          >
            <img src={p.logo} alt={p.game} className="project-logo" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
