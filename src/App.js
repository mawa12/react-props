
import './App.css';
import React from 'react';
import Profile from './profile/profile';
import profileImage from './mawa.jpg';
function App() {
  const handleName = () => {
    const fullName = 'marwa romdhani'; 
    alert(`Name: ${fullName}`);
  };
  return (
    <div className="App">
      <Profile
        fullName="MARWA ROMDHANI"
        
        bio="mriwa"
        profession="  i am web developper"
        handleName={handleName}
      >
      <img src={profileImage} alt="Profile" />

      </Profile>
      {/* <img src={profileImage} alt="Profile" /> */}
    </div>
  );
}

export default App;
