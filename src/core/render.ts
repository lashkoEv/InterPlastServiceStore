export const render = (parent: HTMLElement, component: HTMLElement | HTMLElement[]) => {
  [...parent.children].forEach((el) => {
    el.remove();
  });

  if (Array.isArray(component)) {
    parent.append(...component);
  } else {
    parent.append(component);
  }
};
