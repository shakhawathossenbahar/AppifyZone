import React from 'react';
import imgNotfounded from '../../assets/App-Error.png'
import { useNavigate } from 'react-router-dom';

const NoApps = () => {

   const navigate = useNavigate();

  const handleBack = () => {
    navigate('/apps'); 
  };

  return (
    <div className=" w-auto sm:w-[768px] md:w-[1024px] lg:w-[1400px] text-center flex flex-col items-center px-5 lg:px-0 bg-[#F5F5F5]">
      <img src={imgNotfounded} alt="Not Found"  />
      <h1 className="text-4xl font-bold italic">OOPS!! APP NOT FOUND</h1>
      <p className='text-gray-400'>The App you are requesting is not found on our system.  please try another apps</p>

      
      <button onClick={handleBack}  className='btn btn-primary my-5  bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-8'>Go Back</button>
    </div>
  );
};

export default NoApps;<h1>Ami no apps</h1>