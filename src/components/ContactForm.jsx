import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const MAX_CHARS = 500;

const INITIAL_STATE = {
  fullname: '',
  email: '',
  city: '',
  phone: '',
  message: '',
  contactMethod: '',
  source: [],
};

export default function ContactForm() {
  const formRef = useRef(null);
  const [fields, setFields] = useState(INITIAL_STATE);
  const [status, setStatus] = useState('idle'); // "idle" | "sending" | "success" | "error"

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckbox = (e) => {
    const { value, checked } = e.target;
    setFields((prev) => ({
      ...prev,
      source: checked
        ? [...prev.source, value]
        : prev.source.filter((s) => s !== value),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const templateParams = {
      from_name: fields.fullname,
      from_email: fields.email,
      phone: fields.phone,
      city: fields.city,
      message: fields.message,
      contact_method: fields.contactMethod || 'Not specified',
      source:
        fields.source.length > 0 ? fields.source.join(', ') : 'Not specified',
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      setStatus('success');
      setFields(INITIAL_STATE);
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
  };

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

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='max-w-[900px] bg-white py-10'
        >
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
                value={fields.fullname}
                onChange={handleChange}
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
                value={fields.email}
                onChange={handleChange}
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
                State*
              </label>
              <select
                id='city'
                name='city'
                required
                value={fields.city}
                onChange={handleChange}
                className='px-3.5 py-3 border border-[#d0d0d0] rounded text-[0.95rem] bg-white cursor-pointer appearance-none focus:outline-none focus:border-[#164baf] focus:ring-[3px] focus:ring-[rgba(22,75,175,0.1)] transition-all'
              >
                <option value=''>Choose state</option>
                <option value='abia'>Abia</option>
                <option value='adamawa'>Adamawa</option>
                <option value='akwa-ibom'>Akwa Ibom</option>
                <option value='anambra'>Anambra</option>
                <option value='bauchi'>Bauchi</option>
                <option value='bayelsa'>Bayelsa</option>
                <option value='benue'>Benue</option>
                <option value='borno'>Borno</option>
                <option value='cross-river'>Cross River</option>
                <option value='delta'>Delta</option>
                <option value='ebonyi'>Ebonyi</option>
                <option value='edo'>Edo</option>
                <option value='ekiti'>Ekiti</option>
                <option value='enugu'>Enugu</option>
                <option value='fct'>FCT (Abuja)</option>
                <option value='gombe'>Gombe</option>
                <option value='imo'>Imo</option>
                <option value='jigawa'>Jigawa</option>
                <option value='kaduna'>Kaduna</option>
                <option value='kano'>Kano</option>
                <option value='katsina'>Katsina</option>
                <option value='kebbi'>Kebbi</option>
                <option value='kogi'>Kogi</option>
                <option value='kwara'>Kwara</option>
                <option value='lagos'>Lagos</option>
                <option value='nasarawa'>Nasarawa</option>
                <option value='niger'>Niger</option>
                <option value='ogun'>Ogun</option>
                <option value='ondo'>Ondo</option>
                <option value='osun'>Osun</option>
                <option value='oyo'>Oyo</option>
                <option value='plateau'>Plateau</option>
                <option value='rivers'>Rivers</option>
                <option value='sokoto'>Sokoto</option>
                <option value='taraba'>Taraba</option>
                <option value='yobe'>Yobe</option>
                <option value='zamfara'>Zamfara</option>
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
                value={fields.phone}
                onChange={handleChange}
                className='px-3.5 py-3 border border-[#d0d0d0] rounded text-[0.95rem] bg-white focus:outline-none focus:border-[#164baf] focus:ring-[3px] focus:ring-[rgba(22,75,175,0.1)] transition-all'
              />
            </div>
          </div>

          {/* Row 3 */}
          <div className='flex flex-col md:flex-row gap-8 mb-6'>
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
                value={fields.message}
                onChange={(e) =>
                  setFields((prev) => ({
                    ...prev,
                    message: e.target.value.slice(0, MAX_CHARS),
                  }))
                }
                className='px-3.5 py-3 border border-[#d0d0d0] rounded text-[0.95rem] bg-white resize-y min-h-[120px] focus:outline-none focus:border-[#164baf] focus:ring-[3px] focus:ring-[rgba(22,75,175,0.1)] transition-all'
              />
              <span className='text-[0.85rem] text-[#999999]'>
                {fields.message.length}/{MAX_CHARS} characters
              </span>
            </div>

            <div className='flex-1 flex flex-col gap-6'>
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
                        name='contactMethod'
                        value={method.toLowerCase()}
                        checked={fields.contactMethod === method.toLowerCase()}
                        onChange={handleChange}
                        className='w-[1.1rem] h-[1.1rem] cursor-pointer accent-[#164baf]'
                      />
                      <span>{method}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className='flex flex-col gap-3'>
                <span className='text-base font-semibold text-[#333333]'>
                  How did you hear about us?
                </span>
                <div className='flex flex-wrap gap-6'>
                  {[
                    { label: 'Friend', value: 'friend' },
                    { label: 'TS Academy', value: 'ts-academy' },
                    { label: 'Others', value: 'others' },
                  ].map((item) => (
                    <label
                      key={item.value}
                      className='flex items-center gap-2 cursor-pointer text-[0.95rem] text-[#333333]'
                    >
                      <input
                        type='checkbox'
                        name='source'
                        value={item.value}
                        checked={fields.source.includes(item.value)}
                        onChange={handleCheckbox}
                        className='w-[1.1rem] h-[1.1rem] cursor-pointer accent-[#164baf]'
                      />
                      <span>{item.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Feedback */}
          {status === 'success' && (
            <p className='text-green-600 font-medium mb-4'>
              ✓ Message sent successfully! We'll be in touch soon.
            </p>
          )}
          {status === 'error' && (
            <p className='text-red-500 font-medium mb-4'>
              ✗ Something went wrong. Please try again or email us directly.
            </p>
          )}

          {/* Submit */}
          <div className='mt-4'>
            <button
              type='submit'
              disabled={status === 'sending'}
              className='bg-[#164baf] border-2 border-[#164baf] text-white font-semibold px-16 py-2.5 rounded hover:bg-[#1e4680] transition-all duration-300 hover:-translate-y-0.5 min-w-[200px] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0'
            >
              {status === 'sending' ? 'Sending…' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
