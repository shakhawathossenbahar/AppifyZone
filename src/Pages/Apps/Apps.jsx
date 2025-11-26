import React, { Suspense, useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useLoaderData, useLocation } from "react-router-dom";
import AppsCard from "../../Components/appsCard/AppsCard";
import NoApps from "../../Components/appsCard/NoApps";
import Loader from "../../Components/Loader/Loader";
import SearchNoApp from "../../Components/searchappnotfound/SearchNoApp";

const Apps = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const data = useLoaderData();
  const [Cards, setCard] = useState([]);

  useEffect(() => {
    setCard(data);
  }, [data]);

  const [search, setsearch] = useState("");
  const [loading, setloading] = useState(false);
  const term = search.trim().toLowerCase();

  const searchedApps = term
    ? Cards.filter((Card) => Card.title.toLowerCase().includes(term))
    : Cards;
  useEffect(() => {
    if (search.trim() === "") {
      setloading(false);
      return;
    }

    setloading(true);

    const timer = setTimeout(() => {
      setloading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [search]);

  return (
    <div className="bg-[#FAFAFA] mb-10">
      {searchedApps.length > 0 && (
        <>
          <div className="pt-[85px] w-full flex flex-col justify-center text-center px-5">
            <h1 className="text-3xl md:text-5xl font-bold">
              Our All Applications
            </h1>
            <p className="pt-5 pb-10 text-gray-400">
              Explore All Apps on the Market developed by us. We code for
              Millions
            </p>
          </div>
        </>
      )}

      <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row justify-center items-center sm:justify-between my-12 px-5 bg-[#FAFAFA] pt-8">
        <span className="font-semibold pb-3 sm:pb-0">
          ({searchedApps.length}) Apps Found
        </span>

        <div className="flex items-center border border-gray-300 rounded-md px-3 py-1 w-auto md:w-64 bg-white shadow-sm">
          <FiSearch className="text-gray-500 mr-2" />
          <input
            value={search}
            onChange={(e) => setsearch(e.target.value)}
            type="search"
            placeholder="Search Apps"
            className="outline-none w-full text-sm text-gray-700"
          />
        </div>
      </div>

      <Suspense
        fallback={
          <span className="loading loading-bars loading-xl text-center"></span>
        }
      >
        <div className="w-auto md:max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4">
          {loading ? (
            <div className="w-auto sm:w-[768px] md:w-[1024px] lg:w-[1400px]">
              <Loader />
            </div>
          ) : searchedApps.length === 0 ? (
            <SearchNoApp></SearchNoApp>
          ) : (
            searchedApps.map((Card) => <AppsCard key={Card.id} Card={Card} />)
          )}
        </div>
      </Suspense>
    </div>
  );
};

export default Apps;
