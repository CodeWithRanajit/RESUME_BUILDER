
import { MessageSquareQuote } from "lucide-react";

const Testimonial = () => {
  const cardsData = [
  {
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
    name: "Briar Martin",
    handle: "@briarmartin",
    testimonial:
      "This platform completely transformed my resume and boosted my interview chances.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
    name: "Avery Johnson",
    handle: "@averywrites",
    testimonial:
      "The AI suggestions made my resume stand out instantly.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60",
    name: "Jordan Lee",
    handle: "@jordantalks",
    testimonial:
      "I landed more interviews after optimizing my resume with this tool.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60",
    name: "Sophia Wilson",
    handle: "@sophia.dev",
    testimonial:
      "The ATS analysis feature gave my resume a professional edge.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=60",
    name: "Ethan Carter",
    handle: "@ethancodes",
    testimonial:
      "Creating a recruiter-friendly resume has never been this simple.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=60",
    name: "Olivia Brown",
    handle: "@oliviabrown",
    testimonial:
      "The perfect combination of AI, ATS optimization, and modern design.",
  },
];

  const CreateCard = ({ card }) => (
    <div className="p-4 rounded-lg mx-4 shadow hover:shadow-lg transition-all duration-200 w-72 shrink-0">
      <div className="flex gap-2 items-center">
        <img
          className="size-11 rounded-full object-cover"
          src={card.image}
          alt="User"
        />

        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <p className="font-medium text-gray-800">{card.name}</p>

            <svg
              className="mt-0.5 fill-emerald-500"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.555.72a4 4 0 0 1-.297.24c-.179.12-.38.202-.59.244a4 4 0 0 1-.38.041c-.48.039-.721.058-.922.129a1.63 1.63 0 0 0-.992.992c-.071.2-.09.441-.129.922a4 4 0 0 1-.041.38 1.6 1.6 0 0 1-.245.59 3 3 0 0 1-.239.297c-.313.368-.47.551-.56.743-.213.444-.213.96 0 1.404.09.192.247.375.56.743.125.146.187.219.24.297.12.179.202.38.244.59.018.093.026.189.041.38.039.48.058.721.129.922.163.464.528.829.992.992.2.071.441.09.922.129.191.015.287.023.38.041.21.042.411.125.59.245.078.052.151.114.297.239.368.313.551.47.743.56.444.213.96.213 1.404 0 .192-.09.375-.247.743-.56.146-.125.219-.187.297-.24.179-.12.38-.202.59-.244a4 4 0 0 1 .38-.041c.48-.039.721-.058.922-.129.464-.163.829-.528.992-.992.071-.2.09-.441.129-.922a4 4 0 0 1 .041-.38c.042-.21.125-.411.245-.59.052-.078.114-.151.239-.297.313-.368.47-.551.56-.743.213-.444.213-.96 0-1.404-.09-.192-.247-.375-.56-.743a4 4 0 0 1-.24-.297 1.6 1.6 0 0 1-.244-.59 3 3 0 0 1-.041-.38c-.039-.48-.058-.721-.129-.922a1.63 1.63 0 0 0-.992-.992c-.2-.071-.441-.09-.922-.129a4 4 0 0 1-.38-.041 1.6 1.6 0 0 1-.59-.245A3 3 0 0 1 7.445.72C7.077.407 6.894.25 6.702.16a1.63 1.63 0 0 0-1.404 0c-.192.09-.375.247-.743.56m4.07 3.998a.488.488 0 0 0-.691-.69l-2.91 2.91-.958-.957a.488.488 0 0 0-.69.69l1.302 1.302c.19.191.5.191.69 0z"
              />
            </svg>
          </div>

          <span className="text-xs text-slate-500">
            {card.handle}
          </span>
        </div>
      </div>

      <p className="text-sm py-2 text-gray-700 leading-6">
        {card.testimonial}
      </p>
    </div>
  );

  return (
    <>
           {/* Animation */}
<style>{`
  .marquee-inner {
    display: flex;
    width: max-content;
    will-change: transform;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    animation: marqueeScroll 45s linear infinite;
  }

  .marquee-reverse {
    animation-direction: reverse;
  }

  @keyframes marqueeScroll {
    from {
      transform: translate3d(0, 0, 0);
    }

    to {
      transform: translate3d(-50%, 0, 0);
    }
  }
`}</style>
      <br />
      <br />
      <br />
      {/* Badge */}
      <div className="flex flex-col items-center">
        <div className="w-fit gap-2 flex items-center text-sm text-emerald-700 bg-emerald-500/10 rounded-full px-5 py-1 border border-emerald-200">
          <MessageSquareQuote width={15} />
          <span>Success Stories</span>
        </div>
      </div>

      {/* Heading */}
      <div className="flex flex-col justify-center items-center text-center mt-5">
        <h1 className="text-3xl md:text-[30px] font-medium text-zinc-800">
          Trusted by Job Seekers Worldwide
        </h1>

        <p className="text-sm md:text-base text-gray-500 mt-3 max-w-[700px] leading-7">
          Discover how our AI-powered resume builder and ATS analyzer have
          helped thousands of users create professional resumes and land more
          interviews.
        </p>
      </div>

{/* Row 1 */}
<div className="marquee-row w-full mx-auto max-w-6xl overflow-hidden relative">

  <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent"></div>

  <div className="marquee-inner pt-10 pb-5">
    {[...cardsData, ...cardsData].map((card, index) => (
      <CreateCard key={index} card={card} />
    ))}
  </div>

  <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent"></div>

</div>

{/* Row 2 */}
<div className="marquee-row w-full mx-auto max-w-5xl overflow-hidden relative">

  <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent"></div>

  <div className="marquee-inner marquee-reverse pt-5 pb-10">
    {[...cardsData, ...cardsData].map((card, index) => (
      <CreateCard key={index} card={card} />
    ))}
  </div>

  <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent"></div>

</div>
    </>
  );
};

export default Testimonial;