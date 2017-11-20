import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo'

class App extends Component {
  constructor(){
    super()

    this.state = {
      todos: []
    }

    this.todoInput = ""

  }

  addTodo(){
    let todoValue = this.todoInput.value

    let newTodo = this.state.todos
    newTodo.push(todoValue)

    this.setState({
      todos: newTodo
    })

    // Reset Value
    this.todoInput.value = ""

    // Set focus to input
    this.todoInput.focus()

  }

  removeTodo(id) {
    let todos = this.state.todos.filter((todo,index) => {
      return id !== index
    })

    this.setState({
      todos: todos
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Todo List</h1>
        </header>
        
        <p>Todos count : {this.state.todos.length}</p>
        <input type="text" placeholder="Enter Todo" ref={(input) => this.todoInput = input}/>
        <button onClick={this.addTodo.bind(this)}>Add</button>
        <ol>
          {this.state.todos.map((todo,index) => {
            return (<Todo id={index} key={index} todo={todo} onRemove={() => this.removeTodo(index)}/>)
          })}
        </ol>
      </div>
    );
  }
}


export default App;



// class TodoApp extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { items: [], text: '' };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   render() {
//     return (
//       <div>
//         <h3>TODO</h3>
//         <TodoList items={this.state.items} />
//         <form onSubmit={this.handleSubmit}>
//           <input
//             onChange={this.handleChange}
//             value={this.state.text}
//           />
//           <button>
//             Add #{this.state.items.length + 1}
//           </button>
//         </form>
//       </div>
//     );
//   }

//   handleChange(e) {
//     this.setState({ text: e.target.value });
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     if (!this.state.text.length) {
//       return;
//     }
//     const newItem = {
//       text: this.state.text,
//       id: Date.now()
//     };
//     this.setState(prevState => ({
//       items: prevState.items.concat(newItem),
//       text: ''
//     }));
//   }
// }

// class TodoList extends React.Component {
//   render() {
//     return (
//       <ul>
//         {this.props.items.map(item => (
//           <li key={item.id}>{item.text}</li>
//         ))}
//       </ul>
//     );
//   }
// }

// ReactDOM.render(<TodoApp />, mountNode);
