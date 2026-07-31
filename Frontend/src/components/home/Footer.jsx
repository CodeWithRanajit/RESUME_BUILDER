import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Footer = () => {
  const links = [
    {
      title: "Resume Templates",
      items: [
        { name: "Professional Templates", href: "#" },
        { name: "Creative Templates", href: "#" },
        { name: "Modern Templates", href: "#" },
        { name: "Simple Templates", href: "#" },
      ],
    },
    {
      title: "Company",
      items: [
        { name: "About Us", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Contact", href: "#" },
      ],
    },
    {
      title: "Resources",
      items: [
        { name: "Resume Examples", href: "#" },
        { name: "Cover Letter Tips", href: "#" },
        { name: "Career Advice", href: "#" },
        { name: "FAQ", href: "#" },
        { name: "API Reference", href: "#" },
      ],
    },
  ];

  return (
    <>
      <style>
        {`
                    @import url('https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap');
                    
                    *{
                        font-family: "Geist", sans-serif;
                    }
                `}
      </style>

      <footer
        className="pt-15 px-4 sm:px-6 md:px-8 lg:px-20"
        style={{
          background: "linear-gradient(to right, #ffffff, #dcfce7, #ffffff)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 pb-12">
            <div className="flex-1 max-w-full lg:max-w-[400px]">
              <Link to="/">
                <div className="mb-6">
                  <img
                    src={logo}
                    alt="ResumeCraft Logo"
                    className="h-10 w-auto mix-blend-multiply"
                  />
                </div>
              </Link>
              <p className="text-sm leading-7 text-zinc-500 mb-7 max-w-80">
                ResumeCraft helps you create professional, ATS-friendly resumes
                that stand out. Build your perfect resume in minutes with our
                easy-to-use builder and expert-designed templates.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="size-9 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center hover:bg-green-100 hover:border-green-300 transition-all duration-300"
                >
                  <svg
                    width="18"
                    height="17"
                    viewBox="0 0 18 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m5.44.5 3.777 4.994.37.49.405-.463L14.385.5h1.428l-5.296 6.054-.269.306.246.325 6.479 8.565h-4.296l-4.195-5.484-.37-.486-.403.46-4.822 5.51h-1.43l5.716-6.533.27-.308-.25-.325L1.012.5zM2.822 1.867l9.972 13.036.15.197h2.78l-.607-.801-9.86-13.037-.15-.199h-2.9z"
                      fill="#000"
                      stroke="#90a1b9"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="size-9 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center hover:bg-green-100 hover:border-green-300 transition-all duration-300"
                >
                  <svg
                    width="18"
                    height="12"
                    viewBox="0 0 18 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.167.5c1.326 0 2.598.523 3.535 1.454a4.95 4.95 0 0 1 1.465 3.512v5.793h-3.334V5.466c0-.44-.175-.86-.488-1.17a1.673 1.673 0 0 0-2.357 0 1.65 1.65 0 0 0-.488 1.17v5.793H7.167V5.466c0-1.317.527-2.58 1.464-3.512A5.02 5.02 0 0 1 12.167.5M3.833.5H.5v9.931h3.333z"
                      stroke="#90a1b9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="size-9 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center hover:bg-green-100 hover:border-green-300 transition-all duration-300"
                >
                  <svg
                    width="18"
                    height="13"
                    viewBox="0 0 18 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M.937 10.486a19.8 19.8 0 0 1 0-8.276 1.65 1.65 0 0 1 1.166-1.158c4.47-.736 9.03-.736 13.5 0A1.67 1.67 0 0 1 16.77 2.21a19.8 19.8 0 0 1 0 8.276 1.65 1.65 0 0 1-1.167 1.159c-4.47.735-9.03.735-13.5 0a1.67 1.67 0 0 1-1.166-1.159"
                      stroke="#90a1b9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="m7.187 9.466 4.166-2.483L7.187 4.5z"
                      stroke="#90a1b9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="size-9 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center hover:bg-green-100 hover:border-green-300 transition-all duration-300"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 .5H4.667C2.365.5.5 2.353.5 4.638v8.276c0 2.285 1.865 4.138 4.167 4.138H13c2.301 0 4.167-1.853 4.167-4.138V4.638C17.167 2.353 15.3.5 13 .5"
                      stroke="#90a1b9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.167 8.325a3.3 3.3 0 0 1-.339 2.01 3.32 3.32 0 0 1-1.46 1.432 3.35 3.35 0 0 1-3.856-.616 3.29 3.29 0 0 1-.62-3.83c.315-.62.82-1.128 1.442-1.449a3.35 3.35 0 0 1 3.893.598c.505.502.835 1.152.94 1.855"
                      stroke="#90a1b9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="flex flex-wrap sm:flex-nowrap flex-1 justify-between gap-8 w-full max-w-3xl">
              {links.map((link, index) => (
                <div key={index}>
                  <h3 className="text-base font-medium text-zinc-800 mb-6">
                    {link.title}
                  </h3>
                  <ul className="flex flex-col gap-3 list-none">
                    {link.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <a
                          href={item.href}
                          className="text-sm text-zinc-500 hover:text-green-600 transition-colors duration-300"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-16 py-9 max-w-6xl">
            <div className="flex items-start gap-2.5 flex-1 group">
              <div className="size-8 rounded-lg bg-zinc-100 border border-zinc-200 flex items-center justify-center group-hover:bg-green-100 group-hover:border-green-300 transition-all duration-300">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.667 8.335c0 4.16-4.616 8.494-6.166 9.832a.83.83 0 0 1-1.002 0c-1.55-1.338-6.166-5.672-6.166-9.832a6.667 6.667 0 0 1 13.334 0"
                    stroke="#45556c"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.5 8.335 9.167 10 12.5 6.668"
                    stroke="#45556c"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-base font-medium text-zinc-800 mb-0.5 group-hover:text-green-700 transition-colors duration-300">
                  Address
                </h4>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  Kolkata, West Bengal
                  <br />
                  India
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2.5 flex-1 group">
              <div className="size-8 rounded-lg bg-zinc-100 border border-zinc-200 flex items-center justify-center group-hover:bg-green-100 group-hover:border-green-300 transition-all duration-300">
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#a)">
                    <path
                      d="M10.95 13.115a.79.79 0 0 0 .96-.24l.282-.368a1.58 1.58 0 0 1 1.266-.633h2.375a1.583 1.583 0 0 1 1.584 1.583v2.375a1.583 1.583 0 0 1-1.584 1.583 14.25 14.25 0 0 1-14.25-14.25 1.583 1.583 0 0 1 1.584-1.583h2.375a1.583 1.583 0 0 1 1.583 1.583V5.54a1.58 1.58 0 0 1-.633 1.267l-.37.278a.79.79 0 0 0-.232.976 11.1 11.1 0 0 0 5.06 5.054"
                      stroke="#45556c"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 0h19v19H0z" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div>
                <h4 className="text-base font-medium text-zinc-800 mb-0.5 group-hover:text-green-700 transition-colors duration-300">
                  Phone
                </h4>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  +91 8967150279
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2.5 flex-1 group">
              <div className="size-8 rounded-lg bg-zinc-100 border border-zinc-200 flex items-center justify-center group-hover:bg-green-100 group-hover:border-green-300 transition-all duration-300">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m18.333 5.832-7.492 4.773a1.67 1.67 0 0 1-1.674 0l-7.5-4.773"
                    stroke="#45556c"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.667 3.332H3.333c-.92 0-1.666.746-1.666 1.667v10c0 .92.746 1.666 1.666 1.666h13.334c.92 0 1.666-.746 1.666-1.666v-10c0-.92-.746-1.667-1.666-1.667"
                    stroke="#45556c"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-base font-medium text-zinc-800 mb-0.5 group-hover:text-green-700 transition-colors duration-300">
                  Email
                </h4>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  ranajitchattaraj2004@gmail.com
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-4 border-t border-zinc-300">
            <p className="text-sm text-zinc-500">
              &copy; {new Date().getFullYear()} ResumeCraft. All Rights
              Reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-5 md:gap-9">
              <a
                href="#"
                className="text-sm text-zinc-500 hover:text-green-600 transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-zinc-500 hover:text-green-600 transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-sm text-zinc-500 hover:text-green-600 transition-colors duration-300"
              >
                About Us
              </a>
              <a
                href="#"
                className="text-sm text-zinc-500 hover:text-green-600 transition-colors duration-300"
              >
                Help Center
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
