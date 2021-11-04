import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Typography } from "@material-ui/core";
// import * as FlexmonsterReact from "react-flexmonster";
import "flexmonster/lib/flexmonster.highcharts.js";
import "flexmonster";
import { documentTitle } from "../../utils";
import {
  Filter,
  Button,
  Loading,
} from "../../component";
import { filterKota } from "../../redux/actions/Filter";
import { ChartRC1EndUser } from "../../component/Pages/EndUser";
import { totalAchievement } from "../../redux/actions/achievement";


function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const EndUser = () => {
  documentTitle("End User");

  let query = useQuery();
  const [kota, setKota] = useState<any>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [total, setTotal] = useState<number>(0);
  const defaultfilter = {
    data: {
      city: query.get("city") !== null ? `${query.get("city")}` : "",
    },
  };

  React.useEffect(() => {
    setLoading(true);
    async function setFilter() {
      setKota(await filterKota("IDD3718_enduser"));
      let a: any = await totalAchievement("IDD3718_enduser")
      setTotal(a.total)
      setLoading(false);
    }
    setFilter();
  }, []);


  return (
    <div style={{ marginTop: 40 }}>
      <b className="text-title-header">End User</b>
      <Typography variant="h6">Total Data = {total}</Typography>
      <form
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <Filter
          name="city"
          label=""
          defaultValue={defaultfilter.data.city}
          data={kota}
          inputLabel="City"
        />

        <div style={{ marginLeft: 20 }}>
          <Button type="submit" textBtn="Lihat" />
        </div>
        <div style={{ marginLeft: 10 }}>
          <Button isOutlined textBtn="Hapus" />
        </div>
      </form>

      {isLoading ? (
        <Loading titleLoading="Mohon Menunggu" />
      ) : (
        <>
          <div className="container-chart">
            <p className="text-title-header">Usership</p>
            <ChartRC1EndUser />
          </div>
        </>
      )}
    </div>
  );
};


export default EndUser;
