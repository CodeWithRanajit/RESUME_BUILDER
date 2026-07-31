import React from "react";
import { HelpCircle, Plus, X } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState(-1);

  const faqs = [
    {
      question: "What is an ATS-friendly resume?",
      answer:
        "An ATS-friendly resume is optimized for Applicant Tracking Systems so recruiters can easily scan and shortlist your resume.",
    },

    {
      question: "How does the ATS score checker work?",
      answer:
        "Our AI analyzes your resume structure, keywords, formatting, and readability to generate an ATS compatibility score instantly.",
    },

    {
      question: "Can I customize resume templates?",
      answer:
        "Yes, you can fully customize fonts, colors, sections, layouts, and content to match your personal brand and career goals.",
    },

    {
      question: "Does the platform provide AI suggestions?",
      answer:
        "Yes, our AI suggests stronger resume content, better keywords, and optimized bullet points to improve hiring chances.",
    },

    {
      question: "Can I download my resume as PDF?",
      answer:
        "Absolutely. You can export your ATS-friendly resume in high-quality PDF format anytime with one click.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="bg-white py-10 px-4">
      {/* Badge */}
      <div className="flex justify-center mb-4">
        <div className="flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-medium">
          <HelpCircle className="size-4" />
          Frequently Asked Questions
        </div>
      </div>

      {/* Heading */}
      <div className="text-center mb-12 flex flex-col justify-center items-center">
        <h1 className="text-3xl font-medium text-zinc-800">
          Everything you need to know
        </h1>
        <div className="max-w-3xl ">
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm md:text-base leading-7">
            Find answers to common questions about our AI-powered resume
            builder, ATS score checker, and resume templates.
          </p>
        </div>
      </div>

      {/* FAQ Container */}
      <div className="max-w-4xl mx-auto mt-5 space-y-5">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
              openIndex === index
                ? "border-emerald-300 bg-emerald-50/40 shadow-sm"
                : "border-gray-200 bg-white hover:border-emerald-200"
            }`}
          >
            {/* Question */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between gap-5 p-6 text-left"
            >
              <h2 className="text-base md:text-lg font-semibold text-slate-800">
                {faq.question}
              </h2>

              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                  openIndex === index
                    ? "bg-emerald-500 text-white"
                    : "bg-emerald-100 text-emerald-700"
                }`}
              >
                {openIndex === index ? (
                  <X className="size-5" />
                ) : (
                  <Plus className="size-5" />
                )}
              </div>
            </button>

            {/* Answer */}
            <div
              className={`grid transition-all duration-500 ease-in-out ${
                openIndex === index
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 text-sm md:text-base text-gray-600 leading-7">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
