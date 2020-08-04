import { Table } from 'antd';
import { Link } from 'react-router-dom';
import { YtStatistic, YtTable, YtPagination, YtCard } from 'common';
import ViewCardPane from '../../components/ViewCardPane';
import AssetDistributeChart from '../components/AssetDistributeChart';
import AssetChart from './components/AssetChart';
import CashChart from './components/CashChart';
import FilterForm from './components/FilterForm';
import TabsMod from '../components/TabsMod'
import './index.less';

class OperateWorkbench extends React.Component {
  state={
    checkedVal:3
  }
  onChange=(e)=>{
    this.setState({checkedVal:e.target.value})
  }
  render(){
    const plainOptions = [
      {
        title:'今日',
        key:0
      },
      {
        title:'本周',
        key:1
      },
      {
        title:'本月',
        key:2
      },
      {
        title:'本年',
        key:3
      }];
    return(
      <div className="asset-package-view-pages-wrap">
        <div className="box-flex">
          <ViewCardPane
            label="资产池总金额(万元)"
            num="550,000"/>
          <ViewCardPane
            label="资产包数量(个)"
            num="550,000"/>
          <ViewCardPane
            label="融资企业(家)"
            num="550,000"/>
          <ViewCardPane
            label="融资笔数(笔)"
            num="550,000"/>
          <ViewCardPane
            label="债务企业(家)"
            num="550,000"/>
          <ViewCardPane
            label="实际平均账期(天)"
            num="550,000"/>
        </div>
        <div className="common-column-module-wrap aspv-part-one">
          <div className="module-left-wrap">
            <div className="box-flex chart-list part-same-shadow">
              <CashChart />
              <YtCard title="资产包变动排行">
                <TabsMod
                  onChange={this.onChange}
                  options={plainOptions}
                  checkedVal={this.state.checkedVal}/>
                <div className="box-flex aspv-rank-list">
                  <div className="box-flex aspvr-item">
                    <p className="aspvr-num top-one">1</p>
                    <p className="aspvr-name">农业项目一期</p>
                    <YtStatistic value="¥350,000" type="up"/>
                  </div>
                  <div className="box-flex aspvr-item">
                    <p className="aspvr-num top-two">2</p>
                    <p className="aspvr-name">农业项目一期</p>
                    <YtStatistic value="¥350,000" type="up"/>
                  </div>
                  <div className="box-flex aspvr-item">
                    <p className="aspvr-num top-thr">3</p>
                    <p className="aspvr-name">农业项目一期</p>
                    <YtStatistic value="¥350,000" type="up"/>
                  </div>
                  <div className="box-flex aspvr-item">
                    <p className="aspvr-num">4</p>
                    <p className="aspvr-name">农业项目一期</p>
                    <YtStatistic value="¥350,000" type="down"/>
                  </div>
                </div>
              </YtCard>
            </div>
          </div>
          <div className="module-right-wrap">
            <div className="part-same-shadow">
              <AssetDistributeChart />
            </div>
          </div>
        </div>
        <div className="company-content-wrap">
          <FilterForm />
          <div className="finance-list">
            <Link to="/account/asset/package/info/12">
              <div className="fin-item box-flex">
                <div className="data-lf">
                  <div className="company-info box-flex">
                    <p className="cmy-name">债权方:成都市众惠农资有限公司</p>
                    <p className="status">未封包</p>
                    <p className="pkg-info">资产包名称：<span className="val-sty">ZCB_20191203_009</span></p>
                    <p className="pkg-info">资产包编号：<span className="val-sty">ZCB_20191203_009</span></p>
                  </div>
                  <div className="box-flex data-info">
                    <div className="info-im">
                      <p className="label-value">100万</p>
                      <p className="label-name">资产包含金额</p>
                    </div>
                    <div className="info-im">
                      <p className="label-value">200笔</p>
                      <p className="label-name">资产笔数</p>
                    </div>
                    <div className="info-im">
                      <p className="label-value">2020-05-10</p>
                      <p className="label-name">最长账期</p>
                    </div>
                    <div className="info-im">
                      <p className="label-value">2020-05-10</p>
                      <p className="label-name">最大资产金额</p>
                    </div>
                    <div className="info-im">
                      <p className="label-value">2020-05-10</p>
                      <p className="label-name">债务企业</p>
                    </div>
                    <div className="info-im">
                      <p className="label-value">2020-05-10</p>
                      <p className="label-name">最短账期</p>
                    </div>
                  </div>
                </div>
                <div className="chart-rf">
                  <AssetChart index={1}/>
                </div>
              </div>
            </Link>
            <Link to="/account/asset/package/info/12">
              <div className="fin-item box-flex">
                <div className="data-lf">
                  <div className="company-info box-flex">
                    <p className="cmy-name">债权方:成都市众惠农资有限公司</p>
                    <p className="status">未封包</p>
                    <p className="pkg-info">资产包名称：<span className="val-sty">ZCB_20191203_009</span></p>
                    <p className="pkg-info">资产包编号：<span className="val-sty">ZCB_20191203_009</span></p>
                  </div>
                  <div className="box-flex data-info">
                    <div className="info-im">
                      <p className="label-value">100万</p>
                      <p className="label-name">资产包含金额</p>
                    </div>
                    <div className="info-im">
                      <p className="label-value">200笔</p>
                      <p className="label-name">资产笔数</p>
                    </div>
                    <div className="info-im">
                      <p className="label-value">2020-05-10</p>
                      <p className="label-name">最长账期</p>
                    </div>
                    <div className="info-im">
                      <p className="label-value">2020-05-10</p>
                      <p className="label-name">最大资产金额</p>
                    </div>
                    <div className="info-im">
                      <p className="label-value">2020-05-10</p>
                      <p className="label-name">债务企业</p>
                    </div>
                    <div className="info-im">
                      <p className="label-value">2020-05-10</p>
                      <p className="label-name">最短账期</p>
                    </div>
                  </div>
                </div>
                <div className="chart-rf">
                  <AssetChart index={1}/>
                </div>
              </div>
            </Link>
          </div>
          <YtPagination data={{total:500,currentPage:0,limit:15}}/>
        </div>
      </div>
    )
  }
}

export default OperateWorkbench;
