import styles from '@scss/pages/About.module.scss';
import classnames from 'classnames';
import { PageWithLayoutType } from '@/components/layout/layout.model';
import { MainLayout } from '@/components/layout/MainLayout/MainLayout';
import { decodeHtml } from '@/helpers/decode-html';

const About: React.FC = () => {
  return (
    <main className={styles.content}>
      <div className={styles.contentLeft}>
        <div className={styles.contentLeftWrapper}>
          <h1 className={classnames(['m-b-xl'])}>About</h1>
          <p className={classnames(['m-b-md'])}>
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
          <div className={classnames(['m-b-xl', styles.image])}></div>
          <section className='m-b-xl'>
            <h2 className='m-b-sm'>What I Do</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
              omnis tenetur incidunt fugiat animi ex iste dolore odit, cum
              dolorem similique accusantium minus cumque doloremque quae quis.
              Illo, eum esse!
            </p>
          </section>
          <section>
            <h2 className='m-b-sm'>Where I&apos;ve done it</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellat, asperiores excepturi laudantium accusamus unde atque
              expedita dicta enim quaerat omnis, dolores distinctio. Corporis
              aut neque similique inventore! Expedita ab esse ea inventore
              distinctio minima animi eaque voluptatem eius obcaecati, debitis
              perspiciatis voluptatum excepturi sit consequatur molestias unde
              exercitationem et a?
            </p>
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
