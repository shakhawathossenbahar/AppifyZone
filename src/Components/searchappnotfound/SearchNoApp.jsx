import React from "react";

const SearchNoApp = () => {
  return (
    <div className="w-auto sm:w-[768px] md:w-[1024px] lg:w-[1400px] min-h-[60vh] flex flex-col items-center justify-center px-5 lg:px-0 bg-[#F5F5F5]">
      {/* Animated Emoji */}
      <div className="text-7xl mb-5 animate-bounce">😢</div>

      <h1 className="text-4xl sm:text-5xl font-extrabold italic text-red-500 animate-[shake_0.5s_ease-in-out_infinite]">
        OOPS!! APP NOT FOUND
      </h1>

      <p className="text-gray-500 mt-3 max-w-xl text-center animate-fadeIn">
        Sorry, the app you are looking for doesn’t exist in our system. Try
        searching for something else or check back later.
      </p>

      <style>
        {`
          @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            50% { transform: translateX(5px); }
            75% { transform: translateX(-5px); }
          }
          .animate-shake { animation: shake 0.5s ease-in-out infinite; }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .animate-fadeIn { animation: fadeIn 1s ease forwards; }
        `}
      </style>
    </div>
  );
};

export default SearchNoApp;
