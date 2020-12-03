export const pageTransitionVariants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      type: 'tween',
      duration: 4,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      type: 'tween',
      delay: 3,
      duration: 1,
    },
  },
};
