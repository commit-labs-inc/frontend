"use client";

import { useState } from "react";

export function Content() {
  const [click, setClick] = useState("btn1");

  const onClickHandler = (btnId: string) => {
    setClick(btnId);
  };

  return (
    <div className="w-full h-full flex">
      <div className="w-1/2 flex flex-col items-center justify-start space-y-4 pt-4 bg-gray-300">
        <div className="flex items-center justify-center space-x-4">
          <button onClick={() => onClickHandler("btn1")}>To Opportunity</button>
          <button onClick={() => onClickHandler("btn2")}>To Trust</button>
          <button onClick={() => onClickHandler("btn3")}>To Adapt</button>
        </div>
        {click === "btn1" && (
          <div className="flex flex-col items-center">
            <img src="/logo.svg" />
            <div className="mt-6">
              <h1>Merit-based Opportunities</h1>
            </div>
          </div>
        )}
        {click === "btn2" && (
          <div className="flex flex-col items-center">
            <img src="/logo.svg" />
            <div className="mt-6">
              <h1>Skills That Matters</h1>
            </div>
          </div>
        )}
        {click === "btn3" && (
          <div className="flex flex-col items-center">
            <img src="/logo.svg" />
            <div className="mt-6">
              <h1>Practice, Up-skill, Re-skill</h1>
            </div>
          </div>
        )}
      </div>
      <div className="w-1/2 flex flex-col items-center justify-start pt-4">
        {click === "btn1" && (
          <div className="flex flex-col items-center">
            <h1>Header 1</h1>
            <p>Paragraphs for header 1</p>
            <div>
              <div className="flex">
                <div className="w-[400px] border-[0.84px] border-solid border-black">
                  <input
                    className="text-black whitespace-nowrap bg-transparent w-full p-2"
                    type="email"
                    placeholder="Enter email to join the waitlist..."
                  />
                </div>
                <div className="bg-black rounded-[0px_20.97px_20.97px_0px]">
                  <button className="font-bold text-white whitespace-nowrap p-2">
                    Interesting !
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {click === "btn2" && <h1>Right part for Button 2</h1>}
        {click === "btn3" && <h1>Right part for Button 3</h1>}
      </div>
    </div>
  );
}
