import confetti from 'canvas-confetti';

export const triggerSolveConfetti = (x = 0.5, y = 0.6) => {
  confetti({
    particleCount: 50,
    spread: 60,
    origin: { x, y },
    colors: ['#6366f1', '#10b981', '#f59e0b', '#ec4899', '#3b82f6'],
    disableForReducedMotion: true,
  });
};

export const triggerStreakCelebration = () => {
  const duration = 2.5 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 1000 };

  const interval: ReturnType<typeof setInterval> = setInterval(() => {
    const timeLeft = animationEnd - Date.now();
    if (timeLeft <= 0) {
      return clearInterval(interval);
    }
    const particleCount = 50 * (timeLeft / duration);
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      colors: ['#ff4500', '#ff8c00', '#ffd700', '#6366f1'],
    });
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      colors: ['#ff4500', '#ff8c00', '#ffd700', '#6366f1'],
    });
  }, 250);
};

function randomInRange(min: number, max: number) {
  return Math.random() * (max - min) + min;
}
