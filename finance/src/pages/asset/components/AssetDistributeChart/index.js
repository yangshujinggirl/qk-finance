import { Chart } from '@antv/g2';
import { YtCard } from 'common';
import './index.less';

class AssetDistributeChart extends React.Component{
    componentDidMount() {
      const data = [
        { item: '1年以上', count: 40, percent: 0.4 },
        { item: '180-1年', count: 21, percent: 0.21 },
        { item: '90-180天', count: 17, percent: 0.17 },
        { item: '30-60天', count: 13, percent: 0.13 },
        { item: '30天以内', count: 9, percent: 0.09 },
      ];
      const chart = new Chart({
        container: 'asset-dis-container',
        autoFit: true,
        height: 500,
      });
      chart.data(data);
      chart.legend({
        position: 'right',
        offsetX: -30,
        marker:{
          symbol:'circle'
        }
      });
      chart.scale('percent', {
        formatter: (val) => {
          val = val * 100 + '%';
          return val;
        },
      });
      chart.coordinate('theta', {
        radius: 0.75,
        innerRadius: 0.6,
      });
      chart.tooltip({
        showTitle: false,
        showMarkers: false,
        itemTpl: '<li class="g2-tooltip-list-item"><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>',
      });
      // 辅助文本
      chart
        .annotation()
      chart
        .interval()
        .adjust('stack')
        .position('percent')
        .color('item',['#E4E7ED','#88D1F3','#A8C6DF','#2D65E1','#0093EE'])
        .tooltip('item*percent', (item, percent) => {
          percent = percent * 100 + '%';
          return {
            name: item,
            value: percent,
          };
        });

      chart.interaction('element-active');

      chart.render();
    }
    render() {
      return <YtCard title="资产账期分布">
                <div className="asst-dis-trend" id="asset-dis-container"></div>
              </YtCard>
    }
}
export default AssetDistributeChart;
