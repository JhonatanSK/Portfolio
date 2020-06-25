import React from 'react';
import './Formation.css';

function Formation() {
    return (
        <div className="formation">
            <div className="formation__title">
                <p>Academic Formation</p>
            </div>
            <div className="formation__name">
                <p>Computer Science - Universidade São Judas Tadeu - (2018 - 2022)</p>
            </div>
            <div className="formation__description">
                <p className="formation__description-title">Awards and Activities</p>
                <p className="formation__description-name">Agricultural Management System</p>
                <p className="formation__description-text">Honorable mention for the development of the Agricultural Management System presented at Expo São Judas 2019/2 using the concepts of Software Engineering.</p>
                <p className="formation__description-name">PrettyStyle</p>
                <p className="formation__description-text">Honorable mention for the development of the E-Commerce PrettyStyle presented at Expo São Judas 2020/1.</p>
            </div>
        </div>
    );
}

export default Formation;