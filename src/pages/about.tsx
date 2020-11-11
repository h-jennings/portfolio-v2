import styles from '@scss/pages/About.module.scss';
import classnames from 'classnames';
import { PageWithLayoutType } from '@/components/layout/layout.model';
import { MainLayout } from '@/components/layout/MainLayout/MainLayout';
import { decodeHtml } from '@/helpers/decode-html';
import { jobs, skills } from '@/data/about';
import { ResponsiveImage } from '@/components/ResponsiveImage/ResponsiveImage';
import headshot from '@assets/images/headshot-cropped.jpg';

const About: React.FC = () => {
  return (
    <main className={styles.content}>
      <div className={styles.contentLeft}>
        <div className={styles.contentLeftWrapper}>
          <h1 className='m-b-xl'>About</h1>
          <p className='m-b-md'>
            Hey there, I&apos;m Hunter. I&apos;ve been wrangling pixels and
            shapes since &apos;17. I create beautiful user interfaces with
            cutting-edge web technologies. My primary areas of focus are
            component architecture, design systems, and application state
            management. Over the years, I&apos;ve worked cross-functionally with
            high caliber design teams on complex problems. Most recently,
            I&apos;ve been working to create supply chain application for a
            multi-million dollar account in the public sector.
          </p>
          <p>
            I&apos;m a life long learner who can&apos;t wait to start the next
            project.
          </p>
        </div>
      </div>
      <div className={styles.contentRight}>
        <div className={styles.contentRightWrapper}>
          <div className={classnames(['m-b-xl', styles.image])}>
            <ResponsiveImage src={headshot} width={646} height={667} />
          </div>
          <section className='m-b-xl'>
            <h2 className='m-b-md'>What I Do</h2>
            <ul className={classnames([styles.skillsList])}>
              {skills.map(({ title, content }) => (
                <li key={title}>
                  <h3 className='m-b-xsm'>{title}</h3>
                  <p>{content}</p>
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className='m-b-md'>Where I&apos;ve done it</h2>
            <ul className={styles.experienceList}>
              {jobs.map(({ title, when, company }) => (
                <li
                  key={company}
                  className={classnames([
                    'p-y-sm p-x-xsm',
                    styles.experienceListItem,
                  ])}>
                  <div className='text-h3'>{when}</div>
                  <div>
                    <div className='text-p'>{title}</div>
                    <div className='text-p c-grey'>{company}</div>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
};

(About as PageWithLayoutType).getLayout = (page) => {
  return (
    <MainLayout pageTitle={`Portfolio ${decodeHtml('&mdash;')} About`}>
      {page}
    </MainLayout>
  );
};
export default About;
