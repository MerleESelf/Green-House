import React from "react";
import { connect } from "react-redux";

import { fetchWindows } from "../store/WindowsReducer.js";
import Window from "./Window";


export class AllWindows extends React.Component {
  componentDidMount() {
    this.props.getAllWindowsThunk();
  }

  render() {
    return (
      <div>
        <h2 className="section-title">User Windows</h2>
        <ul className="container">
          {this.props.windows.map((window) => (
            <div className="window-container" key={window.id}>
              <Window Window={Window} />
    
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    Windows: state.windows,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getAllWindowsThunk: () => {
      dispatch(fetchWindows());
    }
  };
};

export default connect(mapState, mapDispatch)(AllWindows);