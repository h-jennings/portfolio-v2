import { AnimatePresence, motion } from 'framer-motion';

import { pageTransitionVariants } from '@/animation/page-transition';

export const WithPageAnimation: React.FC = ({ children }) => {
  return (
    <AnimatePresence initial={false} exitBeforeEnter>
      <motion.div
        initial='initial'
        animate='enter'
        exit='exit'
        variants={pageTransitionVariants}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
