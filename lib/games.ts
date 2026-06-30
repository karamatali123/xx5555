export type GameItem = {
  name: string;
  category: string;
  description: string;
};

export const GAMES: GameItem[] = [
  {
    name: "Aviator",
    category: "Crash",
    description:
      "Fast crash-style game where you cash out before the plane flies away. Popular on mobile data in Pakistan because each round takes under a minute. Set a stop-loss and avoid chasing losses.",
  },
  {
    name: "Slots Games",
    category: "Slots",
    description:
      "Hundreds of slot titles from providers like JILI and Pragmatic Play. Spin reels with bets from a few PKR. Check RTP and volatility in the game info panel before playing with bonus balance.",
  },
  {
    name: "Teen Patti & Rummy",
    category: "Cards",
    description:
      "Classic South Asian card games with live multiplayer tables. Skill matters more than slots — learn hand rankings and table limits. Low-stakes tables suit new XX555 Pakistan players.",
  },
  {
    name: "Blackjack",
    category: "Cards",
    description:
      "Beat the dealer without going over 21. Available in RNG and live-dealer formats inside the casino lobby. Basic strategy reduces house edge compared to random betting.",
  },
  {
    name: "Roulette",
    category: "Casino",
    description:
      "European and live roulette wheels with PKR chip values. Outside bets (red/black, odd/even) offer lower risk than single-number bets. Live tables stream dealers in real time.",
  },
  {
    name: "Casino Games",
    category: "Live Casino",
    description:
      "Baccarat, dragon-tiger, and game-show style tables from Evolution and other studios. Higher minimum bets than slots. Best for players who want a real-casino feel on Android.",
  },
  {
    name: "Ludo Games",
    category: "Casual",
    description:
      "Digital Ludo with real-money stakes against other players. Familiar rules for Pakistani families. Shorter sessions than poker — good for casual play between deposits.",
  },
];
