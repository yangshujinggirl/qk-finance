import { Rose } from '@antv/g2plot';
import { useState, useEffect } from 'react';
import { YtCard } from 'common';
import { GetTageChartApi } from 'api/asset/AssetView';

import './index.less';

const IndexChart=({...props})=>{
  const initChart=()=>{
    GetTageChartApi({enterpriseId:props.enterpriseId})
    .then((res)=> {
      let { percentageOfAssetSizeMap } =res.data;
      let data=[
        {
          type:'0-5000',
          value:percentageOfAssetSizeMap.zeroFiveThousand,
        },{
          type:'5000-2万',
          value:percentageOfAssetSizeMap.fiveThousandTwentyThousand,
        },{
          type:'2万-5万',
          value:percentageOfAssetSizeMap.twentyFiftyThousand,
        },{
          type:'5万以上',
          value:percentageOfAssetSizeMap.fiftyThousand,
        }]
      let dom = document.getElementById('asset-scale-container');
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
    })
  }
  useEffect(() => { initChart() },[]);
  return <YtCard title="资产规模">
          <div  className="asset-num-container" id="asset-scale-container"></div>
        </YtCard>
}
export default IndexChart;
