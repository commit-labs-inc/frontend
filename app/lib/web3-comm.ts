// This file is for web3 communication functions
// e.g. connect to blockchain, get wallet address, and all functions exposed through the contracts' state functions.

export async function fetchQuest(filter: string) {
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
        }
      ];

      const fullQuests = [
        {
          name: "Ph.D. position in BME",
          deadline: "xx.xx.xxxx",
          details: "Link to quest",
          status: "Full",
        }
      ];

      const closedQuests = [
        {
          name: "Ph.D. position in BME",
          deadline: "xx.xx.xxxx",
          details: "Link to quest",
          status: "Closed",
        }
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