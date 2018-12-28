import React from 'react';
import PropTypes from 'prop-types';

const todoForm = ({ addTask, todo, onChangeText }) => {
  return (
    <form onSubmit={addTask}>
      <input type="text" value={todo} onChange={onChangeText} />
      <input type="submit" value="Add Task" />
    </form>
  );
};

todoForm.propTypes = {
  addTask: PropTypes.func.isRequired,
  todo: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
};

export default todoForm;
