import "./TaskSearcher.css";

function TaskSearcher(props) {
  const handleSearchTask = (e) => {
    props.searchTasks(e.target.value);
  };

  return (
    <input
      className="task-searcher"
      placeholder="Busca tu tarea por nombre"
      onChange={handleSearchTask}
    ></input>
  );
}

export default TaskSearcher;
