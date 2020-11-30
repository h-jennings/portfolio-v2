import { motion } from 'framer-motion';

import { useMouseCoordinates } from '@/helpers/use-mouse-coordinates';
import { defaultSpringAnimation } from '@/models/spring-animation';

import styles from './HoverImage.module.scss';

const hoverImageVariants = {
  visible: {
    opacity: 1,
    transition: {
      ...defaultSpringAnimation,
    },
  },
  hidden: {
    opacity: 0,
    ...defaultSpringAnimation,
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
        backgroundImage: src ? `url('${src}')` : 'none',
      }}
      className={styles.container}
      variants={hoverImageVariants}
      animate={status}
      initial='hidden'
    />
  );
};
