import React, { Component } from 'react';
import List from "./List";

export default class App extends Component {

  constructor(prop){
    super(prop);
    this.state = {
      todo : "",
      items: []
    }
  }
  onChange = (event) => {
    this.setState({todo: event.target.value});
  }

  // onSubmit method will will push todo to items
  // and clear input field(todo), preventDefault
  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      todo: "",
      items: [...this.state.items, this.state.todo]
    });
  }

  render() {
    return (
      <div className="App">
        <main className="App-header">
        <form className="submit" onSubmit={this.onSubmit}>
          {/* input state will update when changed */}
          <input value={this.state.todo} onChange={this.onChange}/>
        <button>Add Todo</button>
        </form>
        <List items={this.state.items}/>
        </main>
      </div>
    );
  }
}

