import headshot from '@assets/images/headshot-cropped.jpg';
import { ReactComponent as ArrowIcon } from '@assets/svg/arrow-icon.svg';
import styles from '@scss/pages/About.module.scss';
import classnames from 'classnames';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import React from 'react';

import { Button } from '@/components/Button/Button';
import { MainLayout } from '@/components/layouts/MainLayout/MainLayout';
import {
  SplitContentLeft,
  SplitContentRight,
  SplitLayout,
} from '@/components/layouts/SplitLayout/SplitLayout';
import { ResponsiveImage } from '@/components/ResponsiveImage/ResponsiveImage';
import {
  RevealContainerInView,
  RevealContainerOnEnter,
  RevealTextOverflowInView,
  RevealTextOverflowOnEnter,
} from '@/components/Reveal/Reveal';
import { SvgContainer } from '@/components/SvgContainer/SvgContainer';
import { jobs, skills } from '@/data/about';
import { ExternalLink, isSocialLink } from '@/data/external-links';
import { externalLinks } from '@/data/external-links';
import { decodeHtml } from '@/helpers/decode-html';
import { useScrollToTop } from '@/helpers/use-scroll-to-top';

interface AboutProps {
  externalLinks: ExternalLink[];
}

const About: NextPage<AboutProps> = ({ externalLinks }) => {
  useScrollToTop();

  const SEO = {
    title: `Portfolio ${decodeHtml('&mdash;')} About`,
    // eslint-disable-next-line quotes
    description: "I'm Hunter. I've been wrangling pixels and shapes since 2017",
    openGraph: {
      title: `Portfolio ${decodeHtml('&mdash;')} About`,
      description:
        // eslint-disable-next-line quotes
        "I'm Hunter. I've been wrangling pixels and shapes since 2017",
      images: [
        {
          url: '/images/social/social-screen_about.png',
        },
      ],
    },
  };

  return (
    <MainLayout>
      <div className={styles.wrapper}>
        <NextSeo {...SEO} />
        <SplitLayout>
          <SplitContentLeft>
            <h1 className='m-b-xl md:m-b-md'>
              <RevealTextOverflowOnEnter>About</RevealTextOverflowOnEnter>
            </h1>
            <RevealContainerOnEnter>
              <p className={classnames('m-b-md', styles.paragraph)}>
                Hey there, I&apos;m Hunter. I&apos;ve been wrangling pixels and
                shapes since &apos;17. I create beautiful user interfaces with
                cutting-edge web technologies. My primary areas of focus are
                component architecture, design systems, and application state
                management. Over the years, I&apos;ve worked cross-functionally
                with high caliber design teams on complex problems. Most
                recently, I&apos;ve been working to create supply chain
                application for a multi-million dollar account in the public
                sector.
              </p>
              <p className={styles.paragraph}>
                I&apos;m a life long learner who can&apos;t wait to start the
                next project.
              </p>
            </RevealContainerOnEnter>
          </SplitContentLeft>
          <SplitContentRight>
            <div className={classnames('m-b-xl', styles.image)}>
              <RevealContainerOnEnter>
                <ResponsiveImage
                  src={headshot}
                  altText='Picture of me'
                  width={646}
                  height={667}
                />
              </RevealContainerOnEnter>
            </div>
            <section className='m-b-xl'>
              <RevealContainerOnEnter>
                <h2 className='m-b-md'>What I Do</h2>
              </RevealContainerOnEnter>
              <div className={styles.skillsListWrapper}>
                <ul className={classnames(styles.skillsList)}>
                  {skills.map(({ title, content }) => (
                    <li key={title}>
                      <RevealContainerOnEnter>
                        <h3 className='m-b-xsm'>{title}</h3>
                        <p>{content}</p>
                      </RevealContainerOnEnter>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
            <section>
              <h2 className='m-b-md'>
                <RevealTextOverflowInView>
                  Where I&apos;ve done it
                </RevealTextOverflowInView>
              </h2>
              <ul className={styles.experienceList}>
                {jobs.map(({ title, when, company }) => (
                  <li
                    key={company}
                    className={classnames(
                      'p-y-sm p-x-xsm',
                      styles.experienceListItem,
                    )}>
                    <div className='text-h3'>
                      <RevealTextOverflowInView>
                        {when}
                      </RevealTextOverflowInView>
                    </div>
                    <div>
                      <div className='text-p ta-l'>
                        <RevealTextOverflowInView>
                          {title}
                        </RevealTextOverflowInView>
                      </div>
                      <div className='text-p c-grey'>
                        <RevealTextOverflowInView>
                          {company}
                        </RevealTextOverflowInView>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </SplitContentRight>
        </SplitLayout>
      </div>
      <section>
        <h1 className='m-b-xl lg:m-b-none'>
          <RevealTextOverflowInView threshold={0.2}>
            Get in touch
          </RevealTextOverflowInView>
        </h1>
        <div className={classnames('p-y-xl lg:p-y-lg', styles.contactSection)}>
          <h2 className='text-h3'>
            <RevealTextOverflowInView threshold={0.3}>
              Status
            </RevealTextOverflowInView>
          </h2>
          <div className={styles.status}>
            <RevealContainerInView threshold={0.3}>
              <p className={classnames('fz-md ta-j lg:fz-base')}>
                Hunter is currently employed as a Front End Developer at
                Guidehouse, however, he is open to new opportunities and
                inquires.
              </p>
            </RevealContainerInView>
          </div>
        </div>
        <div className={classnames('p-y-xl lg:p-y-lg', styles.contactSection)}>
          <h2 className='text-h3'>
            <RevealTextOverflowInView threshold={0.3}>
              Connect
            </RevealTextOverflowInView>
          </h2>
          <div className={classnames('d-flex flx-j-sb', styles.connect)}>
            <RevealContainerInView threshold={0.3}>
              <ul
                className={classnames(
                  'space-y-sm lg:m-b-lg',
                  styles.socialLinkList,
                )}>
                {externalLinks.filter(isSocialLink).map((link) => (
                  <li key={link.href}>
                    <a
                      target='_blank'
                      rel='noopener noreferrer'
                      className={classnames(
                        'underline-effect fz-base d-inline-flex space-x-sm',
                        styles.socialLinkListItem,
                      )}
                      href={link.href}>
                      <div className={styles.listItemIcon}>
                        <SvgContainer svgHeight={14} svgWidth={14}>
                          <ArrowIcon />
                        </SvgContainer>
                      </div>
                      <span>{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </RevealContainerInView>
            <div>
              <RevealContainerInView threshold={0.3}>
                <Button type='link' href='mailto:jenningsdhunter@gmail.com'>
                  send an email
                </Button>
              </RevealContainerInView>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

About.getInitialProps = async () => {
  return {
    externalLinks,
  };
};
export default About;
