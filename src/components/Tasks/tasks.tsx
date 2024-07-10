import React, { useState, useEffect, FormEvent } from "react";
import styles from "./styles.module.scss";

type Task = {
  id: number;
  title: string;
  done: boolean;
};

export const Tasks: React.FC = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [tasks, setTasks] = useState([] as Task[]);

  function handleSubmitAddTask(event: FormEvent) {
    event.preventDefault();

    if (taskTitle.length < 3) {
      alert("ENTER A VALID TASK");
      return;
    }
    const newTasks = [
      { id: new Date().getTime(), title: taskTitle, done: false },
      ...tasks,
    ];

    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    setTaskTitle("");
  }

  useEffect(() => {
    const taskOnLocalStorage = localStorage.getItem("tasks");

    if (taskOnLocalStorage) {
      setTasks(JSON.parse(taskOnLocalStorage));
    }
  }, []);

  return (
    <section className={styles.container}>
      <form onSubmit={handleSubmitAddTask}>
        <div>
          <label htmlFor="task-title">Add Task</label>
          <input
            value={taskTitle}
            onChange={(event) => setTaskTitle(event.target.value)}
            type="text"
            id="task-title"
            placeholder="Task to add..."
          />
        </div>
        <button type="submit">ADD</button> {/* Fixed type attribute */}
      </form>
      <ul>
        {tasks.map((task) => {
          return (
            <li key={task.id}>
              <input type="checkbox" id={`task-${task.id}`} />
              <label htmlFor={`task-${task.id}`}>{task.title}</label>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
