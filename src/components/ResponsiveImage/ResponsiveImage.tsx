import Image from 'next/image';
import styles from './ResponsiveImage.module.scss';
import { Colors } from '@/models/colors';

type ResponsiveImageProps = {
  height: number;
  width: number;
  src: string;
  bgColor?: string;
  altText?: string;
};

export const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  width,
  height,
  bgColor = Colors.grey,
  altText = '',
}) => {
  return (
    <div
      className={styles.outer}
      style={{
        paddingTop: `${(height / width) * 100}%`,
        backgroundColor: bgColor,
      }}
      data-testid='responsive-image-container'>
      <div className={styles.inner}>
        <Image src={src} width={width} height={height} alt={altText} />
      </div>
    </div>
  );
};
