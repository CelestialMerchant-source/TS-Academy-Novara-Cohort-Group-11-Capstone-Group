export default function HeroSection() {
  return (
    <section className='bg-gradient-to-br from-[#051540] to-[#19335e] py-16 text-white'>
      <div className='w-[90%] max-w-[1200px] mx-auto px-4'>
        <div className='flex items-center justify-between gap-12 flex-col md:flex-row'>
          {/* Text */}
          <div className='flex-1 max-w-[550px] text-center md:text-left'>
            <h1 className='text-4xl md:text-5xl font-bold text-white mb-6 leading-tight'>
              Explore Our Solar System Through Data
            </h1>
            <p className='text-[#e0e0e0] text-base leading-relaxed mb-8'>
              Understand the planets not just by name, but by measurable facts.
              From size to temperature, to gravity, this page brings planetary
              data to life—because why memorize when you can visualize?
            </p>
            <div className='flex gap-4 flex-wrap justify-center md:justify-start'>
              <button className='bg-[#164baf] border-2 border-[#164baf] text-white font-semibold px-12 py-3.5 rounded hover:bg-[#1e4680] hover:border-[#1e4680] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg'>
                Explore the Data
              </button>
              <button className='bg-transparent border border-[#dddddd] text-white font-semibold px-12 py-3.5 rounded hover:bg-white hover:text-[#1a2942] transition-all duration-300 hover:-translate-y-0.5'>
                Contact Us
              </button>
            </div>
          </div>

          {/* Image */}
          <div className='flex-1 flex justify-center items-center order-first md:order-last'>
            <img
              src='https://pngimg.com/uploads/earth/earth_PNG39.png'
              alt='Earth Planet'
              className='max-w-[400px] w-full h-auto animate-[float_6s_ease-in-out_infinite]'
              style={{ animation: 'float 6s ease-in-out infinite' }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </section>
  );
}
