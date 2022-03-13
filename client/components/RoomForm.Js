import React from "react";

export class RoomForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      humidity: props.singleRoom ? props.singleRoom.humidity : 0,
      temp: props.singleRoom ? props.singleRoom.temp : 0,
      growLights: props.singleRoom ? props.singleRoom.growLights : false,
    };
    this.handleFormChange = this.handleFormChange.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.singleRoom.id !== prevProps.singleRoom.id) {
      this.setState({
        humidity: props.singleRoom.humidity,
        temp: props.singleRoom.temp,
        growLights: props.singleRoom.growLights,
      });
    }
  }

  handleFormChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({ [name]: value });
  }

  render() {
    const { handleSubmit } = this.props;
    const {
     humidity, temp, growLights
    } = this.state;
    return (
      <div>
        <div>
          <label htmlFor="humidity">Average Humidity:</label>
          <input name="humidity" value={humidity} onChange={this.handleFormChange} />
        </div>
        <div>
          <label htmlFor="temp">Average Temperature:</label>
          <input
            name="temp"
            value={temp}
            onChange={this.handleFormChange}
          />
        </div>
        <div>
          <label htmlFor="growLights">Suplimental Lighting:</label>
          <input
            name="growLights"
            value={growLights}
            onChange={this.handleFormChange}
          />
        </div>
        <div>
          <button type="button" onClick={() => handleSubmit(this.state)}>
            Submit
          </button>
        </div>
      </div>
    );
  }
}
