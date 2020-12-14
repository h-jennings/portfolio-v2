export const transition = {
  type: 'tween',
  duration: 0.35,
  ease: [0.4, 0.0, 0.2, 1],
};
export const pageTransitionVariants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      ...transition,
      delay: transition.duration * 2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      ...transition,
    },
  },
};

export const wipeTransitionVariants = {
  idle: {
    x: '100%',
    transition: {
      duration: 0,
    },
  },
  enter: {
    x: ['100%', '0%', '-100%'],
    transition: {
      ...transition,
      duration: transition.duration * 2,
      timings: [0.1, 0.8, 1],
    },
  },
  exit: {
    x: '-100%',
    transition: {
      duration: 0,
    },
  },
};
