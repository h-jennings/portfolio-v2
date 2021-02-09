import {
  PageLoaderAnimationSchema,
  tweenTiming,
} from '@/machines/page-loader-animation-machine';
import { motion } from 'framer-motion';
import React from 'react';
import styles from './InitialLoader.module.scss';

type AnimationStates = keyof PageLoaderAnimationSchema['states'];

type AnimationVariants = Record<AnimationStates, any>;

type SelectAnimationVariants<S extends AnimationStates> = Pick<
  AnimationVariants,
  S
>;

const loaderContainerVariantsFinal = { opacity: 1 };
const loaderContainerVariants: SelectAnimationVariants<
  'idle' | 'enter' | 'complete'
> = {
  idle: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
  },
  complete: {
    opacity: 0,
  },
};

const progressBarInnerVariants: SelectAnimationVariants<'progress' | 'wipe'> = {
  progress: {
    x: ['-100%', '-80%', '-10%', '0%'],
    transition: {
      type: 'tween',
      from: '-100%',
      ease: [0.4, 0.0, 0.2, 1],
      times: [0, 0.2, 0.9, 1],
      duration: tweenTiming.progress / 1000,
    },
  },
  wipe: {
    y: '0%',
    transition: {
      from: '98%',
      type: 'tween',
      ease: [0.4, 0.0, 0.2, 1],
      duration: tweenTiming.wipe / 1000,
    },
  },
};
const progressBarOuterVariants: SelectAnimationVariants<
  'expand' | 'complete'
> = {
  expand: {
    width: '100%',
    height: '100%',
    transition: {
      type: 'tween',
      ease: [0.4, 0.0, 0.2, 1],
      duration: tweenTiming.expand / 1000,
    },
  },
  complete: {
    width: '100%',
    height: '100%',
  },
};

interface InitialLoaderProps {
  current: any;
}
type Ref = HTMLDivElement;
export const InitialLoader = React.forwardRef<Ref, InitialLoaderProps>(
  ({ current }, ref) => {
    const { animationState } = current?.context;

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={animationState}
        exit='complete'
        variants={loaderContainerVariants}
        style={loaderContainerVariantsFinal}
        ref={ref}
        className={styles.container}
      >
        <motion.div
          variants={progressBarOuterVariants}
          animate={animationState}
          className={styles.progressBarOuter}
        >
          <motion.div
            initial={{ x: '-100%', y: '99%' }}
            variants={progressBarInnerVariants}
            animate={animationState}
            className={styles.progressBarInner}
            style={{ x: '0%', y: '0%' }}
          />
        </motion.div>
      </motion.div>
    );
  },
);
