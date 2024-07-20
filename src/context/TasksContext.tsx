import { createContext, useEffect, useState } from "react";

export interface Task {
  id: number;
  title: string;
  done: boolean;
}

interface TaskContextData {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export const TasksContext = createContext({} as TaskContextData);

interface TaskProviderProps {
  children: React.ReactNode;
}

export const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState([] as Task[]);

  useEffect(() => {
    const taskOnLocalStorage = localStorage.getItem("tasks");

    if (taskOnLocalStorage) {
      setTasks(JSON.parse(taskOnLocalStorage));
    }
  }, []);

  return (
    <TasksContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TasksContext.Provider>
  );
};
