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
      // items: []
    }
  }

  componentDidMount() {
    // $.ajax({
    //   url: '/items', 
    //   success: (data) => {
    //     this.setState({
    //       items: data
    //     })
    //   },
    //   error: (err) => {
    //     console.log('err', err);
    //   }
    // });
  }

  render () {
    return (<div>
      <Submit />
      <Topic />
      <Vote />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));