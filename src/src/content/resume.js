import './resume.css';
function Resume() {


    const skills = [
        { name: "Web Design", level: 80 },
        { name: "Graphic Design", level: 75 },
        { name: "Photoshop", level: 90 },
        { name: "Illustrator", level: 50 },
    ];

    return (
        <div className='infos resume'>
            <h2>Resume</h2>
            <div className='eduAndexpe'>
                <h3>Education</h3>
                <ul>
                    <li>
                        <h4>ItLabPro front-end web development bootcamp</h4>
                        <h5>2024 </h5>
                        <p>Systematically studied front-end development.</p>
                    </li>
                    <li>
                        <h4>Codecademy website</h4>
                        <h5>2024 - 2025</h5>
                        <p>I completed an intensive full‑stack web development course and took the initiative to self‑study key technologies—SQL,
                             MongoDB, Python, and TypeScript—to broaden my skill set.</p>
                    </li>
                    <li>
                        <h4>San Leandro Adult School</h4>
                        <h5>2019 - 2020</h5>
                        <p>Completed ESL and Paraeducator Certification</p>
                    </li>
                    <li>
                        <h4>Shaanxi Normal University</h4>
                        <h5>2011 - 2014</h5>
                        <p>Majored in Inorganic Chemistry</p>
                    </li>
                    <li>
                        <h4>China West Normal University</h4>
                        <h5>2007 - 2011</h5>
                        <p>Majored in Chemistry Education</p>
                    </li>
                </ul>

            </div>
            <div className='eduAndexpe'>
                <h3>Experience</h3>
                <ul>
                    <li>
                        <h4>ItLabPro bootcamp</h4>
                        <h5>2024 </h5>
                        <p>Collaborated with classmates to develop an e‑commerce website.</p>
                    </li>


                </ul>
            </div>
            <div className='skillPart'>
                <h3>MY SKILLS</h3>
                <div className='skills'>
                    {/* <div className="label">
                        Web Design
                    </div>
                    <div className='bar-bg'>
                        <div className="bar-fill" style={{ width: '80%' }}>
                            <span className="percentage">80%</span>
                        </div>
                    </div>  */}
                    <div className="skill-bar">
                        {/* <div className="label">Web Design</div> */}
                        <div className="bar-bg">
                            <div className="bar-fill-one" style={{ width: '80%' }}>
                                <div>Web Design</div>
                                <div className="percentage">80%</div>
                            </div>
                        </div>
                    </div>
                    <div className="skill-bar">

                        <div className="bar-bg">
                            <div className="bar-fill-two" style={{ width: '75%' }}>
                                <div className="label">Graphic Design</div>
                                <div className="percentage">75%</div>
                            </div>
                        </div>
                    </div>
                    <div className="skill-bar">
                        <div className="bar-bg">
                            <div className="bar-fill-three" style={{ width: '90%' }}>
                                <div className="label">
                                    Photoshop
                                </div>
                                <div className="percentage">90%</div>
                            </div>
                        </div>
                    </div>
                    <div className="skill-bar">

                        <div className="bar-bg">
                            <div className="bar-fill-four" style={{ width: '50%' }}>
                                <div className="label">Illustrator</div>
                                <div className="percentage">50%</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>


    )
}
export default Resume
