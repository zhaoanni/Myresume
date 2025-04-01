import './meinfo.css';
import React, { useState, useEffect } from 'react';
import bg1 from '../assets/bg1.jpg';

import bg2 from '../assets/bg2.jpg';
import bg3 from '../assets/bg3.jpg';
import bg4 from '../assets/bg4.jpg';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import PresentToAllIcon from '@mui/icons-material/PresentToAll';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

function MeInfo() {
    const images = [bg1, bg2, bg3, bg4];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    useEffect(() => {
        let interval;
        if (!isPaused) {
            interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, 2000);
        }
        return () => clearInterval(interval);
    }, [isPaused]);
    const handleClick = () => {
        setIsPaused(true);
        setTimeout(() => {
            setIsPaused(false);
        }, 5000);
    };
    const handleDotClick = (index) => {
        setCurrentIndex(index);
        handleClick();
    };
    return (
        <div className='infos'>
            <div className='describe'>
                <h3>
                    About me
                </h3>
                <p>
                    I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media.
                    I enjoy turning complex problems into simple, beautiful and intuitive designs.
                </p>

                <p>
                    My job is to build your website so that it is functional and user-friendly but at the same time attractive.
                    Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use.
                    My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.
                </p>

            </div>
            <div className='talent'  >
                <h4> What I am doing</h4>
                <div className='capability'>
                    <div>
                        <ImportantDevicesIcon style={{ fontSize: '40px', margin: '20px 45%' }} />
                        <h3>Web Design</h3>
                        <p>The most modern and high-quality design made at a professional level.</p>
                    </div>
                    <div>
                        <PresentToAllIcon style={{ fontSize: '40px', margin: '20px 45%' }} />
                        <h3>
                            Web Development
                        </h3>

                        <p>
                            High-quality development of sites at the professional level.
                        </p>
                    </div>
                    <div>
                        <CameraAltIcon style={{ fontSize: '40px', margin: '20px 45%' }} />
                        <h3>
                            Photography
                        </h3>
                        <p>
                            I make high-quality photos of any category at a professional level.
                        </p>
                    </div>
                    <div>
                        <PhoneAndroidIcon style={{ fontSize: '40px', margin: '20px 45%' }} />
                        <h3>
                            Mobile Apps
                        </h3>
                        <p>
                            The most modern and high-quality design made at a professional level.
                        </p>
                    </div>
                </div>
            </div>
            <div className='photos'>
                <h4>Testimonials</h4>
                <div className='imgs'>
            
                    <div
                        className='img'
                        style={{
                            backgroundImage: `url(${images[currentIndex]})`,
                             backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            // objectFit: 'cover'

                        }}
                    >
                    </div>

                </div>
                <div className='imgcontrols'>
                    {images.map((_, index) => (
                        <span
                            key={index}
                            onClick={() => handleDotClick(index)}

                            className={currentIndex === index ? 'pick' : ''}
                            style={{
                                backgroundColor: currentIndex === index ? 'blue' : 'grey',
                                cursor: 'pointer'
                            }}
                        ></span>
                    ))}
                </div>
            </div>

        </div>
    )
}
export default MeInfo;
