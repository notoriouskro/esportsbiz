import React from 'react';
import './Teams.css'

const Teams = () => {
    return (
        
        <div className="teamContainer">
        <div className="row"><h2>Esports teams to know</h2></div>
        <div className="row">
            <div className="col-3">
                <div className="row"><img src="/images/teams/liquid.png" className="teamIcon"/></div>
                <div className="row">Team Liquid </div> 
            </div>

            <div className="col-3">
                <div className="row"><img src="/images/teams/cloud9.png" className="teamIcon" /></div> 
                <div className="row">Cloud 9</div> 
            </div>

            <div className="col-3">
                <div className="row"><img src="/images/teams/100thieves.png" className="teamIcon"/></div> 
                <div className="row">100 Thieves </div> 
            </div>
        </div>

        <div className="row">
            <div className="col-3">
                <div className="row"><img src="/images/teams/solo.png" className="teamIcon"/></div>
                <div className="row">Team Solomid </div> 
            </div>

            <div className="col-3">
                <div className="row"><img src="/images/teams/fnatic.png" className="teamIcon" /></div> 
                <div className="row">Fnatic</div> 
            </div>

            <div className="col-3">
                <div className="row"><img src="/images/teams/luminosity.png" className="teamIcon"/></div> 
                <div className="row">Luminosity</div> 
            </div>
        </div>

    </div>

    )
}

export default Teams;