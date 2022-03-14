import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom'

import { fetchRooms } from "../store/rooms.js";
import { addAssociation } from "../store/plant.js";

class AssignRoom extends React.Component {
  constructor(props) {
    super(props);
    this.handleAssign = this.handleAssign.bind(this)
  }

  componentDidMount() {
    this.props.getRooms();
  }


  handleAssign = (event) => {
    const roomId = event.target.value;
    const plantId = this.props.plant.id;
    this.props.addRoom(roomId, plantId);
  };

  render() {
    return (
      <div>
        {this.props.rooms.map((room) => {
          return (
            <div className="assign-room" key={room.id}>
              <Link className="room-link" to={`/room/${room.id}`}>
                <p>{room.name}</p>
              </Link>
              <button value={room.id} type="button" onClick={this.handleAssign}>
                Add to Room
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}
const mapState = (state) => {
  return {
    rooms: state.rooms,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getRooms: () => dispatch(fetchRooms()),
    addRoom: (roomId, plantId) => dispatch(addAssociation(roomId, plantId)),
  };
};

export default connect(mapState, mapDispatch)(AssignRoom);
