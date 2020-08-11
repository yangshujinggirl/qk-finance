import { Area } from '@antv/g2plot';
import { Chart } from '@antv/g2';

import { YtCard } from 'common';
import './index.less';

class AssetDynamicChart extends React.Component{
    componentDidMount() {
      const data = [
        { year: '1991', value: 15468 },
        { year: '1992', value: 26100 },
        { year: '1993', value: 15900 },
        { year: '1994', value: 17409 },
        { year: '1995', value: 17000 },
        { year: '1996', value: 31056 },
        { year: '1997', value: 31982 },
        { year: '1998', value: 32040 },
        { year: '1999', value: 33233 },
      ];
      const tinyArea = new Area(document.getElementById('tinyAear-container'), {
        forceFit: true,
        data: data,
        xField: 'year',
        yField: 'value',
        yAxis: { visible:false },
        xAxis: { visible:false }
      });
      tinyArea.render();
    }
    render() {
      return <div  className="tinyAear-container" id="tinyAear-container"></div>
    }
}
export default AssetDynamicChart;
