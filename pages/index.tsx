import React, { useRef } from "react";
import styles from "../styles/Home.module.css";

// sol #1
// import { useGame } from "../hooks/useGame";
// import gameConfig from "../game";

// sol #2
import dynamic from 'next/dynamic'
import Phaser from 'phaser';
const IonPhaser = dynamic(
  () => import('@ion-phaser/react').then((mod) => mod.IonPhaser),
  { 
    ssr: false 
  }
)


export default function Home() {
  // sol #1
  // const parentEl = useRef<HTMLDivElement>(null);
  // useGame(gameConfig, parentEl);

  // sol #2
  const state = {
    initialize: true,
    game: {
      width: "100%",
      height: "100%",
      type: Phaser.AUTO,
      scene: {
        init: function() {
          this.cameras.main.setBackgroundColor('#24252A')
        },
        create: function() {
          this.helloWorld = this.add.text(
            this.cameras.main.centerX, 
            this.cameras.main.centerY, 
            "Hello World", { 
              font: "40px Arial", 
              fill: "#ffffff" 
            }
          );
          this.helloWorld.setOrigin(0.5);
        },
        update: function() {
          this.helloWorld.angle += 1;
        }
      }
    }
  }


  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {/* // sol #1 */}
        {/* <div ref={parentEl} className="gameContainer" /> */}
        {/* // sol #2 */}
        <IonPhaser game={state.game} initialize={state.initialize} />
      </main>
    </div>
  );
}
