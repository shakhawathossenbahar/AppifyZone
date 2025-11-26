import React, { useEffect, useState } from 'react';
import { useLoaderData, useLocation, useParams } from 'react-router-dom';
import downloadLogo from '../../assets/icon-downloads.png'
import RatingLogo from '../../assets/icon-ratings.png'
import ReviwesgLogo from '../../assets/icon-review.png'
  import { ToastContainer, toast } from 'react-toastify';

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LabelList } from 'recharts';


const SingleCard = () => {
 


  // installed or not 

  const [isInstall,setisInstall]=useState(false);

  

 

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  const { id } = useParams();
  const cardId = parseInt(id);
  const data = useLoaderData();


   useEffect(() => {
    const storedApps = localStorage.getItem('InstalledApps');
    if (storedApps) {
      const parsed = JSON.parse(storedApps);
      const alreadyInstalled = parsed.some(app => app.id === cardId);
      if (alreadyInstalled) {
        setisInstall(true);
      }
    }
  }, [cardId]);
  const handleBtn = (app) => {
    const storedApps = localStorage.getItem("InstalledApps");
    let parsed = storedApps ? JSON.parse(storedApps) : [];

    const alreadyExists = parsed.some(storedApp => storedApp.id === app.id);

if (alreadyExists) {
  toast.info("You have already installed this app");
} else {
  parsed.push(app);
  localStorage.setItem("InstalledApps", JSON.stringify(parsed));
  toast.success(`Yahooo🥳!! ${app.title} Installed Successfully👏`);
  setisInstall(true);
    }
  };
  
  
  
  
  
  const cardsArray = Array.isArray(data) ? data : [];
  const singleCardData = cardsArray.find(card => card.id === cardId);
  
  
  
  const parseCount = (countStr) => {
  const num = parseFloat(countStr);
  if (countStr.includes('M')) return num * 1_000_000;
  if (countStr.includes('K')) return num * 1_000;
  return num;
};



  const { image, title, ratingAvg, downloads, description, companyName, size, reviews, ratings, details } = singleCardData;


  const chartData = ratings?.slice().reverse().map(rating => ({
  name: rating.name,
  count: parseCount(rating.count),
  label: rating.count
}));
    
  return (
      <div className=' bg-[#F5F5F5] '>
        {/* Apps Card --1 */}
         <div className='max-w-[1400px] mx-auto my-6 border-b-2 border-gray-300 pb-8 px-7 lg:px-0'>
          <div className='flex flex-col sm:flex-row justify-center sm:justify-start items-center sm:items-start gap-8'>
            <img className='h-40 w-40 lg:w-auto lg:h-80 shadow-xl p-8  bg-white' src={image} alt="" />
            <div >
              
              <div className='w-auto sm:w-3/4 text-center sm:text-start'>
                <h1 className='font-bold text-3xl pb-4'>{title}:{description}</h1>
              <p className='text-gray-500 text-sm'>Devoloped by <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-semibold'>{companyName}</span></p>

              {/* button for sm device */}
              <div className='flex sm:hidden items-center justify-center mt-7 hover:scale-110 transition ease-in-out cursor-pointer'>
               <button
               onClick={() => handleBtn(singleCardData)}
                disabled={isInstall}
                className={`py-3 px-10 rounded-md text-white hover:scale-110 transition ease-in-out cursor-pointer ${
                  isInstall ? 'bg-gray-500 cursor-not-allowed' : 'bg-[#00D390] hover:bg-[#00b87f]'
                }`}
              >
                {isInstall ? 'Installed' : `Install Now (${size} MB)`}
              </button>
             </div>
              </div>
              <div className='border-b-2 border-gray-300 py-3' ></div>
              <div className='flex flex-col  sm:flex-row   items-center sm:items-start justify-items-center sm:justify-items-start  gap-16 pt-2'>
                 <section className='border-1 border-dashed border-gray-400 sm:border-0 p-4 flex flex-col items-center sm:items-start'>
                  <img src={downloadLogo} alt="" />
                  <p>Downloads</p>
                  <h1 className='font-bold text-4xl'>{downloads}</h1>
                </section>

                  <section className='border-1 border-dashed border-gray-400 sm:border-0 p-4 flex flex-col items-center sm:items-start'>
                  <img src={RatingLogo} alt="" />
                  <p>Average Ratings</p>
                  <h1 className='font-bold text-4xl'>{ratingAvg}</h1>
                </section>

                  <section className='border-1 border-dashed border-gray-400 sm:border-0 p-4 flex flex-col items-center sm:items-start'>
                  <img src={ReviwesgLogo} alt="" />
                  <p>Total Reviews</p>
                  <h1 className='font-bold text-4xl'>{reviews}</h1>
                </section>
              </div>

              {/* Install button */}
             <div className='hidden sm:block'>
               <button
                onClick={() => handleBtn(singleCardData)}
                disabled={isInstall}
                className={`py-3 px-10 rounded-md text-white hover:scale-110 transition ease-in-out cursor-pointer ${
                  isInstall ? 'bg-gray-500 cursor-not-allowed' : 'bg-[#00D390] hover:bg-[#00b87f]'
                }`}
              >
                {isInstall ? 'Installed' : `Install Now (${size} MB)`}
              </button>
             </div>
            </div>
           
          </div>
         </div>

         {/* Graph */}
        {/* Ratings Graph */}
<div className='w-auto lg:max-w-[1400px] mx-auto my-6 border-b-2 border-gray-300 pb-8 px-7 lg:px-0'>
  <h2 className='text-xl font-bold mb-4'>Ratings</h2>
  <ResponsiveContainer width="100%" height={300}>
    <BarChart
      data={chartData}
      layout="vertical"
      margin={{ top: 20, right: 40, left: 0, bottom: 20 }}
    >
      <XAxis type="number" tickFormatter={(value) => (value / 1_000_000) + 'M'} />
      <YAxis dataKey="name" type="category" width={80} />
      <Tooltip formatter={(value) => value.toLocaleString()} />
      <Bar dataKey="count" fill="#FF9900" radius={[0, 10, 10, 0]}>
        <LabelList dataKey="label" position="right" />
      </Bar>
    </BarChart>
  </ResponsiveContainer>
</div>


         {/* details */}

         <div className='max-w-[1400px] mx-auto my-6 px-7 lg:px-0'>
         <h2 className='py-7 font-bold'>Description:</h2>
         <p>{details}</p>
         </div>

             <ToastContainer
             position="top-center"     
              autoClose={2000}          
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover />
      </div>
      

  );
};

export default SingleCard;