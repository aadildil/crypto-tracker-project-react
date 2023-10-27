import convertDate from "./convertDate";

export const makeChartData = (setChartData, prices1, prices2) => {
  if (prices2) {
    setChartData({
      labels: prices1.map((price) => convertDate(price[0])),
      datasets: [
        {
          label:"coin 1",
          data: prices1.map((price) => price[1]),
          borderColor: "rgb(0, 106, 255 )",
          borderWidth: 2,
          fill: false,
          tension: 0.25,
          pointRadius: 0,
          yAxisID:"coin1"
        },
        {
          label:"coin 2",
          data: prices2.map((price) => price[1]),
          borderColor: "#008000",
          borderWidth: 2,
          fill: false,
          tension: 0.25,
          pointRadius: 0,
          yAxisID:"coin2"
        },
      ],
    });
  } else {
    setChartData({
      labels: prices1.map((price) => convertDate(price[0])),
      datasets: [
        {
          data: prices1.map((price) => price[1]),
          borderColor: "rgb(0, 106, 255 )",
          borderWidth: 2,
          fill: true,
          tension: 0.25,
          backgroundColor: prices1
            ? "rgb(0, 106, 255,0.1 )"
            : "rgba(58,128,233,0.1)",
          pointRadius: 2,
        },
      ],
    });
  }
};
