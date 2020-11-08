import { PageWithLayoutType } from '@/components/layout/layout.model';
import { MainLayout } from '@/components/layout/MainLayout/MainLayout';
import { decodeHtml } from '@/helpers/decode-html';
import classnames from 'classnames';

const Home: React.FC = () => {
  return (
    <div className={classnames(['d-block p-x-xl'])}>
      <main>
        <div style={{ minHeight: '100vh' }}>
          <h1
            data-testid='headline'
            className={classnames(
              'c-orange fw-bold m-b-xl ta-center lg-compact',
            )}>
            Welcome to Next.js!
          </h1>
        </div>
        <h1 id='selected-work' style={{ minHeight: '100vh' }}>
          Selected Work
        </h1>
      </main>
    </div>
  );
};

(Home as PageWithLayoutType).getLayout = (page) => {
  return (
    <MainLayout pageTitle={`Portfolio ${decodeHtml('&mdash;')} Home`}>
      {page}
    </MainLayout>
  );
};

export default Home;
