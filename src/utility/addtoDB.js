const getStoredApps = () => {
  const storeApps = localStorage.getItem("InstalledApps");
  if (storeApps) {
    const storeAppsData = JSON.parse(storeApps);
    return storeAppsData
  }
  else {
    return [];
  }
}

const addToStoreDB = (app) => {
  const storeAppsData = getStoredApps();
  if (storeAppsData.includes(app)) {
    alert("You have already installed the apps");

  }
  else {
    storeAppsData.push(app);
    const data = JSON.stringify(storeAppsData);
    localStorage.setItem('InstalledApps', data)
  }
}

export { addToStoreDB }