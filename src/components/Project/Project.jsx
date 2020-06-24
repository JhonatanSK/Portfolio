import React from 'react';
import './Project.css';

function Project() {
    return (
        <div className="project">
            <div className="project__title">
                <p> Name Project </p>
            </div>
            <div className="project__description">
                <p>Description Project ..... a big text here</p>
            </div>
            <div className="project__images">
                <p>Images</p>
                <div className="project__imgs">
                    <div className="project__img"></div>
                    <div className="project__img"></div>
                </div>
            </div>
        </div>
    );
}

export default Project;