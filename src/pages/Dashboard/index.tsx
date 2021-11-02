import React, { useState } from "react";

import {
  Loading,
} from "../../component";
import { documentTitle } from "../../utils";
import { ChartCityEndUser, ChartCityShopOwner, ChartPanel, Overview } from "../../component/Pages/Dashboard";
import "../styles.scss";

const Dashboard = () => {
  documentTitle("My Dashboard");
  const [isLoading, setLoading] = useState<boolean>(false);
  
  React.useEffect(() => {
    setLoading(true);
    async function achievement() {
      setLoading(false);
    }
    achievement();
  }, []);
  return (
    <div>
      {isLoading ? (
        <Loading titleLoading="Mohon Menunggu" />
      ) : (
        <div>
          <div className="container-chart">
            <p className="text-title-header">Overview</p>
            <Overview />

            <p className="text-title-header">Achievement</p>
            <ChartPanel />
          </div>
          <p className="text-title-header">End User</p>
          <ChartCityEndUser />
          <p className="text-title-header">Shop Owner</p>
          <ChartCityShopOwner />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
