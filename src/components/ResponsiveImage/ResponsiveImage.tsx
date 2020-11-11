import Image from 'next/image';
import styles from './ResponsiveImage.module.scss';

type ResponsiveImageProps = {
  height: number;
  width: number;
  src: string;
};

export const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  width,
  height,
}) => {
  return (
    <div
      className={styles.outer}
      style={{ paddingTop: `${(height / width) * 100}%` }}>
      <div className={styles.inner}>
        <Image src={src} width={width} height={height} />
      </div>
    </div>
  );
};
