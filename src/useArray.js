import { useCallback, useState } from "react";

export function useArray(initialArray) {
  const [array, setArray] = useState(initialArray);

  function push(element) {
    setArray((prev) => [...prev, element]);
  }

  const replace = useCallback((index, newElement) => {
    setArray((prev) => { return [
      ...prev.slice(0, index),
      newElement,
      ...prev.slice(index + 1),
    ]});
  }, []);

  const filter = useCallback ((callback) => {
    setArray((prev) => prev.filter(callback));
  }, []);

  const remove = useCallback((index) =>{
    setArray((prev) => [
      ...prev.slice(0, index),
      ...prev.slice(index + 1),
    ]);
  }, []);

  const clear = useCallback(() => {
    setArray([]);
  }, []);

  const reset = useCallback (() => {
    setArray(initialArray);
  }, [initialArray]);

  return { array, set: setArray, pushElement: push, replace, filter, remove, clear, reset };
}