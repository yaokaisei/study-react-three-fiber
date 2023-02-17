import { RefObject, useEffect } from 'react';

const useResizeObserver = (
  elements: [RefObject<HTMLElement>],
  callback: ResizeObserverCallback,
) => {
  useEffect(() => {
    const resizeObserver = new ResizeObserver(callback);

    for (const elem of elements) {
      elem.current && resizeObserver.observe(elem.current);
    }

    return () => resizeObserver.disconnect();
  }, [elements, callback]);
};

export default useResizeObserver;
