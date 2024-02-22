"use client";
import { useState } from "react";
import { GradingBox } from "@/app/ui/provider-dashboard/grading-box";

export default function Page() {
  const [open, setOpen] = useState(false);

  const applicants = [
    {
      name: "Ava Patel",
      submissionLink: "https://submission.link",
      status: "Graded",
      grades: "Accepted",
      avatarColor: "bg-blue-500",
    },
    {
      name: "Oliver Smith",
      submissionLink: "https://submission.link",
      status: "Submitted",
      grades: "",
      avatarColor: "bg-blue-500",
    },
    {
      name: "Sophia Martinez",
      submissionLink: "https://submission.link",
      status: "Waiting for Submission",
      grades: "",
      avatarColor: "bg-blue-500",
    },
    {
      name: "Ethan Johnson",
      submissionLink: "https://submission.link",
      status: "Graded",
      grades: "Rejected",
      avatarColor: "bg-blue-500",
    },
  ];

  return (
    <div className="flex flex-col min-w-full bg-white shadow overflow-hidden rounded-lg">
      <a
        href="/provider-dashboard/home"
        className="bg-black hover:bg-red-600 text-white font-bold py-2 px-4 rounded mb-4"
      >
        Return
      </a>
      <table className="min-w-full leading-normal">
        <thead>
          <tr>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Applicant Name
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Submission
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Status
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Grades
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100" />
          </tr>
        </thead>
        <tbody>
          {applicants.map((applicant, index) => (
            <tr key={index}>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div className="flex items-center">
                  <div
                    className={`w-6 h-6 ${applicant.avatarColor} text-white rounded-full flex justify-center items-center mr-3`}
                  >
                    {/* Icon or Initials */}
                  </div>
                  <div className="text-gray-900 whitespace-no-wrap">
                    {applicant.name}
                  </div>
                </div>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <a
                  href={applicant.submissionLink}
                  className="text-blue-500 whitespace-no-wrap"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {applicant.submissionLink}
                </a>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">
                  {applicant.status}
                </p>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                  />
                  <span className="relative">{applicant.grades}</span>
                </span>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                {applicant.grades === "Accepted" && (
                  <button className="text-white font-bold py-2 px-4 rounded bg-black">
                    Chat
                  </button>
                )}
                {applicant.status === "Submitted" && (
                  <>
                    <button
                      className="text-white font-bold py-2 px-4 rounded bg-black"
                      onClick={() => setOpen(true)}
                    >
                      Grade
                    </button>

                    <GradingBox open={open} setOpen={setOpen} />
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
