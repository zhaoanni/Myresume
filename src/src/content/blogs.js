import './blogs.css';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { workinfos } from '../data/workdata';
export function Blogs() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/design');
    };
    const [isHovered, setIsHovered] = useState(false);
    const [currentHoverd, setCurrentHovered] = useState(null)
    const mouseEnterHandler = (index)=> {
             setIsHovered(true);
             setCurrentHovered(index)
    }
    // const mouseLeaveHandler
    return (
        <div className='infos blogs'>
            <h2>Blog</h2>
            <div className='border'></div>
            <div className='blogcontainer'>
                <ul>
                    {workinfos.map((item, index) => (

                        <li key={index} className="workItem">
                            <div className='imgscontainer'>
                                <img src={item.image} alt={item.name}
                                    onClick={handleClick}
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}
                                    style={{ opacity: isHovered ? 0.5 : 1, transition: 'opacity 0.3s' }}
                                />
                                <div className="overlaytext">{item.time}</div>
                            </div>

                            <div className="workDetails">
                                <h3>{item.name}</h3>
                                <p className='itemdes'>{item.description}</p>
                                <p>Design by {item.skills?.join(', ')} skills</p>


                            </div>
                        </li>
                    ))}

                </ul>
            </div>
        </div>
    )
}




