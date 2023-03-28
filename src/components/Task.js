import { useState } from "react";
import "./Task.css";

function Task(props) {
  const [edition, setEdition] = useState(false);

  const handleDelete = () => {
    props.deleteTask(props.task.id);
  };

  const handleTaskDone = () => {
    props.taskDone(props.task.id);
  };

  const handleEditedName = (e) => {
    if (e.key === "Enter") {
      props.editTaskName(props.task.id, e.target.value);
      setEdition(!edition);
    }
  };

  const handleEditionMode = () => {
    edition ? setEdition(false) : setEdition(true);
  };

  return (
    <div className="task">
      {props.task.status === "New" ? (
        <div className="task__status-red"></div>
      ) : props.task.status === "In progress" ? (
        <div className="task__status-orange"></div>
      ) : (
        <div className="task__status-green"></div>
      )}
      <div className="task__info">
        {edition ? (
          <input
            className="task__info_info"
            type="text"
            defaultValue={props.task.taskName}
            onKeyDown={handleEditedName}
          ></input>
        ) : (
          <div className="task__info_info">{props.task.taskName}</div>
        )}
        <div className="task__info_buttons">
          <button onClick={handleEditionMode} className="edit-btn">
            Edit
          </button>
          <button onClick={handleDelete} className="delete-btn">
            Delete
          </button>
          <button onClick={handleTaskDone} className="done-btn">
            Done
          </button>
        </div>
      </div>
    </div>
  );
}

export default Task;
