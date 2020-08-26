import { Chart } from '@antv/g2';
  import { Area } from '@antv/g2plot';
  import { useState, useEffect } from 'react';
import { YtCard } from 'common';
import { GetRealDayApi } from 'api/asset/AssetPackageInfo';
import './index.less';

const IndexChart=({...props})=>{
  const initChart=()=>{
    GetRealDayApi({ packetId:props.packetId })
    .then((res)=> {
      let { data } =res;
      console.log(data)
      const areaPlot = new Area(document.getElementById('asset-payment-container'), {
        data,
        forceFit:true,
        xField: 'date',
        yField: 'avgRealDay',
        yAxis: { min:0,},
        color:'#26C1C9',
        areaStyle:{
          fill:'#26C1C9'
        }
      });
      areaPlot.render();
    })
  }
  useEffect(()=>{ initChart() },[])
  return <YtCard title="单周内资产账期(天)">
            <div className="asset-payment" id="asset-payment-container"></div>
         </YtCard>
}
export default IndexChart;
