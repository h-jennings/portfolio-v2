/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import classnames from 'classnames';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

import { useMenuDrawer } from '@/context/menu-drawer';
import { projects } from '@/data/projects';
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

export const MenuDrawer: React.FC = () => {
  const { dispatch, drawerState } = useMenuDrawer();
  const projs = [...projects];
  const ref = React.useRef(null);

  const { status } = drawerState;

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
              <li key={proj.path}>
                <Link href={proj.path}>
                  <a onClick={() => dispatch({ type: 'CLOSE' })}>{proj.name}</a>
                </Link>
              </li>
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
