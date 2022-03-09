import React, { useRef } from "react";

import styles from "../styles/Home.module.css";

import { useGame } from "../hooks/useGame";
import gameConfig from "../game";

export default function Home() {
  const parentEl = useRef<HTMLDivElement>(null);
  useGame(gameConfig, parentEl);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div ref={parentEl} className="gameContainer" />
      </main>
    </div>
  );
}
