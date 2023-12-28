export const removeChildren = (element: HTMLElement) => {
  [...element.children].forEach((el) => {
    el.remove();
  });
};
