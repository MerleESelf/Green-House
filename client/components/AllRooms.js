import React from "react";
import { connect } from "react-redux";

import { fetchRooms } from "../store/rooms.js";
import Room from "./Room";


export class AllRooms extends React.Component {
  componentDidMount() {
    this.props.getAllRoomsThunk();
  }

  render() {
    return (
      <div>
        <h2 className="section-title">User rooms</h2>
        <ul className="container">
          {this.props.rooms.map((room) => (
            <div className="room-container" key={room.id}>
              <Room room={room} />
    
            </div>
          ))}
        </ul>
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
    getAllRoomsThunk: () => {
      dispatch(fetchRooms());
    }
  };
};

export default connect(mapState, mapDispatch)(AllRooms);