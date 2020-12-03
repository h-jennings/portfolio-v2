import { AnimatePresence, motion } from 'framer-motion';

import { pageTransitionVariants } from '@/animation/page-transition';

export const WithPageAnimation: React.FC = ({ children }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        animate='enter'
        initial='initial'
        exit='exit'
        variants={pageTransitionVariants}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
