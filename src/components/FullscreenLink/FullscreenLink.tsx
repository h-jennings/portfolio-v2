import { LinkWithPageTransition } from '@components/LinkWithPageTransition/LinkWithPageTransition';
import classnames from 'classnames';
import Image from 'next/image';
import styles from './FullscreenLink.module.scss';

interface FullscreenLinkProps {
  cta: string;
  href: string;
  title: string;
  imageWidth: number;
  imageHeight: number;
  src: string;
  alt?: string;
}

export const FullscreenLink: React.FC<FullscreenLinkProps> = ({
  cta,
  href,
  title,
  imageWidth,
  imageHeight,
  src,
  alt = undefined,
}) => {
  return (
    <section className={styles.container}>
      <LinkWithPageTransition className={styles.link} route={href}>
        <div className='w-full'>
          <div className='m-b-sm'>
            <h1 className='fz-base ta-c'>{cta}</h1>
          </div>
          <h2
            className={classnames('fz-xl ta-c m-b-lg md:m-b-md', styles.title)}
          >
            {title}
          </h2>
          <div className={styles.imageContainer}>
            <Image
              width={imageWidth}
              height={imageHeight}
              alt={alt}
              src={src}
            />
          </div>
        </div>
      </LinkWithPageTransition>
    </section>
  );
};
