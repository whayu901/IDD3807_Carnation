import React from "react";
import { useParams } from "react-router-dom";

import "./styles.scss";
import { documentTitle } from "../../utils";
import DetailTable from "./detailTable";
import { Card, Filter, Button, Chart } from "../../component";
// type for every parameter
interface Params {
  type: string;
  name: string;
}

const DetailChart = () => {
  const { type, name } = useParams<Params>();
  documentTitle(`brand usage`);

  const exampleData = [
    ["Shanghai", 23.7],
    ["Lagos", 16.1],
    ["Istanbul", 14.2],
    ["Karachi", 14.0],
  ];

  return (
    <div>
      {type === "chart" ? (
        <div>
          <p className="text-title-header">
            Chart {name} Dari {type}
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Filter label="Show By Parent" data={[]} inputLabel="Parent" />
            <Filter label="Show By Child" data={[]} inputLabel="Child" />
            <div style={{ marginRight: 10 }}>
              <Button textBtn="Lihat" />
            </div>
            <Button isOutlined textBtn="Hapus" />
          </div>
          <Card>
            <Chart data={exampleData} typeChart="column" />
          </Card>
        </div>
      ) : (
        <DetailTable name={name} />
      )}
    </div>
  );
};

export default DetailChart;
