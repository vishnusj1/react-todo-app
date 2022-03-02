import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faCheck, faPenToSquare } from '@fortawesome/free-solid-svg-icons';

export default class TodoItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      editText: '',
    };
    this.handleEdit = this.handleEdit.bind(this);
    this.handleEditText = this.handleEditText.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEdit() {
    this.setState(
      {
        edit: true,
        editText: this.props.title,
      },
      () => console.log(this.state)
    );
  }

  handleEditText(e) {
    this.setState({
      editText: e.target.value,
    });
  }

  handleSubmit(task, text, e) {
    if (e.key === 'Enter' || e.type === 'click') {
      this.props.editTask(task, text);
      this.setState({
        edit: false,
        editText: '',
      });
    }
  }

  render() {
    const text = this.state.editText;
    const { task, id, title, completed, handleCompleteTask, handleDelete } = this.props;
    let viewMode = {};
    let editMode = {};
    if (this.state.edit) {
      viewMode.display = 'none';
    } else {
      editMode.display = 'none';
    }
    return (
      <li>
        <div className="listItem" onDoubleClick={this.handleEdit.bind(this)}>
          <input
            type="checkbox"
            style={viewMode}
            checked={completed}
            onChange={handleCompleteTask.bind(this, task)}
          />
          <p style={viewMode}>{title}</p>
          <input
            type="text"
            value={text}
            style={editMode}
            className="textInput"
            onChange={this.handleEditText.bind(this)}
            onKeyDown={this.handleSubmit.bind(this, task, text)}
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
              onClick={this.handleSubmit.bind(this, task, text)}
            />
          </div>
        </div>
      </li>
    );
  }
}
