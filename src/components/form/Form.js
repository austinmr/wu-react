import React, { Component } from 'react';
import { fetchConditions } from '../../api/weatherUnderground'

class Form extends Component {
	state = {
		city : '',
		state: '',

	}
  
	handleFormSubmit = (e) => {
		e.preventDefault();
		const { city, state } = this.state; 
		fetchConditions(city, state)
			.then((response) => {
				this.setState({ response: response }); 
			})
			.catch((error) => {
				console.log(error); 
			}); 
	}

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
      	<input onChange={(e) => {this.setState({city : e.target.value})}} type="text" name="city" placeholder="enter a city" />
      	<input onChange={(e) => {this.setState({state : e.target.value})}} type="text" name="state" placeholder="enter a state" />
      	<input type="submit" name="submit" />
      </form>
    );
  }
}

export default Form;
