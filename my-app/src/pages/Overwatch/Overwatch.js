import React from 'react';
import './Overwatch.css'


const Overwatch = () => {
    return (

        <div className="gameContainer">
            <div className="row">
            <div className="col-12">
                <div className="row"><img src="/images/overwatchLogo.png" class="gameIcon"/></div>
                <div className="row">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </div> 
            </div>
            </div>
            <div className="row">
            <div className="col-2"></div>
            <div className="col-8">
            <img src="/images/OverwatchShock.jpg" className="teamIcon"></img>
                <img src="/images/shockTeam.jpg"></img></div>
                <div className="col-2"></div>
            </div>

            <div className="row">03</div>
            <div className="row">04</div>

        </div>

        )
    }
    
    export default Overwatch;