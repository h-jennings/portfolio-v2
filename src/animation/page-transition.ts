export const transition = {
  type: 'tween',
  duration: 0.35,
  ease: [0.4, 0.0, 0.2, 1],
};
export const transitionDurationInMs = transition.duration * 1000;
export const wipeTransitionTotalTime = transition.duration * 3;
export const wipeTransitionTotalTimeInMs = wipeTransitionTotalTime * 1000;

export const pageContentTransitionVariants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      ...transition,
      delay: wipeTransitionTotalTime,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0,
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
    },
  },
  exit: {
    x: '-100%',
    transition: {
      ...transition,
    },
  },
};
