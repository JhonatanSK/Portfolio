import React from 'react';
import './InfoUser.css';
import JhonPng from '../../assets/jhon.png';

function InfoUser() {
    return (
        <div className="info-user">
            <div className="info-user__title">
                <p className="info-user__title">Who Am I?</p>
            </div>
            <div className="info-user__photo">
                <img src={JhonPng} alt="Jhon" width="100%"/>
            </div>
            <div className="info-user__description">
                <p>A FullStack developer ..... a big text here</p>
            </div>
        </div>
    );
  }

export default InfoUser