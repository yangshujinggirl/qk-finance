import { Table } from 'antd';
import { Link } from 'react-router-dom'
import ViewCardPane from '../components/ViewCardPane';
import BlockChainNode from '../components/BlockChainNode';
import LatestCashFlow from '../components/LatestCashFlow';
import AssetDistributeChart from '../components/AssetDistributeChart';
import AssestStatusChart from './components/AssestStatusChart';
import CashChart from './components/CashChart';

import MaxAssetChart from './components/MaxAssetChart';
import { YtTable, YtCard } from 'common';
import './index.less';

class OperateWorkbench extends React.Component {

  render(){
    return(
      <div className="assetView-pages-wrap common-two-module-wrap">
        <div className="box-flex assetView-part-content">
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
                       <img src="" className="img-name"/>
                       <p className="status-name">融资企业</p>
                    </div>
                    <div className="status-item">
                       <img src="" className="img-name"/>
                       <p className="status-name"> 国税局</p>
                    </div>
                    <div className="status-item">
                       <img src="" className="img-name"/>
                       <p className="status-name"> 云 图</p>
                    </div>
                    <div className="status-item">
                       <img src="" className="img-name"/>
                       <p className="status-name">经销商</p>
                    </div>
                    <div className="status-item">
                       <img src="" className="img-name"/>
                       <p className="status-name">物 流</p>
                    </div>
                    <div className="status-item">
                       <img src="" className="img-name"/>
                       <p className="status-name">银 行</p>
                    </div>
                    <div className="status-item">
                       <img src="" className="img-name"/>
                       <p className="status-name">企查查</p>
                    </div>
                    <div className="status-item">
                       <img src="" className="img-name"/>
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
        <div className="asset-module-wrap box-flex">
          <div className="part-same-shadow module-item">
            <AssetDistributeChart />
          </div>
          <div className="part-same-shadow module-item">
            <YtCard title="资产账期分布">资金周转率</YtCard>
          </div>
          <div className="part-same-shadow module-item">
            <YtCard title="债务占比TOP 3">债务占比TOP 3</YtCard>
          </div>
          <div className="part-same-shadow module-item">
            <MaxAssetChart />
          </div>
        </div>
      </div>
    )
  }
}

export default OperateWorkbench;
