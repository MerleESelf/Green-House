import React from 'react';
import { connect } from 'react-redux'

import { RoomForm } from './RoomForm'
import { setRooms } from '../store/rooms';

class NewRoom extends React.Component {
  handleCreate = (room) => {
      this.props.createRoom(room)
  };

  render() {
    return (
    <div>
        <RoomForm handleSubmit={this.handleCreate} />
    </div>
    );
  }
}

const mapDispatch = (dispatch) => {
    return {
        createRoom: (room) => dispatch(setRooms(room))
    }
}

export default connect(null, mapDispatch)(NewRoom)