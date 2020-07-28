import { Rose } from '@antv/g2plot';
import { YtCard } from 'common';
import './index.less';

class IndexChart extends React.Component{
    componentDidMount() {
      const data = [
        {
          type: '50万以下',
          value: 27,
        },
        {
          type: '50万-100万',
          value: 25,
        },
        {
          type: '100万-300万',
          value: 18,
        },
        {
          type: '300万以上',
          value: 30,
        },
      ];

      const rosePlot = new Rose(document.getElementById('asset-scale-container'), {
        forceFit: true,
        radius: 0.8,
        data,
        radiusField: 'value',
        categoryField: 'type',
        colorField: 'type',
        legend:{
          position:'right-top'
        },
        label: {
          visible: true,
          type: 'outer',
          content: (text) => text.value,
        },
      });

      rosePlot.render();
    }
    render() {
      return <div  className="asset-num-container" id="asset-scale-container"></div>
    }
}
export default IndexChart;
