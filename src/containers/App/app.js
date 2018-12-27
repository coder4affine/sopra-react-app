import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import styles from './styles';

class App extends Component {
  state = {
    todo: '',
    todoList: [],
  };

  onChangeText = e => {
    this.setState({ todo: e.target.value });
  };

  addTask = () => {
    const { todo, todoList } = this.state;
    this.setState({
      todoList: [
        ...todoList,
        {
          id: todoList.length + 1,
          text: todo,
          isDone: false,
        },
      ],
      todo: '',
    });
  };

  completeTask = id => {
    const { todoList } = this.state;
    const index = todoList.findIndex(x => x.id === id);
    const updatedTodos = [
      ...todoList.slice(0, index),
      { ...todoList[index], isDone: true },
      ...todoList.slice(index + 1),
    ];

    this.setState({ todoList: updatedTodos });
  };

  deleteTask = id => {
    const { todoList } = this.state;
    this.setState({
      todoList: todoList.filter(x => x.id !== id),
    });
  };

  render() {
    const { todo, todoList } = this.state;
    return (
      <div style={styles.wrapper}>
        <h1>Todo Application</h1>
        <div>
          <input type="text" value={todo} onChange={this.onChangeText} />
          <input type="button" value="Add Task" onClick={this.addTask} />
        </div>
        <div>
          {todoList.map(item => (
            <div key={item.id}>
              <input
                type="checkbox"
                checked={item.isDone}
                onChange={() => this.completeTask(item.id)}
              />
              <span>{item.text}</span>
              <input type="button" value="Delete" onClick={() => this.deleteTask(item.id)} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

App.propTypes = {};

App.defaultProps = {};

export default App;
