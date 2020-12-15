import { useRouter } from 'next/router';
import React from 'react';

import { wipeTransitionTotalTimeInMs } from '@/animation/page-transition';
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
    dispatch({ type: PageWiperActionNames.CLICK });

    // Change route at wipe transition midpoint
    setTimeout(() => {
      router.push(route);
    }, wipeTransitionTotalTimeInMs / 2);
  }

  React.useEffect(() => {
    router.prefetch(props.route);
  }, [props.route, router]);
  return (
    <a
      {...props}
      href={props.route}
      onClick={(e) => handleLinkClick(e, props.route)}>
      {props.children}
    </a>
  );
};
