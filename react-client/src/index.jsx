import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Submit from './components/Submit.jsx';
import Topic from './components/Topic.jsx';
import Vote from './components/Vote.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      topic: ''
    };
  }

  componentDidMount() {
    $.ajax({
      url: '/surveys', 
      success: (data) => {
        console.log(data);
        this.setState({
          topic: data[0].Topic
        });
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render () {
    return (<div>
      <Submit />
      <Topic topic={this.state.topic}/>
      <Vote />
    </div>);
  }
}

ReactDOM.render(<App />, document.getElementById('app'));