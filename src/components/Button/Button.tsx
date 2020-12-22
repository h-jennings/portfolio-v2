import { ReactComponent as ArrowIcon } from '@assets/svg/arrow-icon.svg';
import classnames from 'classnames';

import { SvgContainer } from '../SvgContainer/SvgContainer';
import styles from './Button.module.scss';

interface ButtonLinkType {
  type: 'link';
  href: string;
}
interface ButtonType {
  type: 'button';
}

type ButtonProps = { [x: string]: any } & (ButtonType | ButtonLinkType);

const ButtonIcon: React.FC = () => {
  return (
    <div className={styles.buttonIconContainer}>
      <div className={classnames(styles.buttonIcon)}>
        <SvgContainer svgWidth={14} svgHeight={14}>
          <ArrowIcon />
        </SvgContainer>
      </div>
    </div>
  );
};

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <>
      {props.type === 'link' ? (
        <a className={styles.button} {...props} href={props.href}>
          <span>{props.children}</span>
          <ButtonIcon />
        </a>
      ) : (
        <button
          className={classnames('button-reset', styles.button)}
          {...props}>
          <span>{props.children}</span>
          <ButtonIcon />
        </button>
      )}
    </>
  );
};
