import React from 'react';
import './Video.css'
import ReactPlayer from 'react-player'



const Video = () => {
    return (
        <div className="videoContainer">
            <div className="row"><h1>Watch the action!</h1></div>
            <div className="row">
                <div className="col-3">
                    <div className="row">
                    <ReactPlayer url='https://www.twitch.tv/videos/456243224' />
                    </div>
        </div>

        <div className="col-3">
            <div className="row">
            <ReactPlayer url='https://www.twitch.tv/videos/455736203' />
            </div> 
            </div >

    <div className="col-3">
        <div className="row">
            <ReactPlayer url='https://www.twitch.tv/videos/454164029' />
            </div>

            
    </div>
        </div >
        </div >
            )
    }
export default Video;