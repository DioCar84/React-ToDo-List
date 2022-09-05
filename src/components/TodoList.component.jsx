import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import NewTodoForm from "./NewTodoForm.component";
import Todo from "./Todo.component";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
    };
    this.createTodo = this.createTodo.bind(this);
  }

  createTodo(todo) {
    let newTodo = { ...todo, id: uuidv4() };
    this.setState((st) => {
      return { todoList: [...st.todoList, newTodo] };
    });
  }

  remove(id) {
    let newTodos = this.state.todoList.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({ todoList: newTodos });
  }

  render() {
    return (
      <div>
        <NewTodoForm createTodo={this.createTodo} />
        <ul>
          {this.state.todoList.map((todo) => {
            return (
              <li key={todo.id}>
                <Todo
                  todo={todo.todo}
                  id={todo.id}
                  remove={() => this.remove(todo.id)}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default TodoList;
