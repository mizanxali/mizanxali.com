/** Below this width the page itself scrolls; above it, the right-hand pane does. */
export const DESKTOP_MEDIA_QUERY = "(min-width: 1024px)";

export const isDesktop = (): boolean => window.matchMedia(DESKTOP_MEDIA_QUERY).matches;

export const getContentPane = (): HTMLElement | null =>
  document.querySelector<HTMLElement>("#content-pane");
