import { Chart } from '@antv/g2';
import { YtCard } from 'common';
import './index.less';

class MaxAssetChart extends React.Component{
    componentDidMount() {
      const data = [
        { item: '1年以上', count: 40, percent: 0.2 },
        { item: '180-1年', count: 21, percent: 0.8 },
      ];
      const chart = new Chart({
        container: 'max-asset-container',
        autoFit: true,
        height: 500,
      });
      chart.data(data);
      chart.legend(false);
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
        .color('item',['#E4E7ED','#1B53BF'])
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
      return <YtCard title="单比最大资产占比">
                <div className="asst-dis-trend" id="max-asset-container"></div>
              </YtCard>
    }
}
export default MaxAssetChart;
