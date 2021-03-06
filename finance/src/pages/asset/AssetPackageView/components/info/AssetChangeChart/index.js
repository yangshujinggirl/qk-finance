import { Chart } from '@antv/g2';
import { GroupedColumn } from '@antv/g2plot';
import { YtCard } from 'common';
import './index.less';

class IndexChart extends React.Component{
    componentDidMount() {
        // const data = [
        //   { name: 'Berlin', 月份: 'Jan.', 月均降雨量: 2000 },
        //   { name: 'Berlin', 月份: 'Feb.', 月均降雨量: 2000 },
        //   { name: 'Berlin', 月份: 'Mar.', 月均降雨量: 2000 },
        //   { name: 'Berlin', 月份: 'Apr.', 月均降雨量: 1800 },
        //   { name: 'Berlin', 月份: 'May', 月均降雨量: 1800 },
        //   { name: 'Berlin', 月份: 'Jun.', 月均降雨量: 1600 },
        //   { name: 'Berlin', 月份: 'Jul.', 月均降雨量: 1800 },
        //   { name: 'Berlin', 月份: 'Aug.', 月均降雨量: 1500 },
        //   { name: 'London', 月份: 'Jan.', 月均降雨量: 5100 },
        //   { name: 'London', 月份: 'Feb.', 月均降雨量: 11000 },
        //   { name: 'London', 月份: 'Mar.', 月均降雨量: 8000 },
        //   { name: 'London', 月份: 'Apr.', 月均降雨量: 3000 },
        //   { name: 'London', 月份: 'May', 月均降雨量: 5100 },
        //   { name: 'London', 月份: 'Jun.', 月均降雨量: 8000 },
        //   { name: 'London', 月份: 'Jul.', 月均降雨量: 7000 },
        // ];
        //
        // const chart = new Chart({
        //   container: 'asset-change-container',
        //   autoFit: true,
        //   height: 500,
        // });
        //
        // chart.data(data);
        // chart.scale('月均降雨量', {
        //   ticks: [0, 5000, 10000, 15000],
        // });
        // chart.legend({
        //   position: "top",
        // });
        // chart.tooltip({
        //   showMarkers: false,
        //   shared: true,
        // });
        //
        // chart
        //   .interval()
        //   .position('月份*月均降雨量')
        //   .color('name',['#2996B8','#2D65E1'])
        //   .adjust([
        //     {
        //       type: 'dodge',
        //       marginRatio: 0,
        //     },
        //   ]);
        // chart.interaction('active-region');
        // chart.render();
        //
        //

        const data = [
          {
            name: '单比最小资产',
            月份: '1',
            月均降雨量: 18.9,
          },
          {
            name: '单比最小资产',
            月份: '2',
            月均降雨量: 28.8,
          },
          {
            name: '单比最小资产',
            月份: '3',
            月均降雨量: 39.3,
          },
          {
            name: '单比最小资产',
            月份: '4',
            月均降雨量: 81.4,
          },
          {
            name: '单比最小资产',
            月份: '5',
            月均降雨量: 47,
          },
          {
            name: '单比最小资产',
            月份: '6',
            月均降雨量: 20.3,
          },
          {
            name: '单比最小资产',
            月份: '7',
            月均降雨量: 24,
          },
          {
            name: '单比最小资产',
            月份: '8',
            月均降雨量: 35.6,
          },
          {
            name: '单比最大资产',
            月份: '1',
            月均降雨量: 12.4,
          },
          {
            name: '单比最大资产',
            月份: '2',
            月均降雨量: 23.2,
          },
          {
            name: '单比最大资产',
            月份: '3',
            月均降雨量: 34.5,
          },
          {
            name: '单比最大资产',
            月份: '4',
            月均降雨量: 99.7,
          },
          {
            name: '单比最大资产',
            月份: '5',
            月均降雨量: 52.6,
          },
          {
            name: '单比最大资产',
            月份: '6',
            月均降雨量: 35.5,
          },
          {
            name: '单比最大资产',
            月份: '7',
            月均降雨量: 37.4,
          },
          {
            name: '单比最大资产',
            月份: '8',
            月均降雨量: 42.4,
          },
        ];

        const columnPlot = new GroupedColumn(document.getElementById('asset-change-container'), {
          forceFit: true,
          data,
          xField: '月份',
          yField: '月均降雨量',
          yAxis: {
            min: 0,
          },
          groupField: 'name',
          color: ['#2996B8','#2D65E1'],
          xAxis:{
            title:{ visible:false }
          },
          yAxis:{
            title:{ visible:false }
          },
          legend:{
            marker:{symbol:'circle'}
          }
        });

        columnPlot.render();
    }
    render() {
      return <YtCard title="单周内资产变动">
                <div className="asset-change-trend" id="asset-change-container"></div>
             </YtCard>
    }
}
export default IndexChart;
