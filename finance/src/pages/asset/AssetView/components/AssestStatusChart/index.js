import { Chart } from '@antv/g2';
import { YtCard } from 'common';
import './index.less';

class AssetDistributeChart extends React.Component{
    componentDidMount() {
      const data = [
        { month: 'Jan', city: 'Tokyo', temperature: 7 },
        { month: 'Jan', city: 'London', temperature: 3.9 },
        { month: 'Feb', city: 'Tokyo', temperature: 6.9 },
        { month: 'Feb', city: 'London', temperature: 4.2 },
        { month: 'Mar', city: 'Tokyo', temperature: 9.5 },
        { month: 'Mar', city: 'London', temperature: 5.7 },
        { month: 'Apr', city: 'Tokyo', temperature: 14.5 },
        { month: 'Apr', city: 'London', temperature: 8.5 },
        { month: 'May', city: 'Tokyo', temperature: 18.4 },
        { month: 'May', city: 'London', temperature: 11.9 },
        { month: 'Jun', city: 'Tokyo', temperature: 21.5 },
        { month: 'Jun', city: 'London', temperature: 15.2 },
        { month: 'Jul', city: 'Tokyo', temperature: 25.2 },
        { month: 'Jul', city: 'London', temperature: 17 },
        { month: 'Aug', city: 'Tokyo', temperature: 26.5 },
        { month: 'Aug', city: 'London', temperature: 16.6 },
        { month: 'Sep', city: 'Tokyo', temperature: 23.3 },
        { month: 'Sep', city: 'London', temperature: 14.2 },
        { month: 'Oct', city: 'Tokyo', temperature: 18.3 },
        { month: 'Oct', city: 'London', temperature: 10.3 },
        { month: 'Nov', city: 'Tokyo', temperature: 13.9 },
        { month: 'Nov', city: 'London', temperature: 6.6 },
        { month: 'Dec', city: 'Tokyo', temperature: 9.6 },
        { month: 'Dec', city: 'London', temperature: 4.8 },
      ];

      const chart = new Chart({
        container: 'asset-status-container',
        autoFit: true,
        height: 500,
      });

      chart.data(data);
      chart.scale({
        month: {
          range: [0, 1],
        },
        temperature: {
          nice: true,
        },
      });
      chart.legend({
        position:'top',
        marker:{
          symbol:'circle',
          style:{
            r:2
          }
        }
      });

      chart.tooltip({
        showCrosshairs: true,
        shared: true,
      });

      chart.axis('temperature', {
        label: {
          formatter: (val) => {
            return val + ' °C';
          },
        },
      });

      chart
        .line()
        .position('month*temperature')
        .color('city',['#1B53BF','#0093EE'])
        .shape('smooth');

      chart
        .point()
        .position('month*temperature')
        .color('city')
        .shape('circle')
        .style({
          stroke: '#fff',
          lineWidth: 1,
        });

      chart.removeInteraction('legend-filter'); // 移除默认的 legend-filter 数据过滤交互
      chart.interaction('legend-visible-filter'); // 使用分类图例的图形过滤

      chart.render();
    }
    render() {
      return <YtCard title="资产状态">
                <div className="asst-dis-trend" id="asset-status-container"></div>
              </YtCard>
    }
}
export default AssetDistributeChart;
