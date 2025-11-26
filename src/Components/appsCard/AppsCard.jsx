import React from "react";
import downloadImg from "../../assets/icon-downloads.png";
import ratingImg from "../../assets/fi_1828884.png";
import { Link } from "react-router-dom";

const AppsCard = ({ Card }) => {
  // console.log(Card);
  const { image, title, ratingAvg, downloads, description, id } = Card;
  return (
    <Link to={`/singlecard/${id}`}>
      <div className="p-3 bg-white w-full md:w-auto lg:w-[348px] flex flex-col justify-center text-center items-center cursor-pointer border-b-1 sm:border-0 hover:scale-110 transition ease-in-out">
        <img
          className="h-24 md:h-[316px]  w-24 md:w-auto rounded-md"
          src={image}
          alt=""
        />
        <h1 className="py-2 font-medium ">
          {title}: {description}
        </h1>
        <div className="flex w-auto md:w-full justify-between gap-4">
          <span className="bg-[#F1F5E8] rounded-xl px-3 py-1 text-sm text-[#00D390] flex justify-center gap-1 text-center">
            <img className="h-4 " src={downloadImg} alt="downloadImg" />
            {downloads}
          </span>
          <span className="bg-[#FFF0E1] rounded-xl px-3 py-1 text-sm text-[#FF8811] flex justify-center gap-1 text-center">
            <img className="h-4" src={ratingImg} alt="" />
            {ratingAvg}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default AppsCard;
