import { TinyArea } from '@antv/g2plot';

import { YtCard } from 'common';
import './index.less';

class AssetDynamicChart extends React.Component{
    componentDidMount() {
      function randomData(num, max, min) {
        const data = [];
        for (let i = 0; i < num; i++) {
          data.push({ type: String(i), sales: min + Math.random() * (max - min) });
        }
        return data;
      }
      let data = randomData(30, 10, 500);
      const tinyArea = new TinyArea(document.getElementById('tinyAear-container'), {
        forceFit: true,
        data: data,
        xField: 'sales',
        yField: 'type',
        // smooth:true
      });
      tinyArea.render();
    }
    render() {
      return <div  className="tinyAear-container" id="tinyAear-container"></div>
    }
}
export default AssetDynamicChart;
