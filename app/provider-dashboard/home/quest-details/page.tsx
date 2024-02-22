export default function Page() {
  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      {/* Quest Details Header Card */}
      <div className="mb-4">
        <h1 className="text-xl font-bold mb-2">Prof. Yang - Duke University</h1>
        <div className="flex justify-between items-center">
          <div className="text-sm">
            <p>Contact: xxx@gmail.com</p>
            <p>Quest Type: skill assessment</p>
            <p>Deadline: xx.xx.xxxx</p>
            <p>Free Gradings: 2/10</p>
          </div>
          <a
            href="/provider-dashboard/home"
            className="bg-black hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          >
            Return
          </a>
        </div>
      </div>
      {/* Quest Details Detail Card */}
      <div className="border-t border-gray-200 pt-4">
        <h2 className="text-lg font-bold mb-2">Quest for biotechnology!</h2>
        <div className="text-sm mb-4">
          <p>Institution: [University/Institute Name]</p>
          <p>Publisher: Dr. [Your Name], Professor of Biotechnology</p>
          <p>Contact info: xxx@gmail.com</p>
          <p>Deadline: 12.19.2025</p>
        </div>
        <div className="text-sm">
          <p>Quest overview: XXXX</p>
          <p>Quest type: [for hiring - Ph.D. / skill assessments]</p>
          <p>Free grading limits: 10</p>
          <p>Quest description: </p>
          <p>Submission description: </p>
        </div>
      </div>
      {/* Quest Details Claimers Card */}
      <div className="border-t border-gray-200 pt-4">
        <h3 className="text-lg font-bold mb-2">Current Claimers</h3>
        <div className="overflow-auto">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">
                  Name
                </th>
                <th className="px-4 py-2 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">
                  Submission
                </th>
                <th className="px-4 py-2 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">
                  Status
                </th>
                <th className="px-4 py-2 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">
                  Grades
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr>
                <td className="px-4 py-2 whitespace-no-wrap border-b border-gray-500">
                  Ana Paul
                </td>
                <td className="px-4 py-2 whitespace-no-wrap border-b border-gray-500">
                  [Submission Link]
                </td>
                <td className="px-4 py-2 whitespace-no-wrap border-b border-gray-500">
                  Accepted
                </td>
                <td className="px-4 py-2 whitespace-no-wrap border-b border-gray-500">
                  [Grades]
                </td>
              </tr>
              {/* Repeat for each claimer */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
