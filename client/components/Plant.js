import React from 'react';
import { Link } from 'react-router-dom';
// import Card from 'react-bootstrap/Card'

const Plant = (props) => {
  const { plant } = props;
  return (
    <Link className="plant-link" to={`/plants/${plant.id}`}>
      <div>
        <h4>{plant.commonName}</h4>
        <div>
          <img
            src={plant.image}
            style={{ height: `300px`, width: `300px` }}
          />
        </div>
      </div>
     </Link>
  );
};

export default Plant;