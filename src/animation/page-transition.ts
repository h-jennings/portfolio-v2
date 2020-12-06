const transition = {
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
  enter: {
    x: ['100%', '0%', '-100%'],
    transition: {
      ...transition,
      duration: transition.duration * 2,
      timings: [0, 0.65, 1],
    },
  },
};
