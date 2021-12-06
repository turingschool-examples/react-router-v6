import React from 'react';
import './CreatureDetails.css';

const CreatureDetails = ({ creatureType, creatureId }) => {
  return (
    <div>
      <h1>{`${creatureType.toUpperCase()}: ${creatureId}`}</h1>
    </div>
  )
}

export default CreatureDetails;
