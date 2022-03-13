import React from 'react';
import { connect } from 'react-redux';

import { RoomForm } from './RoomForm';
import { updateRoom} from '../store/room.js';

class EditRoom extends React.Component {
  handleEdit = (room) => {
    this.props.editRoom({
      ...room,
      id: this.props.singleRoom.id,
      plants: this.props.singleRoom.plants,
    });
  };

  render() {
    return (
      <div>
        <RoomForm
          handleSubmit={this.handleEdit}
          singleRoom={this.props.singleRoom}
        />
      </div>
    );
  }
}

const mapDispatch = (dispatch) => {
  return {
    editRoom: (room) => dispatch(updateRoom(room)),
  };
};

export default connect(null, mapDispatch)(EditRoom);