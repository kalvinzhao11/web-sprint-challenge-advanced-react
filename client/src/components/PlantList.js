import React, { Component } from "react";
import axios from "axios";

export default class PlantList extends Component {
  // add state with a property called "plants" - initialize as an empty array
  state = {
    plants: [],
    searchFilter: ''
  }
  // when the component mounts:
  //   - fetch data from the server endpoint - http://localhost:3333/plants
  //   - set the returned plants array to this.state.plants
  componentDidMount(){
    axios.get('http://localhost:3333/plants')
      .then(response => {
        console.log(response.data.plantsData)
        this.setState({plants: response.data.plantsData})
      })
      .catch(erorr => {
        debugger
      })
  }
  changeSearchFilter = (event) => {
    this.setState({searchFilter: event.target.value})
  }

  /*********  DON'T CHANGE ANYTHING IN THE RENDER FUNCTION *********/
  render() {

    const filter = this.state.plants.filter( results => {
      return results.name.indexOf(this.state.searchFilter) !== -1
    })
    return (
      <main className="plant-list">
        <label>Search Plants (Case Sensitive): </label>
        <input
          type='text'
          name='searchFilter'
          placeholder='Plant name'
          value={this.state.searchFilter}
          onChange={this.changeSearchFilter}>    
        </input>
        {filter.map((plant) => (
          <div className="plant-card" key={plant.id}>
            <img className="plant-image" src={plant.img} alt={plant.name} />
            <div className="plant-details">
              <h2 className="plant-name">{plant.name}</h2>
              <p className="plant-scientific-name">{plant.scientificName}</p>
              <p>{plant.description}</p>
              <div className="plant-bottom-row">
                <p>${plant.price}</p>
                <p>☀️ {plant.light}</p>
                <p>💦 {plant.watering}x/month</p>
              </div>
              <button
                className="plant-button"
                onClick={() => this.props.addToCart(plant)}
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </main>
    );
  }
}
