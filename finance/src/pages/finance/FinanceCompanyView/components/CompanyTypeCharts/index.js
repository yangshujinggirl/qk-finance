import { Chart } from '@antv/g2';
import { YtCard } from 'common';
import './index.less';

class IndexChart extends React.Component{
    componentDidMount() {
      const data = [
        { item: '未融资企业', count: 40, percent: 0.4 },
        { item: '已融资企业', count: 21, percent: 0.21 },
      ];
      const chart = new Chart({
        container: 'company-type-container',
        autoFit: true,
        height: 500,
      });
      chart.data(data);
      chart.scale('percent', {
        formatter: (val) => {
          val = val * 100 + '%';
          return val;
        },
      });
      chart.legend({
        position:'right-top',
        offsetX:-40
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
        .color('item')
        .label('percent', (percent) => {
          return {
            content: (data) => {
              return `${data.item}: ${percent * 100}%`;
            },
          };
        })
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
      return <div  className="asset-num-container" id="company-type-container"></div>
    }
}
export default IndexChart;
