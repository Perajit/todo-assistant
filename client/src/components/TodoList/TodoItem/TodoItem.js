import React from 'react';
import PropTypes from 'prop-types';
import { SortableElement } from 'react-sortable-hoc';
import moment from 'moment';

const handleToggleImportant = (props) => (event) => {
  const {
    item: {
      id,
      important
    },
    onToggleImportant
  } = props;

  onToggleImportant({ id, important: !important });
};

const handleToggleCompleted = (props) => (event) => {
  const {
    item: {
      id,
      completed
    },
    onToggleCompleted
  } = props;
  
  onToggleCompleted({ id, completed: !completed });
};

const TodoItem = (props) => {
  const {
    item: {
      title,
      datetime,
      important,
      completed
    }
  } = props;

  return (
    <li style={{ border: '1px solid black' }}>
      <div>
        <input
          type="checkbox"
          name="important"
          defaultChecked={ important }
          onClick={ handleToggleImportant(props) }
        />
        important
      </div>
      <div>
        <input
          type="checkbox"
          name="completed"
          defaultChecked={ completed }
          onClick={ handleToggleCompleted(props) }
        />
        completed
      </div>
      <div>{ title }</div>
      <div>{ moment(datetime).format('DD/MM/YY hh:mm') }</div>
    </li>
  );
}

TodoItem.propTypes = {
  item: PropTypes.object.isRequired,
  onToggleImportant: PropTypes.func.isRequired,
  onToggleCompleted: PropTypes.func.isRequired
};

export default SortableElement(TodoItem);
