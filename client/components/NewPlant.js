import React from 'react';
import { connect } from 'react-redux'

import { PlantForm } from './PlantForm'
import { setPlants } from '../store/plants.js';

class NewPlant extends React.Component {
  handleCreate = (plant) => {
      this.props.createPlant(plant)
  };

  render() {
    return (
    <div>
        <PlantForm handleSubmit={this.handleCreate} />
    </div>
    );
  }
}

const mapDispatch = (dispatch) => {
    return {
        createPlant: (plant) => dispatch(setPlants(plant))
    }
}

export default connect(null, mapDispatch)(NewPlant)