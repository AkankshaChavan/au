import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const PieChart = () => {
  const options = {
    chart: {
      type: "pie",
    },
    title: {
      text: "Current month Expence",
    },
    series: [
      {
        name: "Current month Expence",
        data: [
          { name: "Expence", y: 40 },
          { name: "Balance", y: 60 },
        ],
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default PieChart;
