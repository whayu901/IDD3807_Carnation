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
    target: 556,
  },
  {
    code: 2,
    target: 556,
  },
  {
    code: 3,
    target: 278,
  },
];

const ChartRC1EndUser = () => {
  const [dataRC1, setaDataRC1] = useState<any>([]);
  let arrayRC1: any = [];
  React.useEffect(() => {
    async function achievement() {
      setaDataRC1(await achievementByQuest("IDD3718_enduser", "RC1"));
    }
    achievement();
  }, []);
  for (let i = 0; i < dataRC1.length; i++) {
    let getIndex = FindObject(target, "code", dataRC1[i].code);
    if (getIndex > -1) {
      let percentage: number = (dataRC1[i].y * 100) / target[getIndex].target;
      arrayRC1.push({
        label: dataRC1[i].label,
        count: dataRC1[i].y,
        target: target[getIndex].target,
        y: Math.floor(percentage * 100) / 100,
      });
    }
  }
  const dataRC1EndUser = achievementToChartsPercentage(arrayRC1);
  return (
    <Card>
      <p className="regular-text">Usership Chart</p>
      <CustomChartBank data={dataRC1EndUser} />
    </Card>
  );
};

export default ChartRC1EndUser;
