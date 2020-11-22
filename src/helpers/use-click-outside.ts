import React from 'react';

export const useClickOutside = (
  ref: React.MutableRefObject<any>,
  callback: () => any,
): void => {
  const handleClick = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target)) {
      // console.log('clicked outside!', { element: e.target });
      callback();
    }
  };
  React.useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};
