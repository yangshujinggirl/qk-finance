import { Liquid } from '@antv/g2plot';
import { YtCard } from 'common';
import './index.less';

class MaxAssetChart extends React.Component{
    componentDidMount() {
      const liquidPlot = new Liquid(document.getElementById('max-asset-container'), {
        min: 0,
        max: 10000,
        value: 8000,
        statistic: {
          adjustColor:true,
          formatter: (value) => ((100 * value) / 10000).toFixed(1) + '%',
        },
        liquidStyle:{
            fill:'#1B53BF',
        }
      });
      liquidPlot.render();
    }
    render() {
      return <YtCard title="单比最大资产占比">
                <div className="max-asset-trend" id="max-asset-container"></div>
              </YtCard>
    }
}
export default MaxAssetChart;
