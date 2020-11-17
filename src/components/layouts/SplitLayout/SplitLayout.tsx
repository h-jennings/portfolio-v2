import styles from './SplitLayout.module.scss';

export const SplitContentLeft: React.FC = ({ children }) => {
  return (
    <div className={styles.contentLeft}>
      <div className={styles.contentLeftWrapper}>{children}</div>
    </div>
  );
};
export const SplitContentRight: React.FC = ({ children }) => {
  return (
    <div className={styles.contentRight}>
      <div className={styles.contentRightWrapper}>{children}</div>
    </div>
  );
};

export const SplitLayout: React.FC = ({ children }) => {
  return <div className={styles.content}>{children}</div>;
};
