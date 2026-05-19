export default function VideoSection() {
  return (
    <section className='bg-[#f8f9fa] py-16'>
      <div className='w-[90%] max-w-[1200px] mx-auto px-4'>
        <h2 className='text-center text-2xl md:text-3xl font-semibold text-[#164baf] mb-4'>
          How Planetary Data Helps Us Understand Space
        </h2>
        <p className='text-center max-w-[1080px] mx-auto text-[#0f2a44] text-lg leading-relaxed mb-10'>
          Planetary science goes beyond images. Comparing{' '}
          <span className='text-[#0f2a44] font-medium'>
            mass, diameter, gravity,
          </span>{' '}
          and <span className='text-[#0f2a44] font-medium'>density,</span> we
          gain insight into how planets form, behave, and interact within the
          solar system.
        </p>

        <div className='max-w-[900px] mx-auto rounded-2xl overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.12)]'>
          <iframe
            className='w-full block'
            height='500'
            src='https://www.youtube.com/embed/HCDVN7DCzYE'
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
