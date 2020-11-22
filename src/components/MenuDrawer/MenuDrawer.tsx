import classnames from 'classnames';
import { motion } from 'framer-motion';
import React from 'react';

import { projects } from '@/data/projects';
import { DrawerActions, DrawerState } from '@/helpers/menu-drawer-reducer';
import { useClickOutside } from '@/helpers/use-click-outside';
import { defaultSpringAnimation } from '@/models/spring-animation';

import styles from './MenuDrawer.module.scss';

const menuDrawerContainerVariants = {
  open: {
    x: '0%',
    transition: {
      ...defaultSpringAnimation,
    },
  },
  closed: {
    x: '-100%',
    transition: {
      ...defaultSpringAnimation,
    },
  },
};

interface MenuDrawerProps {
  state: DrawerState;
  dispatch: React.Dispatch<DrawerActions>;
}
export const MenuDrawer: React.FC<MenuDrawerProps> = ({ state, dispatch }) => {
  const projs = [...projects];
  const ref = React.useRef(null);

  const { status } = state;

  const handleClickOutsideDrawer = () => {
    if (status === 'closed') return;

    dispatch({ type: 'CLOSE' });
  };

  useClickOutside(ref, handleClickOutsideDrawer);

  return (
    <div
      data-drawer-status={status}
      tabIndex={-1}
      className={classnames(['p-fixed', styles.container])}>
      <div className={styles.wrapper}>
        <motion.div
          ref={ref}
          animate={status}
          variants={menuDrawerContainerVariants}
          initial='closed'
          className={styles.drawer}>
          <header>
            <h1>Work</h1>
            <button onClick={() => dispatch({ type: 'CLOSE' })}>close</button>
          </header>
          <ol>
            {projs.map((proj) => (
              <li key={proj.path}>{proj.name}</li>
            ))}
          </ol>
        </motion.div>
        <motion.div
          className={styles.blur}
          animate={{ opacity: status === 'closed' ? 0 : 1 }}
          initial={{ opacity: 0 }}
          transition={defaultSpringAnimation}
          onClick={() => dispatch({ type: 'CLOSE' })}
        />
      </div>
    </div>
  );
};
