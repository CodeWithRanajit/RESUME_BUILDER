import React from 'react'

const Pricing = () => {
    const [isAnnual, setIsAnnual] = React.useState(true);

const pricingData = [
  { 
    name: 'Basic',
    price: isAnnual ? 10 : 1,
    description: 'Perfect for students and freshers building their first ATS-friendly resume.',
    
    features: [
      '1 Professional Resume Template',
      'Basic ATS Score Analysis',
      'PDF Resume Download',
      'AI Resume Suggestions'
    ]
  },

  {
    name: 'Pro',
    mostPopular: true,
    price: isAnnual ? 30 : 3,
    description: 'Best for job seekers who want advanced AI-powered resume optimization.',

    features: [
      'Unlimited Resume Editing',
      'Advanced ATS Score Checker',
      'AI Keyword Optimization',
      'Premium Resume Templates'
    ]
  },

  {
    name: 'Enterprise',
    price: isAnnual ? 50 : 5,
    description: 'Designed for professionals, teams, and career consulting services.',

    features: [
      'Team Resume Management',
      'Advanced Resume Analytics',
      'Priority AI Support',
      'Custom Branding & Templates'
    ]
  }
]

    return (
        <>
            <style>
                {`
                    @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

                    *{
                        font-family: "Poppins", sans-serif;
                    }`
                }
            </style>
            <section className='flex items-center justify-center flex-col py-20 px-4'>
               <h1 className='font-medium text-4xl md:text-[52px] text-slate-800 text-center'>
  Choose the Perfect Plan for Your Career
</h1>
              <p className='text-base/7 text-zinc-500 max-w-sm text-center mt-4'>
  Choose the perfect plan to build, analyze, and optimize your resume with AI.
</p>
                <div className='mt-6 flex bg-zinc-100 p-1.5 rounded-full'>
                    <button onClick={() => setIsAnnual(false)} className={`px-4 py-2 rounded-full text-xs cursor-pointer transition ${!isAnnual ? 'bg-zinc-800 hover:bg-zinc-900 text-white' : 'text-gray-600'}`}>Monthly</button>
                    <button onClick={() => setIsAnnual(true)} className={`px-4 py-2 rounded-full text-xs cursor-pointer transition ${isAnnual ? 'bg-zinc-800 hover:bg-zinc-900 text-white' : 'text-gray-600'}`}>Annually</button>
                </div>
                <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {pricingData.map((item, index) => (
                        <div key={index} className={`border border-zinc-200 rounded-2xl p-6 flex flex-col items-start max-w-md transition duration-300 hover:-translate-y-1 ${item.mostPopular ? 'bg-gray-100' : ''}`}>
                            <h1 className='font-medium text-3xl text-slate-800 mt-1'>{item.name}</h1>
                            <p className='text-sm text-zinc-500 mt-2'>{item.description}</p>
                            <h1 className='font-medium text-5xl text-slate-800 mt-6'>${item.price}</h1>
                            <button className={`w-full px-4 py-3 rounded-full cursor-pointer text-slate-600 text-sm mt-8 ${item.mostPopular ? 'bg-gray-800 hover:bg-gray-900 text-white' : 'border border-zinc-300/80 bg-zinc-100 hover:bg-zinc-200/70'}`}>
                                Get Started
                            </button>
                            <div className='w-full mt-8 space-y-2.5 pb-4'>
                                {item.features.map((feature, index) => (
                                    <p key={index} className='flex items-center gap-3 text-sm text-zinc-500'>
                                        <span className='size-3 rounded-full bg-zinc-300 flex items-center justify-center shrink-0'>
                                            <span className='size-1.5 rounded-full bg-zinc-800' />
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
    )
}

export default Pricing;