import { StackedColumnLine } from '@antv/g2plot';
import { YtCard } from 'common';
import TabsMod from '../../../../components/TabsMod'
import './index.less';

class IndexChart extends React.Component{
    state={
      checkedVal:3
    }
    onChange=(e)=>{
      this.setState({checkedVal:e.target.value})
    }
    componentDidMount() {
      const uvBillData = [
        { time: '2019-03', value: 350, type: '现金流入' },
        { time: '2019-04', value: 900, type: '现金流入' },
        { time: '2019-05', value: 300, type: '现金流入' },
        { time: '2019-06', value: 450, type: '现金流入' },
        { time: '2019-07', value: 470, type: '现金流入' },
        { time: '2019-03', value: 220, type: '现金流出' },
        { time: '2019-04', value: 300, type: '现金流出' },
        { time: '2019-05', value: 250, type: '现金流出' },
        { time: '2019-06', value: 220, type: '现金流出' },
        { time: '2019-07', value: 362, type: '现金流出' },
      ];
      const transformData = [
        { time: '2019-03', "净现值": 800 },
        { time: '2019-04', "净现值": 600 },
        { time: '2019-05', "净现值": 400 },
        { time: '2019-06', "净现值": 380 },
        { time: '2019-07', "净现值": 220 },
      ];
      const columnLine = new StackedColumnLine(document.getElementById('cash-flow-container'),{
        data: [uvBillData, transformData],
        forceFit:true,
        xField: 'time',
        yField: ['value', '净现值'],
        columnStackField: 'type',
        columnSize:6,
        columnConfig:{
          color:['#1B53BF','#F0EFF5']
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
    render() {
      const plainOptions = [
        {
          title:'全部',
          key:1
        },
        {
          title:'现金流入',
          key:2
        },
        {
          title:'现金流出',
          key:3
        }];
      return <YtCard title="现金流综合趋势图" className="part-same-shadow mt24">
        <TabsMod
          onChange={this.onChange}
          options={plainOptions}
          checkedVal={this.state.checkedVal}/>
        <div  className="asset-cash-flow-container" id="cash-flow-container"></div>
      </YtCard>
    }
}
export default IndexChart;
