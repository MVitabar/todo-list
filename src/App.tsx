import { Header } from "./components/Header/Header";
import "./styles/global.css";
import { Tasks } from "./components/Tasks/tasks";
import { TaskProvider } from "./context/TasksContext";

function App() {
  return (
    <TaskProvider>
      <Header />;
      <Tasks />
    </TaskProvider>
  );
}

export default App;
