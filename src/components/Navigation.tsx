import { Paths } from '@/models/paths';
import { ReactComponent as HomeIcon } from '@assets/svg/home-icon.svg';
import { Box } from '@components/primitives/Box';
import { styled } from 'stitches.config';
import { LinkWithPageTransition } from './LinkWithPageTransition/LinkWithPageTransition';
import { SvgContainer } from './SvgContainer/SvgContainer';

const NavigationContainer = styled('div', {
  d: 'flex',
  width: '$full',
  zIndex: '$over',
  jc: 'center',
  position: 'fixed',
  top: 0,
  left: 0,
  px: '$xxl',
  '@lg': {
    px: '$xl',
  },
  '@md': {
    px: '$lg',
  },
  '@sm': {
    px: '$md',
  },
});

const Wrapper = styled('div', {
  d: 'flex',
  jc: 'space-between',
  py: '$xl',
  width: '$full',
  maxWidth: '$xl',
});

const StyledLinkWithPageTransition = styled(LinkWithPageTransition, {});
const StyledHomeIcon = styled(HomeIcon, { path: { fill: '$white' } });

export const Navigation: React.FC = () => {
  return (
    <NavigationContainer as='nav' aria-label='primary-navigation'>
      <Wrapper>
        <StyledLinkWithPageTransition
          aria-label='home'
          css={{ width: '24px' }}
          route={Paths.home}
        >
          <SvgContainer svgWidth={24} svgHeight={24}>
            <StyledHomeIcon title='home icon' />
          </SvgContainer>
        </StyledLinkWithPageTransition>
        <Box>
          <Box css={{ d: 'flex' }}>
            <StyledLinkWithPageTransition
              className='underline-effect'
              route={Paths.about}
            >
              about
            </StyledLinkWithPageTransition>
          </Box>
        </Box>
      </Wrapper>
    </NavigationContainer>
  );
};
