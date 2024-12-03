import React from 'react'
import ReactECharts from 'echarts-for-react'
import * as echarts from 'echarts/core'
import {
  GridComponent,
  TooltipComponent,
  VisualMapComponent
} from 'echarts/components'
import { HeatmapChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'

echarts.use([
  GridComponent,
  TooltipComponent,
  VisualMapComponent,
  HeatmapChart,
  CanvasRenderer
])

// Generate mock data for heatmaps
function generateHeatmapData(rows: number, cols: number) {
  const data = []
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      data.push([i, j, Math.random() * 100])
    }
  }
  return data
}

const heatmapData1 = generateHeatmapData(10, 10)
const heatmapData2 = generateHeatmapData(10, 5)
const heatmapData3 = generateHeatmapData(1, 10)

const HeatmapComponent: React.FC = () => {
  const option = {
    tooltip: {
      position: 'top'
    },
    grid: [
      // Main heatmap grid
      {
        left: '5%',
        top: '5%',
        width: '60%',
        height: '80%'
      },
      // Right small heatmap grid
      {
        left: '66%',
        top: '5%',
        width: '15%',
        height: '80%'
      },
      // Bottom heatmap grid
      {
        left: '5%',
        top: '87%',
        width: '60%',
        height: '10%'
      }
    ],
    xAxis: [
      // Main heatmap X axis
      {
        gridIndex: 0,
        type: 'category',
        data: Array.from({ length: 10 }, (_, i) => i),
        splitArea: { show: true },
        axisLabel: { show: false }
      },
      // Right heatmap X axis
      {
        gridIndex: 1,
        type: 'category',
        data: Array.from({ length: 5 }, (_, i) => i),
        splitArea: { show: true },
        axisLabel: { show: false }
      },
      // Bottom heatmap X axis
      {
        gridIndex: 2,
        type: 'category',
        data: Array.from({ length: 10 }, (_, i) => i),
        splitArea: { show: true },
        axisLabel: { show: false }
      }
    ],
    yAxis: [
      // Main heatmap Y axis
      {
        gridIndex: 0,
        type: 'category',
        data: Array.from({ length: 10 }, (_, i) => i),
        splitArea: { show: true }
      },
      // Right heatmap Y axis
      {
        gridIndex: 1,
        type: 'category',
        data: Array.from({ length: 10 }, (_, i) => i),
        splitArea: { show: true }
      },
      // Bottom heatmap Y axis
      {
        gridIndex: 2,
        type: 'category',
        data: ['Row'], // Single row for this grid
        splitArea: { show: true }
      }
    ],
    visualMap: {
      min: 0,
      max: 100,
      calculable: false,
      inRange: {
        color: [
          '#313695',
          '#4575b4',
          '#74add1',
          '#abd9e9',
          '#e0f3f8',
          '#ffffbf',
          '#fee090',
          '#fdae61',
          '#f46d43',
          '#d73027',
          '#a50026'
        ]
      },
      text: ['High', 'Low'],
      orient: 'horizontal',
      left: 'center',
      bottom: '5%',
      show: false // Hide the visualMap
    },
    series: [
      // Main heatmap
      {
        name: 'Main Heatmap',
        type: 'heatmap',
        data: heatmapData1,
        xAxisIndex: 0,
        yAxisIndex: 0,
        emphasis: { focus: 'series' }
      },
      // Right heatmap
      {
        name: 'Right Heatmap',
        type: 'heatmap',
        data: heatmapData2,
        xAxisIndex: 1,
        yAxisIndex: 1,
        emphasis: { focus: 'series' }
      },
      // Bottom heatmap
      {
        name: 'Bottom Heatmap',
        type: 'heatmap',
        data: heatmapData3,
        xAxisIndex: 2,
        yAxisIndex: 2,
        emphasis: { focus: 'series' }
      }
    ]
  }

  return (
    <ReactECharts
      option={option}
      notMerge={true}
      lazyUpdate={true}
      style={{ height: '150px', width: '320px' }}
      echarts={echarts}
    />
  )
}

export default HeatmapComponent
