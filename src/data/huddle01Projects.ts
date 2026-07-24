import type { Project } from "../types";

export const huddle01Projects: Project[] = [
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
