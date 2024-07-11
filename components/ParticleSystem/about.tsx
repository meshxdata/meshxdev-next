import dynamic from "next/dynamic";
import React from "react";
import { type Sketch } from "@p5-wrapper/react";
import { NextReactP5Wrapper } from "@p5-wrapper/next";

const sketch: Sketch = (p5) => {
  let numParticles = 400; // Number of particles
  let particles: Particle[] = [];
  let lines: Line[] = [];
  const maxLines = 5; // Maximum number of lines to appear simultaneously

  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, 400, p5.WEBGL);
    p5.background("#171819");
    for (let i = 0; i < numParticles; i++) {
      particles.push(new Particle(p5));
    }
  };

  p5.draw = () => {
    p5.lights();
    // Move and display particles
    for (let i = 0; i < numParticles; i++) {
      particles[i].move(p5);
      particles[i].display(p5);
    }

    // Draw connecting lines
    for (let i = lines.length - 1; i >= 0; i--) {
      let l = lines[i];
      l.update();
      if (l.isDead()) {
        lines.splice(i, 1);
      } else {
        l.display(p5);
      }
    }

    // Add new lines randomly
    if (lines.length < maxLines) {
      for (let i = 0; i < numParticles; i++) {
        for (let j = i + 1; j < numParticles; j++) {
          if (
            p5.dist(
              particles[i].x,
              particles[i].y,
              particles[j].x,
              particles[j].y
            ) < 100 &&
            p5.random(1) < 0.001
          ) {
            lines.push(new Line(particles[i], particles[j], p5));
          }
        }
      }
    }
  };

  p5.windowResized = () => {
    p5.resizeCanvas(p5.windowWidth, 300);
  };

  class Particle {
    x: number;
    y: number;
    speedX: number;
    speedY: number;
    diameter: number;
    noiseOffsetX: number;
    noiseOffsetY: number;

    constructor(p5: any) {
      this.x = p5.random(p5.width);
      this.y = p5.random(p5.height);
      this.speedX = 0;
      this.speedY = 0;
      this.diameter = p5.random(1, 2);
      this.noiseOffsetX = p5.random(1000);
      this.noiseOffsetY = p5.random(1000);
    }

    move(p5: any) {
      this.speedX = p5.map(p5.noise(this.noiseOffsetX), 0, 1, -1, 1);
      this.speedY = p5.map(p5.noise(this.noiseOffsetY), 0, 1, -1, 1);
      this.noiseOffsetX += 0.01;
      this.noiseOffsetY += 0.01;

      this.x += this.speedX * 0.5;
      this.y += this.speedY * 0.5;

      // Wrap around the screen
      if (this.x < 0) this.x = p5.width;
      if (this.x > p5.width) this.x = 0;
      if (this.y < 0) this.y = p5.height;
      if (this.y > p5.height) this.y = 0;
    }

    display(p5: any) {
      p5.noStroke();
      p5.fill(150);
      p5.ellipse(this.x, this.y, this.diameter, this.diameter);
    }
  }

  class Line {
    p1: Particle;
    p2: Particle;
    lifespan: number;
    p5: any;

    constructor(p1: Particle, p2: Particle, p5: any) {
      this.p1 = p1;
      this.p2 = p2;
      this.lifespan = 80; // lasts for about a second at 60 FPS
      this.p5 = p5;
    }

    update() {
      this.lifespan--;
    }

    isDead() {
      return this.lifespan <= 0;
    }

    display(p5: any) {
      p5.stroke(255, p5.map(this.lifespan, 0, 80, 0, 255));
      p5.line(this.p1.x, this.p1.y, this.p2.x, this.p2.y);
    }
  }
};

const ParticleSystem = () => {
  return <NextReactP5Wrapper sketch={sketch} />;
};

export default dynamic(() => Promise.resolve(ParticleSystem), {
  ssr: false,
});
