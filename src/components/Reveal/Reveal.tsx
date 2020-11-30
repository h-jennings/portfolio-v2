import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const imageRevealVariant = {
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
    y: '10%',
    opacity: 0,
  },
};

export const Reveal: React.FC = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <motion.div
      style={{ width: '100%' }}
      ref={ref}
      initial='hidden'
      animate={inView ? 'visible' : 'hidden'}
      variants={imageRevealVariant}>
      {children}
    </motion.div>
  );
};
