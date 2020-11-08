import styles from './SvgContainer.module.scss';

type SvgContainerProps = {
  svgWidth?: number;
  svgHeight?: number;
};
export const SvgContainer: React.FC<SvgContainerProps> = ({
  children,
  svgHeight = 1,
  svgWidth = 1,
}) => {
  return (
    <div
      className={styles.outer}
      style={{ paddingTop: `${(svgHeight / svgWidth) * 100}%` }}>
      {children}
    </div>
  );
};
