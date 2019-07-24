import React from 'react';
import './Teams.css'

const Teams = () => {
    return (
        
        <div className="teamContainer">
        <div className="row"><h1>Esports teams to know</h1></div>
        <div className="row">
            <div className="col-3">
                <div className="row"><img src="/images/teams/liquid.png" className="teamIcon"/></div>
                <div className="row"><h2>Team Liquid</h2></div> 
            </div>

            <div className="col-3">
                <div className="row"><img src="/images/teams/cloud9.png" className="teamIcon" /></div> 
                <div className="row"><h2>Cloud 9</h2></div> 
            </div>

            <div className="col-3">
                <div className="row"><img src="/images/teams/100thieves.png" className="teamIcon"/></div> 
                <div className="row"><h2>100 Thieves</h2></div> 
            </div>
        </div>

        <div className="row">
            <div className="col-3">
                <div className="row"><img src="/images/teams/solo.png" className="teamIcon"/></div>
                <div className="row"><h2>Team Solomid</h2></div> 
            </div>

            <div className="col-3">
                <div className="row"><img src="/images/teams/fnatic.png" className="teamIcon" /></div> 
                <div className="row"><h2>Fnatic</h2></div> 
            </div>

            <div className="col-3">
                <div className="row"><img src="/images/teams/luminosity.png" className="teamIcon"/></div> 
                <div className="row"><h2>Luminosity</h2></div> 
            </div>
        </div>

    </div>

    )
}

export default Teams;