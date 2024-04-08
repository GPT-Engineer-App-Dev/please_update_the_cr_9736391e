import React, { useEffect, useRef } from "react";
import { createChart } from "lightweight-charts";

const CryptoChart = ({ data }) => {
  const chartContainerRef = useRef();

  useEffect(() => {
    if (data && data.length > 0) {
      const chart = createChart(chartContainerRef.current, { width: chartContainerRef.current.clientWidth, height: 300 });
      const lineSeries = chart.addLineSeries();

      lineSeries.setData(data.map((d) => ({ time: d.time / 1000, value: parseFloat(d.close) })));

      return () => chart.remove();
    }
  }, [data]);

  return <div ref={chartContainerRef} />;
};

export default CryptoChart;
