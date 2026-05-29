

const Contact = () => {
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

      <section className="bg-gradient-to-b from-emerald-10 via-white to-white px-4 py-20">
        <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row max-md:items-center justify-between gap-14 md:gap-20">

          {/* Left Side */}
          <div className="flex flex-col mt-6">
            
            {/* Badge */}
            <div className="w-fit max-md:mx-auto mb-5 flex items-center gap-2 px-5 py-2 rounded-full  border border-emerald-200 text-emerald-700 text-sm font-medium">
              <span>Contact Us</span>
            </div>

            <h1 className="text-5xl leading-[60px] max-md:text-center font-bold text-slate-900 max-w-md mb-5">
              Let’s Build Your Dream Resume Together.
            </h1>

            <p className="text-base leading-7 text-gray-500 max-md:text-center max-w-md">
              Have questions about ATS resumes, AI resume analysis, or premium templates? 
              Our team is here to help you land more interviews faster.
            </p>

            {/* Social Icons */}
            <div className="flex items-center max-md:justify-center gap-4 mt-8 cursor-pointer">


              <div className="w-11 h-11 rounded-xl border border-emerald-200 bg-white hover:bg-emerald-50 transition-all duration-300 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M13.333 6.664a5 5 0 0 1 5 5v5.833H15v-5.833a1.667 1.667 0 1 0-3.333 0v5.833H8.333v-5.833a5 5 0 0 1 5-5M5 7.5H1.667v10H5z" stroke="#059669" strokeWidth="1.667" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

            </div>
          </div>

          {/* Right Side Form */}
          <div className="w-full max-w-md bg-white/90 backdrop-blur-xl border border-emerald-100 rounded-3xl p-8 shadow-sm">

            <h2 className="text-xl font-semibold text-slate-800 mb-6">
              Send Message
            </h2>

            <form className="flex flex-col gap-5">

              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-500">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="bg-emerald-50/50 border border-emerald-100 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-gray-400 outline-none focus:border-emerald-400 transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-500">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-emerald-50/50 border border-emerald-100 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-gray-400 outline-none focus:border-emerald-400 transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-500">
                  Message
                </label>

                <textarea
                  placeholder="Write your message..."
                  rows="5"
                  className="bg-emerald-50/50 border border-emerald-100 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-gray-400 outline-none focus:border-emerald-400 transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium py-3.5 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
              >
                Send Message
              </button>

            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;