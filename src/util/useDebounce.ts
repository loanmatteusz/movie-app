import { useRef } from "react";

function useDebounce(fn: Function, delay: number) {
  const timeoutRef: any = useRef(null);

  function deBounceFn(...args: any) {
    window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      fn(...args);
    }, delay);
  }
  return deBounceFn;
}

export default useDebounce;
