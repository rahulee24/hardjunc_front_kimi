import { useEffect, useRef } from 'react';

export default function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    let w = 0;
    let h = 0;
    let dpr = 1;
    let animId = 0;
    let time = 0;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const render = () => {
      time += 0.008;
      ctx.clearRect(0, 0, w, h);

      const gridSize = 60;
      const offsetX = 0;
      const offsetY = 0;

      ctx.strokeStyle = 'rgba(16, 185, 129, 0.06)';
      ctx.lineWidth = 1;

      // Vertical lines
      for (let x = offsetX; x <= w; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = offsetY; y <= h; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // Animated intersection dots
      for (let x = offsetX; x <= w; x += gridSize) {
        for (let y = offsetY; y <= h; y += gridSize) {
          const distFromCenter = Math.sqrt(
            Math.pow(x - w / 2, 2) + Math.pow(y - h / 2, 2)
          );
          const maxDist = Math.sqrt(w * w + h * h) / 2;
          const normalizedDist = distFromCenter / maxDist;
          const pulse = Math.sin(time + x * 0.01 + y * 0.01) * 0.5 + 0.5;
          const alpha = (1 - normalizedDist) * 0.15 * pulse;

          if (alpha > 0.01) {
            ctx.beginPath();
            ctx.arc(x, y, 1.5, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(16, 185, 129, ${alpha})`;
            ctx.fill();
          }
        }
      }

      animId = requestAnimationFrame(render);
    };

    resize();
    window.addEventListener('resize', resize);
    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}
