import { StatsCard } from "../StatsCard/StatsCard";
import styles from "./styles.module.scss";

import { useState } from "react";

export const Header: React.FC = () => {
  const [counter, setCounter] = useState(0);
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div>
          <h1>My Todo</h1>
          <span>Welcome stranger</span>
        </div>
        <div>
          <StatsCard title="Total de tarefas" value={counter} />
          <StatsCard title="Tarefas pendentes" value={counter} />
          <StatsCard title="Tarefas concluidas" value={counter} />
        </div>
      </div>
    </header>
  );
};
