import React from 'react';
import { Link } from 'react-router-dom';

const Room = (props) => {
  const { room } = props;
  return (
    <Link className="room-link" to={`/rooms/${room.id}`}>
      <div>
        <h4>{room.name}</h4>
      </div>
    </Link>
  );
};

export default Room;