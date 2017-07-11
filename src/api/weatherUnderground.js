import API_KEY from '../__env'
const fetch = require('node-fetch');

export const fetchConditions = (city, state) => {
	return fetch(`http://api.wunderground.com/api/${API_KEY}/conditions/q/${state}/${city}.json`)
		.then((response) => {
			return response.json()
		})
		.then((json) => {
			console.log("SUCCESS"); 
			console.log(json); 
			return json.current_observation; 
		})
		.catch((error) => {
			console.log(error); 
		})
}