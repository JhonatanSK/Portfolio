import React from 'react';
import './Services.css';
import Lottie from 'react-lottie';
import mobileDesktop from '../../assets/mobile_desktop.json';
import server from '../../assets/server.json';


function Services() {
    return (
        <div className="services">
            <div className="services__title">
                <p>Services</p>
            </div>
            <div className="services__name">
                <p>Front-End Applications</p>
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
                <p>Back-End Applications</p>
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
                <p>Mobile Applications</p>
                {/* <Lottie
                    options={{
                        loop: true,
                        autoplay: true,
                        animationData: mobile,
                        rendererSettings: {
                            preserveAspectRatio: 'xMidYMid slice',
                        }
                    }}
                    heigth={300}
                    width={300}
                /> */}
                <img src={require('../../assets/mobile-gray.gif')} alt="Mobile" />
                <p>Chatbots</p>
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

        </div>
    );
}

export default Services;