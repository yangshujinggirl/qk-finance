import { Line } from '@antv/g2plot';
import { useState, useEffect } from 'react';
import { YtCard } from 'common';
import './index.less';

const IndexChart=({...props})=>{
  let { data } =props;
  const [plot,setPlot] = useState(null);
  const initChart=()=>{
    let dom = document.getElementById('rise-container');
    if(!dom||data.length==0) {
      return;
    }
    if(plot) {
      plot.changeData(data);
      return;
    }
    const linePlot = new Line(dom, {
      padding: 'auto',
      forceFit: true,
      data,
      xField: 'dateNode',
      yField: 'value',
      seriesField: 'type',
      // yAxis: {
      //   tickInterval:15,
      // },
      legend: {
        position: 'top',
        marker:{
          symbol:'circle',
          style:{ r:4 }
        }
      },
      responsive: true,
    });
    linePlot.render();
    setPlot(linePlot);
  }
  useEffect(()=>{ initChart() },[data])
  return <YtCard title="资产增长趋势" className="part-same-shadow mt24">
    <div  className="rise-container" id="rise-container"></div>
  </YtCard>
}
export default IndexChart;
