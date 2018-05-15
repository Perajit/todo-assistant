import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TodoListPage from './TodoListPage';

import {
  getTodos,
  updateTodo,
  updateTodoOrder
} from '../../actions/todoActions';

class TodoListPageContainer extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    onGetTodos: PropTypes.func.isRequired,
    onUpdateTodo: PropTypes.func.isRequired,
    onUpdateTodoOrder: PropTypes.func.isRequired
  }

  handleGetTodos = () => {
    this.props.onGetTodos();
  }

  handleUpdateTodo = (oldTodo, newTodo) => {
    this.props.onUpdateTodo(oldTodo, newTodo);
  }

  handleUpdateTodoOrder = (oldIndex, newIndex) => {
    this.props.onUpdateTodoOrder(oldIndex, newIndex);
  }

  componentDidMount() {
    this.handleGetTodos();
  }
  
  render() {
    let {
      todos
    } = this.props;

    return (
      <TodoListPage
        todos={ todos }
        onUpdateTodo={ this.handleUpdateTodo }
        onUpdateTodoOrder={ this.handleUpdateTodoOrder }
      />
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos
});

const mapDispatchToProps = (dispatch) => ({
  onGetTodos: () => dispatch(getTodos()),
  onUpdateTodo: (index, todo) => dispatch(updateTodo(index, todo)),
  onUpdateTodoOrder: (oldIndex, newIndex) => dispatch(updateTodoOrder(oldIndex, newIndex))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListPageContainer);
