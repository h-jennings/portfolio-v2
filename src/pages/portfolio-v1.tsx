import { Button } from '@/components/Button/Button';
import { FullscreenLink } from '@/components/FullscreenLink/FullscreenLink';
import { MainLayout } from '@/components/layouts/MainLayout/MainLayout';
import {
  SplitContentLeft,
  SplitContentRight,
  SplitLayout,
} from '@/components/layouts/SplitLayout/SplitLayout';
import { ProjectNavigationLinks } from '@/components/ProjectNavigationLinks/ProjectNavigationLinks';
import { ResponsiveImage } from '@/components/ResponsiveImage/ResponsiveImage';
import {
  RevealContainerInView,
  RevealContainerOnEnter,
  RevealDiffContainerMethodsAtBreakpoint,
  RevealTextOverflowOnEnter,
} from '@/components/Reveal/Reveal';
import { RevealBox } from '@/components/RevealBox/RevealBox';
import { isProject, Projects, projects } from '@/data/projects';
import { useProjects } from '@/helpers/use-projects';
import { useScrollToTop } from '@/helpers/use-scroll-to-top';
import styles from '@scss/pages/Portfolio-v1.module.scss';
import classnames from 'classnames';
import { NextPage } from 'next';
import React from 'react';

interface PortfolioV1Props {
  projects: Projects;
  pathname: string;
}

const PortfolioV1: NextPage<PortfolioV1Props> = ({ projects, pathname }) => {
  useScrollToTop();

  const { currentProject, nextProject, previousProject } = useProjects(
    projects,
    pathname,
  );

  // * SEO
  const description = 'My first portfolio, created in 2019.';

  const imagePlaceholderBackgroundColor = '#f72d2e';

  return (
    <MainLayout>
      <SplitLayout>
        <SplitContentLeft>
          <h1 className='m-b-xl md:m-b-md'>
            <RevealTextOverflowOnEnter>Portfolio V1</RevealTextOverflowOnEnter>
          </h1>
          <RevealContainerOnEnter>
            <h2 className='m-b-lg lh-default'>{description}</h2>
          </RevealContainerOnEnter>

          <div
            className={classnames('d-flex space-x-lg m-b-xl', styles.details)}
          >
            <RevealContainerOnEnter>
              <ProjectNavigationLinks
                next={nextProject}
                previous={previousProject}
              />
            </RevealContainerOnEnter>
            {/* make component */}
            <div style={{ flex: 1 }}>
              <ul className='space-y-md'>
                <li>
                  <RevealContainerOnEnter>
                    <h3 className='m-b-sm'>What I Did</h3>
                    <p>Design and Development</p>
                  </RevealContainerOnEnter>
                </li>
                <li>
                  <RevealContainerOnEnter>
                    <h3 className='m-b-sm'>Tech</h3>
                    <p>React, Sass, Framer Motion, Webpack</p>
                  </RevealContainerOnEnter>
                </li>
              </ul>
            </div>
          </div>
          <RevealContainerOnEnter>
            <Button
              target='_blank'
              rel='noopener noreferrer'
              type='link'
              href={currentProject?.externalLink ?? ''}
            >
              visit website
            </Button>
          </RevealContainerOnEnter>
        </SplitContentLeft>
        <SplitContentRight>
          <div className={styles.mediaContainer}>
            <div className={styles.image1}>
              <RevealDiffContainerMethodsAtBreakpoint threshold={0.3}>
                <ResponsiveImage
                  height={1160}
                  width={1450}
                  src='/images/portfolio-v1/portfolio-v1-mobile-images.jpg'
                  altText='screenshot of caffeinator homepage'
                  bgColor={imagePlaceholderBackgroundColor}
                />
              </RevealDiffContainerMethodsAtBreakpoint>
            </div>
            <div className={styles.image2}>
              <RevealDiffContainerMethodsAtBreakpoint>
                <ResponsiveImage
                  height={646}
                  width={808}
                  src='/images/portfolio-v1/portfolio-v1-logo.jpg'
                  altText='screenshot of caffeinator homepage'
                  bgColor={imagePlaceholderBackgroundColor}
                />
              </RevealDiffContainerMethodsAtBreakpoint>
            </div>
            <div className={styles.text1}>
              <RevealDiffContainerMethodsAtBreakpoint>
                <p>
                  My first foray into the React world. This project completely
                  altered the way I think about composing and architecting front
                  end web applications. I wanted a platform to showcase some of
                  the side projects I was working on at the time, while also
                  serving as a testing ground for new techniques and libraries I
                  was learning.
                </p>
              </RevealDiffContainerMethodsAtBreakpoint>
            </div>
            <div className={styles.text2}>
              <RevealContainerInView>
                <p className={styles.text2}>
                  Publishing this portfolio was a major milestone in crossing
                  over from a developer that likened himself as a tinkerer in
                  the FED space, to having the skills to realize, and implement
                  nearly any piece of UI that he could think of.
                </p>
              </RevealContainerInView>
            </div>
            <div className={styles.image3}>
              <RevealContainerInView>
                <ResponsiveImage
                  height={2529}
                  width={1857}
                  src='/images/portfolio-v1/portfolio-v1-full.png'
                  altText='screenshot of caffeinator homepage'
                  bgColor={imagePlaceholderBackgroundColor}
                />
              </RevealContainerInView>
            </div>
          </div>
        </SplitContentRight>
      </SplitLayout>
      {isProject(nextProject) ? (
        <RevealBox>
          <FullscreenLink
            cta='Explore next project'
            href={nextProject.path}
            title={nextProject.name}
            imageWidth={nextProject.preview.width}
            imageHeight={nextProject.preview.height}
            alt='Picture of me'
            src={nextProject.preview.src}
          />
        </RevealBox>
      ) : null}
    </MainLayout>
  );
};

PortfolioV1.getInitialProps = async ({ pathname }) => {
  return {
    projects,
    pathname,
  };
};

export default PortfolioV1;
