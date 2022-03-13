import React from 'react';
import { Link } from 'react-router-dom';

const Window = (props) => {
  const { window } = props;
  return (
    <Link className="window-link" to={`/windows/${window.id}`}>
      <div>
        <h4>{window.exposure}</h4>
      </div>
    </Link>
  );
};

export default Window;