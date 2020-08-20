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
      { time: '03', value: 350, type: '资产减少' },
      { time: '04', value: 900, type: '资产减少' },
      { time: '05', value: 300, type: '资产减少' },
      { time: '06', value: 450, type: '资产减少' },
      { time: '07', value: 470, type: '资产减少' },
      { time: '03', value: 220, type: '资产增加' },
      { time: '04', value: 300, type: '资产增加' },
      { time: '05', value: 250, type: '资产增加' },
      { time: '06', value: 220, type: '资产增加' },
      { time: '07', value: 362, type: '资产增加' },
    ];

    const transformData = [
      { time: '03', '资产增幅': 800 },
      { time: '04', '资产增幅': 600 },
      { time: '05', '资产增幅': 400 },
      { time: '06', '资产增幅': 380 },
      { time: '07', '资产增幅': 220 },
    ];

    const columnLine = new StackedColumnLine(
      document.getElementById('cash-change-container'),
      {
      data: [uvBillData, transformData],
      xField: 'time',
      yField: ['value', '资产增幅'],
      columnStackField: 'type',
      columnConfig:{
        color:['#F0EFF5','#1B53BF']
      },
      lineConfig:{
        color:"#0093EE"
      },
      xAxis:{
        title:{
          visible:false
        }
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
                <div className="cash-change" id="cash-change-container"></div>
              </>
           </YtCard>
  }
}
export default CashChart;
