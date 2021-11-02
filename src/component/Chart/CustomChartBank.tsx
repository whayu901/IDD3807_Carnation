import React, { memo } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

interface Props {
  data: any[];
}

const CustomChartBank = ({ data }: Props) => {
  const options: Highcharts.Options = {
    chart: {
      type: "column",
    },
    title: {
      text: "",
    },
    xAxis: {
      crosshair: true,
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
      series: {
        dataLabels: {
          enabled: true,
          formatter: function(){
            return `${this.y}%`
          }
        },
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
    tooltip: {
      formatter: function () {
        return `
          <p><b>${this.series.name}</b></p></br>
          <p>Response: ${data[this.series.index].count}</p><br>
          <p>Percent: ${this.y}%</p><br>
          <p>Target: ${data[this.series.index].target}</p><br>
        `
      },
    },
  };
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default memo(CustomChartBank);
