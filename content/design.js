
import './design.css';
import React, { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { exitcomments } from '../data/workdata'

export function Design() {
    const [username, setUsername] = useState('');
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState(exitcomments);
    // const [likenumber, setLikeNumber] = useState();
    const [liked, setLiked] = useState({});
    const [commentnumber, setCommentNumber] = useState(exitcomments.length);
    const [posttime, setPostTime] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault();
        setPostTime(new Date().toLocaleDateString());
        if (username.trim() !== '' && comment.trim() !== '' && posttime !=='') {
            setPostTime(new Date().toLocaleDateString());
            const newComment = { username, comment, posttime };
            setComments([...comments, newComment]);
            setUsername('');
            setComment('');
            setPostTime(new Date().toLocaleDateString());
            setCommentNumber(commentnumber + 1);
        }
    };
    const toggleLike = (index) => {
        setLiked((prevLiked) => ({
            ...prevLiked,
            [index]: !prevLiked[index],
        }));
    };



    return (
        <div className="infos design">
            <h2>Cover letter</h2>
            <p className='lettercontent'>&nbsp;&nbsp;&nbsp;&nbsp;Hello,
                I am excited to apply for a position in software development, a field I am truly passionate about. Although my academic background is in chemistry —
                I earned a Master’s degree in China — I have made a dedicated transition into programming.

                To pursue this new direction, I completed a coding bootcamp where I gained hands-on experience
                with various programming languages and frameworks. I am also continuing to strengthen my skills through Codecademy.

                My background in chemistry has equipped me with strong analytical thinking and problem-solving
                skills, which I believe translate well into software development.

                I am genuinely enthusiastic about the opportunity to contribute to your team and
                grow as a developer. Thank you for considering my application. I have attached my resume
                and look forward to the possibility of speaking with you further.
            </p>
            <p>
                Sincerely,
                Yongni Zhao
            </p>


            <h2>Comments ({commentnumber})</h2>
            <div className='comments'>

                {comments.map((item, index) => (
                    <div key={index} className="comment-item">
                        <h4>{item.username}</h4>
                        <p>{item.comment}</p>
                        <p className='likeandtime'>
                            <FavoriteIcon
                                onClick={() => toggleLike(index)}
                                style={{ color: liked[index] ? 'red' : 'gray',  paddingRight: '20px'}}
                                cursor="pointer"

                            />
                            <span>Post Time: {item.posttime}</span>
                        </p>

                    </div>
                ))}

                <h4>Write your comments</h4>
                <form onSubmit={handleSubmit} >
                    <div className='commentform'>
                        <input
                            className='inputusername'
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Username"
                        />
                        <input
                            className='inputcomment'
                            type="text"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            placeholder="Write your comments"
                        />

                    </div>
                    <div className='subbutt'>
                        <button type="submit">Send</button>
                    </div>


                </form>
            </div>
        </div>
    );
}
