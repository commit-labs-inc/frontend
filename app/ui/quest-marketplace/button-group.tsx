"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

export function ButtonGroup() {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  const handleFilter = (filter: string) => {
    const params = new URLSearchParams(searchParams);
    if (filter) {
      params.set("filter", filter);
    } else {
      params.delete("filter");
    }

    replace(`${pathName}?${params.toString()}`);
  }

    return (
      <span className="isolate inline-flex justify-center mt-8">
        <button
          type="button"
          className="relative inline-flex items-center rounded-l-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
          onClick={() => handleFilter("All")}
        >
          All
        </button>
        <button
          type="button"
          className="relative -ml-px inline-flex items-center bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
          onClick={() => handleFilter("Base")}
        >
          Base
        </button>
        <button
          type="button"
          className="relative -ml-px inline-flex items-center bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
          onClick={() => handleFilter("Mid")}
        >
          Mid
        </button>
        <button
          type="button"
          className="relative -ml-px inline-flex items-center rounded-r-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
          onClick={() => handleFilter("Top")}
        >
          Top
        </button>
      </span>
    )
  }