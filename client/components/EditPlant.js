import React from 'react';
import { connect } from 'react-redux';

import { PlantForm } from './PlantForm';
import { updatePlant } from '../store/plant.js';

class EditPlant extends React.Component {
  handleEdit = (plant) => {
    this.props.editPlant({
      ...plant,
      id: this.props.singlePlant.id,
      room: this.props.singlePlant.room,
    });
  };

  render() {
    return (
      <div>
        <PlantForm
          handleSubmit={this.handleEdit}
          singlePlant={this.props.singlePlant}
        />
      </div>
    );
  }
}

const mapDispatch = (dispatch) => {
  return {
    editPlant: (plant) => dispatch(updatePlant(plant)),
  };
};

export default connect(null, mapDispatch)(EditPlant);