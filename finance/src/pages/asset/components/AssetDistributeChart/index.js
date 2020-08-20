import { Donut } from '@antv/g2plot';
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

      const donutPlot = new Donut(document.getElementById('asset-dis-container'), {
        forceFit: true,
        radius: 1,
        padding: 'auto',
        data,
        label: {
          visible: false,
          type: 'inner',
          formatter: (val) => {
            val = val * 100 + '%';
            return val;
          },
        },
        tooltip:{
          formatter: (val,name) => {
            val = val * 100 + '%';
            return {name,value:val};
          },
        },
        angleField: 'percent',
        colorField: 'item',
        color:['#E4E7ED','rgba(41,85,184,.2)','#A8C6DF','#2D65E1','#0093EE'],
        statistic: {
          visible: false,
        },
        legend: {
          position: 'right-center',
          offsetX:10,
          text:{
            formatter: (text,cfg) => {
              // let textMod = `${text}-80%`
              let textMod = `${text}`
              return textMod;
            }
          }

        },
      });

      donutPlot.render();
    }
    render() {
      return <YtCard title="资产账期分布">
                <div className={`asst-payment-trend ${this.props.className}`} id="asset-dis-container"></div>
              </YtCard>
    }
}
export default AssetDistributeChart;
