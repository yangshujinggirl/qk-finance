import { Gauge } from '@antv/g2plot';
import { YtCard } from 'common';
import './index.less';

class IndexChart extends React.Component{
    componentDidMount() {
      const gaugePlot = new Gauge(document.getElementById('asset-verify-container'), {
        forceFit: true,
        value: 64,
        min: 0,
        max: 100,
        range: [0, 25, 50, 75, 100],
        color: ['rgba(41,85,184,.2)', 'rgba(41,85,184,.5)', 'rgba(41,85,184,.78)', '#2D65E1'],
        statistic: {
          position: ['50%', '80%'],
          visible: true,
          text: '64\n验真率',
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
    }
    render() {
      return <div  className="asset-verify-container" id="asset-verify-container"></div>
    }
}
export default IndexChart;
