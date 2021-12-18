import ChartBar from "./ChartBar";

import "./Chart.css";

const Chart = (props) => {

  const dataPointValues = props.dataPoints.map(datapoint => datapoint.value);
  const totalMax = Math.max(...dataPointValues);
  console.log(totalMax);
  return (
    <div className="chart">
      {props.dataPoints.map((datapoint) => (
        <ChartBar
          value={datapoint.value}
          maxValue={totalMax}
          label={datapoint.label} 
          key ={datapoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
