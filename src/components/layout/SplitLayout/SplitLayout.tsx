import styles from './SplitLayout.module.scss';

type SplitLayoutProps = {
  left: JSX.Element;
  right: JSX.Element;
};
export const SplitLayout: React.FC<SplitLayoutProps> = ({ left, right }) => {
  return (
    <div className={styles.content}>
      <div className={styles.contentLeft}>
        <div className={styles.contentLeftWrapper}>{left}</div>
      </div>
      <div className={styles.contentRight}>
        <div className={styles.contentRightWrapper}>{right}</div>
      </div>
    </div>
  );
};
