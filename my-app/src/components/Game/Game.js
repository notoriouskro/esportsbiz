import React from 'react';
import './Game.css'

const Game = () => {
    return (
        <div className="row gameContainer">
            <div className="col-3">
                <div className="row"><img src="/images/overwatchLogo.png" class="gameIcon"/></div>
                <div className="row">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </div> 
            </div>

            <div className="col-3">
                <div className="row"><img class="gameIcon" src="/images/lol.png" /></div> 
                <div className="row">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </div> 
            </div>

            <div className="col-3">
                <div className="row"><img src="/images/dota2.png" class="gameIcon"/></div> 
                <div className="row">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </div> 
            </div>
        </div>
            )
    }
export default Game;