import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchSingleRoom, removeAssociation } from "../store/room.js";
import EditRoom from './EditRoom';

class SingleRoom extends React.Component {
  constructor(props) {
    super(props);
    this.handleUnassign = this.handleUnassign.bind(this);
  }
  componentDidMount() {
    this.props.getRoom(this.props.match.params.id);
  }

  handleUnassign(event) {
    const plantId = event.target.value;
    const roomId = this.props.room.id;
    this.props.removeAssociation(roomId, plantId);
  }

  render() {
      console.log('props in ingle room', this.props)
    if (!this.props.room.id) return <div>room loading</div>;
    return (
      <div id="single-room-div">
        <h2>{this.props.room.name}</h2>
        <div>
          <p>Average Humidity:</p>
          <p>{this.props.room.humidity}</p>
        </div>
        <div>
          <p>Average Room Temperature:</p>
          <p>{this.props.room.temp}</p>
        </div>
        <div>
          <p>Suplimental Lighting:</p>
          <p>{this.props.room.growLights}</p>
        </div>
        <div>
          <p>Plants in Room:</p>
          {this.props.room.plants.map((plant) => {
            return (
              <div className="assigned-plant" key={plant.id}>
                <Link className="plant-link" to={`/plants/${plant.id}`}>
                  <p>{plant.commonName}</p>
                  <img
                   src={plant.image}
                   style={{ height: `200px`, width: `200px` }}/>
                </Link>
                <button
                  value={plant.id}
                  type="button"
                  onClick={this.handleUnassign}
                >
                  Remove From Room
                </button>
              </div>
            );
          })}
        </div>
        <div>
          <p>{`Edit ${this.props.room.name}:`}</p>
          <EditRoom singleRoom={this.props.room } />
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    room: state.room,
  };
};
const mapDispatch = (dispatch) => {
  return {
    getRoom: (id) => {
      dispatch(fetchSingleRoom(id));
    },
    removeAssociation: (roomId, plantId) => {
      dispatch(removeAssociation(roomId, plantId));
    },
  };
};

export default connect(mapState, mapDispatch)(SingleRoom);
