const transition = {
  type: 'tween',
  duration: 0.25,
};
export const pageTransitionVariants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      ...transition,
      delay: 0.5,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      ...transition,
    },
  },
};
