import React from 'react';
import video from '../Assets/video1.mp4'
import classes from './BackgroundVideo.module.css';
import '../App.css'

const BackgroundVideo = () => {
    return (
        <div className={classes.Container} >
            <video autoPlay="autoplay" loop="loop" muted className={classes.Video} >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className={classes.Content}>
                <div className={classes.SubContent} >
                    <h1 id="hero-title">Santé & nature</h1>
                   
                </div>
            </div>
        </div>
    )
}

export default BackgroundVideo