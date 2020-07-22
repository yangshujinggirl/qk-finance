import { Chart } from '@antv/g2';
import { YtCard } from 'common';
import './index.less';

class IndexChart extends React.Component{
    componentDidMount() {
        const data = [
          { year: '1990', value: 90 },
          { year: '1991', value: 180 },
          { year: '1992', value: 300 },
          { year: '1993', value: 260 },
          { year: '1994', value: 190 },
          { year: '1996', value: 250 },
          { year: '1997', value: 220 },
          { year: '1998', value: 360 },
        ];
        const chart = new Chart({
          container: 'asset-payment-container',
          autoFit: true,
          height: 500,
        });

        chart.data(data);
        chart.scale({
          value: {
            min: 0,
            nice: true,
          },
          year: {
            range: [0, 1],
          },
        });
        chart.tooltip({
          showCrosshairs: true,
          shared: true,
        });

        chart.axis('value', {
          label: {
            formatter: (val) => {
              return (val / 100).toFixed(1)*120;
            },
          },
        });

        chart.area().position('year*value');
        chart.line().position('year*value');

        chart.render();
    }
    render() {
      return <YtCard title="单周内资产账期(天)">
                <div className="cash-flow-trend" id="asset-payment-container"></div>
             </YtCard>
    }
}
export default IndexChart;
