import { TinyColumn } from '@antv/g2plot';
import { YtCard } from 'common';
import './index.less';

class AssetDynamicChart extends React.Component{
    componentDidMount() {
      const data = [
        {
          type: '1月',
          sales: 38,
        },
        {
          type: '2月',
          sales: 52,
        },
        {
          type: '3月',
          sales: 61,
        },
        {
          type: '4月',
          sales: 70,
        },
        {
          type: '5月',
          sales: 48,
        },
        {
          type: '6月',
          sales: 38,
        },
        {
          type: '7月',
          sales: 48,
        },
        {
          type: '8月',
          sales: 38,
        },
        {
          type: '8月',
          sales: 28,
        },
        {
          type: '9月',
          sales: 18,
        },
        {
          type: '10月',
          sales: 8,
        },
        {
          type: '11月',
          sales: 18,
        },
        {
          type: '12月',
          sales: 38,
        },
      ];

      const columnPlot = new TinyColumn(document.getElementById('asst-dynamicChart-container'), {
        forceFit: true,
        data,
        padding: 'auto',
        data,
        xField: 'type',
        yField: 'sales',
        columnSize:6,
        xAxis:{visible:false},
        yAxis:{visible:false},
        color:["#26C1C9"],
      });

      columnPlot.render();
    }
    render() {
      return <div  className="asset-dynamicChart-container" id="asst-dynamicChart-container"></div>
    }
}
export default AssetDynamicChart;
