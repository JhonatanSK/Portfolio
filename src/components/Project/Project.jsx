import React from 'react';
import './Project.css';
import Carousel from 'react-elastic-carousel';

import data from '../../data/data.json';

function Project() {
    const allProjects = data.projects
    let id = 1;
    const project = allProjects.filter((project) => project.id === id);

    let images = project[0].photos.map(photo => (
        <div className="project__img">
            <img src="../../assets/photos/prettystyle/a.jpg" alt={photo.name}/>
        </div>
    ));

    const responsive = [
        { width: 500, itemsToShow: 1 },
        { width: 620, itemsToShow: 3 },
        { width: 1024, itemsToShow: 4 },
        { width: 1200, itemsToShow: 5 },
        { width: 1500, itemsToShow: 5 },
    ]

    return (
        <div className="project">
            <div className="project__title">
                <p>{project[0].name}</p>
            </div>
            <div className="project__description">
                <p>{project[0].description}</p>
            </div>
            <div className="project__info">
                { project[0].tecnologies.length > 0 
                    ? <p className="project__info-text"><span>Tecnologies: </span>{project[0].tecnologies}</p> : <></> 
                }

                { project[0].patterns.length > 0 
                    ? <p className="project__info-text"><span>Patterns: </span>{project[0].patterns}</p> : <></> 
                }

                { project[0].github.length > 0 
                    ? <p className="project__info-text"><a href={project[0].github} target="_blank">GitHub</a></p> : <></>  
                } 

                { project[0].site.length > 0 
                    ? <p className="project__info-text"><a href={project[0].site} target="_blank">Site</a></p> : <></>  
                } 
            </div>

            <div className="project__images">
            { images.length > 0 ?
                <>
                    <p>Images</p>
                    <div className="project__imgs">
                        <Carousel breakPoints={responsive} >
                            {images}
                        </Carousel>
                    </div>
                </>
                : 
                <></> 
            }
            </div>
        </div>
    );
}

export default Project;