import { getContentPane, isDesktop } from "./dom";
import { refreshScrollReveal } from "./scrollReveal";

const NAVIGATION_KEYS = ["ArrowLeft", "ArrowRight", "Home", "End"];

export const initWorkTabs = (): void => {
  const contentPane = getContentPane();
  const workSection = document.querySelector<HTMLElement>("#work");
  const tabs = Array.from(document.querySelectorAll<HTMLElement>("[data-work-tab]"));

  const setActiveTab = (tabName: string | undefined, { focus = false } = {}): void => {
    const activeTab = tabs.find((tab) => tab.dataset.workTab === tabName);

    if (!activeTab) return;

    tabs.forEach((tab) => {
      const isActive = tab === activeTab;
      const panelId = tab.getAttribute("aria-controls");
      const panel = panelId ? document.getElementById(panelId) : null;

      tab.setAttribute("aria-selected", String(isActive));
      tab.tabIndex = isActive ? 0 : -1;

      if (panel) {
        panel.hidden = !isActive;
      }
    });

    if (focus) {
      activeTab.focus();
    }

    // Desktop uses the right-side pane as the scroll container; mobile uses the page.
    if (isDesktop() && contentPane) {
      contentPane.scrollTop = 0;
    } else if (workSection) {
      const top = workSection.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top, behavior: "auto" });
    }

    refreshScrollReveal();
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      setActiveTab(tab.dataset.workTab);
    });

    tab.addEventListener("keydown", (event) => {
      if (!NAVIGATION_KEYS.includes(event.key)) return;

      event.preventDefault();

      let nextIndex = index;

      if (event.key === "ArrowRight") {
        nextIndex = (index + 1) % tabs.length;
      }

      if (event.key === "ArrowLeft") {
        nextIndex = (index - 1 + tabs.length) % tabs.length;
      }

      if (event.key === "Home") {
        nextIndex = 0;
      }

      if (event.key === "End") {
        nextIndex = tabs.length - 1;
      }

      setActiveTab(tabs[nextIndex]?.dataset.workTab, { focus: true });
    });
  });
};
