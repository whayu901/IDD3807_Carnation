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
  }
];

const ChartCityEndUser = () => {
  const [cityEndUser, setCityEndUser] = useState<any>([]);
  let arrayCity: any = [];
  React.useEffect(() => {
    async function achievement() {
      setCityEndUser(await achievementByQuest("IDD3718_enduser", "Kota"));
    }
    achievement();
  }, []);
  for (let i = 0; i < cityEndUser.length; i++) {
    let getIndex = FindObject(target, "code", cityEndUser[i].code);
    if (getIndex > -1) {
      let percentage: number = (cityEndUser[i].y * 100) / target[getIndex].target;
      arrayCity.push({
        label: cityEndUser[i].label,
        count: cityEndUser[i].y,
        target: target[getIndex].target,
        y: Math.floor(percentage * 100) / 100,
      });
    }
  }
  const cityEndUserEndUser = achievementToChartsPercentage(arrayCity);
  return (
    <Card>
      <p className="regular-text">City</p>
      <CustomChartBank data={cityEndUserEndUser} />
    </Card>
  );
};

export default ChartCityEndUser;
