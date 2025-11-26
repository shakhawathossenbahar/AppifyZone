import React from 'react';
import Nav from '../../Components/Nav/Nav';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../../Components/footer/Footer';
import Loader from '../../Components/Loader/Loader';

const Root = () => {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);

  return (
    <div className="">
      
      <Nav />
      {isNavigating && <Loader />}
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Root;
