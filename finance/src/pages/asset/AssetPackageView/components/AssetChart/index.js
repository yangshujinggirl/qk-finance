import { Radar } from '@antv/g2plot';
import DataSet from '@antv/data-set';
import { YtCard } from 'common';
import './index.less';

class AssetChart extends React.Component{
    componentDidMount(){
      const data = [
        {
          item: '资产规模',
          user: 'a',
          score: 70,
        },
        {
          item: '流动性',
          user: 'a',
          score: 60,
        },
        {
          item: '违约率',
          user: 'a',
          score: 60,
        },
        {
          item: '信用',
          user: 'a',
          score: 40,
        },
        {
          item: '集中度',
          user: 'a',
          score: 60,
        },
      ];

      const radarPlot = new Radar(document.getElementById(`asset-pak-container${this.props.index}`), {
        data,
        forceFit:true,
        angleField: 'item',
        radiusField: 'score',
        seriesField: 'user',
        radiusAxis: {
          grid: {
            line: {
              type: 'line',
            },
          },
        },
        line: {
          visible: true,
        },
        point: {
          visible: false,
          shape: 'circle',
        },
        legend: {
          visible: false,
          position: 'bottom-center',
        },
      });

      radarPlot.render();

    }
    render() {
      return <div className="asst-pak-trend" id={`asset-pak-container${this.props.index}`}></div>
    }
}
export default AssetChart;
