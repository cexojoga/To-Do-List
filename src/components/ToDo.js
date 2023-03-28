import "../App.css";
import { useState } from "react";
import TaskForm from "./TaskForm";
import Task from "./Task";
import TaskSearcher from "./TaskSearcher";

function ToDo() {
  const [tasks, setTasks] = useState([]);

  const handleChildNewTask = (newTask) => {
    const toDo = {
      id: Math.floor(Math.random() * 1000),
      taskName: newTask,
      status: "New",
    };
    setTasks((currentTasks) => [...currentTasks, toDo]);
  };

  const handleDeleteTask = (taskId) => {
    const deletetasks = tasks.filter((task) => task.id !== taskId);
    setTasks(deletetasks);
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
    </div>
  );
}

export default ToDo;
