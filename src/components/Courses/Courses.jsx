import React from 'react';
import './Courses.css';

function Courses() {
    return (
        <div className="coursesAndCertifications" id="courses">
            <div className="course__title">
                <p>Courses and Certifications</p>
            </div>
            <div className="courses">
                <div className="course">
                    <div className="course__name">
                        <p>AceleraDev React Online - BootCamp - 80h </p>
                    </div>
                    <div className="course__description">
                        <p>An intensive bootcamp focused on front-end development using tools such as ReactJS, React Rooks, Redux, TDD for Front-End development, BEM CSS, Atomic Design, CI/CD and deployment.</p>
                    </div>
                </div>
                <div className="course">
                    <div className="course__name">
                        <p>AceleraDev Java Online - BootCamp - 80h </p>
                    </div>
                    <div className="course__description">
                        <p>An intensive bootcamp focused on development applications using Java language.</p>
                    </div>
                </div>
                <div className="course">
                    <div className="course__name">
                        <p>Academia MasterTech - BootCamp - 120h </p>
                    </div>
                    <div className="course__description">
                        <p>
                            Introduction to HTML programming,
                            CSS, how to build a responsive website, frontend frameworks, versioning tools (git and github) and
                            agile methodologies for the development of the final project.</p>
                    </div>
                </div>
                <div className="course">
                    <div className="course__name">
                        <p>Development Mobile Apps Android - MadCode - 32h </p>
                    </div>
                    <div className="course__description">
                        <p>Introduction to development mobile using Kotlin Language and the main components for the development of Android screens and graphics components.</p>
                    </div>
                </div>
                <div className="awards">
                    <p className="awards__title">Awards</p>
                    <div className="course">
                        <div className="course__name">
                            <p>Hackathon MasterTech + 99jobs - (12/2018) </p>
                        </div>
                        <div className="course__description">
                            <p>1º Place in Hackathon MasterTech + 99jobs </p>
                            <p>Prize: R$:1,000.00 to spend in MasterTech courses </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Courses;