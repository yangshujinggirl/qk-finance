import { Donut } from '@antv/g2plot';
import { useState, useEffect } from 'react';
import { YtCard } from 'common';
import './index.less';

const AssetDistributeChart=({...props})=>{
  const { data } =props;
  const [plot,setPlot] = useState(null);
  const initChart=()=> {
    const dom = document.getElementById('asset-dis-container');
    if(!dom||data.length==0) {
      return;
    }
    if(plot) {
      plot.changeData(data);
      return;
    }
    const donutPlot = new Donut(dom, {
      forceFit: true,
      radius: 1,
      padding: 'auto',
      data,
      label: {
        visible: false,
        type: 'inner',
        formatter: (val) => {
          val = val * 100 + '%';
          return val;
        },
      },
      tooltip:{
        formatter: (val,name) => {
          val = val * 100 + '%';
          return {name,value:val};
        },
      },
      angleField: 'percent',
      colorField: 'item',
      color:['#E4E7ED','rgba(41,85,184,.2)','#A8C6DF','#2D65E1','#0093EE'],
      statistic: {
        visible: false,
      },
      legend: {
        position: 'right-center',
        offsetX:10,
        text:{
          formatter: (text,cfg) => {
            // let textMod = `${text}-80%`
            let textMod = `${text}`
            return textMod;
          }
        }

      },
    });

    donutPlot.render();
    setPlot(donutPlot);
  }
  useEffect(()=>{ initChart() },[data])
  return <YtCard title="资产账期分布">
            <div className={`asst-payment-trend ${props.className}`} id="asset-dis-container"></div>
          </YtCard>
}
export default AssetDistributeChart;
