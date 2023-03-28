import "./TaskForm.css";

function TaskForm(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.childNewTask(e.target[0].value);
    e.target[0].value = "";
  };

  return (
    <form onSubmit={handleSubmit} className="taskForm">
      <input placeholder="Añade una tarea" name="taskName"></input>
      <button type="submit">Añadir</button>
    </form>
  );
}

export default TaskForm;
