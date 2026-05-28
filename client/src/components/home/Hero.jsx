import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
const Hero = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const companyLogos = [
    "slack",
    "framer",
    "netflix",
    "google",
    "linkedin",
    "instagram",
    "facebook",
  ];
  return (
    <>
      <style>{`
    .marquee {
        overflow: hidden;
        width: 100%;
        position: relative;
    }

    .marquee-track {
        display: flex;
        width: max-content;
        animation: marquee 20s linear infinite;
        will-change: transform;
    }

    .marquee-track:hover {
        animation-play-state: paused;
    }

    @keyframes marquee {
        from {
            transform: translateX(0);
        }

        to {
            transform: translateX(-50%);
        }
    }
`}</style>
      <div className="min-h-screen pb-17">
        {/* Navbar */}
        <nav className="z-50 flex items-center justify-between w-full py-4 px-3 md:px-16 lg:px-24 xl:px-40 text-sm">
          <Link to="#">
            <img src={logo} alt="logo" className="w-[150px] h-[30px]" />
          </Link>

          <div className="hidden md:flex items-center gap-8 transition duration-500 text-slate-800">
            <Link to="#" className="hover:text-green-600 transition">
              Home
            </Link>
            <Link to="#features" className="hover:text-green-600 transition">
              Features
            </Link>
            <Link to="#ats-checker" className="hover:text-green-600 transition">
              ATS Score
            </Link>
            <Link to="#templates" className="hover:text-green-600 transition">
              Templates
            </Link>
            <Link
              to="#testimonials"
              className="hover:text-green-600 transition"
            >
              Testimonials
            </Link>
            <Link to="/pricing" className="hover:text-green-600 transition">
              Pricing
            </Link>
            <Link to="#faqs" className="hover:text-green-600 transition">
              FAQs
            </Link>
            <Link to="#cta" className="hover:text-green-600 transition">
              Contact
            </Link>
          </div>

          <div className="flex gap-3">
            <Link
              href=""
              className="hidden md:block px-6 py-2 bg-green-500 hover:bg-green-700 active:scale-95 transition-all rounded-full text-white"
            >
              Get started
            </Link>
            <Link
              href=""
              className="hidden md:block px-6 py-2 border active:scale-95 hover:bg-slate-50 transition-all rounded-full text-slate-700 hover:text-slate-900"
            >
              Login
            </Link>
          </div>

          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden active:scale-90 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="lucide lucide-menu"
            >
              <path d="M4 5h16M4 12h16M4 19h16" />
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 z-[100] bg-black/40 text-black backdrop-blur flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-300 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <Link to="#" className="text-white">
            Home
          </Link>

          <Link to="#features" className="text-white">
            Features
          </Link>

          <Link to="#ats-checker" className="text-white">
            ATS Score
          </Link>

          <Link to="#templates" className="text-white">
            Templates
          </Link>

          <Link to="#testimonials" className="text-white">
            Testimonials
          </Link>

          <Link to="/pricing" className="text-white">
            Pricing
          </Link>

          <Link to="#faqs" className="text-white">
            FAQs
          </Link>

          <Link to="#cta" className="text-white">
            Contact
          </Link>
          <button
            onClick={() => setMenuOpen(false)}
            className="active:ring-3 active:ring-white aspect-square size-10 p-1 items-center justify-center bg-green-600 hover:bg-green-700 transition text-white rounded-md flex"
          >
            X
          </button>
        </div>

        {/* Hero Section */}
        <div className="relative flex flex-col items-center justify-center text-sm px-4 md:px-16 lg:px-24 xl:px-40 text-black">
          <div className="absolute top-28 xl:top-10 -z-10 left-1/4 size-72 sm:size-96 xl:size-120 2xl:size-132 bg-green-300 blur-[100px] opacity-30"></div>

          {/* Avatars + Stars */}
          <div className="flex items-center mt-24">
            <div className="flex -space-x-3 pr-3">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200"
                alt="user3"
                className="size-8 object-cover rounded-full border-2 border-white hover:-translate-y-0.5 transition z-[1]"
              />
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
                alt="user1"
                className="size-8 object-cover rounded-full border-2 border-white hover:-translate-y-0.5 transition z-2"
              />
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200"
                alt="user2"
                className="size-8 object-cover rounded-full border-2 border-white hover:-translate-y-0.5 transition z-[3]"
              />
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200"
                alt="user3"
                className="size-8 object-cover rounded-full border-2 border-white hover:-translate-y-0.5 transition z-[4]"
              />
              <img
                src="https://randomuser.me/api/portraits/men/75.jpg"
                alt="user5"
                className="size-8 rounded-full border-2 border-white hover:-translate-y-0.5 transition z-[5]"
              />
            </div>

            <div>
              <div className="flex ">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-star text-transparent fill-green-600"
                      aria-hidden="true"
                    >
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                    </svg>
                  ))}
              </div>
              <p className="text-sm text-gray-700">Used by 10,000+ users</p>
            </div>
          </div>

          {/* Headline + CTA */}
          <h1 className="text-3xl md:text-5xl font-semibold max-w-5xl text-center mt-4 md:leading-[70px]">
            Build ATS-Friendly Resumes with
            <span className="bg-gradient-to-r from-green-700 to-green-600 bg-clip-text text-transparent text-nowrap ml-3 mr-3">
              AI-Powered
            </span>
            Resume Analysis.
          </h1>

          <p className="max-w-2xl text-center text-base my-7 text-zinc-600">
            Create professional resumes, analyze ATS scores, and optimize your
            profile with smart AI tools designed to help you land your dream job
            faster.
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4 ">
            <Link
              to="/"
              className="bg-green-500 hover:bg-green-600 text-white rounded-full px-9 h-12 m-1 ring-offset-2 ring-1 ring-green-400 flex items-center transition-colors"
            >
              Get started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right ml-1 size-4"
                aria-hidden="true"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>
            <Link to="#ats-checker">
              <button className="flex items-center gap-2 border border-slate-400 hover:bg-green-50 transition rounded-full px-7 h-12 text-slate-700 ">
                <span>Check ATS Score</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-right ml-1 size-4"
                  aria-hidden="true"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
            </Link>
          </div>

          <p className="py-6 text-slate-600 mt-14">
            Trusting by leading brands, including
          </p>

          <div className="marquee max-w-5xl mx-auto select-none">
            {/* Left Fade */}
            <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />

            {/* Marquee Track */}
            <div className="marquee-track">
              {[...companyLogos, ...companyLogos].map((company, index) => (
                <img
                  key={index}
                  src={`https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/${company}.svg`}
                  alt={company}
                  className="h-10 w-auto mx-8 brightness-0 opacity-40 shrink-0"
                  draggable={false}
                />
              ))}
            </div>

            {/* Right Fade */}
            <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
