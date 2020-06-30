import React from 'react';
import './Experiences.css';

function Experiences() {
    return (
        <div className="experiences">
            <div className="experiences__title">
                <p>Experiences</p>
            </div>
            <div className="experiences__name">
                <p>ETL Developer - ITAÚ UNIBANCO - Intern (07/2019 - 01/2020)</p>
            </div>
            <div className="experiences__description">
                <p>Developer of ETL tools for automating financial activities, working in all stages of software development (planning, mapping business rules, development, documentation, user manual, deployment, post-deployment)</p>
                <p><span>Main Tools:</span> Alteryx, Excel, SQL, Hadoop, Agile Methodologies</p>
            </div>
        </div>
    );
}

export default Experiences;