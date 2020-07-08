import React from 'react';
import './Services.css';
import Lottie from 'react-lottie';
import mobileDesktop from '../../assets/mobile_desktop.json';
import server from '../../assets/server.json';


function Services() {
    return (
        <div className="services" id="services">
            <div className="services__title">
                <p>Services</p>
            </div>
            <div className="services__name">
                <div className="service">
                    <p className="service__title">Front-End Applications</p>
                    <div className="service__gifs">
                        <Lottie
                            options={{
                                loop: true,
                                autoplay: true,
                                animationData: mobileDesktop,
                                rendererSettings: {
                                    preserveAspectRatio: 'xMidYMid slice',
                                }
                            }}
                            heigth={200}
                            width={200}
                        />
                    </div>
                    <p className="service__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod doloribus veniam quisquam sint labore. Praesentium cum minima, facere consectetur nisi nulla ipsam excepturi. Atque quidem cum deleniti tempore quo possimus.</p>
                </div>
                <div className="service">
                    <p className="service__title">Back-End Applications</p>
                    <div className="service__gifs">
                        <Lottie 
                            options={{
                                loop: true,
                                autoplay: true,
                                animationData: server,
                                rendererSettings: {
                                    preserveAspectRatio: 'xMidYMid slice',
                                }
                            }}
                            heigth={200}
                            width={200}
                        />
                    </div>
                    <p className="service__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod doloribus veniam quisquam sint labore. Praesentium cum minima, facere consectetur nisi nulla ipsam excepturi. Atque quidem cum deleniti tempore quo possimus.</p>
                </div>
                <div className="service">
                    <p className="service__title">Mobile Applications</p>
                    <div className="service__gifs">
                        <img src={require('../../assets/mobile-gray.gif')} alt="Mobile" />   
                    </div>
                    <p className="service__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod doloribus veniam quisquam sint labore. Praesentium cum minima, facere consectetur nisi nulla ipsam excepturi. Atque quidem cum deleniti tempore quo possimus.</p>
                </div>
                <div className="service">
                    <p className="service__title">Chatbots</p>
                    <div className="service__gifs">
                        <Lottie 
                            options={{
                                loop: true,
                                autoplay: true,
                                animationData: mobileDesktop,
                                rendererSettings: {
                                    preserveAspectRatio: 'xMidYMid slice',
                                }
                            }}
                            heigth={200}
                            width={200}
                        />
                    </div>
                    <p className="service__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod doloribus veniam quisquam sint labore. Praesentium cum minima, facere consectetur nisi nulla ipsam excepturi. Atque quidem cum deleniti tempore quo possimus.</p>
                </div>
            </div>

        </div>
    );
}

export default Services;