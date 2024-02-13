"use client";

import { useState } from "react";
import { WaitList } from "@/app/ui/landing/waitlist";

export function Content() {
  const [click, setClick] = useState("btn1");

  const onClickHandler = (btnId: string) => {
    setClick(btnId);
  };

  return (
    <div className="w-full h-full flex">
      {/* Content of the left side of the screen. */}
      <div className="w-1/2 flex flex-col items-center justify-start space-y-4 pt-4">
        <span className="isolate inline-flex rounded-md shadow-sm mt-4 mb-6">
          <button
            type="button"
            className="relative inline-flex font-mono items-center rounded-l-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:bg-black focus:text-white focus:ring-black focus:z-10"
            onClick={() => onClickHandler("btn1")}
          >
            To Opportunity
          </button>
          <button
            type="button"
            className="relative -ml-px inline-flex font-mono items-center bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:bg-black focus:text-white focus:ring-black focus:z-10"
            onClick={() => onClickHandler("btn2")}
          >
            To Trust
          </button>
          <button
            type="button"
            className="relative -ml-px inline-flex font-mono items-center rounded-r-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:bg-black focus:text-white focus:ring-black focus:z-10"
            onClick={() => onClickHandler("btn3")}
          >
            To Adapt
          </button>
        </span>

        <div className="flex flex-col items-center justify-center px-12">
          <img className="shadow-xl rounded-lg" src={imageMap[click as keyof typeof imageMap]} />
          <div className="font-serif text-2xl mt-20">
            {contentMapLeft[click as keyof typeof contentMapLeft]}
          </div>
        </div>
      </div>
      {/* Content of the right side of the screen. */}
      <div className="w-1/2 flex flex-col items-center justify-center pt-4">
        <div className="flex flex-col items-center">
          <div className="font-serif text-2xl mb-20">
            {contentMapRight[click as keyof typeof contentMapRight].header}
          </div>
          <div className="font-mono max-w-lg">
            {contentMapRight[click as keyof typeof contentMapRight].paragraph}
          </div>
          <div className="mt-20 max-w-lg">
            {contentMapRight[click as keyof typeof contentMapRight].waitlist}
          </div>
        </div>
      </div>
    </div>
  );
}

const imageMap = {
  btn1: "/world_of_quests.svg",
  btn2: "/authentic_sharing.svg",
  btn3: "/step_one_more.svg",
};

const contentMapLeft = {
  btn1: "Merit-based Opportunities",
  btn2: "Skills That Matters",
  btn3: "Practice, Up-skill, Re-skill",
};

const contentMapRight = {
  btn1: {
    header: "No Missed Opportunities Again",
    paragraph: (
      <div>
        Have you ever felt overlooked in your career pursuits, or found yourself
        constrained by location or lack of traditional experience?
        <br />
        <br />
        Imagine a world where your skills and merit open up a realm of
        possibilities, free from the traditional barriers that once dictated the
        trajectory of your career.
        <br />
        <br />
        Whether you're stepping into the workforce for the first time, seeking a
        significant career shift, or facing any other hurdles that have
        previously stood in your way, we are here to help!
      </div>
    ),
    waitlist: <WaitList />,
  },
  btn2: {
    header: "No Mis-hires Again",
    paragraph: (
      <div>
        Say goodbye to the uncertainty and risks of hiring based on outdated or
        unverified information.
        <br />
        <br />
        We recognize that in the fast-paced, ever-evolving world of business,
        having team members with up-to-date, industry-standard skills is not
        just an advantage, it's a necessity.
        <br />
        <br />
        Now you can independently and easily confirm the skills of potential
        candidates on their own terms, ensuring that every hire is the right fit
        for the job.
      </div>
    ),
    waitlist: <WaitList />,
  },
  btn3: {
    header: "Never Get Left Behind Again",
    paragraph: (
      <div>
        By bridging the gap between talent aspiration and employer expectation,
        we created a symbiotic environment to help both parties thrive.
        <br />
        <br />
        Talents, confidently showcase your ever-improving skillset to employers.
        Employers, rest assured that your team is always equipped with the
        latest, most relevant skills.
        <br />
        <br />
        Embrace the future of work with us, where staying updated and
        competitive is not just an option, but a seamless reality.
      </div>
    ),
    waitlist: <WaitList />,
  },
};
