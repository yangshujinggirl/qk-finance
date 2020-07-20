import { Progress } from 'antd';
import { YtPagination } from 'common';
import ViewCardPane from '../../components/ViewCardPane';

class FinanceShow extends React.Component {
  render() {
    return(
      <div className="finance-company-list-wrap">
        <div className="box-flex">
          <ViewCardPane
            label="新增融资订单数"
            num="520">
            <div>
              <p className="label-lf">本日新增 <span className="high-prercent">12笔</span></p>
            </div>
          </ViewCardPane>
          <ViewCardPane
            label="新增融资订单数"
            num="520">
            <div>
              <p className="label-lf">本日新增 <span className="high-prercent">12笔</span></p>
            </div>
          </ViewCardPane>
          <ViewCardPane
            label="新增融资订单数"
            num="520">
            <div>
              <p className="label-lf">本日新增 <span className="high-prercent">12笔</span></p>
            </div>
          </ViewCardPane>
          <ViewCardPane
            label="新增融资订单数"
            num="520">
            <div>
              <p className="label-lf">本日新增 <span className="high-prercent">12笔</span></p>
            </div>
          </ViewCardPane>
        </div>
        <div className="finance-list">
          <div className="fin-item">
            <p className="company-title">成都市众惠农资有限公司</p>
            <div className="box-flex data-info">
              <div className="info-im">
                <p className="label-value">100万</p>
                <p className="label-name">资产池规模</p>
              </div>
              <div className="info-im">
                <p className="label-value">200笔</p>
                <p className="label-name">资产笔数</p>
              </div>
              <div className="info-im">
                <div className="label-value">
                  60%
                  <div className="process-wrap">
                    <Progress percent={60} showInfo={false} />
                  </div>
                </div>
                <p className="label-name">资产验真比率</p>
              </div>
              <div className="info-im">
                <p className="label-value">2020-05-10</p>
                <p className="label-name">资产更新时间</p>
              </div>
            </div>
          </div>
          <div className="fin-item">
            <p className="company-title">成都市众惠农资有限公司</p>
            <div className="box-flex data-info">
              <div className="info-im">
                <p className="label-value">100万</p>
                <p className="label-name">资产池规模</p>
              </div>
              <div className="info-im">
                <p className="label-value">200笔</p>
                <p className="label-name">资产笔数</p>
              </div>
              <div className="info-im">
                <div className="label-value">
                  60%
                  <div className="process-wrap">
                    <Progress percent={60} showInfo={false} />
                  </div>
                </div>
                <p className="label-name">资产验真比率</p>
              </div>
              <div className="info-im">
                <p className="label-value">2020-05-10</p>
                <p className="label-name">资产更新时间</p>
              </div>
            </div>
          </div>
        </div>
        <YtPagination data={{total:500,currentPage:0,limit:15}}/>
      </div>
    )
  }
}

export default FinanceShow;
