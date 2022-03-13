import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchSinglePlant, removeAssociation } from "../store/plant.js";
import EditPlant from './EditPlant';

class SinglePlant extends React.Component {
  constructor(props) {
    super(props);
    this.handleUnassign = this.handleUnassign.bind(this);
  }
  componentDidMount() {
    this.props.getPlant(this.props.match.params.id);
  }

  handleUnassign(event) {
    const roomId = event.target.value;
    const plantId = this.props.plant.id;
    this.props.removeAssociation(plantId, roomId);
  }

  render() {
    console.log("********* props in single plant", this.props.plant);
    if (!this.props.plant.id) return <div>plant loading</div>;
    return (
      <div id="single-plant-div">
        <img
          src={this.props.plant.image}
          style={{ height: `200px`, width: `200px` }}
        />
        <h2>{this.props.plant.genus}</h2>
        <h3>{this.props.plant.species}</h3>
        <div>
          <p>Common Name:</p>
          <p>{this.props.plant.commonName}</p>
        </div>
        <div>
          <p>Origin:</p>
          <p>{this.props.plant.origin}</p>
        </div>
        <div>
          <p>Pot Size:</p>
          <p>{this.props.plant.potSize}</p>
        </div>
        <div>
          <p>Potting Medium:</p>
          <p>{this.props.plant.pottingMedium}</p>
        </div>
        <div>
          <p>Assigned Room:</p>
          <div className="assigned-room">
            <Link className="room-link" to={`/rooms/${this.props.plant.room.id}`}>
              <p>{this.props.plant.room.name}</p>
            </Link>
            <button value={this.props.plant.room.id} type="button" onClick={this.handleUnassign}>
              Remove From Room
            </button>
          </div> 
        </div>
        <div>
          <p>{`Edit ${this.props.plant.genus}:`}</p>
          <EditPlant singlePlant={this.props.plant} />
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    plant: state.plant,
  };
};
const mapDispatch = (dispatch) => {
  return {
    getPlant: (id) => {
      dispatch(fetchSinglePlant(id));
    },
    removeAssociation: (plantId, roomId) => {
      dispatch(removeAssociation(plantId, roomId));
    },
  };
};

export default connect(mapState, mapDispatch)(SinglePlant);
