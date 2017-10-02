import React, { Component } from 'react';

class Vote extends Component {
	constructor(props) {
		super(props)
	}

	incrementYesForTopic() {
		//send patch request to server
		console.log('clicked yes');
	}

	incrementNoForTopic() {
		//send patch request to server
		console.log('clicked no');
	}

	render() {
		return (
			<div>
		    <button type="button" onClick={this.incrementYesForTopic}>YES</button>
		    <button type="button" onClick={this.incrementNoForTopic}>NO</button>
	  	</div>
	  )
	}
}

export default Vote;