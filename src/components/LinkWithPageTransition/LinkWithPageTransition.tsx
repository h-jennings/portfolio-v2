/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import { useRouter } from 'next/router';
import React from 'react';

import { wipeTransitionDuration } from '@/animation/page-transition';
import { PageWiperActionNames, usePageWiper } from '@/context/page-wiper';

interface LinkWithPageTransitionProps {
  route: string;
  children?: React.ReactNode;
}
export const LinkWithPageTransition = React.forwardRef<
  HTMLAnchorElement,
  LinkWithPageTransitionProps
>((props, ref) => {
  const { dispatch } = usePageWiper();
  const router = useRouter();
  function handleLinkClick(route: string) {
    if (router.pathname === route) return;

    dispatch({ type: PageWiperActionNames.CLICK });
    setTimeout(() => {
      /* 
        TODO: Need to adjust timing of transition
        Honestly will most likely need to ditch AnimatePresence stuff, 
        other than enter I think...
      */
      router.push(route);
    }, (wipeTransitionDuration / 2) * 1000);
  }
  return (
    <a ref={ref} {...props} onClick={() => handleLinkClick(props.route)} />
  );
});
