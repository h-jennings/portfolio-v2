import headshot from '@assets/images/headshot-cropped.jpg';
import styles from '@scss/pages/About.module.scss';
import classnames from 'classnames';
import { NextSeo } from 'next-seo';

import { MainLayout } from '@/components/layouts/MainLayout/MainLayout';
import {
  SplitContentLeft,
  SplitContentRight,
  SplitLayout,
} from '@/components/layouts/SplitLayout/SplitLayout';
import { ResponsiveImage } from '@/components/ResponsiveImage/ResponsiveImage';
import { jobs, skills } from '@/data/about';
import { decodeHtml } from '@/helpers/decode-html';

const About: React.FC = () => {
  const SEO = {
    title: `Portfolio ${decodeHtml('&mdash;')} About`,
    // eslint-disable-next-line quotes
    description: "I'm Hunter. I've been wrangling pixels and shapes since 2017",
    openGraph: {
      title: `Portfolio ${decodeHtml('&mdash;')} About`,
      description:
        // eslint-disable-next-line quotes
        "I'm Hunter. I've been wrangling pixels and shapes since 2017",
    },
  };

  return (
    <MainLayout>
      <div className={styles.wrapper}>
        <NextSeo {...SEO} />
        <SplitLayout>
          <SplitContentLeft>
            <h1 className='m-b-xl md:m-b-md'>About</h1>
            <p className={classnames(['m-b-md', styles.paragraph])}>
              Hey there, I&apos;m Hunter. I&apos;ve been wrangling pixels and
              shapes since &apos;17. I create beautiful user interfaces with
              cutting-edge web technologies. My primary areas of focus are
              component architecture, design systems, and application state
              management. Over the years, I&apos;ve worked cross-functionally
              with high caliber design teams on complex problems. Most recently,
              I&apos;ve been working to create supply chain application for a
              multi-million dollar account in the public sector.
            </p>
            <p className={styles.paragraph}>
              I&apos;m a life long learner who can&apos;t wait to start the next
              project.
            </p>
          </SplitContentLeft>
          <SplitContentRight>
            <div className={classnames(['m-b-xl', styles.image])}>
              <ResponsiveImage
                src={headshot}
                altText='Picture of me'
                width={646}
                height={667}
              />
            </div>
            <section className='m-b-xl'>
              <h2 className='m-b-md'>What I Do</h2>
              <div className={styles.skillsListWrapper}>
                <ul className={classnames([styles.skillsList])}>
                  {skills.map(({ title, content }) => (
                    <li key={title}>
                      <h3 className='m-b-xsm'>{title}</h3>
                      <p>{content}</p>
                    </li>
                  ))}
                </ul>
              </div>
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
                      <div className='text-p ta-l'>{title}</div>
                      <div className='text-p c-grey'>{company}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </SplitContentRight>
        </SplitLayout>
      </div>
    </MainLayout>
  );
};

export default About;
