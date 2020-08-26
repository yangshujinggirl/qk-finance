import { Gauge } from '@antv/g2plot';
import { useState, useEffect } from 'react';
import { YtCard } from 'common';
import './index.less';

const IndexChart=({...props})=>{
  let { data } =props;
  const [plot,setPlot] = useState(null);
  const initChart=()=>{
    let dom = document.getElementById('asset-verify-container');
    if(!dom||!data) {
      return;
    }
    if(plot) {
      plot.changeData(data);
      return;
    }
    console.log(data)
    const gaugePlot = new Gauge(dom, {
      forceFit: true,
      value: Number(data),
      min: 0,
      max: 100,
      range: [0, 25, 50, 75, 100],
      color: ['rgba(41,85,184,.2)', 'rgba(41,85,184,.5)', 'rgba(41,85,184,.78)', '#2D65E1'],
      statistic: {
        position: ['50%', '80%'],
        visible: true,
        text: `${data}\n验真率`,
        color: '#666666',
      },
      pivot:{
        thickness:3,
        pointer:{
          style:{
            fill:"#2D65E1"
          }
        }
      },
    });
    gaugePlot.render();
    setPlot(gaugePlot);
  }
  useEffect(() => { initChart() },[data]);
  return <div  className="asset-verify-container" id="asset-verify-container"></div>
}
export default IndexChart;
