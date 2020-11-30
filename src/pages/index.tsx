/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import styles from '@scss/pages/Home.module.scss';
import classnames from 'classnames';
import { NextPage } from 'next';
import Link from 'next/link';

import { PageWithLayoutType } from '@/components/layouts/layout.model';
import { MainLayout } from '@/components/layouts/MainLayout/MainLayout';
import { WithPageAnimation } from '@/components/layouts/WithPageAnimation/WithPageAnimation';
import { AppThemes, useTheme } from '@/context/theme';
import { Projects, projects } from '@/data/projects';
import { useMouseCoordinates } from '@/helpers/use-mouse-coordinates';
import { Colors } from '@/models/colors';

interface HomeProps {
  projects: Projects;
}

const Home: NextPage<HomeProps> = () => {
  const { setTheme } = useTheme();
  const { x: mouseX, y: mouseY } = useMouseCoordinates();
  const colors: { theme: AppThemes; hex: Colors }[] = [
    {
      theme: 'orange',
      hex: Colors.orange,
    },
    {
      theme: 'blue',
      hex: Colors.blue,
    },
    {
      theme: 'grey',
      hex: Colors.grey,
    },
  ];

  const handleThemeChange = (i?: number): void => {
    i !== undefined ? setTheme(colors[i].theme) : setTheme('dark');
  };

  const handleLinkAction = (i?: number): void => {
    // Setting Application Theme
    handleThemeChange(i);
  };

  return (
    <WithPageAnimation>
      <section className={classnames(['p-relative', styles.container])}>
        <div className='d-flex flx-j-fe'>
          <h1 className={classnames(['ta-r md:m-b-md', styles.headline])}>
            <span className={classnames(['d-block'])}>Front End</span>
            <span className={classnames(['d-block'])}>Engineer</span>
          </h1>
        </div>
        <p className={classnames(['fz-base p-absolute', styles.intro])}>
          Hunter Jennings is currently working at Guidehouse in Washington D.C.{' '}
          <span role='img' aria-label='American Flag emoji'>
            🇺🇸
          </span>
        </p>
      </section>
      <section className={classnames(['p-t-xxl', styles.container])}>
        <h1 className='fz-xl m-b-xxl'>Selected Work</h1>
        <ol
          className={classnames([
            'space-y-xl p-b-xxl',
            styles.selectedWorkList,
          ])}>
          {projects.map((proj, i) => (
            <li key={proj.path}>
              <Link href={proj.path}>
                <a
                  onMouseEnter={() => handleLinkAction(i)}
                  onMouseLeave={() => handleLinkAction()}
                  onFocus={() => handleLinkAction(i)}
                  onBlur={() => handleLinkAction()}
                  onClick={() => handleLinkAction()}
                  className={classnames(['d-flex space-x-lg', styles.link])}>
                  <div
                    aria-hidden={true}
                    className={styles.bar}
                    style={{ backgroundColor: colors[i].hex ?? Colors.white }}
                  />
                  <div className={classnames(['lh-1', styles.listItemText])}>
                    {proj.name}
                  </div>
                </a>
              </Link>
            </li>
          ))}
        </ol>
        <div
          style={{ left: `${mouseX}px`, top: `${mouseY}px` }}
          className={styles.hoverImage}
        />
      </section>
    </WithPageAnimation>
  );
};

Home.getInitialProps = async () => {
  const proj = projects;

  return {
    projects: proj,
  };
};

(Home as PageWithLayoutType).getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;
