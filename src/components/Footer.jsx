export default function Footer() {
  return (
    <footer className='bg-[#051540] text-white pt-12 pb-6'>
      <div className='w-[90%] max-w-[1200px] mx-auto px-4'>
        {/* About block */}
        <div className='flex items-start mb-8 border-b border-white pb-8'>
          <div className='max-w-[400px]'>
            <h3 className='text-xl font-semibold text-white mb-3'>About</h3>
            <p className='text-[0.9rem] text-white leading-relaxed'>
              At planets, we look into the most habitable planets on the
              multiverse.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4'>
          <p className='text-[0.85rem] text-white'>
            ©2025 The.Craftsman. All rights reserved
          </p>
          <div className='flex gap-8'>
            <a
              href='#'
              className='text-[0.9rem] text-white hover:text-[#c0c0c0] hover:underline transition-colors duration-300'
            >
              Privacy &amp; Policy
            </a>
            <a
              href='#'
              className='text-[0.9rem] text-white hover:text-[#c0c0c0] hover:underline transition-colors duration-300'
            >
              Terms &amp; Condition
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
