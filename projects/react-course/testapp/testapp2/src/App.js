//import React, { Component } from 'react';
//import logo from './logo.svg';
//import ReactDOM from 'react-dom';
import React from 'react';
import './App.css';
import TodoItems from "./TodoItems";
//import Form from "./Form"


//hello world
/*
export default class App extends Component {
  render() {
    return (
      <h1> Hello Mo Fos!</h1>
    );
  }
}
*/

//hello world version 2
/*
class App extends React.Component {
  render() {
    return <h1> Hello Mo Fos!!!</h1>;
  }
}

export default App;
*/


//flat To-Do List
/*
class App extends React.Component {

  render() {
    return (<form>
    <h1> The To Do List</h1>
    <ul>
      <li>Clean clothes</li>
      <li>Workout</li>
      <li>Pay bills</li>
    </ul>
    </form>
    )
  }
}
*/


// Add a text box to To-Do List
/*
class App extends React.Component {

  render() {
    return (<form>
    <h1> The To Do List</h1>
    
    <input type="text" value={this.props.step} onChange={this.props.text} />
    <br /><br />

    <ul>
      <li>Clean clothes</li>
      <li>Workout</li>
      <li>Pay bills</li>
    </ul>
    </form>
    )
  }
}
*/


//Add a button to the to-do list
/*
class App extends React.Component {

  render() {
    return (<form>
    <h1> The To Do List</h1>
    
    <input type="text" value={this.props.step} onChange={this.props.text} />
    <br /><br />

    <input  
      type="button"
      value="Add to list"
      onClick={this.props.clickHandler}
      />

    <ul>
      <li>Clean clothes</li>
      <li>Workout</li>
      <li>Pay bills</li>
    </ul>
    </form>
    )
  }
}
*/


//Make the unordered list have no bullets via css
/*
class App extends React.Component {

  render() {
    return (<form>
    <h1> The To Do List</h1>
    
    <input type="text" value={this.props.step} onChange={this.props.text} />
    <br /><br />

    <input  
      type="button"
      value="Add to list"
      onClick={this.props.clickHandler}
      />

    <ul className="App-list1">
      <li>Clean clothes</li>
      <li>Workout</li>
      <li>Pay bills</li>
    </ul>
    </form>
    )
  }
}

*/


// Make the form do something, still in single file



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };

    this.addItem = this.addItem.bind(this);

    this.deleteItem = this.deleteItem.bind(this);
  }
  
  addItem(e) {
      if (this._inputElement.value !== "") {
        var newItem = {
          text: this._inputElement.value,
          key: Date.now()
        };

        this.setState((prevState) => {
          return {
            items: prevState.items.concat(newItem)
          };
         });

        this._inputElement.value ="";
        }

      console.log(this.state.items);

      e.preventDefault();
    }

  deleteItem(key) {
    var filteredItems = this.state.items.filter(function (item) {
      return (item.key !== key);
    });

  this.setState({
    items: filteredItems
  });
}

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
            <form onSubmit={this.addItem}>
               <input ref={(a) => this._inputElement = a}
                 placeholder="enter to-do item">
               </input>
               <button type="submit">add</button>
            </form>
          </div>
          <TodoItems entries={this.state.items}
                     delete={this.deleteItem}/>
          </div>
    );
  }
}
  
export default App;
