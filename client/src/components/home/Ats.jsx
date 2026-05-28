import {
  ScanSearch,
  FileCheck,
  BadgeCheck
} from "lucide-react";

const Ats = () => {
  return (
    <>
      <br />
      <br />
     <div className="flex flex-col items-center">
  <div className="w-fit gap-2 flex items-center text-sm text-emerald-700 bg-emerald-500/10 rounded-full px-5 py-2 border border-emerald-200">
    <ScanSearch width={15} />
    <span>ATS Resume Analysis</span>
  </div>
      </div>
      <br />
     
      <h1 className="text-3xl font-semibold text-center mx-auto">
        Advanced ATS Resume Analysis
      </h1>

      <p className="text-sm text-slate-500 text-center mt-2 max-w-2xl mx-auto">
        Optimize your resume for Applicant Tracking Systems with intelligent
        ATS score analysis, keyword optimization, and recruiter-friendly
        formatting suggestions.
      </p>

      <div className="grid border rounded-2xl max-w-6xl mx-auto border-gray-200/70 grid-cols-1 divide-y divide-gray-200/70 lg:grid-cols-3 lg:divide-x lg:divide-y-0 mt-8 overflow-hidden">

        {/* Card 1 */}
        <div className="flex flex-col items-start gap-4 hover:bg-emerald-50 transition duration-300 p-8 pb-14">
          <div className="flex items-center gap-2 text-gray-700">
            <ScanSearch className="size-5 text-emerald-600" />

            <h2 className="font-medium text-base">
              ATS Score Analysis
            </h2>
          </div>

          <p className="text-gray-500 text-sm/6 max-w-72">
            Instantly analyze your resume and get a detailed ATS compatibility
            score with actionable improvement suggestions.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-start gap-4 hover:bg-emerald-50 transition duration-300 p-8 pb-14">
          <div className="flex items-center gap-2 text-gray-700">
            <FileCheck className="size-5 text-emerald-600" />

            <h2 className="font-medium text-base">
              Keyword Optimization
            </h2>
          </div>

          <p className="text-gray-500 text-sm/6 max-w-72">
            Detect missing keywords and optimize your resume for job descriptions
            to improve recruiter visibility.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-start gap-4 hover:bg-emerald-50 transition duration-300 p-8 pb-14">
          <div className="flex items-center gap-2 text-gray-700">
            <BadgeCheck className="size-5 text-emerald-600" />

            <h2 className="font-medium text-base">
              Recruiter-Ready Format
            </h2>
          </div>

          <p className="text-gray-500 text-sm/6 max-w-72">
            Ensure your resume follows clean ATS-friendly formatting standards
            preferred by recruiters and hiring systems.
          </p>
        </div>

      </div>
    </>
  );
};

export default Ats;