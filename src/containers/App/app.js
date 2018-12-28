import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from './styles';
import TodoForm from './todoForm';

class App extends PureComponent {
  state = {
    todo: '',
    todoList: [],
    type: 'all',
  };

  onChangeText = e => {
    this.setState({ todo: e.target.value });
  };

  addTask = e => {
    e.preventDefault();
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
      { ...todoList[index], isDone: !todoList[index].isDone },
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

  filterTodo = type => {
    this.setState({ type });
  };

  render() {
    const { todo, todoList, type } = this.state;
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit">
              Todo Application
            </Typography>
          </Toolbar>
        </AppBar>

        <div style={styles.wrapper}>
          <TodoForm todo={todo} addTask={this.addTask} onChangeText={this.onChangeText} />
          <List>
            {todoList
              .filter(item => {
                switch (type) {
                  case 'pending':
                    return !item.isDone;
                  case 'completed':
                    return item.isDone;
                  default:
                    return true;
                }
              })
              .map(item => (
                <ListItem key={item.id} role={undefined} dense button>
                  <Checkbox
                    checked={item.isDone}
                    tabIndex={-1}
                    onClick={() => this.completeTask(item.id)}
                    disableRipple
                  />
                  <ListItemText primary={item.text} />
                  <ListItemSecondaryAction>
                    <IconButton aria-label="Comments" onClick={() => this.deleteTask(item.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
          </List>
          <div>
            <input type="button" value="All" onClick={() => this.filterTodo('all')} />
            <input type="button" value="Pending" onClick={() => this.filterTodo('pending')} />
            <input type="button" value="Completed" onClick={() => this.filterTodo('completed')} />
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {};

App.defaultProps = {};

export default App;
