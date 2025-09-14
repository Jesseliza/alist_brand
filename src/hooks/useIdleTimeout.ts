import { useEffect, useRef, useCallback } from 'react';

const useIdleTimeout = (onIdle: () => void, idleTime: number) => {
  const timeoutId = useRef<number | null>(null);

  const resetTimer = useCallback(() => {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }
    timeoutId.current = window.setTimeout(onIdle, idleTime);
  }, [onIdle, idleTime]);

  const handleEvent = useCallback(() => {
    resetTimer();
  }, [resetTimer]);

  useEffect(() => {
    const events = ['mousemove', 'keydown', 'mousedown', 'touchstart'];

    events.forEach(event => window.addEventListener(event, handleEvent));
    resetTimer();

    return () => {
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }
      events.forEach(event => window.removeEventListener(event, handleEvent));
    };
  }, [handleEvent, resetTimer]);
};

export default useIdleTimeout;
