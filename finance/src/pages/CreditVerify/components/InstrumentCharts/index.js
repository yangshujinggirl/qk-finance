import { Gauge } from '@antv/g2plot';
import { YtCard } from 'common';
import './index.less';

class IndexChart extends React.Component{
    componentDidMount() {
      const gaugePlot = new Gauge(document.getElementById('instrument-container'), {
        value: 64,
        min: 0,
        max: 100,
        color: ['rgba(41,85,184,.2)', 'rgba(41,85,184,.5)', 'rgba(41,85,184,.78)', '#2D65E1'],
        range: [0, 25, 50, 75, 100],
        statistic: {
          position: ['50%', '90%'],
          visible: true,
          text: '64\n信用总分',
          color: '#666666',
          size:16
        },
        pivot:{
          thickness:3
        },
        rangeSize:10,
        forceFit:true
      });
      gaugePlot.render();
    }
    render() {
      return <div  className="instrument-container" id="instrument-container"></div>
    }
}
export default IndexChart;
