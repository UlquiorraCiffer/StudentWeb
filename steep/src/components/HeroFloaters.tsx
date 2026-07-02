import { motion } from 'motion/react';

const floaters = [
  {
    id: 'students',
    label: 'Students',
    value: '9,000+',
    color: 'var(--color-card-saffron)',
    className: 'top-8 left-8',
  },
  {
    id: 'rating',
    label: 'Rating',
    value: '4.9 ★',
    color: 'var(--color-highlight-yellow)',
    className: 'top-8 right-8',
  },
  {
    id: 'facility',
    label: 'AC Classrooms',
    value: '✓',
    color: 'var(--color-card-pink)',
    className: 'bottom-8 left-8',
  },
  {
    id: 'ai',
    label: 'AI-Powered',
    value: '⚡',
    color: 'var(--color-card-mint)',
    className: 'bottom-8 right-8',
  },
];

function Flipper({ item }: { item: (typeof floaters)[0] }) {
  const drift = 6 + Math.random() * 4;
  return (
    <motion.div
      className={`absolute ${item.className} hidden lg:block z-20 pointer-events-none`}
      animate={{ x: [0, 6, -4, 0], y: [0, -4, 6, 0] }}
      transition={{ duration: drift, repeat: Infinity, ease: 'easeInOut' }}
    >
      <div
        className="rounded-2xl px-4 py-3 shadow-[var(--shadow-card)] min-w-[120px]"
        style={{
          background: `color-mix(in srgb, ${item.color} 12%, white)`,
          borderTop: `3px solid ${item.color}`,
        }}
      >
        <p
          className="text-xl font-bold leading-none mb-1"
          style={{ fontFamily: 'var(--font-signifier)', color: 'var(--color-midnight-ink)' }}
        >
          {item.value}
        </p>
        <p
          className="text-xs font-medium"
          style={{ fontFamily: 'var(--font-sohne)', color: 'var(--color-graphite)' }}
        >
          {item.label}
        </p>
      </div>
    </motion.div>
  );
}

export default function HeroFloaters() {
  return (
    <>
      {floaters.map((f) => (
        <Flipper key={f.id} item={f} />
      ))}
    </>
  );
}
