import React from 'react';

export function useMouseCoordinates(): { x: number; y: number } {
  const [coords, setCoords] = React.useState({ x: 0, y: 0 });

  // Need to debounce
  React.useEffect(() => {
    const setFromEvent = (e: MouseEvent) =>
      setCoords({ x: e.clientX, y: e.clientY });

    window.addEventListener('mousemove', setFromEvent);

    return () => window.removeEventListener('mousemove', setFromEvent);
  }, []);

  return coords;
}
