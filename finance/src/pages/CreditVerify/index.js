import { YtTable, YtCard } from 'common';
import IndexChart from './components/InstrumentCharts';
import HeadFormCard from '../components/HeadFormCard';
import { columnsList } from './columns';
import './index.less';

class CreditVerify extends React.Component {
  render(){
    return(
      <div className="credit-verify-pages-wrap">
        <div className="cv-main-part part-same-shadow">
          <div className="cvm-top box-flex">
            <p className="card-hd">主体信用验证</p>
            <p className="sub-hd"><span className="label">所属企业</span>成都众惠农资有限公司</p>
            <p className="sub-hd"><span className="label">创建时间</span>2020-05-10</p>
          </div>
          <div className="cvm-bottom box-flex">
            <div className="cvmb-charts">
              <IndexChart />
            </div>
            <div className="cvmb-item">
              <p className="label">
                <span className="icon-label"></span>
                采集验证项
              </p>
              <p>20/23</p>
            </div>
            <div className="cvmb-item">
              <p className="label"><span className="icon-label"></span>验真通过项</p>
              <p>18</p>
            </div>
            <div className="cvmb-item">
              <p className="label"><span className="icon-label"></span>验真存疑项</p>
              <p>18</p>
            </div>
            <div className="cvmb-item">
              <p className="label"><span className="icon-label"></span>验真未通过</p>
              <p>18</p>
            </div>
            <div className="cvmb-item">
              <p className="label"><span className="icon-label"></span>系统风险性</p>
              <p>18</p>
            </div>
          </div>
        </div>
        <div className="part-same-shadow">
          <YtCard title="验真项">
            <YtTable columns={columnsList} dataSource={[]}/>
          </YtCard>
        </div>
      </div>
    )
  }
}

export default CreditVerify;
