import React from 'react';

const HeroSection = () => {
  return (
    <section className='flex flex-wrap items-baseline justify-center align-middle px-5 py-10 gap-10 md:px-36'>
      {/* Headline */}
      <div className='flex flex-1 flex-col gap-5 w-full sm:w-1/2 lg:w-1/3 p-10 justify-evenly'>
        <h1 className='text-white text-5xl leading-tight font-semibold'>
          Generate Awesome Web Pages
        </h1>
        <p className='text-white text-md leading-relaxed'>
          The most important part of the Startup is the samples. The samples
          form a set of 25 usable pages you can use as is or you can add new
          blocks.
        </p>
        <button className='bg-[#e93a7dfc] w-1/2 hover:bg-[#e93a7dc7] text-white font-semibold py-2 rounded-full'>
          Learn More
        </button>
      </div>

      {/* Sign-up Form */}
      <div className='flex flex-1 flex-col bg-white p-10 rounded-xl shadow-md gap-5 w-full sm:w-1/2'>
        <h2 className='text-4xl text-[#1E0E62] text-center font-semibold'>
          Sign Up Now
        </h2>
        <form className='flex flex-col gap-7'>
          <input
            type='email'
            placeholder='Your email'
            className='p-2 pl-5 rounded-full border-2 focus:outline-[#e93a7d]'
          />
          <input
            type='password'
            placeholder='Your password'
            className='p-2 pl-5 rounded-full border-2 focus:outline-[#e93a7d]'
          />
          <p className='flex items-center'>
            <input className='accent-[#25DAC5]' type='checkbox' id='terms' />
            <label htmlFor='terms' className='text-gray-400 ml-2'>
              I agree to the Terms of Service
            </label>
          </p>
          <button className='bg-[#482BE7] hover:bg-[#301C9A] text-white font-semibold py-2 rounded-full'>
            Sign In
          </button>
          <div className='flex items-center justify-center gap-4'>
            <hr className='flex-1 border-gray-300' />
            <span className='text-gray-500'>or</span>
            <hr className='flex-1 border-gray-300' />
          </div>
          <button className='bg-[#1DA1F2] hover:bg-[#136BA1] text-white font-semibold py-2 rounded-full'>
            Login via Twitter
          </button>
          <p className='text-gray-400 text-center'>
            Do you have an account?{' '}
            <span className='text-[#25dac5] hover:cursor-pointer'>Sign In</span>
          </p>
        </form>
      </div>
    </section>
  );
};

export default HeroSection;
