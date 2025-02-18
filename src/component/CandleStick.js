import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

const CandleStick = () => {
  const options = {
    rangeSelector: {
      selected: 1,
    },
    title: {
      text: "Expence",
    },
    series: [
      {
        type: "candlestick",
        name: "Expence",
        data: [
          // Format: [timestamp, open, high, low, close]
          [1704950400000, 100, 110, 95, 105],
          [1705036800000, 105, 115, 102, 112],
          [1705123200000, 112, 120, 110, 118],
          [1705209600000, 118, 122, 115, 119],
          [1705296000000, 119, 125, 117, 121],
        ],
        tooltip: {
          valueDecimals: 2,
        },
      },
    ],
  };

  return (
    <HighchartsReact
      highcharts={Highcharts}
      constructorType={"stockChart"}
      options={options}
    />
  );
};

export default CandleStick;
