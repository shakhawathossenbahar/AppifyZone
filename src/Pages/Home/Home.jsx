import React from "react";
import Banner from "../../Components/Banner/Banner";
import Card from "../../Components/card/Card";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const Loaderdata = useLoaderData();
  const data = Loaderdata.slice(0, 8);
  return (
    <div className="bg-[#FAFAFA] py-20 w-full ">
      <Banner></Banner>
      <Card data={data}></Card>
    </div>
  );
};

export default Home;
