import React from "react";
import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/footer/Footer";
import img from "../../assets/error-404.png";
import { Navigate, useNavigate } from "react-router-dom";

const Error = () => {
  const Navigate = useNavigate();

  const handleBack = () => {
    Navigate("/");
  };
  return (
    <>
      <Nav></Nav>
      <div className=" w-auto text-center flex flex-col items-center px-4 md:px-8 lg:px-12 bg-[#F5F5F5]">
        <img src={img} alt="Not Found" />
        <h1 className="text-4xl font-bold italic">Oops, page not found!</h1>
        <p className="text-gray-400">
          The page you are looking for is not available.
        </p>

        <button
          onClick={handleBack}
          className="btn btn-primary my-5  bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-8"
        >
          Go Back!
        </button>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Error;
