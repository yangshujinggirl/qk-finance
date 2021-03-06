import { StackedColumnLine } from '@antv/g2plot';
import { YtCard } from 'common';
import './index.less';

class IndexChart extends React.Component{
    componentDidMount() {
      const uvBillData = [
        { time: '2019-03', value: 350, type: 'uv' },
        { time: '2019-04', value: 900, type: 'uv' },
        { time: '2019-05', value: 300, type: 'uv' },
        { time: '2019-06', value: 450, type: 'uv' },
        { time: '2019-07', value: 470, type: 'uv' },
        { time: '2019-03', value: 220, type: 'bill' },
        { time: '2019-04', value: 300, type: 'bill' },
        { time: '2019-05', value: 250, type: 'bill' },
        { time: '2019-06', value: 220, type: 'bill' },
        { time: '2019-07', value: 362, type: 'bill' },
      ];

      const transformData = [
        { time: '2019-03', count: 800 },
        { time: '2019-04', count: 600 },
        { time: '2019-05', count: 400 },
        { time: '2019-06', count: 380 },
        { time: '2019-07', count: 220 },
      ];

      const columnLine = new StackedColumnLine(
        document.getElementById('asset-status-container'),
        {
        data: [uvBillData, transformData],
        xField: 'time',
        yField: ['value', 'count'],
        columnStackField: 'type',
        columnConfig:{
          color:['#F0EFF5','#1B53BF']
        },
        lineConfig:{
          color:"#0093EE"
        }
      });
      columnLine.render();
    }
    render() {
      return <div className="cash-flow-trend" id="asset-status-container"></div>

    }
}
export default IndexChart;
