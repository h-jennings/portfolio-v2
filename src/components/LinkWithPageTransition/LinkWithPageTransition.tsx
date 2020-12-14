import { useRouter } from 'next/router';
import React from 'react';

import { wipeTransitionDuration } from '@/animation/page-transition';
import { PageWiperActionNames, usePageWiper } from '@/context/page-wiper';

interface LinkWithPageTransitionProps {
  route: string;
  [prop: string]: any;
}
export const LinkWithPageTransition: React.FC<LinkWithPageTransitionProps> = (
  props,
) => {
  const { dispatch } = usePageWiper();
  const router = useRouter();
  function handleLinkClick(
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    route: string,
  ) {
    e.preventDefault();
    if (router.pathname === route) return;

    // * State transition
    window.requestAnimationFrame(() => {
      router.push(route, undefined, {
        shallow: true,
      });
      setTimeout(() => {
        dispatch({ type: PageWiperActionNames.CLICK });
      }, wipeTransitionDuration * 1000);
    });
  }
  return (
    <a
      {...props}
      href={props.route}
      onClick={(e) => handleLinkClick(e, props.route)}>
      {props.children}
    </a>
  );
};
