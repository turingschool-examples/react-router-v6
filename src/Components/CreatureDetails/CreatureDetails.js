import React from 'react';
import './CreatureDetails.css';

const CreatureDetails = () => {

  return (
    <div>
      <h1>Some Creature Name</h1>
      <img src='some_image_url' className='app-img-no-hover'/>
      <p className='creature-bio'>Some bio about this creature</p>
    </div>
  )
}

export default CreatureDetails;
