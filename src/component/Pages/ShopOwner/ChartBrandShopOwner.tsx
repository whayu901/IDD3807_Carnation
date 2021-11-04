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
    target: 268,
  },
  {
    code: 2,
    target: 99,
  },
  {
    code: 3,
    target: 54,
  },
];

const BrandShopOwner = () => {
  const [dataBrand, setaDataBrand] = useState<any>([]);
  let arrayBrand: any = [];
  React.useEffect(() => {
    async function achievement() {
      setaDataBrand(await achievementByQuest("IDD3718_shopowner", "Brand"));
    }
    achievement();
  }, []);
  for (let i = 0; i < dataBrand.length; i++) {
    let getIndex = FindObject(target, "code", dataBrand[i].code);
    if (getIndex > -1) {
      let percentage: number = (dataBrand[i].y * 100) / target[getIndex].target;
      arrayBrand.push({
        label: dataBrand[i].label,
        count: dataBrand[i].y,
        target: target[getIndex].target,
        y: Math.floor(percentage * 100) / 100,
      });
    }
  }
  const dataBrandShopOwner = achievementToChartsPercentage(arrayBrand);
  return (
    <Card>
      <p className="regular-text">Authorized Shop Chart</p>
      <CustomChartBank data={dataBrandShopOwner} />
    </Card>
  );
};

export default BrandShopOwner;
