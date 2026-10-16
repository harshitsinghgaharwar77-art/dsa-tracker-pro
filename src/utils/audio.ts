const SOUND_PREF_KEY = 'lb_dsa_sfx_enabled';

let sfxCtx: AudioContext | null = null;

export function isSoundEnabled(): boolean {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem(SOUND_PREF_KEY) !== 'off';
}

export function setSoundEnabled(enabled: boolean): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(SOUND_PREF_KEY, enabled ? 'on' : 'off');
}

function getAudioCtx(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (!sfxCtx) {
    const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!Ctx) return null;
    sfxCtx = new Ctx();
  }
  if (sfxCtx.state === 'suspended') {
    sfxCtx.resume();
  }
  return sfxCtx;
}

export function playSolveSound(): void {
  if (!isSoundEnabled()) return;
  const ctx = getAudioCtx();
  if (!ctx) return;

  const now = ctx.currentTime;
  const master = ctx.createGain();
  master.gain.value = 0.22;
  master.connect(ctx.destination);

  // Friendly bright two-tone chime [880Hz -> 1320Hz]
  [880, 1320].forEach((freq, i) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const start = now + i * 0.09;
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, start);
    gain.gain.setValueAtTime(0, start);
    gain.gain.linearRampToValueAtTime(1, start + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.001, start + 0.28);
    osc.connect(gain);
    gain.connect(master);
    osc.start(start);
    osc.stop(start + 0.3);
  });
}

export function playStreakSound(): void {
  if (!isSoundEnabled()) return;
  const ctx = getAudioCtx();
  if (!ctx) return;

  const now = ctx.currentTime;
  const duration = 0.65;
  const master = ctx.createGain();
  master.gain.value = 0.3;
  master.connect(ctx.destination);

  // Filtered white noise burst with sweep
  const bufferSize = Math.floor(ctx.sampleRate * duration);
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    data[i] = Math.random() * 2 - 1;
  }

  const noise = ctx.createBufferSource();
  noise.buffer = buffer;

  const filter = ctx.createBiquadFilter();
  filter.type = 'bandpass';
  filter.Q.value = 0.9;
  filter.frequency.setValueAtTime(300, now);
  filter.frequency.exponentialRampToValueAtTime(2600, now + duration * 0.45);
  filter.frequency.exponentialRampToValueAtTime(500, now + duration);

  const noiseGain = ctx.createGain();
  noiseGain.gain.setValueAtTime(0, now);
  noiseGain.gain.linearRampToValueAtTime(1, now + 0.08);
  noiseGain.gain.exponentialRampToValueAtTime(0.001, now + duration);

  noise.connect(filter);
  filter.connect(noiseGain);
  noiseGain.connect(master);
  noise.start(now);
  noise.stop(now + duration);

  // Sub bass pop
  const sub = ctx.createOscillator();
  const subGain = ctx.createGain();
  sub.type = 'sine';
  sub.frequency.setValueAtTime(150, now);
  sub.frequency.exponentialRampToValueAtTime(45, now + 0.28);
  subGain.gain.setValueAtTime(0.6, now);
  subGain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);
  sub.connect(subGain);
  subGain.connect(master);
  sub.start(now);
  sub.stop(now + 0.3);
}
