import React from 'react';

export const useKeypressListener = (
  keycode: string,
  callback: (x?: any) => any,
): void => {
  const handleKeypress = (e: KeyboardEvent): any => {
    if (e.code !== keycode) return;

    callback();
  };
  React.useEffect(() => {
    document.addEventListener('keydown', handleKeypress);
    return () => {
      document.removeEventListener('keydown', handleKeypress);
    };
  });
};
