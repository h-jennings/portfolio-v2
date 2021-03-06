/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { defaultSpringAnimation } from '@/animation/spring-animation';
import { useMenuDrawer } from '@/context/menu-drawer';
import { projects } from '@/data/projects';
import { useKeypressListener } from '@/helpers/use-keypress-listener';
import { Paths } from '@/models/paths';
import { ReactComponent as ArrowIcon } from '@assets/svg/arrow-icon.svg';
import { ReactComponent as CloseIcon } from '@assets/svg/close-icon.svg';
import classnames from 'classnames';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { SvgContainer } from '../SvgContainer/SvgContainer';
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

  const { status } = drawerState;

  // * Handling Escape Keypress for drawer !
  const handleKeyPress = (): void => {
    if (drawerState.status === 'closed') return;
    dispatch({ type: 'CLOSE' });
  };

  useKeypressListener('Escape', handleKeyPress);

  return (
    <motion.div
      data-menu-drawer
      data-drawer-status={status}
      tabIndex={-1}
      animate={status}
      variants={menuDrawerContainerVariants}
      initial='closed'
      className={classnames('p-fixed', styles.container)}
    >
      <div className={styles.wrapper}>
        <motion.div className={classnames(styles.drawer)}>
          <header
            className={classnames(
              'd-flex flx-j-fs flx-d-c flx-a-fe',
              styles.drawerHeader,
            )}
          >
            <div className='d-flex flx-a-c flx-d-c space-y-xsm p-t-xsm p-x-xsm'>
              <button
                aria-label='close-menu'
                className={classnames('button-reset', styles.closeBtn)}
                onClick={() => dispatch({ type: 'CLOSE' })}
              >
                <div className={styles.closeIcon}>
                  <SvgContainer svgWidth={24} svgHeight={24}>
                    <CloseIcon />
                  </SvgContainer>
                </div>
              </button>
              <div className='fz-xsm'>close</div>
            </div>
          </header>
          <div>
            <div className={styles.workListTitle}>learn more about me</div>
            <div>
              <Link href={Paths.about}>
                <a
                  className={classnames('link-reset fz-md lh-1')}
                  onClick={() => dispatch({ type: 'CLOSE' })}
                >
                  <div className='d-flex flx-j-sb flx-a-c p-sm'>
                    <div>About</div>
                    <div className={styles.arrow}>
                      <SvgContainer svgWidth={24} svgHeight={24}>
                        <ArrowIcon />
                      </SvgContainer>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className={styles.workListTitle}>selected work</div>
            <ol className={classnames(styles.list)}>
              {projects.map((project) => (
                <li key={project.path} className={classnames(styles.listItem)}>
                  <Link href={project.path}>
                    <a
                      className={classnames(
                        'p-sm w-full fz-md d-flex flx-j-sb flx-a-c',
                        styles.listLink,
                      )}
                      onClick={() => dispatch({ type: 'CLOSE' })}
                    >
                      {project.name}
                      <div className={styles.arrow}>
                        <SvgContainer svgWidth={24} svgHeight={24}>
                          <ArrowIcon />
                        </SvgContainer>
                      </div>
                    </a>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
