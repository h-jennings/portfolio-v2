import Image from 'next/image';
import Link from 'next/link';

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
      <Link href={href}>
        <a className={styles.link}>
          <div className='w-full'>
            <div className='m-b-sm'>
              <h1 className='fz-base ta-c'>{cta}</h1>
            </div>
            <h2 className='fz-xl ta-c m-b-lg'>{title}</h2>
            <div className={styles.imageContainer}>
              <Image
                width={imageWidth}
                height={imageHeight}
                alt={alt}
                src={src}
              />
            </div>
          </div>
        </a>
      </Link>
    </section>
  );
};
