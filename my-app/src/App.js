import React, { useState } from 'react';
import './App.css'; // Importing the CSS file for styling
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


function DroneImagefly() {
  const [fly, setFly] = useState(false);
  const droneImage = process.env.PUBLIC_URL + "/dronehehe.png";

  function handleClick() {
    
   if (fly) {
      // If already flying, reset the state to allow replay
      setFly(false);
      
    } else {
      // If not flying, set the state to true to start the animation
    setFly(true);
    // Trigger the animation by setting fly to true
    // Reset after animation if you want to allow replay
    
  }}

  return (
    <div className="drone-fly-container">
      <button className="toggle" onClick={handleClick}>
        Wanna see a drone? :D
      </button>
      <img
        src={droneImage}
        alt="Flying Drone"
        className={`drone-fly-img ${fly ? 'fly' : ''}`}
        style={{
          
          width: '220px',
          height: '120px',
          
         }}
      />
    </div>
  );
}

function MeetTheTeam() {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);

  function handleClick() {
    if (!open) {
      setOpen(true);
      setClosing(false);
    }
  }

  function handleClose() {
    setClosing(true);
    setTimeout(() => {
      setOpen(false);
      setClosing(false);
    }, 500); // Match the animation duration
  }

  return (
    <div className="pop-up">
      <button className="meet-the-team-button" onClick={handleClick}>
        Meet the Team
      </button>
      {(open || closing) && (
        <>
          <div className="popup-overlay" />
          <div
            className={`popup-content${open && !closing ? ' tilt-in-top-1' : ''}${closing ? ' slide-out-top' : ''}`}
            style={{ display: 'block' }}
          >
            <img
              className="close-icon"
              src={process.env.PUBLIC_URL + "/icons8-close-50.png"}
              alt="Close"
              onClick={handleClose}
            />
            <h2 className="Meet-the-Team">Meet the Team</h2>
            <div className='team-member-container'>
            <h3 className="team-member">Siloe Selebangue - Aerospace Engineering</h3>
            <img className="siloe-img" src={process.env.PUBLIC_URL + "/IMG_9205 - Siloe Selebangue (1).jpeg"} alt="Siloe Selebangue" />
            </div>
            <div className='team-member-container'>
            <h3 className="team-member">Michael King - Aerospace Engineering</h3>
            <img className="michael-img" src={process.env.PUBLIC_URL + "/Resized_20240524_121842_1719191037819 - Michael King (1).jpeg"} alt="Michael King" />
            </div>
            <div className='team-member-container'>
            <h3 className="team-member">Hannah Alper - Electrical Engineering</h3>
            <img className="hannah-img" src={process.env.PUBLIC_URL + "/hannah_alper_headshot - Hannah Alper.jpeg"} alt="Hannah Alper" />
            </div>
            <div className='team-member-container'>
            <h3 className="team-member">Kiyan Govender - Aerospace Engineering</h3>
            <img className="kiyan-img" src={process.env.PUBLIC_URL + "/IMG_3609 - SoloSkills.jpeg"} alt="Kiyan Govender" />
            </div>
            <div className='team-member-container'>
            <h3 className="team-member">Josh McDerment - Aerospace Engineering</h3>
            <img className="josh-img" src={process.env.PUBLIC_URL + "/17528811596184244253163488230211 - Josh McDerment.jpg"} alt="Josh McDerment" />
            </div>
          </div>
        </>
      )}
    </div>
  );
}


function App() {
  return (
    <div className="App">
          <title>Team SOAR</title>
      <div className="animated-bg">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
      </div> {/* Animated background */}
      <div className="Team-SOAR">
        <header className="App-header"></header>
          <h1 className="slide-in-bck-top">Team SOAR</h1>
          <p>Sustainable Operations for Aerial Robotics</p>
          
        <button className="App-button"
        onClick={() => window.open("https://github.com/kevinng5213/SOARWeb", "_blank")}>
        Visit our GitHub
      </button>
      </div>
        <div className="App-footer">
            <img className="Drone-Img" src="https://wallpapercave.com/wp/wp1896544.jpg" alt="Team SOAR Logo"/>
        </div>
      <div className="scroll-container">
          <p>Welcome to Team SOAR! We are an undergraduate research team at the University of Maryland, College Park. We hope to improve the effeciency of drones by utilizing wind updrafts and computer vision to greatly extend their flight time.</p>
      </div>
      
    <div className="pop-up">
      <MeetTheTeam/>
    </div>
      <div className="see-a-drone">
          <DroneImagefly />
      </div>
      </div>

      
    )
    

}

// Function to toggle the visibility of the drone image


export default App
