"use client";

import { useState } from "react";
import { QuestPreview } from "@/app/ui/provider-dashboard/quest-preview";

export function Preview() {
  const [institutionName, setInstitutionName] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [maxGrading, setMaxGrading] = useState<number | "">("");
  const [questDescription, setQuestDescription] = useState("");
  const [deliverablesDescription, setDeliverablesDescription] = useState("");
  const [isOpenToHiring, setIsOpenToHiring] = useState(false);
  const [deadline, setDeadline] = useState("");
  const [preview, setPreview] = useState(false);

  const handlePreview = () => {
    setPreview(true);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle the form submission logic here
    console.log({
      institutionName,
      contactInfo,
      maxGrading,
      questDescription,
      deliverablesDescription,
      isOpenToHiring,
      deadline,
    });
  };

  return (
    <div className="flex">
      {/* Quest Form Section */}
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col w-1/2">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="institution-name"
            >
              Institution Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              id="institution-name"
              type="text"
              placeholder="Institution Name"
              value={institutionName}
              onChange={(e) => setInstitutionName(e.target.value)}
            />
          </div>

          <div className="mb-4 flex justify-between gap-4">
            <div className="flex-1">
              <label
                className="block text-grey-darker text-sm font-bold mb-2"
                htmlFor="contact-information"
              >
                Contact Information
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                id="contact-information"
                type="email"
                placeholder="xxx@gmail.com"
                value={contactInfo}
                onChange={(e) => setContactInfo(e.target.value)}
              />
            </div>

            <div className="flex-1">
              <label
                className="block text-grey-darker text-sm font-bold mb-2"
                htmlFor="deadline"
              >
                Deadline
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                id="deadline"
                type="date"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-4">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="max-grading"
            >
              Max number of free gradings
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              id="max-grading"
              type="number"
              placeholder="10"
              value={maxGrading}
              onChange={(e) => setMaxGrading(Number(e.target.value))}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="quest-description"
            >
              Quest Description
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              id="quest-description"
              placeholder="Describe in short what this quest is about."
              value={questDescription}
              onChange={(e) => setQuestDescription(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="deliverables-description"
            >
              Deliverables Description
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              id="deliverables-description"
              placeholder="List all the things you expected the candidates to submit and their respected requirements."
              value={deliverablesDescription}
              onChange={(e) => setDeliverablesDescription(e.target.value)}
            />
          </div>

          <div className="flex items-center justify-center">
            <button
              className="bg-black hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
              type="button"
              onClick={handlePreview}
            >
              Preview
            </button>
          </div>
        </form>
      </div>
      {/* Quest Preview Section */}
      {preview && (
        <div className="w-1/2">
          <QuestPreview />
        </div>
      )}
    </div>
  );
}
