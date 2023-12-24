export const debounce = (callback: () => void, delay: number): (() => void) => {
  let timer: ReturnType<typeof setTimeout>;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(callback, delay);
  };
};
