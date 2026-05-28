import {
  FileText,
  ScanSearch,
  Brain,
  LayoutTemplate,
  Download,
  ShieldCheck,
  WandSparkles,
  BadgeCheck,
  Zap,
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <FileText className="w-[17px] h-[17px] text-green-600" />,
      title: "AI Resume Builder",
      description:
        "Create professional ATS-friendly resumes with smart AI suggestions and modern templates.",
      hasAccent: false,
    },

    {
      icon: <ScanSearch className="w-[17px] h-[17px] text-green-600" />,
      title: "ATS Score Checker",
      description:
        "Analyze your resume instantly and improve ATS compatibility for better hiring chances.",
      hasAccent: true,
    },

    {
      icon: <Brain className="w-[17px] h-[17px] text-green-600" />,
      title: "AI Resume Analysis",
      description:
        "Receive intelligent recommendations to improve formatting, keywords, and resume quality.",
      hasAccent: false,
    },

    {
      icon: <LayoutTemplate className="w-[17px] h-[17px] text-green-600" />,
      title: "Professional Templates",
      description:
        "Choose from modern, customizable templates designed for every career and industry.",
      hasAccent: false,
    },

    {
      icon: <Download className="w-[17px] h-[17px] text-green-600" />,
      title: "PDF Export",
      description:
        "Download clean, high-quality resumes instantly in ATS-friendly PDF format.",
      hasAccent: false,
    },

    {
      icon: <ShieldCheck className="w-[17px] h-[17px] text-green-600" />,
      title: "Secure & Reliable",
      description:
        "Your resume data stays protected with secure storage and privacy-focused systems.",
      hasAccent: false,
    },

    {
      icon: <WandSparkles className="w-[17px] h-[17px] text-green-600" />,
      title: "Smart AI Suggestions",
      description:
        "Get AI-powered recommendations to improve resume impact and job visibility.",
      hasAccent: false,
    },

    {
      icon: <BadgeCheck className="w-[17px] h-[17px] text-green-600" />,
      title: "Job Ready Resumes",
      description:
        "Build resumes optimized for recruiters, hiring managers, and modern ATS systems.",
      hasAccent: false,
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center ">
        <div className="w-fit gap-2 flex items-center text-sm text-green-800 bg-green-400/10 rounded-full px-6 py-2">
          <Zap width={15} />
          <span>Simple Process</span>
        </div>
      </div>
      <div className="bg-white px-8 lg:px-20 xl:px-[120px] py-7 flex flex-col items-center">
        <div className="max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl w-full mb-9 mx-auto text-center">
          <h1 className="text-3xl md:text-3xl font-medium text-zinc-800 mb-4 tracking-tight">
            Build ATS-Friendly Resumes with AI
          </h1>

          <p className="text-1xl text-zinc-600 tracking-tight max-w-2xl mx-auto">
            Create professional resumes, analyze ATS scores, and optimize your
            profile with AI-powered career tools designed to help you land your
            dream job faster.
          </p>
        </div>

        {/* Features Grid with Borders */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl w-full border-t border-l border-zinc-200">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`relative p-6 md:p-8 flex flex-col gap-4 border-r border-b border-zinc-200 transition-all duration-300 cursor-pointer ${
                index === 0
                  ? "bg-gradient-to-b from-green-100 to-white"
                  : "bg-white hover:bg-gradient-to-b hover:from-green-100 hover:to-white"
              }`}
            >
              {feature.hasAccent && (
                <div className="absolute left-0 top-12 bottom-12 md:top-17 md:bottom-17 w-1.5 bg-green-500 rounded-r" />
              )}

              <div className="flex items-center gap-2.5 mb-1">
                <div>{feature.icon}</div>
                <h3 className="text-sm font-medium text-zinc-800 leading-snug">
                  {feature.title}
                </h3>
              </div>

              <p className="text-xs text-zinc-600 leading-relaxed mb-4">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Features;
