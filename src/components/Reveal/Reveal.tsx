import { motion } from 'framer-motion';
import React from 'react';
import { useInView } from 'react-intersection-observer';

import {
  defaultTweenTransition,
  revealElementDelay,
} from '@/animation/page-transition';

import styles from './Reveal.module.scss';

interface InViewProps {
  threshold?: number;
  triggerOnce?: boolean;
}

const textOverflowInViewVariant = {
  visible: {
    y: '0%',
    opacity: 1,
    transition: {
      ...defaultTweenTransition,
      delay: 0.3,
    },
  },
  hidden: {
    y: '100%',
    opacity: 0,
  },
};
export const RevealTextOverflowInView: React.FC<InViewProps> = ({
  children,
  threshold = 0.2,
  triggerOnce = true,
}) => {
  const { ref, inView } = useInView({
    triggerOnce,
    threshold,
  });
  return (
    <span ref={ref} className={styles.outer}>
      <motion.span
        initial='hidden'
        animate={inView ? 'visible' : 'hidden'}
        variants={textOverflowInViewVariant}
        className={styles.inner}>
        {children}
      </motion.span>
    </span>
  );
};

const textOverflowOnEnterVariant = {
  enter: {
    y: '0%',
    opacity: 1,
    transition: {
      ...defaultTweenTransition,
      delay: revealElementDelay + 0.3,
    },
  },
  idle: {
    y: '100%',
    opacity: 0,
  },
};
export const RevealTextOverflowOnEnter: React.FC = ({ children }) => {
  return (
    <span className={styles.outer}>
      <motion.span
        initial='idle'
        animate='enter'
        variants={textOverflowOnEnterVariant}
        className={styles.inner}>
        {children}
      </motion.span>
    </span>
  );
};

const revealContainerInViewVariants = {
  visible: {
    opacity: 1,
    transition: {
      ...defaultTweenTransition,
      delay: 0.3,
    },
  },
  hidden: {
    opacity: 0,
  },
};
export const RevealContainerInView: React.FC<InViewProps> = ({
  children,
  threshold = 0.2,
  triggerOnce = true,
}) => {
  const { ref, inView } = useInView({
    triggerOnce,
    threshold,
  });
  return (
    <motion.div
      ref={ref}
      initial='hidden'
      animate={inView ? 'visible' : 'hidden'}
      variants={revealContainerInViewVariants}>
      {children}
    </motion.div>
  );
};

const revealContainerOnEnterVariants = {
  enter: {
    opacity: 1,
    transition: {
      ...defaultTweenTransition,
      delay: revealElementDelay + 0.3,
    },
  },
  idle: {
    opacity: 0,
  },
};
export const RevealContainerOnEnter: React.FC = ({ children }) => {
  return (
    <motion.div
      initial='idle'
      animate='enter'
      variants={revealContainerOnEnterVariants}>
      {children}
    </motion.div>
  );
};
