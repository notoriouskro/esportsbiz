import React from 'react';
import './Game.css'
import ReactPlayer from 'react-player'



const Game = () => {
    return (
        <div className="gameContainer">
            <div className="row"><h1>Top Esports games</h1></div>
            <div className="row">
                <div className="col-3">
                    <div className="row"><img src="/images/overwatchLogo.png" class="gameIcon" /></div>
                    <div className="row"><p>Overwatch is a team-based multiplayer first-person shooter developed and published by Blizzard Entertainment and released on May 24, 2016, for PlayStation 4, Xbox One, and Windows. Described as a "hero shooter," Overwatch assigns players into two teams of six, with each player selecting from a roster of over 30 characters, known as "heroes," each with a unique style of play whose roles are divided into three general categories that fit their purpose. </p>
                    </div>
                </div>

                <div className="col-3">
                    <div className="row"><img class="gameIcon" src="/images/lol.png" /></div>
                    <div className="row"><p>League of Legends (abbreviated LoL) is a multiplayer online battle arena video game developed and published by Riot Games for Microsoft Windows and macOS. The game follows a freemium model and is supported by microtransactions, and was inspired by the Warcraft III: The Frozen Throne mod, Defense of the Ancients.</p>
                    </div>
                </div >

                <div className="col-3">
                    <div className="row"><img src="/images/dota2.png" class="gameIcon" /></div>
                    <div className="row"><p>Dota 2 is a multiplayer online battle arena (MOBA) video game developed and published by Valve Corporation. The game is a sequel to Defense of the Ancients (DotA), which was a community-created mod for Blizzard Entertainment's Warcraft III: Reign of Chaos and its expansion pack, The Frozen Throne. Dota 2 is played in matches between two teams of five players, with each team occupying and defending their own separate base on the map.</p>
                    </div>
                </div>
            </div >
            <div className="row">
                        <div className="col-3"><button>More Info</button></div>
                        <div className="col-3"><button>More Info</button></div>
                        <div className="col-3"><button>More Info</button></div>
                    </div>
        </div >
    )
}
export default Game;