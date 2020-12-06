import { ReactComponent as ArrowIcon } from '@assets/svg/arrow-icon.svg';
import classnames from 'classnames';
import React from 'react';

import { SvgContainer } from '../SvgContainer/SvgContainer';
import styles from './ArrowWithCircle.module.scss';

export const ArrowWithCircle: React.FC = () => {
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        data-state={isHovered ? 'active' : 'inactive'}
        className={classnames(styles.container)}>
        <div
          className={classnames(
            'd-flex flx-j-c flx-a-c rc-round',
            styles.circle,
          )}>
          <div className={styles.outer}>
            <div className={classnames(styles.inner)}>
              <div className={styles.arrow}>
                <SvgContainer svgWidth={24} svgHeight={24}>
                  <ArrowIcon />
                </SvgContainer>
              </div>
              <div className={styles.arrow}>
                <SvgContainer svgWidth={24} svgHeight={24}>
                  <ArrowIcon />
                </SvgContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
