import React, { memo } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

interface Props {
  data: any[];
}

const ColumnChart = ({ data }: Props) => {
  const options: Highcharts.Options = {
    chart: {
      type: "column",
    },
    title: {
      text: "",
    },
    xAxis: {
      crosshair: true
    },
    colors: [
      "#75A43D",
      "#95C261",
      "#3bcbb2",
      "#F5A149",
      "#FFBE64",
      "#FFBE64",
      "#2c3d63",
      "#2e2249",
    ],
    series: data,
    // customize css
    plotOptions: {
      bar: {
        borderRadius: 5
      },
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        // showInLegend: true,
      },
      column: {
        borderRadius: 5,
      },
      series: {
        dataLabels: {
          enabled: true,
          formatter: function(){
            return `${this.y}`
          }
        }
      }
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

export default memo(ColumnChart);
