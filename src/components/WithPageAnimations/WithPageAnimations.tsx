import { InitialLoader } from '@/components/InitialLoader/InitialLoader';
import { useInitialPageLoader } from '@/context/initial-page-loader-context';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

const MotionInitialLoader = motion.custom(InitialLoader);

export const WithPageAnimations: React.FC = ({ children }) => {
  const { current } = useInitialPageLoader();
  const loaderRef = React.useRef<HTMLDivElement>(null);

  return (
    <div style={{ position: 'relative', zIndex: 0 }}>
      <AnimatePresence initial={true} exitBeforeEnter>
        {(() => {
          switch (current.value) {
            case 'idle':
            case 'loading': {
              return (
                <MotionInitialLoader
                  key='loading'
                  ref={loaderRef}
                  current={current}
                />
              );
            }
            case 'loaded': {
              return <>{children}</>;
            }
            default:
              return null;
          }
        })()}
      </AnimatePresence>
    </div>
  );
};
