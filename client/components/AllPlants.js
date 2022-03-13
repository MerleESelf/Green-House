import React from "react";
import { connect } from "react-redux";

import { fetchPlants } from "../store/plantsReducer.js";
import Plant from "./Plant";


export class AllPlants extends React.Component {
  componentDidMount() {
    this.props.getAllPlantsThunk();
  }

  render() {
    console.log("*********", this.props.plants);
    return (
      <div>
        <h2 className="section-title">User Plants</h2>
        <ul className="container">
          {this.props.plants.map((plant) => (
            <div className="plant-container" key={plant.id}>
              <Plant plant={plant} />
    
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    plants: state.plants,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getAllPlantsThunk: () => {
      dispatch(fetchPlants());
    }
  };
};

export default connect(mapState, mapDispatch)(AllPlants);
