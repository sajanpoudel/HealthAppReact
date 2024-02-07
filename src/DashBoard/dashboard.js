import React from 'react';
import './home.css'; // Assuming that the CSS is in home.css in the same folder
import Step from './images/step.png';
import CaloriesBurn from './images/caloriesburn.png';
import Pressure from './images/pressure.png';
import Graph from './images/graphc.png';
import NavBar from './components/navbar';
import RightProfileBar from './components/RightProfileBar';
function Dashboard() {
    return (
        <div className="Health-Dashboard">
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

                <div id="graph" className="graph">
                    <h2>Graph</h2>
                    <div className="graph-internal">
                        <div className="graph-small-card">
                            <img src={Graph}
                                className="graph-img"
                                alt="calories"/>
                        </div>
                        <div className="graph-small-card">
                            <img src={Graph}
                                className="graph-img"
                                alt="calories"/>
                        </div>
                        <div className="graph-small-card">
                            <img src={Graph}
                                className="graph-img"
                                alt="calories"/>
                        </div>
                        <div className="graph-small-card">
                            <img src={Graph}
                                className="graph-img"
                                alt="calories"/>
                        </div>
                    </div>
                </div>


                <div id="sleep" className="card">
                    <h2>Sleep</h2>
                    <div id="sleep-bar">
                        <div id="sleep-progress"></div>
                    </div>
                    <span id="sleep-percentage">0%</span>
                    <span>of 8 hours</span>
                </div>


                {/* Repeat for other sections */} </div>
            <RightProfileBar/>


        </div>


    );
}

export default Dashboard;
