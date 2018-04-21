import React from 'react'
import './Form.css';

/*
class App extends React.Component {

 
    
    render() {
      return (<form>
      <h1> The To Do List</h1>
      
      <input type="text" value={this.state.title} onChange={this.handleChange.bind(this)} />
      <br /><br />
  
      <input  
        type="button"
        value="Add to list"
        onClick={this.props.clickHandler}
        />
  
      <ul className="Form-list1">
        <li>Clean clothes</li>
        <li>Workout</li>
        <li>Pay bills</li>
      </ul>
      </form>
      )
    }

    console.log(value)
  }

  export default Form;