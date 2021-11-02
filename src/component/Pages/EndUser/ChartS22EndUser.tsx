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
    target: 970,
  },
  {
    code: 2,
    target: 420,
  }
];

const ChartS22EndUser = () => {
  const [dataS22, setaDataS22] = useState<any>([]);
  let arrayS22: any = [];
  React.useEffect(() => {
    async function achievement() {
      setaDataS22(await achievementByQuest("IDD3718_enduser", "S22"));
    }
    achievement();
  }, []);
  for (let i = 0; i < dataS22.length; i++) {
    let getIndex = FindObject(target, "code", dataS22[i].code);
    if (getIndex > -1) {
      let percentage: number = (dataS22[i].y * 100) / target[getIndex].target;
      arrayS22.push({
        label: dataS22[i].label,
        count: dataS22[i].y,
        target: target[getIndex].target,
        y: Math.floor(percentage * 100) / 100,
      });
    }
  }
  const dataS22EndUser = achievementToChartsPercentage(arrayS22);
  return (
    <Card>
      <p className="regular-text">S22</p>
      <CustomChartBank data={dataS22EndUser} />
    </Card>
  );
};

export default ChartS22EndUser;
