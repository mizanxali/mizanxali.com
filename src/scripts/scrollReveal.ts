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
    {
      threshold: 0.12,
      root: isDesktop() ? getContentPane() : null,
      rootMargin: "0px 0px -80px 0px",
    }
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
