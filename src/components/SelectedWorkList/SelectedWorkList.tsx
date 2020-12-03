/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import classnames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useReducer } from 'react';
import Media from 'react-media';

import { HoverImage } from '@/components/HoverImage/HoverImage';
import { RevealText } from '@/components/RevealText/RevealText';
import { AppThemes, useTheme } from '@/context/theme';
import { Project } from '@/data/projects';
import { Colors } from '@/models/colors';

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

const SelectedWorkList: React.FC<SelectedWorkListProps> = ({ projects }) => {
  // Breakpoint for the navigation options
  const breakpoint = '(max-width: 768px)';
  return (
    <Media queries={{ mobile: breakpoint }} defaultMatches={{ mobile: false }}>
      {(matches) => {
        return (
          <>
            {matches.mobile ? (
              <Mobile projects={projects} />
            ) : (
              <Desktop projects={projects} />
            )}
          </>
        );
      }}
    </Media>
  );
};

const Desktop: React.FC<SelectedWorkListProps> = ({ projects }) => {
  const router = useRouter();

  const { setTheme } = useTheme();

  // Cleaning up app theme when route is changed
  React.useEffect(
    function resetThemeOnRouteStart() {
      const resetTheme = (): void => {
        setTheme('dark');
      };

      router.events.on('routeChangeStart', resetTheme);

      return () => router.events.off('routeChangeStart', resetTheme);
    },
    [setTheme, router.events],
  );

  React.useEffect(
    function resetThemeOnRouteComplete() {
      const resetTheme = (): void => {
        setTheme('dark');
      };

      router.events.on('routeChangeComplete', resetTheme);

      return () => router.events.off('routeChangeComplete', resetTheme);
    },
    [setTheme, router.events],
  );
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
  const handleThemeChange = (idx?: number): void => {
    idx !== undefined ? setTheme(linkData[idx].theme) : setTheme('dark');
  };
  const handleHoverImageStateChange = (idx?: number): void => {
    idx !== undefined
      ? dispatch(linkData[idx].action)
      : dispatch({ type: 'DESTROY', payload: { src: null } });
  };

  const handleLinkAction = (idx?: number): void => {
    // Setting Application Theme
    handleThemeChange(idx);

    // Altering Hover Image State
    handleHoverImageStateChange(idx);
  };
  return (
    <ol
      className={classnames(['space-y-xl md:space-y-md p-b-xxl', styles.list])}>
      {projects.map((proj, idx) => (
        <li key={proj.path} className={styles.listItem}>
          <RevealText>
            <Link scroll={false} href={proj.path}>
              <a
                onMouseEnter={() => handleLinkAction(idx)}
                onMouseLeave={() => handleLinkAction()}
                onFocus={() => handleLinkAction(idx)}
                onBlur={() => handleLinkAction()}
                className={classnames([
                  'd-flex space-x-lg md:space-x-md',
                  styles.link,
                ])}>
                <div
                  aria-hidden={true}
                  className={styles.bar}
                  style={{ backgroundColor: linkData[idx].hex ?? Colors.white }}
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

const Mobile: React.FC<SelectedWorkListProps> = ({ projects }) => {
  return (
    <ol className={styles.mobileList}>
      {projects.map((proj) => (
        <li key={proj.path} className={styles.mobilePreviewItem}>
          <div className={styles.mobilePreview}>
            <div className={styles.mobilePreviewImageContainerOuter}>
              <div className={styles.mobilePreviewImageContainerInner}>
                <Image
                  className={styles.mobilePreviewImage}
                  src={proj.preview.src}
                  layout='fill'
                />
              </div>
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
};

export { SelectedWorkList };
