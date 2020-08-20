import { Pie } from '@antv/g2plot';
import { YtCard } from 'common';
import './index.less';

class IndexChart extends React.Component{
    componentDidMount() {
      const data = [
        {
          type: '50笔以下',
          value: 27,
        },
        {
          type: '50笔-300笔',
          value: 25,
        },
        {
          type: '300笔-1000笔',
          value: 18,
        },
        {
          type: '1000笔-2000笔',
          value: 15,
        },
        {
          type: '3000笔',
          value: 15,
        },
      ];
      const piePlot = new Pie(document.getElementById('asset-num-container'), {
        forceFit: true,
        radius: 0.8,
        data,
        angleField: 'value',
        colorField: 'type',
        legend:{
          position:'right-center'
        },
        label: {
          visible: true,
          type: 'inner',
          formatter: (val) => {
            val = val + '%';
            return val;
          },
        },
        tooltip:{
          formatter: (val,item) => {
            val = val + '%';
            return {
              name: item,
              value: val,
            };
          },
        }
      });

      piePlot.render();
    }
    render() {
      return <div  className="asset-num-container" id="asset-num-container"></div>
    }
}
export default IndexChart;
