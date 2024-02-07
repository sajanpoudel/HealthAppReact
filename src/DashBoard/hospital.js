import React from 'react';
import './home.css'; // Assuming that the CSS is in home.css in the same folder
import Step from './images/step.png';
import CaloriesBurn from './images/caloriesburn.png';
import Pressure from './images/pressure.png';
import Graph from './images/graphc.png';
import NavBar from './components/navbar';
import RightProfileBar from './components/RightProfileBar';
function Hospital() {
    return (
        <div className="Hospital-Dashboard">
            <NavBar/>


            <div id="main">
                <div id="greeting" className="card">
                    <h2>Your Health Analysis</h2>
                    <p id="greeting-message">This is your detailed health based on your personal health data. This is predicted by AI.</p>
                </div>

                <div id="cards" className="card">
                    <h2>Cards</h2>
                    <div className="small-card">
                        <img src={Step}
                            alt="Steps icon"/>
                        <span id="steps">0</span>
                        <span>steps</span>
                    </div>
                    <div className="small-card">
                        <img src={CaloriesBurn}
                            alt="Calories icon"/>
                        <span id="calories">0</span>
                        <span>calories</span>
                    </div>
                    <div className="small-card">
                        <img src={Pressure}
                            alt="bp icon"/>
                        <span id="bp">0</span>
                        <span>Blood Pressure</span>
                    </div>
                    {/* Repeat for other cards */} </div>





                {/* Repeat for other sections */} </div>
            <RightProfileBar/>


        </div>


    );
}

export default Hospital;
