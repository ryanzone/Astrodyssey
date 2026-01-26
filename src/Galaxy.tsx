import { useRef, useEffect } from 'react';

export default function Galaxy() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let cx = width / 2;
    let cy = height / 2;


    let dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.scale(dpr, dpr);

    const STAR_COUNT = 750;

    const stars = Array.from({ length: STAR_COUNT }).map(() => ({
      angle: Math.random() * 2 * Math.PI,
      radius: Math.random() * (Math.min(width, height) / 2),
      speed: Math.random() * 0.002 + 0.001,
      baseSize: Math.random() * 1.5 + 0.5,
      pulseSpeed: Math.random() * 0.03 + 0.01,
      pulseOffset: Math.random() * Math.PI * 2,
      color: [
        'rgba(255,255,255,0.9)',
        'rgba(255, 0, 128, 0.9)',
        'rgba(255, 255, 0, 0.9)',
        'rgba(0,150,255,0.9)',
        'rgba(144,238,144,0.9)',
      ][Math.floor(Math.random() * 5)],
    }));

    const animate = (t: number) => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, width, height);

      for (let star of stars) {
        const x = cx + Math.cos(star.angle) * star.radius;
        const y = cy + Math.sin(star.angle) * star.radius;

        const pulse =
          star.baseSize +
          Math.sin(t * star.pulseSpeed + star.pulseOffset) * 0.5;

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, pulse * 2.5);
        gradient.addColorStop(0, star.color);
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, pulse, 0, Math.PI * 2);
        ctx.fill();

        star.angle += star.speed;
      }

      requestAnimationFrame((newTime) => animate(newTime / 10));
    };

    requestAnimationFrame((t) => animate(t / 10));

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      cx = width / 2;
      cy = height / 2;

      dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -50,
        background: 'transparent',
        pointerEvents: 'none',
        touchAction: 'none',
      }}
    />
  );
}
