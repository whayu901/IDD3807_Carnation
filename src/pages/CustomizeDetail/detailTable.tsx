import React from "react";
import * as FlexmonsterReact from "react-flexmonster";

import "./styles.scss";
import { Card, Filter, Button } from "../../component";

interface Props {
  type?: string;
  name?: string;
}

const DetailTable = ({ type, name }: Props) => {
  return (
    <div>
      <p className="text-title-header">Table {name}</p>
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
        <FlexmonsterReact.Pivot
          toolbar={true}
          componentFolder="https://cdn.flexmonster.com/"
          width="100%"
          report="http://survey.kadence.co.id:9999/api/IDD3658/data/B5b/slice"
          licenseKey="Z77O-XACJ5D-3H162Z-0Q0O6N"
        />
      </Card>
    </div>
  );
};

export default DetailTable;
