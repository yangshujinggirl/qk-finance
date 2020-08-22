import { Rose } from '@antv/g2plot';
import { useState, useEffect } from 'react';
import { YtCard } from 'common';
import './index.less';

const IndexChart=({...props})=>{
  let { data } =props;
  const [plot,setPlot] = useState(null);
  const initChart=()=>{
      let dom = document.getElementById('asset-scale-container');
      if(!dom||data.length==0) {
        return;
      }
      if(plot) {
        plot.changeData(data);
        return;
      }
      const rosePlot = new Rose(dom, {
        forceFit: true,
        radius: 0.8,
        data,
        radiusField: 'value',
        categoryField: 'type',
        colorField: 'type',
        legend:{
          position:'right-center'
        },
        label: {
          visible: true,
          type: 'outer',
          content: (text) => text.value,
        },
      });
      rosePlot.render();
      setPlot(rosePlot);
    }
    useEffect(() => { initChart() },[data]);
    return <div  className="asset-num-container" id="asset-scale-container"></div>
}
export default IndexChart;
