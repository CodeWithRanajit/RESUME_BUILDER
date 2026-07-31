import React from "react"; 

const Pricing = () => {
  const [isAnnual, setIsAnnual] = React.useState(true);

  const pricingData = [
    {
      name: "Free",
      price: 0,
      description:
        "Start building professional ATS-friendly resumes for free.",
      features: [
        "1 Resume Creation",
        "Basic ATS-Friendly Templates",
        "PDF Download",
        "Resume Preview",
      ],
    },
    {
      name: "Pro",
      mostPopular: true,
      price: isAnnual ? 199 : 19,
      description:
        "Perfect for students and job seekers who want more interviews.",
      features: [
        "Unlimited Resume Creation",
        "Premium Resume Templates",
        "AI Resume Suggestions",
        "Advanced ATS Score Checker",
      ],
    },
    {
      name: "Premium",
      price: isAnnual ? 399 : 39,
      description:
        "Everything you need to maximize your hiring chances.",
      features: [
        "Everything in Pro",
        "AI Resume Optimization",
        "Cover Letter Generator",
        "Priority Customer Support",
      ],
    },
  ];

  return (
    <>
      <style>
        {`
          @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");

          *{
            font-family: "Poppins", sans-serif;
          }
        `}
      </style>

      <section className="flex items-center justify-center flex-col py-10 px-4 bg-white">
        <span className="px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-medium">
          ResumeCraft Pricing
        </span>

        <h1 className="font-medium text-4xl md:text-[52px] text-slate-800 text-center mt-6">
          Simple Pricing for Every Job Seeker
        </h1>

        <p className="text-base/7 text-zinc-500 max-w-lg text-center mt-4">
          Create ATS-friendly resumes, improve your ATS score, and land more
          interviews with ResumeCraft.
        </p>

        <div className="mt-8 flex bg-zinc-100 p-1.5 rounded-full">
          <button
            onClick={() => setIsAnnual(false)}
            className={`px-5 py-2 rounded-full text-sm cursor-pointer transition ${
              !isAnnual
                ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                : "text-gray-600"
            }`}
          >
            Monthly
          </button>

          <button
            onClick={() => setIsAnnual(true)}
            className={`px-5 py-2 rounded-full text-sm cursor-pointer transition ${
              isAnnual
                ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                : "text-gray-600"
            }`}
          >
            Annually
          </button>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricingData.map((item, index) => (
            <div
              key={index}
              className={`border rounded-2xl p-6 flex flex-col items-start max-w-md transition duration-300 hover:-translate-y-1 ${
                item.mostPopular
                  ? "bg-emerald-50 border-emerald-200 shadow-sm"
                  : "border-zinc-200 bg-white"
              }`}
            >
              {item.mostPopular && (
                <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-medium mb-4">
                  Most Popular
                </span>
              )}

              <h2 className="font-semibold text-3xl text-slate-800">
                {item.name}
              </h2>

              <p className="text-sm text-zinc-500 mt-2">
                {item.description}
              </p>

              <div className="flex items-end mt-6">
                <h1 className="font-bold text-5xl text-slate-800">
                  ${item.price}
                </h1>

                {item.price !== 0 && (
                  <span className="text-zinc-500 ml-2 mb-1">
                    /{isAnnual ? "year" : "month"}
                  </span>
                )}
              </div>

              <button
                className={`w-full px-4 py-3 rounded-full cursor-pointer text-sm mt-8 transition ${
                  item.mostPopular
                    ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                    : "border border-zinc-300 bg-zinc-100 hover:bg-zinc-200 text-slate-700"
                }`}
              >
                Start Building
              </button>

              <div className="w-full mt-8 space-y-3 pb-4">
                {item.features.map((feature, idx) => (
                  <p
                    key={idx}
                    className="flex items-center gap-3 text-sm text-zinc-600"
                  >
                    <span className="size-4 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                      <span className="size-2 rounded-full bg-emerald-600" />
                    </span>

                    {feature}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Pricing;