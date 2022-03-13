import React from 'react';
import { Link } from 'react-router-dom';
// import Card from 'react-bootstrap/Card'

const Plant = (props) => {
  const { plant } = props;
  return (
    // <Link className="plant-link" to={`/plants/${plant.id}`}>
      <div>
        <h4>{plant.commonName}</h4>
        <div>
          <img
            src={plant.image}
            style={{ height: `200px`, width: `200px` }}
          />
        </div>
      </div>
    // </Link>
  );
};

export default Plant;