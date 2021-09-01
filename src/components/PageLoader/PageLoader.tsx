import { InitialPageLoadingContext } from '@/machines/initial-page-loading-machine';
import { AnimatePresence, motion } from 'framer-motion';

export const PageLoader: React.FC<{ current: any }> = ({ current }) => {
  const { animationState }: InitialPageLoadingContext = current?.context;

  return (
    <AnimatePresence>
      {animationState === 'animating' ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{ top: 0, position: 'absolute', left: 0, zIndex: 999 }}
        >
          {animationState}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};
