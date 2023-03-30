import "../App.css";
import { useState } from "react";
import TaskForm from "./TaskForm";
import Task from "./Task";
import TaskSearcher from "./TaskSearcher";

function ToDo() {
  const [tasks, setTasks] = useState([]);
  const [deleteModal, setDeleteModal] = useState(false);
  const [taskAboutToDelete, setTaskAboutToDelete] = useState("");

  function Modal() {
    if (deleteModal)
      return (
        <div className="deleteModal">
          <button
            className="modalButtonClose"
            onClick={() => {
              setDeleteModal(false);
              document
                .querySelector("#modalBackground")
                .classList.remove("modalBackground");
            }}
          >
            X
          </button>
          <div className="modalTitle">
            Seguro que quieres eliminar esta tarea?
          </div>
          <button
            className="modalButton"
            onClick={() => {
              const deletetasks = tasks.filter(
                (task) => task.id !== taskAboutToDelete
              );
              setTasks(deletetasks);
              setDeleteModal(false);
              document
                .querySelector("#modalBackground")
                .classList.remove("modalBackground");
            }}
          >
            Eliminar
          </button>
        </div>
      );
  }

  const handleChildNewTask = (newTask) => {
    const toDo = {
      id: Math.floor(Math.random() * 1000),
      taskName: newTask,
      status: "New",
    };
    setTasks((currentTasks) => [...currentTasks, toDo]);
  };

  const handleDeleteTask = (taskId) => {
    setTaskAboutToDelete(taskId);
    document.querySelector("#modalBackground").classList.add("modalBackground");
    setDeleteModal(true);
  };

  const handleTaskDone = (taskId) => {
    const newTaskState = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, status: "Done" };
      }
      return task;
    });

    setTasks(newTaskState);
  };

  const handleEditTask = (taskId, taskName) => {
    const newTaskNames = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, taskName: taskName };
      }
      return task;
    });
    setTasks(newTaskNames);
  };

  const handleSearchTask = (actualSearch) => {
    const tareas = document.querySelectorAll(".task");
    tareas.forEach((el) => {
      el.childNodes[1].firstChild.textContent
        .toLowerCase()
        .includes(actualSearch)
        ? el.classList.remove("dis-n")
        : el.classList.add("dis-n");
    });
  };

  return (
    <div className="App">
      <div
        id="modalBackground"
        className="modalBackground"
        onClick={() => {
          setDeleteModal(false);
          document
            .querySelector("#modalBackground")
            .classList.remove("modalBackground");
        }}
      ></div>
      <TaskForm childNewTask={handleChildNewTask}></TaskForm>
      <TaskSearcher searchTasks={handleSearchTask}></TaskSearcher>
      {tasks.map((task, index) => (
        <Task
          task={task}
          key={index}
          deleteTask={handleDeleteTask}
          taskDone={handleTaskDone}
          editTaskName={handleEditTask}
        ></Task>
      ))}
      <Modal></Modal>
    </div>
  );
}

export default ToDo;
