import React, { useRef, useEffect } from "react";

const TechBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width, height;
    let particles = [];
    let animationFrameId;

    const init = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      createParticles();
    };

    const createParticles = () => {
      particles = [];
      const density = window.innerWidth < 768 ? 40 : 80;
      
      for (let i = 0; i < density; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 1.5 + 0.5,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      ctx.fillStyle = "rgba(0, 229, 255, 0.2)"; // Cyan
      ctx.strokeStyle = "rgba(0, 229, 255, 0.05)"; 
      
      for (let i = 0; i < particles.length; i++) {
        let p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          let p2 = particles[j];
          let dist = Math.sqrt((p.x - p2.x) ** 2 + (p.y - p2.y) ** 2);
          if (dist < 150) {
            ctx.lineWidth = (1 - dist / 150) * 0.8;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleResize = () => {
      init();
    };
    
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1, 
        pointerEvents: "none",
        background: "transparent" 
      }}
    />
  );
};

export default TechBackground;
