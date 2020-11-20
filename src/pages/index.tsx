import classnames from 'classnames';
import Link from 'next/link';

import { PageWithLayoutType } from '@/components/layouts/layout.model';
import { MainLayout } from '@/components/layouts/MainLayout/MainLayout';
import { Paths } from '@/models/paths';

const Home: React.FC = () => {
  return (
    <div className={classnames(['d-block p-x-xl'])}>
      <main>
        <div style={{ minHeight: '100vh' }}>
          <h1
            data-testid='headline'
            className={classnames(
              'c-orange fw-bold m-b-xl sm:m-b-md ta-center lg-compact',
            )}>
            Welcome to Next.js!
          </h1>
          <Link href={Paths.dod}>
            <a className='d-block'>Department of Defense</a>
          </Link>
          <Link href={Paths.caffeinator}>
            <a className='d-block'>caffeinator</a>
          </Link>
          <Link href={Paths.portfolioV1}>
            <a className='d-block'>Portfolio V1</a>
          </Link>
        </div>
        <h1 id='selected-work' style={{ minHeight: '100vh' }}>
          Selected Work
        </h1>
      </main>
    </div>
  );
};

(Home as PageWithLayoutType).getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;
