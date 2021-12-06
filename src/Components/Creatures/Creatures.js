import './Creatures.css';
import { getCreaturesData } from '../../data/animalData';
import { useParams, Link, Outlet } from 'react-router-dom';

const Creatures = () => {
  const creatureType = useParams().animal;

  const creatureImages = getCreaturesData(creatureType).map(creature => {
    const { id, image } = creature;
    return (
      <Link to={`/${creatureType}/${id}`}>
        <img src={image} key={id} id={id} className="app-img"/>
      </Link>
     )
   });

   return (
     <>
       <h1>{creatureType}!</h1>
       <Outlet />
       {creatureImages}
     </>
   )
}

export default Creatures;
