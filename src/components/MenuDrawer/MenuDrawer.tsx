/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import classnames from 'classnames';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

import { defaultSpringAnimation } from '@/animation/spring-animation';
import { useMenuDrawer } from '@/context/menu-drawer';
import { projects } from '@/data/projects';
import { useClickOutside } from '@/helpers/use-click-outside';
import { useKeypressListener } from '@/helpers/use-keypress-listener';

import styles from './MenuDrawer.module.scss';

const menuDrawerContainerVariants = {
  open: {
    x: '0%',
    transition: {
      ...defaultSpringAnimation,
    },
  },
  closed: {
    x: '100%',
    transition: {
      ...defaultSpringAnimation,
    },
  },
};

export const MenuDrawer: React.FC = () => {
  const { dispatch, state: drawerState } = useMenuDrawer();
  const projs = [...projects];
  const ref = React.useRef(null);

  const { status } = drawerState;

  const handleClickOutsideDrawer = () => {
    if (status === 'closed') return;

    dispatch({ type: 'CLOSE' });
  };

  // * Handling click outside-of-drawer-container-to-close UX
  useClickOutside(ref, handleClickOutsideDrawer);

  // * Handling Escape Keypress for drawer !
  const handleKeyPress = (): void => {
    if (drawerState.status === 'closed') return;
    dispatch({ type: 'CLOSE' });
  };

  useKeypressListener('Escape', handleKeyPress);

  return (
    <motion.div
      data-drawer-status={status}
      tabIndex={-1}
      animate={status}
      variants={menuDrawerContainerVariants}
      initial='closed'
      className={classnames('p-fixed', styles.container)}>
      <div className={styles.wrapper}>
        <motion.div
          ref={ref}
          className={classnames('p-y-lg p-x-md', styles.drawer)}>
          <header className='d-flex flx-j-sb'>
            <h1 className='fz-base'>Selected Work</h1>
            <button onClick={() => dispatch({ type: 'CLOSE' })}>close</button>
          </header>
          <ol className={classnames('space-y-sm', styles.list)}>
            {projs.map((proj) => (
              <li
                key={proj.path}
                className={classnames('fz-md', styles.listItem)}>
                <Link href={proj.path}>
                  <a onClick={() => dispatch({ type: 'CLOSE' })}>{proj.name}</a>
                </Link>
              </li>
            ))}
          </ol>
        </motion.div>
      </div>
    </motion.div>
  );
};
