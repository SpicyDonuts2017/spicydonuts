import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import NiceList from './Components/NiceList.jsx';
import NaughtyList from './Components/NaughtyList.jsx';

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      name: '',
      data: [],
      naughty: [],
      nice: [],
    }
    this.insertName = this.insertName.bind(this);
    this.addNice = this.addNice.bind(this);
    this.addNaughty = this.addNaughty.bind(this);
    this.changeToNaughty = this.changeToNaughty.bind(this);
    this.changeToNice = this.changeToNice.bind(this);
    this.delete = this.delete.bind(this);
    this.changePresent = this.changePresent.bind(this);
  }


  insertName(event){
    this.setState({
      name: event.target.value
    })
  }


  addNice(event){
    event.preventDefault();
    var present;
    var helper = function(){
      present = prompt('What gift do u want to give to them?')
      if (present === '' || present === null ) {
        alert('THINK OF SOMETHING!!!');
        helper();
      }
    }
    helper();
    var object = {};
    if (this.state.name !== ''){
      object.id = this.state.id;
      object.name = this.state.name;
      object.status = 'Nice';
      object.present = present;
      $.ajax({
        url: '/list',
        type: 'POST',
        contentType: 'application/JSON',
        data: JSON.stringify(object),
        success: (data) =>{
          this.sort()
        },  
        error: (xhr, status, error) => {
          console.log('err', xhr, status, error);
        }
      });
    }
    this.setState({
      name: ''
    })
    document.getElementById('add').value = '';
  }


  addNaughty(event){
    event.preventDefault();
    var object = {};
    if (this.state.name !== ''){
      object.id = this.state.id;
      object.name = this.state.name;
      object.status = 'Naughty';
      object.present = 'Coal';
      $.ajax({
        url: '/list',
        type: 'POST',
        contentType: 'application/JSON',
        data: JSON.stringify(object),
        success: (data) =>{
          this.sort()
        },  
        error: (xhr, status, error) => {
          console.log('err', xhr, status, error);
        }
      });
    }
    this.setState({
      name: ''
    })
    document.getElementById('add').value = '';
  }


  componentDidMount() {
    this.sort();
  }


  sort() {
    $.ajax({
      url:'/list',
      type: 'GET',
      success: (data) => {
        console.log(data)
        this.setState({
          data: data
        })
        this.divide(this.state.data)
      },
      error: (xhr, status, error) => {
        console.log('err', xhr, status, error);
      }
    })
  }


  divide(array) {
    var arr = array;
    var nice = [];
    var naughty = [];
    if (arr.length !== 0){
      for (var i = 0; i < arr.length; i++){
        if (arr[i].status === 'Nice'){
          nice.push(arr[i])
        } else {
          naughty.push(arr[i])
        }
      }
      this.setState({
        nice: nice,
        naughty: naughty
      })
    } else {
      return;
    }
  }


  changeToNice(index){
    var array = this.state.naughty;
    var hold;
    for (var i = 0; i < array.length; i++){
      if (array[i].id === index){
        hold = array[i];
        array.splice(i, 1)
      }
    }

    var toArray = this.state.nice;
    if (toArray.length === 0){
      toArray.push(hold)
    } else if (toArray.length === 1) {
      if (toArray[0].id > index){
        toArray.unshift(hold);
      } else {
        toArray.push(hold)
      }
    } else if (toArray[toArray.length - 1].id < index) {
      toArray.push(hold)
    } else if (toArray[0].id > index) {
      toArray.unshift(hold);
    } else {
      for (var j = 1; j < toArray.length; j++){
        if (index > toArray[j - 1].id && index < toArray[j].id){
          toArray.splice((j), 0 , hold)
          j++;
        }
      }
    }

    var present;
    var helper = function(){
      present = prompt('What gift do u want to give to them?')
      if (present === '' || present === null ) {
        alert('THINK OF SOMETHING!!!');
        helper();
      }
    }
    helper();

    var object = {};
    object['index'] = index;
    object['status'] = 'Nice';
    object['present'] = present;
    $.ajax({
      url: '/update',
      type: 'POST',
      contentType: 'application/JSON',
      data: JSON.stringify(object),
      success: (data) => {
        this.sort()
      },
      error: (err) => {
        console.log('error')
      }
    })

  }


  changeToNaughty(index){
    var array = this.state.nice;
    var hold;
    for (var i = 0; i < array.length; i++){
      if (array[i].id === index){
        hold = array[i];
        array.splice(i, 1)
      }
    }
    hold.status = 'Naughty'

    var toArray = this.state.naughty;
    if (toArray.length === 0){
      toArray.push(hold)
    } else if (toArray.length === 1) {
      if (toArray[0].id > index){
        toArray.unshift(hold);
      } else {
        toArray.push(hold);
      }
    } else if (toArray[toArray.length - 1].id < index) {
      toArray.push(hold);
    } else if (toArray[0].id > index) {
      toArray.unshift(hold);
    } else {
      for (var j = 1; j < toArray.length; j++){
        if (index > toArray[j - 1].id && index < toArray[j].id){
          toArray.splice((j), 0 , hold)
          j++;
        }
      }
    }
    var object = {};
    object['index'] = index
    object['status'] = 'Naughty'
    object['present'] = 'Coal'
    $.ajax({
      url: '/update',
      type: 'POST',
      contentType: 'application/JSON',
      data: JSON.stringify(object),
      success: (data) => {
        this.sort()
      },
      error: (err) => {
        console.log('error')
      }
    })
  }


  changePresent(index){
    var present;
    var helper = function(){
      present = prompt('What gift do u want to give to them?')
      if (present === '' || present === null ) {
        alert('THINK OF SOMETHING!!!');
        helper();
      }
    }
    helper();
    var object = {};
    object['index'] = index;
    object['present'] = present;
    $.ajax({
      url: '/change',
      type: 'POST',
      contentType: 'application/JSON',
      data: JSON.stringify(object),
      success: (data) => {
        this.sort()
      },
      error: (err) => {
        console.log('error')
      }
    })
  }




  delete(index) {
    var array = this.state.naughty;
    for (var i = 0; i < array.length; i++){
      if (index === array[i].id){
        array.splice(i, 1);
      }
    }

    var object = {};
    object['index'] = index
    $.ajax({
      url: '/delete',
      type: 'POST',
      contentType: 'application/JSON',
      data: JSON.stringify(object),
      success: (data) => {
        this.sort()
      },
      error: (err) => {
        console.log('error')
      }
    })
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div>Christmas List</div>
        </div>
        <div className="input"> Choose where to place people you know!! :
          <input className="in" id="add" type="text" onChange={this.insertName}></input>
          <button className="out" value="Nice" onClick={this.addNice}>Nice</button>
          <button className="out" value="Naughty" onClick={this.addNaughty}>Naughty</button>
        </div>
        <div className="Lists">
          <div className="GoodList">
            <NiceList info={this.state.nice} click={this.changeToNaughty} change={this.changePresent}/>
          </div>
          <div className="BadList">
            <NaughtyList info={this.state.naughty} click={this.changeToNice} remove={this.delete}/>
          </div>
        </div>  
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));