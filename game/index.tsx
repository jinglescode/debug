import React, { useRef } from "react";

import { Types } from "phaser";

import { BootScene } from "./scenes";
import { useGame } from "../hooks/useGame";

const gameConfig: Types.Core.GameConfig = {
  width: "100%",
  height: "100%",
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  render: {
    antialias: false,
    pixelArt: true,
    roundPixels: true,
  },
  scene: BootScene,
};
// export default gameConfig;

const PhaserGame = () => {
  const parentEl = useRef<HTMLDivElement>(null);
  useGame(gameConfig, parentEl);

  return (
    <div className="container">
      <div ref={parentEl} />
    </div>
  );
};

export default PhaserGame;
