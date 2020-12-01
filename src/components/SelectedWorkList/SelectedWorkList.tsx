/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import classnames from 'classnames';
import Link from 'next/link';
import { useReducer } from 'react';

import { AppThemes, useTheme } from '@/context/theme';
import { Project } from '@/data/projects';
import { Colors } from '@/models/colors';

import { HoverImage } from '../HoverImage/HoverImage';
import { RevealText } from '../RevealText/RevealText';
import styles from './SelectedWorkList.module.scss';

type HoverImageState =
  | { status: 'visible'; src: string | null }
  | { status: 'hidden'; src: string | null };
type HoverImagePayload = { payload: { src: string | null } };
type HoverImageActions =
  | ({
      type: 'CREATE';
    } & HoverImagePayload)
  | ({
      type: 'DESTROY';
    } & HoverImagePayload);

const initialHoverImageState: HoverImageState = { status: 'hidden', src: null };

function hoverImageReducer(
  state: HoverImageState,
  action: HoverImageActions,
): HoverImageState {
  switch (action.type) {
    case 'CREATE': {
      return {
        ...state,
        status: 'visible',
        src: action.payload.src,
      };
    }

    case 'DESTROY': {
      return {
        ...state,
        status: 'hidden',
        src: action.payload.src,
      };
    }

    default:
      throw new Error('impossible state');
  }
}

interface ILinkData {
  theme: AppThemes;
  hex: Colors;
  action: HoverImageActions;
}
interface SelectedWorkListProps {
  projects: Project[];
}

export const SelectedWorkList: React.FC<SelectedWorkListProps> = ({
  projects,
}) => {
  const { setTheme } = useTheme();
  const [hoverImageState, dispatch] = useReducer(
    hoverImageReducer,
    initialHoverImageState,
  );
  const linkData: ILinkData[] = [
    {
      theme: 'orange',
      hex: Colors.orange,
      action: {
        type: 'CREATE',
        payload: {
          src: '/images/f35/f35-devices-images.jpg',
        },
      },
    },
    {
      theme: 'blue',
      hex: Colors.blue,
      action: {
        type: 'CREATE',
        payload: {
          src: '/images/caffeinator/caffeinator-image-3.png',
        },
      },
    },
    {
      theme: 'grey',
      hex: Colors.grey,
      action: {
        type: 'CREATE',
        payload: {
          src: '/images/portfolio-v1/portfolio-v1-mobile-images.jpg',
        },
      },
    },
  ];
  const handleThemeChange = (i?: number): void => {
    i !== undefined ? setTheme(linkData[i].theme) : setTheme('dark');
  };
  const handleHoverImageStateChange = (i?: number): void => {
    i !== undefined
      ? dispatch(linkData[i].action)
      : dispatch({ type: 'DESTROY', payload: { src: null } });
  };

  const handleLinkAction = (i?: number): void => {
    // Setting Application Theme
    handleThemeChange(i);

    // Altering Hover Image State
    handleHoverImageStateChange(i);
  };
  return (
    <ol
      className={classnames(['space-y-xl md:space-y-md p-b-xxl', styles.list])}>
      {projects.map((proj, i) => (
        <li key={proj.path} className={styles.listItem}>
          <RevealText>
            <Link href={proj.path}>
              <a
                onMouseEnter={() => handleLinkAction(i)}
                onMouseLeave={() => handleLinkAction()}
                onFocus={() => handleLinkAction(i)}
                onBlur={() => handleLinkAction()}
                onClick={() => handleLinkAction()}
                className={classnames([
                  'd-flex space-x-lg md:space-x-md',
                  styles.link,
                ])}>
                <div
                  aria-hidden={true}
                  className={styles.bar}
                  style={{ backgroundColor: linkData[i].hex ?? Colors.white }}
                />
                <div className={classnames(['lh-1', styles.listItemText])}>
                  {proj.name}
                </div>
              </a>
            </Link>
          </RevealText>
        </li>
      ))}
      <HoverImage src={hoverImageState.src} status={hoverImageState.status} />
    </ol>
  );
};
