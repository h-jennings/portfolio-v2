import React from 'react';
import classnames from 'classnames';
import styles from './Footer.module.scss';

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
    <footer
      aria-label='footer'
      className={classnames(['w-full d-flex flx-j-c', styles.footer])}>
      <div className={classnames(['w-full p-t-xxl p-b-xl', styles.content])}>
        <div className={styles.copyright}>
          <p>design and development &mdash;</p>
          <p className='p-l-md'>
            &copy; Hunter Jennings <span data-testid='year'>{year}</span>
          </p>
        </div>
        <div className={styles.time}>
          <p data-testid='time'>{currentTime ?? '0:00'}</p>
          <p>Washington D.C.</p>
        </div>
        <div className={styles.weather}>
          <p>
            <span role='img' aria-label='sun'>
              ☀️
            </span>
          </p>
          <p>60&deg;F</p>
        </div>
      </div>
    </footer>
  );
};
