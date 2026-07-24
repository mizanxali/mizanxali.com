import type { ContentItem } from "../types";

export const contentItems: ContentItem[] = [
  {
    type: "video",
    name: "Huddle01 Video Library",
    url: "https://www.youtube.com/playlist?list=PLegd1MLQ2KqEhjeGbFfDJSTN6FogFRFgc",
    description: "Playlist of video content created for Huddle01",
    placeholder: "playlist",
  },
  {
    type: "video",
    name: "ETHIndia 2023 Workshop",
    url: "https://www.youtube.com/watch?v=1buGBl2UQNI",
    description: "IRL workshop at ETHGlobal's ETHIndia 2023",
    embedUrl: "https://www.youtube.com/embed/1buGBl2UQNI",
  },
  {
    type: "video",
    name: "ETHGlobal Tokyo 2023",
    url: "https://www.youtube.com/watch?v=iBej0ze9iB0&t=360s",
    description: "Virtual workshop for ETHGlobal Tokyo 2023",
    embedUrl: "https://www.youtube.com/embed/iBej0ze9iB0",
  },
  {
    type: "video",
    name: "UNO Online Tutorial",
    url: "https://www.youtube.com/watch?v=FBAJdbpFnjs",
    description: "Tutorial on building a realtime UNO card game",
    embedUrl: "https://www.youtube.com/embed/FBAJdbpFnjs",
  },
  {
    type: "blog",
    name: "React Native 101: The only bottom sheet guide you'll ever need",
    url: "https://huddle01.hashnode.dev/react-native-101-the-only-bottom-sheet-guide-youll-ever-need",
    description:
      "A step-by-step walkthrough to create a reusable, customizable bottom sheet component in React Native.",
    image: "/bottom-sheet-blog.webp",
    meta: "Blog · 8 min read",
  },
  {
    type: "blog",
    name: "Recreating Valorant's in-game voice chat system using Huddle01 SDK",
    url: "https://huddle01.hashnode.dev/recreating-valorants-in-game-voice-chat-system-using-huddle01-sdk",
    description:
      "A guide to building a push-to-talk team and party voice chat system with the Huddle01 SDK.",
    image: "/valorant-blog.webp",
    meta: "Blog · 13 min read",
  },
];
