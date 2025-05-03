// import './contact.css';
// import jps from '../assets/jps.jpg'
// export default function Contact() {
//     return (
//         <div className='infos contact'>
//             <h2>Contact</h2>
//             <div className='position'>
//                 <img src={jps} alt="Example" />
//             </div>
//             <h3>Contact Form</h3>
//             <div className='clientinput'>
//                 <input placeholder='full name'></input>
//                 <input placeholder='email'></input>
//             </div>
//             <div className='clientinput'>
//                 <textarea>hello</textarea>
//             </div>
//             <div className='button'>
//                 <button>Send Message</button>
//             </div>

//         </div>
//     )
// }
import './contact.css';
import jps from '../assets/jps.jpg';
import React, { useState } from 'react';

export default function Contact() {

  const [fullName, setFullName] = useState('');
  const [email, setEmail]     = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      alert('Please enter a valid email address.');
      return;
    }

    setFullName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className='infos contact'>
      <h2>Contact</h2>
      <div className='position'>
        <img src={jps} alt="Example" />
      </div>

      <h3>Contact Form</h3>
      <form className='contact-form' onSubmit={handleSubmit}>
        <div className='clientinput'>
          <input
            type="text"
            placeholder='Full Name'
            value={fullName}
            onChange={e => setFullName(e.target.value)}
            required
          />
        </div>

        <div className='clientinput right'>
          <input
            type="email"
            placeholder='Email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>

        <div className='clientext'>

          <textarea
            placeholder='Your Message'
            value={message}
            onChange={e => setMessage(e.target.value)}
            required
          />
        </div>

        <div className='button'>
          <button type="submit">Send Message</button>
        </div>
      </form>
    </div>
  );
}
