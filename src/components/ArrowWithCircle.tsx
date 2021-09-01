import {
  defaultTweenTransition,
  revealElementDelay,
} from '@/animation/page-transition';
import { ReactComponent as ArrowIcon } from '@assets/svg/arrow-icon.svg';
import { motion } from 'framer-motion';
import React from 'react';
import { styled, theme } from 'stitches.config';
import { SvgContainer } from './SvgContainer/SvgContainer';

const defaultTransition = {
  transition: 'all 225ms cubic-bezier(0.4, 0, 0.2, 1)',
};

const arrowWithCircleVariants = {
  idle: {
    opacity: 0,
    scale: 0.6,
  },
  enter: {
    opacity: 1,
    scale: 1,
    transition: {
      ...defaultTweenTransition,
      delay: revealElementDelay,
    },
  },
};

const Circle = styled(motion.div, {
  width: '83px',
  height: '83px',
  bc: theme.colors.white,
  d: 'grid',
  placeContent: 'center',
  br: theme.radii.pill,
  ...defaultTransition,
  '@md': {
    width: '56px',
    height: '56px',
  },
  variants: {
    isHovered: {
      true: {
        transform: 'scale(1.1)',
      },
    },
  },
});

const Outer = styled('div', {
  width: '24px',
  height: '24px',
  overflow: 'hidden',
});

const Inner = styled('div', {
  width: '$full',
  height: '$full',
});

const ArrowContainer = styled('div', {
  width: '24px',
  ...defaultTransition,
  transform: 'translateY(-100%)',
  path: {
    fill: '$black',
  },
  variants: {
    isHovered: {
      true: {
        transform: 'translateY(0%)',
      },
    },
  },
});
const Arrow: React.FC<{ isHovered: boolean }> = ({ isHovered }) => {
  return (
    <ArrowContainer isHovered={isHovered}>
      <SvgContainer svgWidth={24} svgHeight={24}>
        <ArrowIcon />
      </SvgContainer>
    </ArrowContainer>
  );
};

export const ArrowWithCircle: React.FC = () => {
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <>
      <motion.div
        initial='idle'
        animate='enter'
        variants={arrowWithCircleVariants}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Circle isHovered={isHovered}>
          <Outer>
            <Inner>
              <Arrow isHovered={isHovered} />
              <Arrow isHovered={isHovered} />
            </Inner>
          </Outer>
        </Circle>
      </motion.div>
    </>
  );
};
