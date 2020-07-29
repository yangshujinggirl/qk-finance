import { Chart } from '@antv/g2';
import DataSet from '@antv/data-set';
import { YtCard } from 'common';
import './index.less';

class AssetChart extends React.Component{
    componentDidMount(){
      const data = [
        { item: '资产规模', a: 70,  },
        { item: '流动性', a: 60,  },
        { item: '违约率', a: 50,  },
        { item: '信用', a: 40,  },
        { item: '集中度', a: 60,  },
        { item: '资产规模', a: 70,  },
      ];
      const { DataView } = DataSet;
      const dv = new DataView().source(data);
      dv.transform({
        type: 'fold',
        fields: ['a'], // 展开字段集
        key: 'user', // key字段
        value: 'score', // value字段
      });

      const chart = new Chart({
        container: `asset-pak-container${this.props.index}`,
        autoFit: true,
        height: 500,
      });
      chart.data(dv.rows);
      chart.scale('score', {
        min: 0,
        max: 80,
      });
      chart.coordinate('polar', {
        radius: 0.8,
      });
      chart.tooltip({
        shared: true,
        showCrosshairs: true,
        crosshairs: {
          line: {
            style: {
              lineDash: [4, 4],
              stroke: '#333'
            }
          }
        }
      });
      chart.axis('item', {
        line: null,
        tickLine: null,
        grid: {
          line: {
            style: {
              lineDash: null,
            },
          },
        },
      });
      chart.axis('score', {
        line: null,
        tickLine: null,
        grid: {
          line: {
            type: 'line',
            style: {
              lineDash: null,
            },
          },
        },
      });

      chart
        .line()
        .position('item*score')
        .color('user')
        .size(2);
      chart
        .point()
        .position('item*score')
        .color('user')
        .shape('circle')
        .size(4)
        .style({
          stroke: '#fff',
          lineWidth: 1,
          fillOpacity: 1,
        });
      chart
        .area()
        .position('item*score')
        .color('user');
      chart.render();
    }
    render() {
      return <div className="asst-dis-trend" id={`asset-pak-container${this.props.index}`}></div>
    }
}
export default AssetChart;
