import React from 'react';
import playstorLogo from '../../assets/Group.png'
import appLogo from '../../assets/Group (1).png'
import { Link } from 'react-router-dom';
import bannerPic from '../../assets/hero.png'

const Banner = () => {
  return (
    <div className='flex flex-col items-center px-3 md:px-0'>
       <h1 className='text-center text-black text-4xl md:text-7xl font-bold'>We Build <br />
         <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Productive </span>Apps</h1>
         <p className='my-10 text-gray-500 text-center' >At AppifyZone , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.< br className='hidden md:block'/> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
         
         <div className='flex flex-col md:flex-row gap-4 text-center items-center '>
          <Link to={'https://play.google.com/store/games?hl=en'}>
          <button className='flex px-5 py-2 border-1 border-gray-300 cursor-pointer rounded-md font-semibold gap-1' ><img src={playstorLogo} alt="PlayStore" />Google Play</button></Link>

          <Link to={'https://www.apple.com/app-store/'}><button className='flex px-5 py-2 border-1 border-gray-300 cursor-pointer rounded-md font-semibold gap-1' ><img src={appLogo} alt="PlayStore" />App Store</button></Link>
         </div>

         <img className='mt-10' src={bannerPic} alt="bannerpic" />

         <div className='w-full bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white py-20 flex flex-col justify-center items-center'>
          <h1 className='font-bold text-3xl text-center md:text-5xl mb-7'>Trusted by Millions, Built for You</h1>
        <div className='block md:flex justify-evenly w-auto md:w-full '>
            <section className='border-1 md:border-none p-6 md:p-0 rounded-md md:rounded-none mb-4'>
            <p className='text-gray-300'>Total Downloads</p>
            <h1 className='my-5 text-5xl font-semibold'>29.6M</h1>
            <p className='text-gray-300'>21% more than last month</p>
          </section>
           <section  className='border-1 md:border-none p-6 md:p-0 rounded-md md:rounded-none mb-4'>
            <p className='text-gray-300'>Total Reviews</p>
            <h1 className='my-5 text-5xl font-semibold'>906K</h1>
            <p className='text-gray-300'>46% more than last month</p>
          </section>
           <section  className='border-1 md:border-none p-6 md:p-0 rounded-md md:rounded-none mb-4'>
            <p className='text-gray-300'>Active Apps</p>
            <h1 className='my-5 text-5xl font-semibold'>132+</h1>
            <p className='text-gray-300'>31 more will Launch</p>
          </section>
        </div>

         </div>


    
    </div>
  );
};

export default Banner;