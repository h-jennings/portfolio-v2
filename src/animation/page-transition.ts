export const transition = {
  type: 'tween',
  duration: 0.35,
  ease: [0.4, 0.0, 0.2, 1],
};
export const wipeTransitionDuration = transition.duration * 1.5;

export const pageTransitionVariants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      ...transition,
      delay: wipeTransitionDuration * 2,
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
    x: '0%',
    transition: {
      ...transition,
      duration: wipeTransitionDuration,
    },
  },
  exit: {
    x: '-100%',
    transition: {
      ...transition,
      duration: wipeTransitionDuration,
    },
  },
};
