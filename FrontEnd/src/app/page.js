import Link from 'next/link'

export default function Page() {
    return (
        <main className='min-h-screen text-white'>
            <section className='flex flex-col lg:flex-row items-center justify-between p-4 pb-0 sm:p-8 py-8  max-w-7xl mx-auto gap-8 sm:gap-12'>
                <div className='flex-1 text-center lg:text-left'>
                    <h1 className='text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6'>
                        Eunoia
                    </h1>
                    <p className='text-base sm:text-lg mb-8 max-w-2xl mx-auto lg:mx-0 opacity-90'>
                        Eunoia focuses on everyday mental wellness, offering a calm place to reflect, process emotions, and explore healthier thought patterns at your own pace. 
                        The goal is not to replace professional care, but to make quality support more accessible between sessions or for those just beginning their mental health journey.
                    </p>
                </div>
            </section>
            <section className='flex flex-col lg:flex-row items-center justify-between p-4 pt-0 py-8 lg:p-8 lg:py-16 max-w-7xl mx-auto gap-6 lg:gap-12'>
                <div className='flex-1 text-center lg:text-left'>
                    <div className="inline-block rounded-4xl text-black bg-[#F9F4FB] w-85 lg:w-130 mr-0 lg:mr-20 mb-4 lg:mb-0">
                        <p className='lg:text-lg pt-[5%] lg:pt-10 p-10 max-w-2xl mx-auto lg:mx-0 opacity-90'>
                            As you talk, the AI gets to know your goals, preferences, and communication style, then adjusts its tone, tools, and suggestions to match what works best for you. 
                            Over time it can recognize patterns in your check ins, surface gentle insights, and recommend exercises like journaling prompts, grounding techniques, or mindfulness practices tailored to how you are feeling that day.
                        </p>
                    </div>
                    <div className="inline-block rounded-4xl w-85 lg:w-130 lg:h-min h-80 mr-0 lg:mr-10 bg-[#DACBEA]/20 backdrop-blur-lg shadow-lg border border-white/20">
                        <p className='lg:text-lg pt-[5%] lg:pt-10 p-10 max-w-2xl mx-auto lg:mx-0 opacity-90'>
                            You can expect clear, professional guidance grounded in empathy, with conversations that stay focused on your growth, boundaries, and comfort. 
                            Eunoia is being built with privacy, safety, and transparency as core priorities, so you always know how your data is used and remain in control of your experience.
                        </p>
                    </div>
                </div>
            </section>
            <section className='flex flex-col items-center justify-center p-4 sm:p-8 py-8 lg:py-16 max-w-7xl mx-auto gap-8 sm:gap-12 rounded-4xl bg-[#F9F4FB]'>
                <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
                    <h3 className='text-black text-lg sm:text-2xl w-max'>Start your journey today!</h3>
                    <button className='bg-[#F9F4FB] text-black rounded-xl px-6 py-2 font-bold text-base sm:text-lg transition hover:bg-[#f3e5f5]'>
                        <Link href='/sign-up'>Create an Account!</Link>
                    </button>
                </div>
            </section>
        </main>
    )
}