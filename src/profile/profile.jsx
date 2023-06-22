

import React from 'react';

const Profile = ({ fullName, bio, profession, handleName }) => {
  return (
    <div>
      <h2>{fullName}</h2>
      <p>{bio}</p>
      <p>{profession}</p>

      
      <button onClick={() => handleName(fullName)}>Show Name</button>
    </div>
  );
};
Profile.defaultProps = {
  fullName: 'foulan ben foulan',
  bio: 'No bio available',
  profession: 'agriculture',
}

export default Profile;

