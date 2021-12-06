import React from 'react';
import './CreatureDetails.css';
import { useParams } from 'react-router-dom';
import { getCreatureDetails } from '../../data/animalData';

const CreatureDetails = () => {
  const creatureType = useParams().animal;
  const creatureId = useParams().id;

  const creatureStats = getCreatureDetails(creatureType, creatureId);

  return (
    <div>
      <h1>{creatureStats.name}</h1>
      <img src={creatureStats.image} className='app-img-no-hover'/>
      <p className='creature-bio'>{creatureStats.bio}</p>
    </div>
  )
}

export default CreatureDetails;
