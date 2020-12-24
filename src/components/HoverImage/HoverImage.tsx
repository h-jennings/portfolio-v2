import { AnimatePresence, motion } from 'framer-motion';

import { defaultSpringAnimation } from '@/animation/spring-animation';
import { useMouseCoordinates } from '@/helpers/use-mouse-coordinates';

import styles from './HoverImage.module.scss';

const hoverImageVariants = {
  visible: {
    opacity: 1,
    transform: 'scale(1) translate(-50%, -50%)',
    transition: {
      ...defaultSpringAnimation,
    },
  },
  hidden: {
    opacity: 0,
    transform: 'scale(0.85) translate(-50%, -50%)',
    transition: {
      ...defaultSpringAnimation,
    },
  },
};

interface HoverImageProps {
  src: string | null;
  status: 'visible' | 'hidden';
}

export const HoverImage: React.FC<HoverImageProps> = ({ src, status }) => {
  const { x: mouseX, y: mouseY } = useMouseCoordinates();

  return (
    <motion.div
      style={{
        left: `${mouseX}px`,
        top: `${mouseY}px`,
      }}
      className={styles.container}
      variants={hoverImageVariants}
      animate={status}
      initial='hidden'>
      <AnimatePresence exitBeforeEnter>
        {src ? (
          <motion.img
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            className={styles.image}
            src={src}
            key={src}
          />
        ) : null}
      </AnimatePresence>
    </motion.div>
  );
};
