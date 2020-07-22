import { Chart } from '@antv/g2';
import { YtCard } from 'common';
import './index.less';

class IndexChart extends React.Component{
    componentDidMount() {
        const data = [
          { name: 'Berlin', 月份: 'Jan.', 月均降雨量: 2000 },
          { name: 'Berlin', 月份: 'Feb.', 月均降雨量: 2000 },
          { name: 'Berlin', 月份: 'Mar.', 月均降雨量: 2000 },
          { name: 'Berlin', 月份: 'Apr.', 月均降雨量: 1800 },
          { name: 'Berlin', 月份: 'May', 月均降雨量: 1800 },
          { name: 'Berlin', 月份: 'Jun.', 月均降雨量: 1600 },
          { name: 'Berlin', 月份: 'Jul.', 月均降雨量: 1800 },
          { name: 'Berlin', 月份: 'Aug.', 月均降雨量: 1500 },
          { name: 'London', 月份: 'Jan.', 月均降雨量: 5100 },
          { name: 'London', 月份: 'Feb.', 月均降雨量: 11000 },
          { name: 'London', 月份: 'Mar.', 月均降雨量: 8000 },
          { name: 'London', 月份: 'Apr.', 月均降雨量: 3000 },
          { name: 'London', 月份: 'May', 月均降雨量: 5100 },
          { name: 'London', 月份: 'Jun.', 月均降雨量: 8000 },
          { name: 'London', 月份: 'Jul.', 月均降雨量: 7000 },
        ];

        const chart = new Chart({
          container: 'asset-change-container',
          autoFit: true,
          height: 500,
        });

        chart.data(data);
        chart.scale('月均降雨量', {
          ticks: [0, 5000, 10000, 15000],
        });
        chart.legend({
          position: "top",
        });
        chart.tooltip({
          showMarkers: false,
          shared: true,
        });

        chart
          .interval()
          .position('月份*月均降雨量')
          .color('name',['#2996B8','#2D65E1'])
          .adjust([
            {
              type: 'dodge',
              marginRatio: 0,
            },
          ]);
        chart.interaction('active-region');
        chart.render();
    }
    render() {
      return <YtCard title="单周内资产变动">
                <div className="cash-flow-trend" id="asset-change-container"></div>
             </YtCard>
    }
}
export default IndexChart;
