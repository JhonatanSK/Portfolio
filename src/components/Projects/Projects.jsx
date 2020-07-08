import React from 'react';
import './Projects.css';
import Carousel from 'react-elastic-carousel';

import data from '../../data/data.json';


function Projects() {
  const allProjects = data.projects
  const projects = allProjects.map(project => (
      <div className="project__card" key={project.id}>
          <img src="../../assets/photos/prettystyle/a.jpg" alt={project.name}/>
      </div>
  ));

  const responsive = [
      { width: 500, itemsToShow: 1 },
      { width: 650, itemsToShow: 2 },
      { width: 1024, itemsToShow: 4 },
      { width: 1200, itemsToShow: 4 },
      { width: 1500, itemsToShow: 5 },
  ]

  return (
    <div className="projects" id="projects">
        <div className="projects__title">
            <p>Projects</p>
        </div>
        <div className="projects__cards">
            <Carousel breakPoints={responsive}>
                {projects}
            </Carousel>
        </div>
    </div>
  );
}

export default Projects;