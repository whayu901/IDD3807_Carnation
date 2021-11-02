import React, { memo } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

interface Props {
  data: any[];
  typeChart: any;
}

const Chart = ({ data, typeChart }: Props) => {
  const options: Highcharts.Options = {
    title: {
      text: "",
    },
    xAxis: {
      categories: ["Jakarta", "Bandung", "Surabaya", "Medan", "Malang"],
      crosshair: true,
    },
    colors: [
      "#75A43D",
      "#95C261",
      "#3bcbb2",
      "#F5A149",
      "#FFBE64",
      "#fbc7c3",
      "#2c3d63",
      "#2e2249",
    ],
    series: [
      {
        name: "Jumlah",
        type: typeChart,
        data: data,
      },
      {
        name: "Jumlah",
        type: typeChart,
        data: data,
      },
      {
        name: "Jumlah",
        type: typeChart,
        data: data,
      },
      {
        name: "Jumlah",
        type: typeChart,
        data: data,
      },
    ],
    // customize css
    plotOptions: {
      bar: {
        borderRadius: 5,
      },
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        // showInLegend: true,
      },
      column: {
        borderRadius: 5,
      },
    },
    responsive: {
      rules: [
        {
          condition: {
            minWidth: 400,
          },
        },
      ],
    },
  };
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default memo(Chart);
