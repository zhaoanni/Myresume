import './works.css';
import bg1 from '../assets/bg1.jpg';
import bg2 from '../assets/bg2.jpg';
import bg3 from '../assets/bg3.jpg';
import bg4 from '../assets/bg4.jpg';
import React, { useState, useEffect } from 'react';
import { workinfos } from '../data/workdata';
export default function Works() {
    const worklist = ['All', 'Concept', 'Design', 'Life'];
    const [showWork, setShowWork] = useState(workinfos);
    const handleConceptClick = () => {
        setShowWork(workinfos.filter(work => work.style.includes('Concept')));
      };
    const handleLifeClick = () => {
        setShowWork(workinfos.filter(work => work.style.includes('Life')));
    }
    const handleDesignClick = () => {
        setShowWork(workinfos.filter(work => work.style.includes('Design')));
    }
    const handleAllClick =() => {
        setShowWork(workinfos);
    }

    const [selectedIndex, setSelectedIndex] = useState(null);
    const handleClick = (index) => {
        setSelectedIndex(selectedIndex === index ? null : index);
      };



    return (
        <div className='infos works'>
            <h2>Portfolio</h2>
            <div className='worksName'>
                <ul>
                    <li onClick={handleAllClick}>All</li>
                    <li onClick={handleDesignClick}>Design</li>
                    <li onClick={handleConceptClick}>Concept</li>
                    <li onClick={handleLifeClick}>Life</li>
                </ul>
            </div>
            <div className='workInfos'>
                <ul>
                    {showWork.map((item, index) => (
                        <li key={index} className="workItem">
                            <img src={item.image} alt={item.name}
                              className={`workimg ${selectedIndex === index ? 'bigimg' : ''}`}
                              onClick={()=> handleClick(index)}
                             />
                            <div className="workDetails">
                                <h3>{item.name}</h3>
                                <p className='itemdes'>{item.description}</p>
                                {/* <p>Design by {item.time} year</p> */}
                                <p>{item.style[1]}</p>

                            </div>
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    );
}
