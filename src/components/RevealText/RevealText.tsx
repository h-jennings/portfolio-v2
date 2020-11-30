import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import styles from './RevealText.module.scss';

const textVariant = {
  visible: {
    y: '0%',
    opacity: 1,
    transition: {
      type: 'tween',
      duration: 0.3,
      delay: 0.1,
    },
  },
  hidden: {
    y: '100%',
    opacity: 0,
  },
};
export const RevealText: React.FC = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <span ref={ref} className={styles.outer}>
      <motion.span
        initial='hidden'
        animate={inView ? 'visible' : 'hidden'}
        variants={textVariant}
        className={styles.inner}>
        {children}
      </motion.span>
    </span>
  );
};
