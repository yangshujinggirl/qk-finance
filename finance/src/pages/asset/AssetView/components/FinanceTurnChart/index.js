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
      // let data = randomData(10, 10, 500);
      // console.log(data)
      const data = [
            {type: "0", sales: 108},
            {type: "1", sales: 407},
            {type: "2", sales: 302},
            {type: "3", sales: 334},
            {type: "4", sales: 210},
            {type: "5", sales: 322},
            {type: "6", sales: 348},
            {type: "7", sales: 226},
            {type: "8", sales: 263},
            {type: "9", sales: 332}
      ]
      const tinyArea = new TinyArea(document.getElementById('finance-turn-container'), {
        forceFit: true,
        data: data,
        xField: 'sales',
        yField: 'type',
        smooth:true
      });
      tinyArea.render();
    }
    render() {
      return <div  className="asset-dynamicChart-container" id="finance-turn-container"></div>
    }
}
export default AssetDynamicChart;
