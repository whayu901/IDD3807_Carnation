import React, { useState } from "react";
import { Card } from "../../../component";
import {
  totalAchievement,
} from "../../../redux/actions/achievement";

const Overview = () => {
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
  });
  const dataPanel = [
    {
      label: "End User",
      y: ((totalEndUser.total * 100) / targetEndUser).toFixed(2),
      color: "#76A43C",
      count: totalEndUser.total,
    },
    {
      label: "Shop Owner",
      y: ((totalShopOwner.total * 100) / targetShopOwner).toFixed(2),
      color: "#95C261",
      count: totalShopOwner.total,
    },
  ];
  return (
    <Card>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <div
          className="header-box"
          style={{
            marginLeft: 20,
            marginRight: 20,
          }}
        >
          <p className="semibold-text" style={{ color: "#59595B" }}>
            Achievement In Total
          </p>
          <span className="bold-text" style={{ color: "#59595B" }}>
            {totalEndUser.total + totalShopOwner.total}
          </span>
        </div>
        {dataPanel.map((panel: any, index: any) => {
          return (
            <div
              className="header-box"
              style={{
                marginLeft: 20,
                marginRight: 20,
              }}
              key={index}
            >
              <p className="semibold-text" style={{ color: panel.color }}>
                {panel.label}
              </p>
              <span
                className="bold-text center"
                style={{
                  color: panel.color,
                }}
              >
                {panel.count}({panel.y}
                <sup>%</sup>)
              </span>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default Overview;
