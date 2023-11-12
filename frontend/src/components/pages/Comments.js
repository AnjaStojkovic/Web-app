import './../../sass/main.scss';
import profilePic1 from '../../assets/profilePicOne.avif';
import profilePic2 from '../../assets/profilePicTwo.avif';
import profilePic3 from '../../assets/profilePicThree.avif';
import profilePic4 from '../../assets/profilePicFour.avif';
import video from '../../assets/video.mp4';
import { useEffect, useState } from 'react';
import Axios from '../../apis/Axios';
import { Link } from 'react-router-dom';

const Comments = () => {

    const[comments, setComments] = useState([]);

    const getComments = () => {
        Axios.get('/comments')
        .then(res => {
            setComments(res.data);
        })
        .catch(error => {
            alert("An error occurred while loading the comments");
        })
    }

    useEffect(() => {
        getComments();
    },[])

    const pictures = [
        {
          id: 1,
          pic: profilePic1,
        },
        {
          id: 2,
          pic: profilePic2,
        },
        {
          id: 3,
          pic: profilePic3,
        },
        {
          id: 4,
          pic: profilePic4,
        },
      ];

    return (
        <section className='section-stories'>
            <div className="bg-video">
                <video className="bg-video__content" autoPlay muted loop>
                    <source src={video} type='video/mp4'/>
                    Your browser is not supported
                </video>
            </div>
            <div className='u-center-text u-margin-bottom-big'>
                <h2 className='heading-secondary'>We make people genuienly happy</h2>
            </div>

            <div className="row">
            {pictures.map((picture, index) => (
                <div className="story" key={picture.id}>
                    <figure className="story__shape">
                    <img src={picture.pic} alt="profile-picture" className="story__img"></img>
                    <figcaption className="story__caption">{comments[index]?.name}</figcaption>
                    </figure>
                    <div className="story__text u-margin-bottom-small">
                        <h3 className="heading-tertiary u-margin-bottom-medium">{comments[index]?.caption}</h3>
                        <p>{comments[index]?.comment}</p>
                    </div>
                </div>
                ))}
            </div>
            <Link to='/' className='btn btn--green'>Home page</Link>
        </section>
    )

}

export default Comments;