import * as echarts from "echarts/core";
import { GridComponent, GridComponentOption } from "echarts/components";
import { LineChart, LineSeriesOption } from "echarts/charts";
import { UniversalTransition } from "echarts/features";
import { SVGRenderer } from "echarts/renderers";
import { useCallback, useEffect, useRef } from "react";

echarts.use([GridComponent, LineChart, SVGRenderer, UniversalTransition]);

type EChartsOption = echarts.ComposeOption<
  GridComponentOption | LineSeriesOption
>;

const option: EChartsOption = {
  xAxis: {
    type: "category",
    data: ["春", "夏", "秋", "冬"],
  },
  yAxis: {
    min: 500,
    max: 18000,
    splitLine: { show: false },
    type: "value",
    axisTick: { show: false },
    axisLine: { show: false },
  },
  series: [
    {
      data: [1372, 13485, 14916, 17817],
      type: "line",
      smooth: true,
    },
  ],
};
const Chart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef<any>(null);
  function setChartInstance() {
    const renderedInstance: any = echarts.getInstanceByDom(
      chartRef.current as unknown as HTMLElement
    );
    if (!chartInstance.current) {
      if (renderedInstance) {
        chartInstance.current = renderedInstance;
      } else {
        chartInstance.current = echarts.init(
          chartRef.current as unknown as HTMLElement
        );
      }
    }
  }
  const renderChart = useCallback(() => {
    console.log(chartRef.current);
    setChartInstance();
    chartInstance.current.setOption({ ...option });
  }, []);
  useEffect(() => {
    renderChart();
  }, [renderChart]);

  useEffect(() => {
    function handleResize() {
      chartInstance && chartInstance.current && chartInstance.current.resize();
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });
  return (
    <div>
      <div style={{ width: "420px", height: "300px" }} ref={chartRef}></div>
    </div>
  );
};

export default Chart;
