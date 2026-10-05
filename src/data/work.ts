import type { Project, WorkExperience } from "../types";

const huddle01Projects: Project[] = [
  {
    name: "Network Dashboard",
    description: "Private dashboard for Huddle01 node operators with onchain node management",
    image: "/network-dashboard.webp",
    links: [{ label: "Live Site", url: "https://dashboard.huddle01.network" }],
    tech: ["Next.js", "Tailwind", "Postgres", "Drizzle", "Wagmi", "tRPC"],
  },
  {
    name: "Testnet",
    description: "Huddle01's public testnet platform with quests and a leaderboard",
    image: "/testnet.webp",
    links: [{ label: "Live Site", url: "https://testnet.huddle01.network" }],
    tech: ["Next.js", "Tailwind", "Solidity", "Postgres", "Drizzle", "tRPC", "Wagmi"],
  },
  {
    name: "Huddle01 Meet",
    description: "Huddle01's flagship product, a full-fledged webRTC-based video conferencing app",
    image: "/meet-app.webp",
    links: [{ label: "Live Site", url: "https://hudl.new" }],
    tech: ["Next.js", "Tailwind", "WebRTC", "Node.js", "Websockets", "mediasoup", "gRPC", "Posthog"],
  },
  {
    name: "House",
    description:
      "Base and Farcaster mini-app with audio spaces, livestreaming, and one-click token launches for creators",
    image: "/house.webp",
    links: [{ label: "Live Site", url: "https://house01.fun" }],
    tech: ["Next.js", "Tailwind", "Farcaster", "LiveKit", "Mux", "Postgres", "Drizzle", "tRPC"],
  },
  {
    name: "Huddlepad",
    description:
      "Huddle01's ICO platform using Uniswap's Continuous Clearing Auction (CCA) mechanism for token distribution",
    image: "/ico.webp",
    links: [{ label: "Live Site", url: "https://hudl-ico.huddlepad.xyz/hudl-ico" }],
    tech: ["Next.js", "Tailwind", "Uniswap", "Arbitrum", "Wagmi", "GraphQL"],
  },
  {
    name: "Meet Dashboard",
    description:
      "All-in-one dashboard for Huddle01 Meet - meeting scheduler, call recordings, and subscription management",
    image: "/meet-dashboard.webp",
    links: [{ label: "Live Site", url: "https://huddle01.app" }],
    tech: [
      "Next.js",
      "Tailwind",
      "Node.js",
      "GraphQL",
      "Postgres",
      "Drizzle",
      "Hono",
      "Stripe",
      "Posthog",
      "CF Workers",
    ],
  },
  {
    name: "Node Mint",
    description: "Website to purchase Huddle01 nodes via CopperX payment gateway",
    image: "/node-mint.webp",
    links: [{ label: "Live Site", url: "https://node.huddle01.com" }],
    tech: ["Next.js", "Tailwind", "Postgres", "Drizzle", "tRPC", "CopperX"],
  },
  {
    name: "SDK & Docs",
    description: "Suite of cross-platform webRTC SDKs and documentation for developers",
    image: "/docs.webp",
    links: [{ label: "Live Site", url: "https://docs.huddle01.network" }],
    tech: ["Next.js", "Tailwind", "WebRTC", "Node.js"],
  },
];

export const work: WorkExperience[] = [
  {
    company: "Offline Protocol",
    role: "Software Development Engineer",
    period: "Aug 2026 - Present",
    description: "Core maintainer of Fernweh, an offline-first messenger, and the open-source Offline Protocol SDK.",
    projects: [
      {
        name: "Fernweh",
        description:
          "Privacy-focused messenger that works even without internet, relaying end-to-end encrypted messages peer-to-peer over Bluetooth and WiFi mesh",
        image: "/fernweh.webp",
        links: [
          { label: "Live Site", url: "https://www.fernweh.chat" },
          { label: "App Store", url: "https://apps.apple.com/us/app/fernweh-offline-messages/id6738829052" },
          { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.fernweh_offline_messaging" },
        ],
        tech: ["React Native", "LiveKit", "Offline Protocol"],
      },
      {
        name: "SDK",
        description:
          "Transport and coordination layer for apps, agents, and devices to discover peers and communicate securely across BLE, WiFi Direct, and the internet",
        image: "/offline-protocol-sdk.webp",
        links: [{ label: "GitHub", url: "https://github.com/Offline-Protocol/offline-protocol-sdk" }],
        tech: ["Rust", "Bluetooth", "WiFi Direct", "Reticulum", "Nostr"],
      },
    ],
  },
  {
    company: "August AI",
    role: "Software Development Engineer",
    period: "Jun 2026 - Aug 2026",
    description:
      "Built telehealth, payments, and nutrition tracking features across the web and mobile apps of a health AI companion.",
    projects: [
      {
        name: "Web App",
        description: "August's health AI companion on the web - understand symptoms, medications, and lab reports",
        image: "/august-web.webp",
        links: [{ label: "Live Site", url: "https://www.meetaugust.ai/chat" }],
        tech: [
          "Next.js",
          "Postgres",
          "Stripe",
          "Fasten",
          "Turnstile",
          "Twilio",
          "CleverTap",
          "Clarity",
          "AWS",
        ],
      },
      {
        name: "Mobile Apps",
        description: "August's iOS and Android apps - a 24/7 health AI companion trained by doctors",
        image: "/august-mobile.webp",
        links: [
          { label: "App Store", url: "https://apps.apple.com/us/app/august-your-24-7-health-ai/id6746088428" },
          { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.augustai.mobileapp" },
        ],
        tech: ["React Native", "Expo", "CleverTap", "Google Analytics"],
      },
    ],
  },
  {
    company: "Huddle01",
    role: "Lead Product Engineer",
    period: "Jan 2023 - Mar 2026",
    description: "Built core products across web3 and webRTC tech stacks using TypeScript.",
    projects: huddle01Projects,
  },
];
