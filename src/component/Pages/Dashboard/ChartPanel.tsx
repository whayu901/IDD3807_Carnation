import React, { useState } from "react";
import { Card, ColumnChart } from "../../../component";
import {
  achievementToCharts,
  totalAchievement,
} from "../../../redux/actions/achievement";

const ChartPanel = () => {
  const [totalEndUser, setTotalEndUser] = useState<any>([]);
  const [totalShopOwner, setTotalShopOwner] = useState<any>([]);
  const targetEndUser = 1390;
  const targetShopOwner = 451;
  React.useEffect(() => {
    async function achievement() {
      setTotalEndUser(await totalAchievement("IDD3718_enduser"));
      setTotalShopOwner(await totalAchievement("IDD3718_shopowner"));
    }
    achievement();
  }, []);
  const percentShopOwner: number = (totalShopOwner.total * 100) / targetShopOwner
  const percentEndUser: number = (totalEndUser.total * 100) / targetEndUser
  const dataPanel = [
    {
      label: "End User",
      y: Math.floor(percentEndUser*100) / 100,
      color: "#76A43C",
      count: totalEndUser.total,
    },
    {
      label: "Shop Owner",
      y: Math.floor(percentShopOwner*100) / 100,
      color: "#95C261",
      count: totalShopOwner.total,
    },
  ];
  const totalDataPanel = achievementToCharts(dataPanel);
  return (
    <Card>
      <p className="regular-text">Achievement by City</p>
      <ColumnChart data={totalDataPanel} />
    </Card>
  );
};

export default ChartPanel;
