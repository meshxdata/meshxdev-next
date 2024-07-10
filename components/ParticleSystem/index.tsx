import dynamic from "next/dynamic";
import React, { useEffect, useRef } from "react";

import { type Sketch } from "@p5-wrapper/react";
import { NextReactP5Wrapper } from "@p5-wrapper/next";

const sketch: Sketch = (p5) => {
  const gridSize = 16;
  const spacing = 64;
  let particles: any[][][] = [];
  let angle = 0;
  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, 780, p5.WEBGL);
    p5.background("#171819");
    for (let x = 0; x < gridSize; x++) {
      particles[x] = [];
      for (let y = 0; y < gridSize; y++) {
        particles[x][y] = [];
        for (let z = 0; z < gridSize; z++) {
          particles[x][y][z] = p5.createVector(
            (x - gridSize / 2) * spacing,
            (y - gridSize / 2) * spacing,
            (z - gridSize / 2) * spacing
          );
        }
      }
    }
  };

  p5.draw = () => {
    p5.background("#171819");
    p5.lights();
    p5.translate(0, 0, -200);
    p5.rotateY(angle);
    p5.rotateX(-0.5);
    angle += 0.0005;

    p5.noStroke();
    p5.fill(255);

    for (let x = 0; x < gridSize; x++) {
      for (let y = 0; y < gridSize; y++) {
        for (let z = 0; z < gridSize; z++) {
          let p2 = particles[x][y][z];
          p5.push();
          p5.translate(p2.x, p2.y, p2.z);
          p5.box(0.5);
          p5.pop();
        }
      }
    }
  };

  p5.windowResized = () => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  };
};

const ParticleSystem = () => {
  const renderRef = useRef<any>();

  // useEffect(() => {
  //   const p5 = require("p5");

  //   new p5((p: any) => {
  //     const gridSize = 16;
  //     const spacing = 64;
  //     let particles: any[][][] = [];
  //     let angle = 0;

  //     p.setup = () => {
  //       p.createCanvas(p.windowWidth, 780).parent(renderRef.current);
  //       p.background("#171819");

  //       for (let x = 0; x < gridSize; x++) {
  //         particles[x] = [];
  //         for (let y = 0; y < gridSize; y++) {
  //           particles[x][y] = [];
  //           for (let z = 0; z < gridSize; z++) {
  //             particles[x][y][z] = p.createVector(
  //               (x - gridSize / 2) * spacing,
  //               (y - gridSize / 2) * spacing,
  //               (z - gridSize / 2) * spacing
  //             );
  //           }
  //         }
  //       }
  //     };

  //     p.draw = () => {
  //       p.background("#171819");
  //       p.lights();
  //       p.translate(0, 0, -200);
  //       p.rotateY(angle);
  //       p.rotateX(-0.5);
  //       angle += 0.0005;

  //       p.noStroke();
  //       p.fill(255);

  //       for (let x = 0; x < gridSize; x++) {
  //         for (let y = 0; y < gridSize; y++) {
  //           for (let z = 0; z < gridSize; z++) {
  //             let p2 = particles[x][y][z];
  //             p.push();
  //             p.translate(p2.x, p2.y, p2.z);
  //             p.box(0.5);
  //             p.pop();
  //           }
  //         }
  //       }
  //     };

  //     p.windowResized = () => {
  //       p.resizeCanvas(p.windowWidth, p.windowHeight);
  //     };
  //   });
  // }, []);
  return <NextReactP5Wrapper sketch={sketch}  id="particleCanvas" className="particle-canvas" />;
  // return (
  //   <div id="particleCanvas" className="particle-canvas" ref={renderRef}></div>
  // );
};

export default dynamic(() => Promise.resolve(ParticleSystem), {
  ssr: false,
});
