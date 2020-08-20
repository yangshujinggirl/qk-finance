import { Line } from '@antv/g2plot';
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
      const data = [
        {
          date: '1月',
          type: '融资金额',
          value: 13,
        },
        {
          date: '1月',
          type: '还款金额',
          value: 32,
        },
        {
          date: '2月',
          type: '融资金额',
          value: 18,
        },
        {
          date: '2月',
          type: '还款金额',
          value: 13,
        },
        {
          date: '3月',
          type: '融资金额',
          value: 10,
        },
        {
          date: '3月',
          type: '还款金额',
          value: 30,
        },
        {
          date: '4月',
          type: '融资金额',
          value: 30,
        },
        {
          date: '4月',
          type: '还款金额',
          value: 30,
        },
        {
          date: '5月',
          type: '融资金额',
          value: 48,
        },
        {
          date: '5月',
          type: '还款金额',
          value: 48,
        },
        {
          date: '6月',
          type: '融资金额',
          value: 40,
        },
        {
          date: '6',
          type: '还款金额',
          value: 45,
        },
        {
          date: '7月',
          type: '融资金额',
          value: 50,
        },
        {
          date: '7月',
          type: '还款金额',
          value: 38,
        },
        {
          date: '8月',
          type: '融资金额',
          value: 72,
        },
        {
          date: '8月',
          type: '还款金额',
          value: 85,
        },
        {
          date: '9月',
          type: '融资金额',
          value: 45,
        },
        {
          date: '9月',
          type: '还款金额',
          value: 45,
        },
        {
          date: '10月',
          type: '融资金额',
          value: 13,
        },
        {
          date: '10月',
          type: '还款金额',
          value: 46,
        },
        {
          date: '11月',
          type: '融资金额',
          value: 50,
        },
        {
          date: '11月',
          type: '还款金额',
          value: 72,
        },
        {
          date: '12月',
          type: '融资金额',
          value: 45,
        },
        {
          date: '12月',
          type: '还款金额',
          value: 55,
        },
      ];

      const linePlot = new Line(document.getElementById('cash-flow-container'), {
        padding: 'auto',
        forceFit: true,
        data,
        xField: 'date',
        yField: 'value',
        yAxis: {
          tickInterval:15,
        },
        legend: {
          position: 'top',
          marker:{
            symbol:'circle',
            style:{
              r:4
            }
          }
        },
        seriesField: 'type',
        responsive: true,
      });

      linePlot.render();
    }
    render() {
      const plainOptions = [
        {
          title:'本年',
          key:1
        },
        {
          title:'本月',
          key:2
        },
        {
          title:'本日',
          key:3
        }];
      return <YtCard title="资产规模趋势图" className="part-same-shadow mt24">
        <TabsMod
          onChange={this.onChange}
          options={plainOptions}
          checkedVal={this.state.checkedVal}/>
        <div  className="asset-cash-flow-container" id="cash-flow-container"></div>
      </YtCard>
    }
}
export default IndexChart;
