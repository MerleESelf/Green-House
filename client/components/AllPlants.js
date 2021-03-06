import React from "react";
import { connect } from "react-redux";

import { fetchPlants } from "../store/plants.js";
import Plant from "./Plant";
import NewPlant from "./NewPlant.js";


export class AllPlants extends React.Component {
  componentDidMount() {
    this.props.getAllPlants();
  }

  render() {
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
         <div>
           <NewPlant /> 
         </div>
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
    getAllPlants: () => {
      dispatch(fetchPlants());
    }
  };
};


export default connect(mapState, mapDispatch)(AllPlants);
