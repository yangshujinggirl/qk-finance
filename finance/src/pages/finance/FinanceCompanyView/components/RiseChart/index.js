import { Line } from '@antv/g2plot';
import { YtCard } from 'common';
import './index.less';

class IndexChart extends React.Component{
    componentDidMount() {
      const data = [
        {
          date: '1月',
          type: 'download',
          value: 13,
        },
        {
          date: '1月',
          type: 'register',
          value: 32,
        },
        {
          date: '2月',
          type: 'download',
          value: 18,
        },
        {
          date: '2月',
          type: 'register',
          value: 13,
        },
        {
          date: '3月',
          type: 'download',
          value: 10,
        },
        {
          date: '3月',
          type: 'register',
          value: 30,
        },
        {
          date: '4月',
          type: 'download',
          value: 30,
        },
        {
          date: '4月',
          type: 'register',
          value: 30,
        },
        {
          date: '5月',
          type: 'download',
          value: 48,
        },
        {
          date: '5月',
          type: 'register',
          value: 48,
        },
        {
          date: '6月',
          type: 'download',
          value: 40,
        },
        {
          date: '6',
          type: 'register',
          value: 45,
        },
        {
          date: '7月',
          type: 'download',
          value: 50,
        },
        {
          date: '7月',
          type: 'register',
          value: 38,
        },
        {
          date: '8月',
          type: 'download',
          value: 72,
        },
        {
          date: '8月',
          type: 'register',
          value: 85,
        },
        {
          date: '9月',
          type: 'download',
          value: 45,
        },
        {
          date: '9月',
          type: 'register',
          value: 45,
        },
        {
          date: '10月',
          type: 'download',
          value: 13,
        },
        {
          date: '10月',
          type: 'register',
          value: 46,
        },
        {
          date: '11月',
          type: 'download',
          value: 50,
        },
        {
          date: '11月',
          type: 'register',
          value: 72,
        },
        {
          date: '12月',
          type: 'download',
          value: 45,
        },
        {
          date: '12月',
          type: 'register',
          value: 55,
        },
      ];

      const linePlot = new Line(document.getElementById('rise-container'), {
        padding: 'auto',
        forceFit: true,
        data,
        xField: 'date',
        yField: 'value',
        yAxis: {
          tickInterval:15,
        },
        legend: {
          position: 'right-top',
          marker:{
            symbol:'circle',
            style:{
              r:2
            }
          }
        },
        seriesField: 'type',
        responsive: true,
      });

      linePlot.render();
    }
    render() {
      return <div  className="rise-container" id="rise-container"></div>
    }
}
export default IndexChart;
