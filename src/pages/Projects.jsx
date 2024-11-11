import React from 'react';

    const projects = [
      {
        image: 'https://via.placeholder.com/250',
        title: 'Project One',
        description: 'A brief description of Project One.',
        link: 'https://github.com/user/project-one'
      },
      {
        image: 'https://via.placeholder.com/250',
        title: 'Project Two',
        description: 'A brief description of Project Two.',
        link: 'https://github.com/user/project-two'
      },
      {
        image: 'https://via.placeholder.com/250',
        title: 'Project Three',
        description: 'A brief description of Project Three.',
        link: 'https://github.com/user/project-three'
      }
    ];

    function Projects() {
      return (
        <div className="content">
          <h1>Projects</h1>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div className="project-card" key={index}>
                <img src={project.image} alt={project.title} />
                <div className="project-card-content">
                  <h2 className="project-card-title">{project.title}</h2>
                  <p className="project-card-description">{project.description}</p>
                  <a href={project.link} className="project-card-link" target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    export default Projects;
