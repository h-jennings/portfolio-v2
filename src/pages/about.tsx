import { PageWithLayoutType } from '@/components/layout/layout.model';
import { MainLayout } from '@/components/layout/MainLayout/MainLayout';
import { decodeHtml } from '@/helpers/decode-html';

const About: React.FC = () => {
  return <div>about</div>;
};

(About as PageWithLayoutType).getLayout = (page) => {
  return (
    <MainLayout pageTitle={`Portfolio ${decodeHtml('&mdash;')} About`}>
      {page}
    </MainLayout>
  );
};
export default About;
