import { PageWithLayoutType } from '@/components/layouts/layout.model';
import { MainLayout } from '@/components/layouts/MainLayout/MainLayout';
import { decodeHtml } from '@/helpers/decode-html';
import { SplitLayout } from '@/components/layouts/SplitLayout/SplitLayout';
import { NextSeo } from 'next-seo';
import { ProjectNavigationLinks } from '@/components/ProjectNavigationLinks/ProjectNavigationLinks';

const Caffeinator: React.FC = () => {
  const title = `Portfolio ${decodeHtml('&mdash;')} Caffeinator`;
  const description = 'An app for building the perfect cup of coffee.';
  const SEO = {
    title,
    description,
    openGraph: {
      title,
      description,
    },
  };

  const leftContent = (
    <>
      <h1 className='m-b-xl'>Caffeinator</h1>
      <div>
        <ProjectNavigationLinks />
      </div>
    </>
  );

  const rightContent = (
    <>
      <div
        style={{
          width: '100%',
          backgroundColor: 'var(--color-blue)',
          height: '370px',
        }}></div>
    </>
  );

  return (
    <>
      <NextSeo {...SEO} />
      <SplitLayout left={leftContent} right={rightContent} />
    </>
  );
};

(Caffeinator as PageWithLayoutType).getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};

export default Caffeinator;
