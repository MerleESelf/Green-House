import React from "react";

export class PlantForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genus: props.singlePlant ? props.singlePlant.genus : "",
      species: props.singlePlant ? props.singlePlant.species : "",
      commonName: props.singlePlant ? props.singlePlant.commonName : "",
      origin: props.singlePlant ? props.singlePlant.origin : "",
      potSize: props.singlePlant ? props.singlePlant.potSize : 0,
      pottingMedium: props.singlePlant ? props.singlePlant.pottingMedium : "",
      image: props.singlePlant ? props.singlePlant.image : "",
    };
    this.handleFormChange = this.handleFormChange.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.singlePlant.id !== prevProps.singlePlant.id) {
      this.setState({
        genus: this.props.singlePlant.genus,
        species: this.props.singlePlant.species,
        commonName: this.props.singlePlant.commonName,
        origin: this.props.singlePlant.origin,
        potSize: this.props.singlePlant.potSize,
        pottingMedium: this.props.singlePlant.pottingMedium,
        image: this.props.singlePlant.image,
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
      genus,
      species,
      commonName,
      origin,
      potSize,
      pottingMedium,
      image,
    } = this.state;
    return (
      <div>
        <div>
          <label htmlFor="genus">Genus:</label>
          <input name="genus" value={genus} onChange={this.handleFormChange} />
        </div>
        <div>
          <label htmlFor="species">Species:</label>
          <input
            name="species"
            value={species}
            onChange={this.handleFormChange}
          />
        </div>
        <div>
          <label htmlFor="commonName">Commom Name:</label>
          <input
            name="commonName"
            value={commonName}
            onChange={this.handleFormChange}
          />
        </div>
        <div>
          <label htmlFor="origin">Plant Origin:</label>
          <input
            name="origin"
            value={origin}
            onChange={this.handleFormChange}
          />
        </div>
        <div>
          <label htmlFor="potSize">Pot Size:</label>
          <input
            name="potSize"
            value={potSize}
            onChange={this.handleFormChange}
          />
        </div>
        <div>
          <label htmlFor="pottingMedium">Potting Meduim:</label>
          <input
            name="pottingMedium"
            value={pottingMedium}
            onChange={this.handleFormChange}
          />
        </div>
        <div>
          <label htmlFor="image">Image:</label>
          <input name="image" value={image} onChange={this.handleFormChange} />
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
