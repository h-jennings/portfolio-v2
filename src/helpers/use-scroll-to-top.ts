import React from 'react';

/**
 * Scrolls window to top on component mount
 */
export function useScrollToTop(): void {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
}
