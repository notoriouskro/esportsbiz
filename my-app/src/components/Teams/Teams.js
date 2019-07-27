import React from 'react';
import './Teams.css'

const Teams = () => {
    return (
        
        <div className="teamContainer">
        <div className="row"><h1>Esports teams to know</h1></div>
        <div className="row">
            <div className="col-4">
                <div className="row"><img src="/images/teams/liquid.png" className="teamIcon"/></div>
                <div className="row"><h3>Team Liquid</h3></div> 
            </div>

            <div className="col-4">
                <div className="row"><img src="/images/teams/cloud9.png" className="teamIcon" /></div> 
                <div className="row"><h3>Cloud 9</h3></div> 
            </div>

            <div className="col-4">
                <div className="row"><img src="/images/teams/100thieves.png" className="teamIcon"/></div> 
                <div className="row"><h3>100 Thieves</h3></div> 
            </div>
        </div>

        <div className="row">
            <div className="col-4">
                <div className="row"><img src="/images/teams/solo.png" className="teamIcon"/></div>
                <div className="row"><h3>Team Solomid</h3></div> 
            </div>

            <div className="col-4">
                <div className="row"><img src="/images/teams/fnatic.png" className="teamIcon" /></div> 
                <div className="row"><h3>Fnatic</h3></div> 
            </div>

            <div className="col-4">
                <div className="row"><img src="/images/teams/luminosity.png" className="teamIcon"/></div> 
                <div className="row"><h3>Luminosity</h3></div> 
            </div>
        </div>

    </div>

    )
}

export default Teams;