import React from 'react';

export function usePopStateCallback(cb: (x?: any) => any | void): void {
  React.useEffect(() => {
    const handlePop = (e: any) => {
      console.log('pop state called');
    };
    // window.addEventListener('popstate', cb);
    window.addEventListener('popstate', handlePop);

    // () => window.removeEventListener('popstate', cb);
    () => window.removeEventListener('popstate', handlePop);
  }, []);
}
