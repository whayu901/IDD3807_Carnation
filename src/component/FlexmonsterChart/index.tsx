import React from "react";
import * as FlexmonsterReact from "react-flexmonster";

interface Props {
  dataSource?: any;
  slice?: any;
  options?: any;
  formats?: any;
  version?: any;
  creationDate?: any;
  reportComplete?: () => void;
  toolbar?: boolean;
  height?: number;
}

const FlexmonsterChart = ({
  dataSource,
  slice,
  options,
  formats,
  version,
  creationDate,
  reportComplete,
  height,
}: Props) => {
  const report = {
    dataSource: dataSource,
    slice: slice,
    options: options,
    formats: formats,
    version: version,
    creationDate: creationDate,
  };
  return (
    <FlexmonsterReact.Pivot
      toolbar={false}
      componentFolder="https://cdn.flexmonster.com/"
      width="100%"
      report={report}
      reportcomplete={reportComplete}
      height={height}
    />
  );
};

export default FlexmonsterChart;
