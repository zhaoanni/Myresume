
import NavBar from "./navbar";
import MeInfo from "./meinfo";
import Resume from "./resume";
import Works from "./works";
import { Blogs } from "./blogs";
import { Design } from "./design";
import Contact from "./contact";
import './maincontent.css';
import './navbar.css';
import './meinfo.css';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';



function Content() {
    const [currentClick, setCurrentClick] = useState(0);
    const components = [<MeInfo />, <Resume />, <Works />, <Blogs />, <Contact />];
    const navigate = useNavigate();
    useEffect(() => {
      navigate('/');
    }, []);

    return (
        <div className="maincontent">
            <NavBar currentClick={currentClick} setCurrentClick={setCurrentClick} />
            <Routes>

                <Route path='' element={components[currentClick]} />

                    <Route path="design" element={<Design />} />
                    {/* <Route path="*" element={<Navigate to="/" />} /> */}

            </Routes>

            {/* {components[currentClick]} */}
        </div>
    );
}

export default Content;
