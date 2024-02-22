"use client";
import { useState } from "react";
import { SubmitBox } from "@/app/ui/seeker-dashboard/submit-box";

export default function Page() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col space-y-4">
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Google Drive
        </label>
        <div className="mt-2">
          <input
            type="email"
            name="email"
            id="email"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="your google drive link please..."
          />
        </div>
      </div>
      <button
        type="button"
        className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        onClick={() => setOpen(true)}
      >
        Submit
      </button>
      <SubmitBox open={open} setOpen={setOpen} />
    </div>
  );
}
