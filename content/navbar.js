
import './navbar.css';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
// import PersonIcon from '@mui/icons-material/Person';
// import DescriptionIcon from '@mui/icons-material/Description';
// import WorkIcon from '@mui/icons-material/Work';
// import ImportContactsIcon from '@mui/icons-material/ImportContacts';
// import PhotoAlbumIcon from '@mui/icons-material/PhotoAlbum';
function NavBar({ currentClick, setCurrentClick }) {
    const lists = ["ABOUT", "RESUME", "WORKS", "BLOG", "CONTACT"];
    const navigate = useNavigate();
    // const icons = [<PersonIcon />, <DescriptionIcon />, <WorkIcon />, <ImportContactsIcon />, < PhotoAlbumIcon />]
    return (
        <div className='navbar'>
            <ul className='navbutton'>
                {lists.map((list, index) => (
                    <li
                        key={index}
                        onClick={() => {
                            setCurrentClick(index);
                            // navigate(`/${list.toLowerCase()}`);
                            navigate('./');
                        }}
                        className={currentClick === index ? 'chose' : ''}
                    >
                        {/* <p className='icons'>
                            {icons[index]}
                        </p> */}

                        {list}



                    </li>
                ))}
            </ul>
        </div>
    );
}

export default NavBar;
