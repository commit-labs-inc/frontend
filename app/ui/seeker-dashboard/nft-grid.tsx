import Image from "next/image";

const nfts = [
  {
    title: "Computer Science",
    date: "1.1.2024",
    source:
      "/programmer_owl.png",
  },
  {
    title: "Writer",
    date: "2.1.2024",
    source:
      "/bookworm_owl.png",
  },
  {
    title: "Tennis Player",
    date: "3.1.2024",
    source:
      "/tennis_player_owl.png",
  },
  {
    title: "Translator",
    date: "4.1.2024",
    source:
      "/translator_owl.png",
  },
  // More nfts...
];

export function NftGrid() {
  return (
    <ul
      role="list"
      className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-2 xl:gap-x-8"
    >
      {nfts.map((nft) => (
        <li key={nft.source} className="relative">
          <div className="group block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
            <Image
              src={nft.source}
              alt="nft image"
              height="130"
              width="130"
              className="pointer-events-none object-cover group-hover:opacity-75"
            />
            <button
              type="button"
              className="absolute inset-0 focus:outline-none"
            >
              <span className="sr-only">View details for {nft.title}</span>
            </button>
          </div>
          <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
            {nft.title}
          </p>
          <p className="pointer-events-none block text-sm font-medium text-gray-500">
            {nft.date}
          </p>
        </li>
      ))}
    </ul>
  );
}
