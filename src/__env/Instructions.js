import React, { Component } from 'react';

const instructions = [
	'Create a web form that allows users to enter two properties, a city and a state',
	'Create a function that is called when a button is clicked with all properties as parameters',
	'Create a function that calls the Weather Underground API to request the current conditions for the given location',
	'Create an element that displays the current conditions provided by the Weather Underground API'
]

class Instructions extends Component {
	state = {
		currentStep: 0, 
	}

	incrementStep = () => {
		let { currentStep } = this.state; 
		let nextStep = currentStep + 1; 
		this.setState({ currentStep: nextStep }); 
	}


	decrementStep = () => {
		let { currentStep } = this.state; 
		let nextStep = (currentStep > 0 ) ? currentStep - 1 : 0; 
		this.setState({ currentStep: nextStep }); 
	}

  render() {
  	let { currentStep } = this.state; 
  	let currentInstructions = instructions.slice(0, currentStep + 1); 
    return (
      <div>
      	<button onClick={this.incrementStep}>Next Step</button>
	      <button onClick={this.decrementStep} style={{marginLeft: 10}}>Previous Step</button>
	      <ul style={{textAlign: 'left'}}>
	      	{currentInstructions.map((instruction, i) => (
	      		<li key={i} style={{marginTop: 10, marginBottom: 10}}>{instruction}</li>
	      	))}
	      </ul>
      </div>
    );
  }
}

export default Instructions;
