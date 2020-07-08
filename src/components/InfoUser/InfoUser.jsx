import React from 'react';
import './InfoUser.css';
import JhonPng from '../../assets/jhon.png';

function InfoUser() {
    return (
        <div className="info-user" id="whoAmI">
            <div className="info-user__title">
                <p className="info-user__title">Who Am I?</p>
            </div>
            {/* <div className="info-user__photo">
                <img src={JhonPng} alt="Jhon" width="100%"/>
            </div> */}
            <div className="info-user__description">
                <p>I am currently studying Computer Science and my focus is to learn and develop projects using the Java language on the back-end using Spring Framework and ReactJS on the front-end.</p>
                <p><span>Skills: </span>Java, JavaScript, HTML, CSS, Bootstrap, ReactJS, React Native, Alteryx, SQL, MySql,
SqlServer, GIT, GitFlow.</p>

            </div>
        </div>
    );
  }

export default InfoUser