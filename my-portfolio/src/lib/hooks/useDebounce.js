import { useRef, useEffect } from 'react';

export default function useDebounce(value, delay) {
  const ref = useRef(value);
  useEffect(() => {
    const t = setTimeout(() => (ref.current = value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return ref.current;
}
