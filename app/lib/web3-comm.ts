// This file is for web3 communication functions
// e.g. connect to blockchain, get wallet address, and all functions exposed through the contracts' state functions.


export function fetchQuest(filter: string) {
  const allQuests = [
    {
      name: "Ph.D. position in BME",
      deadline: "xx.xx.xxxx",
      details: "Link to quest",
      status: "Open",
    },
    {
      name: "Ph.D. position in BME",
      deadline: "xx.xx.xxxx",
      details: "Link to quest",
      status: "Full",
    },
    {
      name: "Ph.D. position in BME",
      deadline: "xx.xx.xxxx",
      details: "Link to quest",
      status: "Closed",
    },
    // More people...
  ];

  const openQuests = [
    {
      name: "Ph.D. position in BME",
      deadline: "xx.xx.xxxx",
      details: "Link to quest",
      status: "Open",
    },
  ];

  const fullQuests = [
    {
      name: "Ph.D. position in BME",
      deadline: "xx.xx.xxxx",
      details: "Link to quest",
      status: "Full",
    },
  ];

  const closedQuests = [
    {
      name: "Ph.D. position in BME",
      deadline: "xx.xx.xxxx",
      details: "Link to quest",
      status: "Closed",
    },
  ];

  if (filter === "All") {
    return allQuests;
  } else if (filter === "Open") {
    return openQuests;
  } else if (filter === "Full") {
    return fullQuests;
  } else {
    return closedQuests;
  }
}

export async function fetchForQuestCard(filter: string) {
  const allQuests = [
    {
      tier: "Base Tier",
      skillTokens: "BME",
      questName: "The algorithmic labyrinth",
      questDescription:
        "Navigate a virtual maze using custom algorithms to find the shortest path.",
      skill: "BME",
    },
    {
      tier: "Mid Tier",
      skillTokens: "IST",
      questName: "Cybersecurity Showdown",
      questDescription:
        "Defend a virtual network from a series of simulated cyber attacks.",
      skill: "Network Defense",
    },
    {
      tier: "Top Tier",
      skillTokens: "",
      questName: "AI Symphony Composer",
      questDescription:
        "Develop an AI program that composes a unique piece of music using machine learning techniques.",
      skill: "Machine Learning",
    },
  ];

  const baseQuests = [
    {
      tier: "Base Tier",
      skillTokens: "BME",
      questName: "The algorithmic labyrinth",
      questDescription:
        "Navigate a virtual maze using custom algorithms to find the shortest path.",
      skill: "BME",
    },
  ];

  const midQuests = [
    {
      tier: "Mid Tier",
      skillTokens: "IST",
      questName: "Cybersecurity Showdown",
      questDescription:
        "Defend a virtual network from a series of simulated cyber attacks.",
      skill: "Network Defense",
    },
  ];

  const topQuests = [
    {
      tier: "Top Tier",
      skillTokens: "",
      questName: "AI Symphony Composer",
      questDescription:
        "Develop an AI program that composes a unique piece of music using machine learning techniques.",
      skill: "Machine Learning",
    },
  ];

  if (filter === "All") {
    return allQuests;
  } else if (filter === "Base") {
    return baseQuests;
  } else if (filter === "Mid") {
    return midQuests;
  } else {
    return topQuests;
  }
}

export async function fetchSeekerQuests(filter: string) {
  const allQuests = [
    {
      name: "The algorithmic labyrinth",
      publisher: "Prof.Y - Duke University",
      type: "Base Tier",
      deadline: "xx.xx.xxxx",
      status: "Committed",
      gradings: "",
    },
    {
      name: "Cybersecurity Showdown",
      publisher: "Prof.Y - Duke University",
      type: "Mid Tier",
      deadline: "xx.xx.xxxx",
      status: "Submitted",
      gradings: "",
    },
    {
      name: "AI Symphony Composer",
      publisher: "Prof.Y - Duke University",
      type: "Top Tier",
      deadline: "xx.xx.xxxx",
      status: "Graded",
      gradings: "Accepted",
    },
  ];

  const committedQuests = [
    {
      name: "The algorithmic labyrinth",
      publisher: "Prof.Y - Duke University",
      type: "Base Tier",
      deadline: "xx.xx.xxxx",
      status: "Committed",
      gradings: "",
    },
  ];

  const submittedQuests = [
    {
      name: "Cybersecurity Showdown",
      publisher: "Prof.Y - Duke University",
      type: "Mid Tier",
      deadline: "xx.xx.xxxx",
      status: "Submitted",
      gradings: "",
    },
  ];

  const gradedQuests = [
    {
      name: "AI Symphony Composer",
      publisher: "Prof.Y - Duke University",
      type: "Top Tier",
      deadline: "xx.xx.xxxx",
      status: "Graded",
      gradings: "Accepted",
    },
  ];

  if (filter === "All") {
    return allQuests;
  } else if (filter === "Committed") {
    return committedQuests;
  } else if (filter === "Submitted") {
    return submittedQuests;
  } else {
    return gradedQuests;
  }
}