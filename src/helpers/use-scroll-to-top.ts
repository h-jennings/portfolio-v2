import React from 'react';

export function useScrollToTop(): void {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
}
