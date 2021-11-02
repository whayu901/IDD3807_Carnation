import React, { useState } from "react";
import { Card, CustomChartBank } from "../../../component";
import {
  achievementByQuest,
  achievementToChartsPercentage,
} from "../../../redux/actions/achievement";

import { FindObject } from "../../../utils/customFunc";
const target = [
    {
      code: 1,
      target: 100,
    },
    {
      code: 2,
      target: 100,
    },
    {
      code: 3,
      target: 100,
    },
    {
      code: 4,
      target: 100,
    },
    {
      code: 5,
      target: 100,
    },
    {
      code: 6,
      target: 100,
    },
    {
      code: 7,
      target: 100,
    },
    {
      code: 8,
      target: 100,
    },
    {
      code: 9,
      target: 100,
    },
    {
      code: 10,
      target: 100,
    },
    {
      code: 11,
      target: 100,
    },
    {
      code: 12,
      target: 100,
    },
    {
      code: 13,
      target: 100,
    },
    {
      code: 14,
      target: 100,
    },
    {
      code: 15,
      target: 100,
    },
    {
      code: 16,
      target: 100,
    },
    {
      code: 17,
      target: 100,
    },
    {
      code: 18,
      target: 100,
    },
    {
      code: 19,
      target: 100,
    },
    {
      code: 20,
      target: 100,
    },
    {
      code: 21,
      target: 100,
    },
    {
      code: 22,
      target: 100,
    },
    {
      code: 23,
      target: 100,
    },
    {
      code: 24,
      target: 100,
    },
    {
      code: 25,
      target: 100,
    }
  ];

const ChartCityShopOwner = () => {
  const [cityShopOwner, setCityShopOwner] = useState<any>([]);
  let arrayCity: any = [];
  React.useEffect(() => {
    async function achievement() {
      setCityShopOwner(await achievementByQuest("IDD3718_shopowner", "Kota"));
    }
    achievement();
  }, []);
  for (let i = 0; i < cityShopOwner.length; i++) {
    let getIndex = FindObject(target, "code", cityShopOwner[i].code);
    if (getIndex > -1) {
      let percentage: number = (cityShopOwner[i].y * 100) / target[getIndex].target;
      arrayCity.push({
        label: cityShopOwner[i].label,
        count: cityShopOwner[i].y,
        target: target[getIndex].target,
        y: Math.floor(percentage * 100) / 100,
      });
    }
  }
  const cityShopOwnerShopOwner = achievementToChartsPercentage(arrayCity);
  return (
    <Card>
      <p className="regular-text">City</p>
      <CustomChartBank data={cityShopOwnerShopOwner} />
    </Card>
  );
};

export default ChartCityShopOwner;
