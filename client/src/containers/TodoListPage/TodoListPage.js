import React from 'react';
import PropTypes from 'prop-types';
import TodoList from '../../components/TodoList';

const TodoListPage = (props) => {
  const {
    todos,
    onUpdateTodo,
    onUpdateTodoOrder
  } = props;

  return (
    <div>
      <TodoList
        items={ todos }
        onUpdateItem={ onUpdateTodo }
        onUpdateItemOrder={ onUpdateTodoOrder }
      />
    </div>
  );
}

TodoListPage.propTypes = {
  todos: PropTypes.array.isRequired,
  onUpdateTodo: PropTypes.func.isRequired,
  onUpdateTodoOrder: PropTypes.func.isRequired
};

export default TodoListPage;
