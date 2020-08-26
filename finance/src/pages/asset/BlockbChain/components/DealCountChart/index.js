import { Line } from '@antv/g2plot';
import { useState, useEffect } from 'react';
import { GetDealApi } from 'api/asset/BlockbChain';
import { YtCard } from 'common';
import './index.less';

const IndexChart=({...props})=>{
    const initChart=()=> {
      GetDealApi()
      .then((res)=> {
        const data = [
          { year: '1991', value: 3 },
          { year: '1992', value: 4 },
          { year: '1993', value: 3.5 },
          { year: '1994', value: 5 },
          { year: '1995', value: 4.9 },
          { year: '1996', value: 6 },
          { year: '1997', value: 7 },
          { year: '1998', value: 9 },
          { year: '1999', value: 13 },
        ];
        const linePlot = new Line(document.getElementById('deal-count-container'), {
          forceFit: true,
          data,
          padding: 'auto',
          xField: 'year',
          yField: 'value',
        });
        linePlot.render();
      })
    }
    useEffect(()=>{ initChart() },[]);
    return <YtCard title="交易总数" className="part-same-shadow">
              <div className="deal-count-chart" id="deal-count-container"></div>
           </YtCard>
}
export default IndexChart;
