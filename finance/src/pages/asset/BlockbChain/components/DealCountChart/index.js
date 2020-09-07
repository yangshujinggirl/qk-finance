import { Line } from '@antv/g2plot';
import { useState, useEffect } from 'react';
import { GetDealApi } from 'api/asset/BlockbChain';
import { YtCard } from 'common';
import './index.less';

const IndexChart=({...props})=>{
    const initChart=()=> {
      GetDealApi()
      .then((res)=> {
        let { data } =res;

        data = data.map((el)=> {
          let item={};
          item.year = el[2];
          item.value = el[1];
          return item;
        })
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
