import { Table, Progress } from 'antd';
import { Link } from 'react-router-dom'
import ViewCardPane from '../../components/ViewCardPane';
import BlockChainNode from '../../components/BlockChainNode';
import LatestCashFlow from '../../components/LatestCashFlow';
import AssetDistributeChart from '../components/AssetDistributeChart';
import AssestStatusChart from './components/AssestStatusChart';
import CashChart from './components/CashChart';

import MaxAssetChart from './components/MaxAssetChart';
import { YtBreadcrumbName, YtTable, YtCard } from 'common';
import './index.less';
import iconImg1 from './image/icon1.png';
import iconImg2 from './image/icon2.png';
import iconImg3 from './image/icon3.png';
import iconImg4 from './image/icon4.png';
import iconImg5 from './image/icon5.png';
import iconImg6 from './image/icon6.png';
import iconImg7 from './image/icon7.png';
import iconImg8 from './image/icon8.png';

const verifyOption=[
  {
    url:iconImg1,
    name:'融资企业',
  },
  {
    url:iconImg2,
    name:'国税局',
  },
  {
    url:iconImg3,
    name:'云 图',
  },
  {
    url:iconImg4,
    name:'经销商',
  },
  {
    url:iconImg5,
    name:'物 流',
  },
  {
    url:iconImg6,
    name:'银 行',
  },
  {
    url:iconImg7,
    name:'企查查',
  },
  {
    url:iconImg8,
    name:'农 户',
  },
]

class OperateWorkbench extends React.Component {

  render(){
    const { params } =this.props.match;
    return(
      <>
        <YtBreadcrumbName>
          <div className="sub-crumb">
            <Link to={`/account/asset/financeCompany/view/${params.id}`} className="operate-link-btn">概览</Link>
            <Link to={`/account/asset/financeCompany/list/${params.id}`} className="operate-link-btn">资产</Link>
            <Link to="" className="operate-link-btn">现金流</Link>
            <Link to="" className="operate-link-btn">融资历史</Link>
            <Link to="" className="operate-link-btn">区块链</Link>
          </div>
        </YtBreadcrumbName>
        <div className="assetView-pages-wrap">
          <div className=" common-column-module-wrap assetView-part-content">
            <div className="module-left-wrap">
              <div className="part-overview-wrap box-flex">
                <ViewCardPane
                  label="资产池总金额(万元)"
                  num="550,000"/>
                <ViewCardPane
                  label="现金流入(万元)"
                  num="550,000"/>
                <ViewCardPane
                  label="现金流出(万元)"
                  num="550,000"/>
                <ViewCardPane
                  label="预计融资(万元)"
                  num="550,000"/>
              </div>
              <div className="company-list part-same-shadow">
                <CashChart />
              </div>
              <div className="part-same-shadow">
                <LatestCashFlow/>
              </div>
            </div>
            <div className="module-right-wrap">
              <div className="part-same-shadow">
                <AssestStatusChart />
              </div>
              <div className="part-same-shadow">
                <BlockChainNode />
              </div>
              <div className="part-same-shadow verify-process">
                <YtCard title="三方数据交叉验真状态">
                  <div>
                    <div className="box-flex company-list">
                      <div className="status-item">
                         <img src={iconImg1} className="img-name"/>
                         <p className="status-name">融资企业</p>
                      </div>
                      <div className="status-item">
                         <img src={iconImg2} className="img-name"/>
                         <p className="status-name"> 国税局</p>
                      </div>
                      <div className="status-item">
                         <img src={iconImg3} className="img-name"/>
                         <p className="status-name"> 云 图</p>
                      </div>
                      <div className="status-item">
                         <img src={iconImg4} className="img-name"/>
                         <p className="status-name">经销商</p>
                      </div>
                      <div className="status-item">
                         <img src={iconImg5} className="img-name"/>
                         <p className="status-name">物 流</p>
                      </div>
                      <div className="status-item">
                         <img src={iconImg6} className="img-name"/>
                         <p className="status-name">银 行</p>
                      </div>
                      <div className="status-item">
                         <img src={iconImg7} className="img-name"/>
                         <p className="status-name">企查查</p>
                      </div>
                      <div className="status-item">
                         <img src={iconImg8} className="img-name"/>
                         <p className="status-name">农 户</p>
                      </div>
                    </div>
                    <div className="box-flex">
                      <div className="asset-itm">
                        <p className="label-num">42,000</p>
                        <p className="label-name">已验真资产</p>
                      </div>
                      <div className="asset-itm">
                        <p className="label-num">42,000</p>
                        <p className="label-name">待验真资产</p>
                      </div>
                      <div className="asset-itm">
                        <p className="label-num">42,000</p>
                        <p className="label-name">疑似资产</p>
                      </div>
                    </div>
                  </div>
                </YtCard>
              </div>
            </div>
          </div>
          <div className="asset-module-wrap box-flex common-column-module-wrap">
            <div className="part-same-shadow  module-equal-four-wrap">
              <AssetDistributeChart />
            </div>
            <div className="part-same-shadow  module-equal-four-wrap">
              <YtCard title="资金周转率">
                资金周转率
              </YtCard>
            </div>
            <div className="part-same-shadow  module-equal-four-wrap">
              <YtCard title="债务占比TOP 3">
                <>
                  <div className="process-wrap">
                    <p className="prw-title">XXX企业</p>
                    <Progress percent={30} />
                  </div>
                  <div className="process-wrap">
                    <p className="prw-title">XXX企业</p>
                    <Progress percent={30} />
                  </div>
                  <div className="process-wrap">
                    <p className="prw-title">XXX企业</p>
                    <Progress percent={30} />
                  </div>
                </>
              </YtCard>
            </div>
            <div className="part-same-shadow  module-equal-four-wrap">
              <MaxAssetChart />
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default OperateWorkbench;
