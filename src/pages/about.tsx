import { SecondaryLayout } from '@/components/layout/SecondaryLayout/SecondaryLayout';
import { PageWithLayoutType } from '@/components/layout/layout.model';

const About: React.FC = () => {
  return <div>about</div>;
};

(About as PageWithLayoutType).getLayout = (page) => {
  return <SecondaryLayout>{page}</SecondaryLayout>;
};
export default About;
