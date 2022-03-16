import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faCheck } from '@fortawesome/free-solid-svg-icons';

const TodoItems = ({ task, id, title, completed, handleCompleteTask, handleDelete, editTask }) => {
  const [edit, setEdit] = useState(false);
  const [editText, setEditText] = useState('');

  const handleSubmit = (id, editText, e) => {
    if (e.key === 'Enter' || e.type === 'click') {
      editTask(id, editText);
      setEdit(false);
      setEditText('');
    }
  };

  let viewMode = {};
  let editMode = {};
  if (edit) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }
  return (
    <li>
      <div
        className="listItem"
        onDoubleClick={() => {
          setEdit(true);
          setEditText(title);
        }}
      >
        <input
          type="checkbox"
          style={viewMode}
          checked={completed}
          onChange={handleCompleteTask.bind(this, id)}
        />
        <p style={viewMode}>{title}</p>
        <input
          type="text"
          value={editText}
          style={editMode}
          className="textInput"
          onChange={(e) => setEditText(e.target.value)}
          onKeyDown={handleSubmit.bind(this, id, editText)}
        />
        <div className="buttons">
          <FontAwesomeIcon
            className="delBtn"
            icon={faXmark}
            style={viewMode}
            onClick={handleDelete.bind(this, id)}
          />
          <FontAwesomeIcon
            className="submitBtn"
            icon={faCheck}
            style={editMode}
            onClick={handleSubmit.bind(this, id, editText)}
          />
        </div>
      </div>
    </li>
  );
};
export default TodoItems;
