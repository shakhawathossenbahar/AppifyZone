import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../../Components/Loader/Loader';
import downloadImg from '../../assets/icon-downloads.png';
import ratingImg from '../../assets/fi_1828884.png';

const Installation = () => {
  const { pathname } = useLocation();

  const [installed, setInstalled] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState('');

  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  
  useEffect(() => {
  const timer = setTimeout(() => { 
  const savedApps = localStorage.getItem('InstalledApps');
  if (savedApps) setInstalled(JSON.parse(savedApps));
  setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Convert download  numbers
  const convertToNumber = (value) => {
    if (!value) return 0;
    const num = parseFloat(value);
    if (value.toUpperCase().includes('B')) return num * 1_000_000_000;
    if (value.toUpperCase().includes('M')) return num * 1_000_000;
    if (value.toUpperCase().includes('K')) return num * 1_000;
    return num;
  };

  
  const handleSort = (type) => {
    setSortOrder(type);
    let sortedApps = [...installed];
    if (type === 'High-Low') {
      sortedApps.sort((a, b) => convertToNumber(b.downloads) - convertToNumber(a.downloads));
    } else if (type === 'Low-High') {
      sortedApps.sort((a, b) => convertToNumber(a.downloads) - convertToNumber(b.downloads));
    }
    setInstalled(sortedApps);
  };

  
  const handleUninstall = (id) => {
    const appToRemove = installed.find(app => app.id === id);
    const updatedApps = installed.filter(app => app.id !== id);
    localStorage.setItem('InstalledApps', JSON.stringify(updatedApps));
    setInstalled(updatedApps);

    toast(`${appToRemove.title} uninstalled from your device`, {
      toastId: `uninstall-${appToRemove.id}-${Date.now()}`,
    });
  };

  
  if (loading) return <Loader />;

  return (
    <div className="max-w-[1400px] mx-7 lg:mx-auto my-10 min-h-max">
      
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      
      {installed.length === 0 ? (
        <div className="flex justify-center items-center h-[70vh]">
          <h2 className="text-2xl text-center px-2 text-gray-500 font-semibold">
            No Installed Apps Found 😢
          </h2>
        </div>
      ) : (
        <>
          
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between mb-2">
            <h1 className="text-2xl font-semibold">{installed.length} Apps Found</h1>

            <div className="dropdown dropdown-start">
              <div tabIndex={0} role="button" className="btn m-1 w-30">
                {sortOrder ? sortOrder : 'Sort ⬇️'}
              </div>
              <ul
                tabIndex="-1"
                className="dropdown-content menu bg-base-100 rounded-box z-1 text-center p-2 shadow-sm"
              >
                <li>
                  <a onClick={() => handleSort('High-Low')}>🔽 High to Low</a>
                </li>
                <li>
                  <a onClick={() => handleSort('Low-High')}>🔼 Low to High</a>
                </li>
              </ul>
            </div>
          </div>

          
      {installed.map((app,index) => (
        <div key={app.id?? index} className="card bg-base-100 shadow-sm mb-7">
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center text-center sm:text-start py-6 px-3.5">
            <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start">
              <div>
                <img className="w-20" src={app.image} alt="App" />
              </div>
              <div>
                <h1 className="font-bold pb-3">
                  {app.title}: {app.description}
                </h1>
                <div className="flex justify-center sm:justify-start items-center gap-2.5">
                  <section className="flex gap-1.5 items-center">
                    <img className="w-6 h-5" src={downloadImg} alt="downloads" />
                    <p>{app.downloads}</p>
                  </section>
                  <section className="flex gap-1.5 items-center">
                    <img className="w-5 h-5" src={ratingImg} alt="rating" />
                    <p>{app.ratingAvg}</p>
                  </section>
                  <section>
                    <p>{app.size}MB</p>
                  </section>
                </div>
              </div>
            </div>

      <button
        onClick={() => handleUninstall(app.id)}
        className="btn text-white bg-[#00D390] mt-3 sm:mt-0"
      >
        Uninstall
      </button>
          </div>
        </div>
      ))}
        </>
      )}
    </div>
  );
};

export default Installation;
