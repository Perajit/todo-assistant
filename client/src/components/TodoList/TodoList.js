import React from 'react';
import PropTypes from 'prop-types';
import { compose, withProps } from 'recompose';
import { SortableContainer } from 'react-sortable-hoc';
import TodoItem from './TodoItem';

const handleToggleCompleted = (props, index) => (detail) => {
  const { items, onUpdateItem } = props;
  const { completed } = detail;
  const oldItem = items[index];
  const newItem = Object.assign({}, oldItem, { completed });

  onUpdateItem(oldItem, newItem);
};

const handleToggleImportant = (props, index) => (detail) => {
  const { items, onUpdateItem } = props;
  const { important } = detail;
  const oldItem = items[index];
  const newItem = Object.assign({}, oldItem, { important });

  onUpdateItem(oldItem, newItem);
};

const handleSort = (props) => (detail) => {
  const { onUpdateItemOrder } = props;
  const { oldIndex, newIndex } = detail;

  onUpdateItemOrder(oldIndex, newIndex);
};

const shouldCancelStartSorting = (event) => {
  // Workaround to fix click event for inputs
  const target = event.target;
  const isInput = target.tagName.toLowerCase() === 'input';

  return isInput;
};

const TodoList = (props) => {
  const { items } = props;

  return (
    <ul>
      {
        items.map((item, index) => (
          <TodoItem
            key={ item.id }
            index={ index }
            item={ item }
            onToggleCompleted={ handleToggleCompleted(props, index) }
            onToggleImportant={ handleToggleImportant(props, index) }
            disabled={ item.important }
          />
        ))
      }
    </ul>
  );
};

TodoList.propTypes = {
  items: PropTypes.array.isRequired,
  onUpdateItem: PropTypes.func.isRequired,
  onUpdateItemOrder: PropTypes.func.isRequired
};

export default compose(
  withProps((props) => ({
    shouldCancelStart: shouldCancelStartSorting,
    onSortEnd: handleSort(props)
  })),
  SortableContainer
)(TodoList);
