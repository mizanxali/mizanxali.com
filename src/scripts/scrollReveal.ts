import { getContentPane, isDesktop } from "./dom";

let observer: IntersectionObserver | null = null;

const createObserver = (): IntersectionObserver =>
  new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    // Reveal on the first visible pixel, so a row peeking above the fold signals more to scroll.
    { root: isDesktop() ? getContentPane() : null }
  );

/** Elements inside a hidden tab panel are skipped until that panel is shown. */
const getAnimatedElements = (): HTMLElement[] =>
  Array.from(document.querySelectorAll<HTMLElement>(".scroll-animate")).filter(
    (element) => !element.closest("[hidden]")
  );

/** Re-attaches the observer. Call after switching tabs or resizing. */
export const refreshScrollReveal = (): void => {
  observer?.disconnect();

  const animatedElements = getAnimatedElements();

  if (!isDesktop()) {
    animatedElements.forEach((element) => element.classList.add("visible"));
    return;
  }

  observer = createObserver();
  animatedElements.forEach((element) => observer?.observe(element));
};

export const initScrollReveal = (): void => {
  refreshScrollReveal();
  window.addEventListener("resize", refreshScrollReveal);
};
