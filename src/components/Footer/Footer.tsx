import {
  externalLinks,
  isEmailLink,
  isSocialLink,
} from '@/data/external-links';
import { Box } from '@components/primitives/Box';
import { Text } from '@components/primitives/Text';
import { Weather } from '@components/Weather/Weather';
import classnames from 'classnames';
import React from 'react';
import { styled } from 'stitches.config';
import styles from './Footer.module.scss';

const FooterWrapper = styled('footer', {
  d: 'flex',
  width: '$full',
  jc: 'center',
  color: '$black',
  lh: '$default',
  bc: '$grey',
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

export const Footer: React.FC = () => {
  const [year, setYear] = React.useState<number | null>(null);
  const [currentTime, setCurrentTime] = React.useState<string | null>(null);

  React.useEffect(() => {
    const date = new Date();
    setYear(date.getFullYear());
  }, []);

  React.useEffect(() => {
    const tick = setInterval(() => {
      const date = new Date();

      const time = new Intl.DateTimeFormat('en', {
        timeZone: 'America/New_York',
        hour: 'numeric',
        minute: 'numeric',
      }).format(date);

      // Setting time state
      setCurrentTime(time);
    }, 1000);
    return () => {
      clearInterval(tick);
    };
  }, []);

  return (
    <FooterWrapper as='footer' aria-label='footer'>
      <div
        className={classnames(
          'w-full p-t-xxl p-b-xl d-flex space-x-xl lg:space-x-lg',
          styles.content,
        )}
      >
        <Box className={styles.copyright}>
          <Text color='3' as='p'>
            design and development &mdash;
          </Text>
          <Text color='3' as='p' css={{ pl: '$md' }}>
            &copy; Hunter Jennings{' '}
            <Text color='3' data-testid='year'>
              {year}
            </Text>
          </Text>
        </Box>
        <div
          className={classnames(
            'd-flex space-x-xl lg:space-x-lg',
            styles.locationDetails,
          )}
        >
          <Box className={styles.time}>
            <Text color='3' as='time' data-testid='time'>
              {currentTime ?? '0:00'}
            </Text>
            <Text color='3' as='p'>
              Washington D.C.
            </Text>
          </Box>
          <Weather />
        </div>
        <div className={classnames('d-flex space-x-md flx-a-fe', styles.links)}>
          <div className={styles.contact}>
            <a
              href={externalLinks.filter(isEmailLink)[0].href}
              className='underline-effect'
            >
              get in touch.
            </a>
          </div>
          <ul
            className={classnames('d-flex flx-a-fe space-x-sm', styles.socials)}
          >
            {externalLinks.filter(isSocialLink).map((link) => (
              <li key={link.href}>
                <a
                  className='underline-effect lh-1'
                  target='_blank'
                  rel='noopener noreferrer'
                  href={link.href}
                >
                  {link.shortName}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </FooterWrapper>
  );
};
