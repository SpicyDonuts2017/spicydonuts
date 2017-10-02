import React, { Component} from 'react';

class Submit extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: ''
		};
	}

	getText(event) {
		this.setState({text: event.target.value});
	}

	handleSubmit(event) {
		//send text to server via a POST request
		event.preventDefault();
		console.log(this.state.text);
		this.setState({text: ''});
	}

	render() {
		return (
			<form>
		    <input type="text" value={this.state.text} onChange={this.getText.bind(this)}/>
		    <button onClick={this.handleSubmit.bind(this)}>Submit</button>
		  </form>
		)
	}
}

export default Submit;