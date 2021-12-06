import './Creatures.css';

const Creatures = ({ creatureType }) => {

  return (
    <div>
      <h1>{`${creatureType.toUpperCase()}!`}</h1>
    </div>
  )
}

export default Creatures;
