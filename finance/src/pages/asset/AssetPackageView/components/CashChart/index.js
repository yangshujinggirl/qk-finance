import { StackedColumnLine } from '@antv/g2plot';
import { YtCard } from 'common';
import TabsMod from '../../../components/TabsMod'
import './index.less';

class CashChart extends React.Component{
  state={
    checkedVal:3
  }
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
      document.getElementById('cash-container'),
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
  onChange=(e)=>{
    this.setState({checkedVal:e.target.value})
  }
  render() {
    const plainOptions = [
      {
        title:'今日',
        key:0
      },
      {
        title:'本周',
        key:1
      },
      {
        title:'本月',
        key:2
      },
      {
        title:'本年',
        key:3
      }];
    return <YtCard title="资产金额变动">
              <>
                <TabsMod
                  onChange={this.onChange}
                  options={plainOptions}
                  checkedVal={this.state.checkedVal}/>
                <div className="cash-flow-trend" id="cash-container"></div>
              </>
           </YtCard>
  }
}
export default CashChart;
