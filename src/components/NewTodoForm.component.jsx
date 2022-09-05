import React, { Component } from "react";

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.createTodo(this.state);
    this.setState({
      todo: "",
    });
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          id="todo"
          name="todo"
          value={this.state.todo}
          onChange={this.handleChange}
        ></input>
        <button>Create ToDo!</button>
      </form>
    );
  }
}

export default NewTodoForm;
