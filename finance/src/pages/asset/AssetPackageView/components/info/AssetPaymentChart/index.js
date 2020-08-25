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
      const data = [
        { year: '1990', value: 90 },
        { year: '1991', value: 180 },
        { year: '1992', value: 300 },
        { year: '1993', value: 260 },
        { year: '1994', value: 190 },
        { year: '1996', value: 250 },
        { year: '1997', value: 220 },
        { year: '1998', value: 360 },
      ];
      const areaPlot = new Area(document.getElementById('asset-payment-container'), {
        data,
        forceFit:true,
        xField: 'year',
        yField: 'value',
        xAxis: {
          label: {
              visible: false,
          },
        },
        yAxis: {
          min:0,
        },
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
