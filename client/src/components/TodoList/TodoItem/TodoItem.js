import React from 'react';
import PropTypes from 'prop-types';
import { SortableElement } from 'react-sortable-hoc';
import moment from 'moment';
import Checkbox from 'material-ui/Checkbox';
import {
  ListItem,
  ListItemSecondaryAction,
  ListItemText
} from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import Tooltip from 'material-ui/Tooltip';

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
      time,
      important,
      completed
    }
  } = props;

  // return (
  //   <li style={{ border: '1px solid black' }}>
  //     <div>
  //       <input
  //         type="checkbox"
  //         name="important"
  //         defaultChecked={ important }
  //         onClick={ handleToggleImportant(props) }
  //       />
  //       important
  //     </div>
  //     <div>
  //       <input
  //         type="checkbox"
  //         name="completed"
  //         defaultChecked={ completed }
  //         onClick={ handleToggleCompleted(props) }
  //       />
  //       completed
  //     </div>
  //     <div>{ title }</div>
  //     <div>{ moment(time).format('DD/MM/YY hh:mm') }</div>
  //   </li>
  // );
  return (
    <ListItem>
      <Tooltip title="Set as completed">
        <Checkbox
          checked={ completed }
          onChange={ handleToggleCompleted(props) }
          disableRipple
        />
      </Tooltip>
      <ListItemText
        primary={ title }
        secondary={ moment(time).format('DD/MM/YY hh:mm') }
      />
      <ListItemSecondaryAction>
        <Tooltip title="Set as important">
          <IconButton
            name="important"
            color={ important ? 'primary' : 'default' }
            value={ important }
            onClick={ handleToggleImportant(props) }
          >
            <Icon>star</Icon>
          </IconButton>
        </Tooltip>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

TodoItem.propTypes = {
  item: PropTypes.object.isRequired,
  onToggleImportant: PropTypes.func.isRequired,
  onToggleCompleted: PropTypes.func.isRequired
};

export default SortableElement(TodoItem);
