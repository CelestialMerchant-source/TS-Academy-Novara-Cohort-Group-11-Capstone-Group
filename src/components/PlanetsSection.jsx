const images = [
  {
    src: 'https://images.unsplash.com/photo-1634176866089-b633f4aec882?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzA5MjA0OTl8&ixlib=rb-4.1.0&q=80&w=400',
    alt: 'Solar System',
  },
  {
    src: 'https://images.unsplash.com/photo-1640386355103-83ebf7c6c83e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzA5MjA0OTl8&ixlib=rb-4.1.0&q=80&w=400',
    alt: 'Earth',
  },
  {
    src: 'https://images.unsplash.com/photo-1654263391025-4c4809a37f5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzA5MjA2MzB8&ixlib=rb-4.1.0&q=80&w=400',
    alt: 'Planet',
  },
  {
    src: 'https://images.unsplash.com/photo-1663160055679-7b7fecb4468f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzA5MjA2MzB8&ixlib=rb-4.1.0&q=80&w=400',
    alt: 'Planet',
  },
  {
    src: 'https://images.unsplash.com/photo-1589225529399-8705282f98e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzA5MjA3MTh8&ixlib=rb-4.1.0&q=80&w=400',
    alt: 'Planet',
  },
  {
    src: 'https://images.unsplash.com/photo-1655509206649-a63396bed840?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzA5MjA3NTR8&ixlib=rb-4.1.0&q=80&w=400',
    alt: 'Planet',
  },
  {
    src: 'https://images.unsplash.com/photo-1632395627732-005012dbc286?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzA5MjA3Nzl8&ixlib=rb-4.1.0&q=80&w=400',
    alt: 'Planet',
  },
  {
    src: 'https://images.unsplash.com/photo-1663427929868-3941f957bb36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzA5MjA4MTl8&ixlib=rb-4.1.0&q=80&w=400',
    alt: 'Planet',
  },
];

export default function PlanetsSection() {
  return (
    <section className='bg-[#eef2f7] py-16'>
      <div className='w-[90%] max-w-[1200px] mx-auto px-4'>
        <h2 className='text-center text-2xl md:text-3xl font-semibold text-[#164baf] mb-4'>
          Visualizing the Differences Between Planets
        </h2>
        <p className='text-center max-w-[1080px] mx-auto text-[#0f2a44] text-lg leading-relaxed mb-10'>
          Each planet in our solar system has unique physical characteristics.
          Visual comparisons help highlight how vastly different terrestrial
          planets are from gas giants and ice giants.
        </p>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mt-8'>
          {images.map((img, i) => (
            <div
              key={i}
              className='relative overflow-hidden rounded-[1.2rem] shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl'
            >
              <img
                src={img.src}
                alt={img.alt}
                className='w-full h-[350px] object-cover block'
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
