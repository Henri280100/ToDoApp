import { useEffect, useCallback } from "react";

export const useDebounce = (effect, dependencies, delay) => {
  // store the provided effect in a 'useCallback' hook to avoid
  // having the callback function execute on each render
  const callback = useCallback(effect, dependencies);

  useEffect(
    () => {
      const timeout = setTimeout(callback, delay);
      return () => clearTimeout(timeout);
    },
    // re-execute the effect if the delay or callback changes
    [callback, delay]
  );
};
