import type { Project } from "../types";

export const personalProjects: Project[] = [
  {
    name: "Floodlights",
    description:
      "Letterboxd for cricket - mobile app to log and rate every match you watch, at the ground or on TV, with a stadium map, stats, and a friends feed",
    image: "/floodlights.webp",
    links: [{ label: "Live Site", url: "https://floodlights.mizanxali.com" }, { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.mizanxali.floodlights" }],
    tech: ["React Native", "Expo", "Hono", "CF Workers", "Supabase", "Postgres", "Drizzle"],
  },
  {
    name: "Visage",
    description:
      "Desktop app for finding photos of yourself from a large album using face recognition ML, fully offline",
    image: "/visage.webp",
    links: [
      { label: "Live Site", url: "https://visage-2tr.pages.dev" },
      { label: "GitHub", url: "https://github.com/mizanxali/visage" },
    ],
    tech: ["Electron", "Node.js", "RetinaFace", "ONNX", "Zustand", "SQLite"],
  },
  {
    name: "Radius",
    description:
      "IRL networking app for web3 events - phones find each other over Bluetooth, AI ranks who's worth meeting, and proof-of-meet stamps mint onchain",
    image: "/radius.webp",
    links: [
      { label: "Video", url: "https://x.com/mizanxali/status/2114665885315240449" },
      { label: "GitHub", url: "https://github.com/mizanxali/radius" },
    ],
    tech: ["React Native", "Offline Protocol", "Bluetooth", "Claude API", "CF Workers", "Base"],
  },
  {
    name: "Sex and the City",
    description:
      "Comedy dating sim grounded in real survey data - make a character, drop them into a town of 1,000 personas, and watch their month play out",
    image: "/sex-and-the-city.webp",
    links: [
      { label: "Live Site", url: "https://sexandthecity.fun" },
      { label: "GitHub", url: "https://github.com/mizanxali/sex-and-the-city" },
    ],
    tech: ["TypeScript", "Three.js", "Vite", "Logistic Regression", "Claude API", "CF Workers", "D1"],
  },
  {
    name: "Pit Stop",
    description:
      "Web3 Formula1 fantasy game - mint F1 cars as NFTs and compete by wagering them on real life races",
    image: "/pitstop.webp",
    links: [
      { label: "GitHub", url: "https://github.com/mizanxali/pit-stop" },
      { label: "Devfolio", url: "https://devfolio.co/projects/pit-stop-a06f" },
    ],
    tech: ["Next.js", "Tailwind", "Solidity", "Firebase", "Wagmi", "Polygon"],
  },
  {
    name: "Heimdall",
    description:
      "Offline peer-to-peer friend finder - two phones swap GPS over Bluetooth and WiFi Direct, then a live compass points you at each other with no internet",
    image: "/heimdall.webp",
    links: [{ label: "GitHub", url: "https://github.com/mizanxali/heimdall" }],
    tech: ["React Native", "Expo", "Bluetooth", "Zustand"],
  },
  {
    name: "Kohli vs The Dollar",
    description:
      "Race to 100 between Virat Kohli's international centuries and the price of a US dollar in rupees, with a live public poll backed by a Durable Object",
    image: "/kohli-vs-dollar.webp",
    links: [
      { label: "Live Site", url: "https://kohlivsthedollar.fun" },
      { label: "GitHub", url: "https://github.com/mizanxali/kohli-vs-dollar" },
    ],
    tech: ["React", "Vite", "Tailwind", "CF Workers", "Durable Objects"],
  },
  {
    name: "NBA Buddy",
    description:
      "AI companion app for NBA fans - ask anything about teams, players and stats, bookmark replies, and add upcoming games to your calendar",
    image: "/nba-buddy.webp",
    links: [
      { label: "GitHub", url: "https://github.com/mizanxali/nba-buddy" },
      { label: "YouTube", url: "https://www.youtube.com/shorts/8IzNrx66ejo" },
    ],
    tech: ["React Native", "Expo", "Gemini", "Hono", "CF Workers"],
  },
  {
    name: "Shakespeare for Bharat",
    description:
      "Read every Shakespeare play, then translate or listen to any speech in 22 Indian languages",
    image: "/shakespeare.webp",
    links: [
      { label: "Live Site", url: "https://shakespeare-for-bharat.vercel.app" },
      { label: "GitHub", url: "https://github.com/mizanxali/shakespeare-for-bharat" },
    ],
    tech: ["Next.js", "Tailwind", "TypeScript", "Sarvam AI", "Vercel"],
  },
  {
    name: "mpp-webrtc",
    description:
      "AI agents that pay per-second through Tempo's Machine Payments Protocol (MPP) to watch live video feeds over webRTC",
    image: "/mpp-webrtc.webp",
    links: [{ label: "GitHub", url: "https://github.com/mizanxali/mpp-webrtc" }],
    tech: ["Tempo", "MPP", "WebRTC", "Node.js"],
  },
  {
    name: "Pinitia",
    description:
      "Prediction markets app where users bet on ratings, reviews, and live visitor activity of places on Google Maps",
    image: "/pinitia.webp",
    links: [{ label: "GitHub", url: "https://github.com/mizanxali/pinitia" }],
    tech: ["Next.js", "Tailwind", "Postgres", "Google Maps", "Move", "Initia"],
  },
  {
    name: "UNO Online",
    description: "Real-time 1v1 UNO card game",
    image: "/uno.webp",
    links: [
      { label: "GitHub", url: "https://github.com/mizanxali/uno-online" },
      { label: "YouTube", url: "https://www.youtube.com/watch?v=FBAJdbpFnjs" },
    ],
    tech: ["React", "Node.js", "Socket.IO"],
  },
  {
    name: "react-webpify",
    description:
      "npm package for using optimized WebP images in React apps with graceful fallbacks",
    links: [
      { label: "GitHub", url: "https://github.com/mizanxali/react-webpify" },
      { label: "npm", url: "https://www.npmjs.com/package/react-webpify" },
    ],
    tech: ["Node.js", "npm"],
  },
  {
    name: "Ariadne",
    description:
      "Node.js AI service to download YouTube videos, extract segments of a specific speaker, and compile them into one file",
    links: [{ label: "GitHub", url: "https://github.com/mizanxali/ariadne" }],
    tech: ["Node.js", "AssemblyAI", "FFmpeg"],
  },
  {
    name: "arbchain.dev",
    description:
      "Arbitrum rollup configurator app that generates deployment scripts using their SDK and a post-deployment onchain verifier",
    image: "/arbchain.webp",
    links: [{ label: "GitHub", url: "https://github.com/mizanxali/arbchain.dev" }],
    tech: ["Next.js", "Tailwind", "Wagmi", "Arbitrum"],
  },
  {
    name: "flank.bet",
    description: "Crypto micro-betting platform where users bet on live esports matches",
    image: "/flank.bet.webp",
    links: [
      { label: "GitHub", url: "https://github.com/mizanxali/flank.bet" },
      { label: "Devpost", url: "https://devpost.com/software/flank-bet" },
    ],
    tech: ["Next.js", "Tailwind", "Postgres", "Solidity"],
  },
  {
    name: "Finesse",
    description:
      "DeFi app for fans to get exclusive access to their favorite music artists by trading song tokens",
    image: "/finesse.webp",
    links: [
      { label: "GitHub", url: "https://github.com/mizanxali/finesse" },
      { label: "Devfolio", url: "https://devfolio.co/projects/finesse-6b18" },
    ],
    tech: ["Next.js", "Tailwind", "Solidity", "Firebase", "Wagmi", "Polygon"],
  },
  {
    name: "Triarchy",
    description: "Real-time 1v1 on-chain card battle game",
    image: "/triarchy.webp",
    links: [{ label: "GitHub", url: "https://github.com/mizanxali/triarchy" }],
    tech: ["Next.js", "Tailwind", "Solidity", "Partykit", "Wagmi"],
  },
];
