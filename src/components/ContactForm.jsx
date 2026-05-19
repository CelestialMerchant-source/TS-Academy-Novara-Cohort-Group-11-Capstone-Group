import { useState } from 'react';

export default function ContactForm() {
  const [message, setMessage] = useState('');
  const maxChars = 500;

  return (
    <section className='bg-white py-16' id='form-section'>
      <div className='w-[90%] max-w-[1200px] mx-auto px-4'>
        <h2 className='text-2xl md:text-3xl font-semibold text-[#164baf] mb-4'>
          Have Questions About Planetary Science?
        </h2>
        <p className='text-[#666666] text-base leading-relaxed mb-10'>
          Interested in learning more about space, astronomy, or how planetary
          data is collected and analyzed? Reach out and we'll get back to you.
        </p>

        <div className='max-w-[900px] bg-white py-10'>
          {/* Row 1 */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
            <div className='flex flex-col gap-2'>
              <label
                htmlFor='fullname'
                className='text-sm font-medium text-[#333333]'
              >
                Full Name*
              </label>
              <input
                type='text'
                id='fullname'
                name='fullname'
                placeholder='Full name'
                required
                className='px-3.5 py-3 border border-[#d0d0d0] rounded text-[0.95rem] bg-white focus:outline-none focus:border-[#164baf] focus:ring-[3px] focus:ring-[rgba(22,75,175,0.1)] transition-all'
              />
            </div>
            <div className='flex flex-col gap-2'>
              <label
                htmlFor='email'
                className='text-sm font-medium text-[#333333]'
              >
                Email*
              </label>
              <input
                type='email'
                id='email'
                name='email'
                placeholder='example@example.com'
                required
                className='px-3.5 py-3 border border-[#d0d0d0] rounded text-[0.95rem] bg-white focus:outline-none focus:border-[#164baf] focus:ring-[3px] focus:ring-[rgba(22,75,175,0.1)] transition-all'
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
            <div className='flex flex-col gap-2'>
              <label
                htmlFor='city'
                className='text-sm font-medium text-[#333333]'
              >
                City*
              </label>
              <select
                id='city'
                name='city'
                required
                className='px-3.5 py-3 border border-[#d0d0d0] rounded text-[0.95rem] bg-white cursor-pointer appearance-none focus:outline-none focus:border-[#164baf] focus:ring-[3px] focus:ring-[rgba(22,75,175,0.1)] transition-all'
              >
                <option value=''>Choose city</option>
                <option value='new-york'>New York</option>
                <option value='london'>London</option>
                <option value='tokyo'>Tokyo</option>
                <option value='paris'>Paris</option>
              </select>
            </div>
            <div className='flex flex-col gap-2'>
              <label
                htmlFor='phone'
                className='text-sm font-medium text-[#333333]'
              >
                Phone Number*
              </label>
              <input
                type='tel'
                id='phone'
                name='phone'
                placeholder='Please enter a valid phone number.'
                required
                className='px-3.5 py-3 border border-[#d0d0d0] rounded text-[0.95rem] bg-white focus:outline-none focus:border-[#164baf] focus:ring-[3px] focus:ring-[rgba(22,75,175,0.1)] transition-all'
              />
            </div>
          </div>

          {/* Row 3 — Message + Radio/Checkbox */}
          <div className='flex flex-col md:flex-row gap-8 mb-6'>
            {/* Message */}
            <div className='flex-1 flex flex-col gap-2'>
              <label
                htmlFor='message'
                className='text-sm font-medium text-[#333333]'
              >
                Message*
              </label>
              <textarea
                id='message'
                name='message'
                rows={5}
                placeholder='Enter your message'
                required
                value={message}
                onChange={(e) => setMessage(e.target.value.slice(0, maxChars))}
                className='px-3.5 py-3 border border-[#d0d0d0] rounded text-[0.95rem] bg-white resize-y min-h-[120px] focus:outline-none focus:border-[#164baf] focus:ring-[3px] focus:ring-[rgba(22,75,175,0.1)] transition-all'
              />
              <span className='text-[0.85rem] text-[#999999]'>
                {message.length}/{maxChars} characters
              </span>
            </div>

            {/* Radio + Checkbox */}
            <div className='flex-1 flex flex-col gap-6'>
              {/* Contact method */}
              <div className='flex flex-col gap-3'>
                <span className='text-base font-semibold text-[#333333]'>
                  How should we contact you?
                </span>
                <div className='flex gap-8'>
                  {['Phone', 'Email', 'Both'].map((method) => (
                    <label
                      key={method}
                      className='flex items-center gap-2 cursor-pointer text-[0.95rem] text-[#333333]'
                    >
                      <input
                        type='radio'
                        name='contact-method'
                        value={method.toLowerCase()}
                        className='w-[1.1rem] h-[1.1rem] cursor-pointer accent-[#164baf]'
                      />
                      <span>{method}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Source */}
              <div className='flex flex-col gap-3'>
                <span className='text-base font-semibold text-[#333333]'>
                  How did you hear about us?
                </span>
                <div className='flex flex-wrap gap-6'>
                  {[
                    { label: 'Friend', value: 'friend', defaultChecked: true },
                    {
                      label: 'TS Academy',
                      value: 'ts-academy',
                      defaultChecked: false,
                    },
                    { label: 'Others', value: 'others', defaultChecked: false },
                  ].map((item) => (
                    <label
                      key={item.value}
                      className='flex items-center gap-2 cursor-pointer text-[0.95rem] text-[#333333]'
                    >
                      <input
                        type='checkbox'
                        name='source'
                        value={item.value}
                        defaultChecked={item.defaultChecked}
                        className='w-[1.1rem] h-[1.1rem] cursor-pointer accent-[#164baf]'
                      />
                      <span>{item.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Submit */}
          <div className='mt-8'>
            <button
              type='submit'
              className='bg-[#164baf] border-2 border-[#164baf] text-white font-semibold px-16 py-2.5 rounded hover:bg-[#1e4680] transition-all duration-300 hover:-translate-y-0.5 min-w-[200px]'
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
