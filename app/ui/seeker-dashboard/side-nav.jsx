"use client";

import { useState } from "react";
import {
  HomeIcon,
  UserCircleIcon,
  ClipboardDocumentCheckIcon,
  PaintBrushIcon,
  TrophyIcon,
  BookmarkIcon,
} from "@heroicons/react/24/outline";

const initialNavigation = [
  {
    name: "Home",
    href: "/seeker-dashboard/home",
    icon: HomeIcon,
    count: "5",
    current: true,
  },
  {
    name: "My Skill NFTs",
    href: "#",
    icon: TrophyIcon,
    current: false,
  },
  {
    name: "Auth Sharing",
    href: "/seeker-dashboard/auth-sharing",
    icon: ClipboardDocumentCheckIcon,
    current: false,
  },
  {
    name: "My Stories",
    href: "/seeker-dashboard/my-stories",
    icon: BookmarkIcon,
    current: false,
  },
  {
    name: "Generate Quests",
    href: "#",
    icon: PaintBrushIcon,
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function SideNav(itemName) {
  const [navigation, setNavigation] = useState(initialNavigation);

  const clickHandler = () => {
    const updatedNavigation = navigation.map((item) => ({
      ...item,
      current: item.name === itemName,
    }));
    setNavigation(updatedNavigation);
  };

  return (
    <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li className="-mx-6 mt-auto">
            <a
              href="#"
              className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50"
            >
              <UserCircleIcon height={24} width={24} />
              <span className="sr-only">Your profile</span>
              <span aria-hidden="true">Seeker Y</span>
            </a>
          </li>
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-50 text-indigo-600"
                        : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50",
                      "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                    )}
                    onClick={() => {
                      clickHandler(item.name);
                    }}
                  >
                    <item.icon
                      className={classNames(
                        item.current
                          ? "text-indigo-600"
                          : "text-gray-400 group-hover:text-indigo-600",
                        "h-6 w-6 shrink-0"
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                    {item.count ? (
                      <span
                        className="ml-auto w-9 min-w-max whitespace-nowrap rounded-full bg-white px-2.5 py-0.5 text-center text-xs font-medium leading-5 text-gray-600 ring-1 ring-inset ring-gray-200"
                        aria-hidden="true"
                      >
                        {item.count}
                      </span>
                    ) : null}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}
