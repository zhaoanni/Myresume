import './connectInfo.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import profile from './assets/profile.jpeg';
function ConnectInfo() {
  return (
    <div className="connectInfo">
      <div className='leftPart'>
        <img src={profile}/>

        <div className='leftinfo'>
          <h2>Annie Zhao</h2>
          <p>Creative Director</p>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="icon" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="icon" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="icon" />
            </a>
          </div>

        </div>

      </div>
      <div className='rightPart'>
        <div className='leftconnect'>
          <ul>
            <li><span>EMAIL</span>
              z441609196@gmail.com
            </li>
            <li><span>BIRTHDAY</span>
              05/15
            </li>
          </ul>
        </div>
        <div className='rightconnect'>
          <ul>
            <li><span>PHONE</span>
              (510)-736-9954
            </li>
            <li><span>LOCATION</span>
            San-Francisco,USA
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
}

export default ConnectInfo;
