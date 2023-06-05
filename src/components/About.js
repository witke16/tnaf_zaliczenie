import React, { useRef, useEffect } from 'react';
import './About.css';
import earthImage from '../earth.jpg';

const About = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let angle = 0;
    const earthRadius = 60;
    const moonRadius = 15;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth * 0.8;
      canvas.height = window.innerHeight * 0.8;
    };

    resizeCanvas();

    window.addEventListener('resize', resizeCanvas);

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 3;
      const centerY = canvas.height / 3;
      const orbitRadius = Math.min(canvas.width, canvas.height) / 4;

      // Rysowanie większego koła w tle
      ctx.beginPath();
      ctx.arc(centerX, centerY, orbitRadius - 10, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.2)';
      ctx.lineWidth = 5;
      ctx.stroke();

      // Rysowanie Ziemi
      const earthX = centerX;
      const earthY = centerY;
      ctx.save();
      ctx.beginPath();
      ctx.arc(earthX, earthY, earthRadius, 0, Math.PI * 2);
      ctx.closePath();
      ctx.clip();
      const earthImg = new Image();
      earthImg.src = earthImage;
      ctx.drawImage(earthImg, earthX - earthRadius, earthY - earthRadius, earthRadius * 2, earthRadius * 2);
      ctx.restore();

      // Rysowanie Księżyca
      const moonX = centerX + Math.cos(angle) * orbitRadius;
      const moonY = centerY + Math.sin(angle) * orbitRadius;
      ctx.beginPath();
      ctx.arc(moonX, moonY, moonRadius, 0, Math.PI * 2);
      ctx.fillStyle = 'gray';
      ctx.fill();

      angle += 0.01;

      animationFrameId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="about-container">
      <h2>About</h2>
      <p>This is a final project for the subject "Tworzenie nowoczesnych aplikacji frontendowych w praktyce".</p>
      <p>The website was created by Witold Weiner</p>
      <canvas ref={canvasRef} className="canvas-element" />
    </div>
  );
};

export default About;