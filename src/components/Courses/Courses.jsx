import React from 'react';
import './Courses.css';

function Courses() {
    return (
        <div className="coursesAndCertifications">
            <div className="course__title">
                <p>Courses and Certifications</p>
            </div>
            <div className="courses">
                <div className="course">
                    <div className="course__name">
                        <p>AceleraDev React Online - BootCamp - 80h </p>
                    </div>
                    <div className="course__description">
                        <p>An intensive bootcamp with focus on ReactJS tecnology .....</p>
                    </div>
                </div>
                <div className="course">
                    <div className="course__name">
                        <p>Academia MasterTech Estação Hack - BootCamp - 120h </p>
                    </div>
                    <div className="course__description">
                        <p>
                            introduction to HTML programming,
                            CSS, how to build a responsive website, frontend frameworks, versioning tools (git and github) and
agile methodologies for the development of the final project.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Courses;