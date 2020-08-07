import { Line } from '@antv/g2plot';
import { YtCard } from 'common';
import TabsMod from '../../../../components/TabsMod'
import './index.less';

class AssetDistributeChart extends React.Component{
    state={
      checkedVal:3
    }
    onChange=(e)=>{
      this.setState({checkedVal:e.target.value})
    }
    componentDidMount() {
      const data = [
        {
          date: '01',
          type: '总资产',
          value: 6,
        },
        {
          date: '01',
          type: '新增资产',
          value: 10,
        },
        {
          date: '02',
          type: '总资产',
          value: 16,
        },
        {
          date: '02',
          type: '新增资产',
          value: 24,
        },
        {
          date: '03',
          type: '总资产',
          value: 22,
        },
        {
          date: '03',
          type: '新增资产',
          value: 30,
        },
        {
          date: '04',
          type: '总资产',
          value: 20,
        },
        {
          date: '04',
          type: '新增资产',
          value: 26,
        },
        {
          date: '05',
          type: '总资产',
          value: 30,
        },
        {
          date: '05',
          type: '新增资产',
          value: 36,
        },
        {
          date: '06',
          type: '新增资产',
          value: 30,
        },
        {
          date: '06',
          type: '总资产',
          value: 28,
        },
        {
          date: '07',
          type: '新增资产',
          value: 24,
        },
        {
          date: '07',
          type: '总资产',
          value: 20,
        },
      ];

      const linePlot = new Line(document.getElementById('asset-status-container'), {
        padding: 'auto',
        forceFit: true,
        data,
        xField: 'date',
        yField: 'value',
        yAxis: {
          tickInterval:15,
        },
        legend: {
          position: 'top-left',
          marker:{
            symbol:'circle',
            style:{ r:2 }
          }
        },
        seriesField: 'type',
        responsive: true,
        smooth: true,
      });
      linePlot.render();
    }
    render() {
      const plainOptions = [
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
      return <YtCard title="资产状态">
              <TabsMod
                onChange={this.onChange}
                options={plainOptions}
                checkedVal={this.state.checkedVal}/>
                <div className="asst-dis-trend" id="asset-status-container"></div>
              </YtCard>
    }
}
export default AssetDistributeChart;
