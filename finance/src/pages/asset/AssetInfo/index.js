import { Collapse, Progress, Row, Col, Button } from 'antd';
import { Link } from 'react-router-dom';
import NP from 'number-precision';
import moment from 'moment';
import { useState, useEffect } from 'react';
import { YtBreadcrumbName, YtCard, YtBaseInfo, YtCollapse } from 'common';
import VerifySource from './components/VerifySource';
import BlockInfo from './components/BlockInfo';
import BaseInfo from './components/BaseInfo';
import SupplySellInfo from './components/SupplySellInfo';
import SalesInfo from './components/SalesInfo';
import PurchaseInfo from './components/PurchaseInfo';
import DeliveryFactoryInfo from './components/DeliveryFactoryInfo';
import DeliveryWarehouseInfo from './components/DeliveryWarehouseInfo';
import ReceiveGoodsInfo from './components/ReceiveGoodsInfo';
import ReturnedMoneyInfo from './components/ReturnedMoneyInfo';
import AssetStepMod from './components/AssetStepMod';
import { GetInfoApi } from 'api/asset/AssetInfo';
import { financeStatusMap } from './components/option';
import './index.less';

const assetStatusMap={
  1:'未验证',
  2:'已验证',
  3:'无效',
  4:'已K座',
  5:'部分付款',
}

const { Panel } = Collapse;

const AssetInfo=({...props})=>{
  const { id:assetNo } = props.match.params;
  const [assetsInfo,setAssetsInfo] = useState({});
  const [companyBaseInfo,setCompanyBaseInfo] = useState({});
  const [blockInfo,setBlockInfo] = useState({});
  const industryTypeCode = 'AGNPK';
  const fetchInfo=(values )=>{
    let params = { industryTypeCode, assetNo }
    GetInfoApi(params)
    .then((res)=> {
      const { authStatus, assetsInfo, assetEnterpriseInfo, blockChainInfo } =res.data;
      setCompanyBaseInfo(assetEnterpriseInfo);
      setBlockInfo(blockChainInfo);
      setAssetsInfo({...assetsInfo,authStatus});
    })
  }
  const remainDays=()=>{
    let expectedDate = assetsInfo.debtExpireDate?assetsInfo.debtExpireDate:0;
    let transactionDate = assetsInfo.transactionDate?assetsInfo.transactionDate:0;
    return<>{
      NP.minus(expectedDate,transactionDate)
    }
    </>
  }
  useEffect(() => { fetchInfo() },[assetNo]);
  return(
    <>
      <YtBreadcrumbName />
      <div className="asset-info-pages-wrap">
        <div className="aio-main-part part-same-shadow">
          <div className="box-flex aiom-top">
            <p className="card-hd">资产详情</p>
            <p className="sub-hd"><span className="label">资产编号</span>{assetsInfo.assetNo}</p>
            <p className="sub-hd"><span className="label">
              所属企业</span>{assetsInfo.companyFullName}
              <Button type="primary" ghost  className="link-default-btn">
                主体验证通过
                {/*<Link to="/account/creditVerify/12">主体信用</Link>*/}
              </Button>
            </p>
            <p className="sub-hd"><span className="label">创建时间</span>{moment(assetsInfo.dateOfCreate).format('YYYY-MM-DD')}</p>
          </div>
          <div className="box-flex aiom-bottom">
            <div className="info-im">
              <p className="label-name">资产价值(万元)</p>
              <p className="label-value">{assetsInfo.orderAmount}万</p>
            </div>
            <div className="info-im">
              <p className="label-name">资产账期(天)</p>
              <p className="label-value">{assetsInfo.realDate}</p>
            </div>
            <div className="info-im">
              <p className="label-name">剩余账期(天)</p>
              <p className="label-value">
                {remainDays()}
              </p>
            </div>
            <div className="info-im">
              <p className="label-name">验真状态
                <Button type="primary" ghost  className="link-default-btn">
                  <Link to="/account/assetVerify/info/12">验真详情</Link>
                </Button>
              </p>
              <p className="label-value">
                {
                  assetsInfo.authStatus == 'Yes'?'已验真':'未验真'
                }
              </p>
            </div>
            <div className="info-im">
              <p className="label-name">
                资产状态
                <Button type="primary" ghost  className="link-default-btn">
                  <Link to="/account/asset/source/12">资产溯源</Link>
                </Button>
              </p>
              <p className="label-value">
                {
                  assetStatusMap[assetsInfo.assetStatus]
                }
              </p>
            </div>
            <div className="info-im">
              <p className="label-name">融资状态</p>
              <p className="label-value">
                {
                  financeStatusMap[assetsInfo.applyLoanStatus]
                }
              </p>
            </div>
          </div>
        </div>
        <AssetStepMod />
        <div className="aio-bottom-part">
          <VerifySource />
          <YtCollapse defaultActiveKey={['1']} expandIconPosition="right">
            <>
              <Panel header="区块信息" key="1">
                <BlockInfo info={blockInfo}/>
              </Panel>
              <Panel header="企业基本信息" key="2">
                <BaseInfo info={blockInfo}/>
              </Panel>
              <Panel header="长期供销协议" key="3">
                <SupplySellInfo info={blockInfo}/>
              </Panel>
              <Panel header="销售合同信息" key="4">
                <SalesInfo info={blockInfo}/>
              </Panel>
              {/*<Panel header="进货采购信息" key="5">
                <PurchaseInfo info={blockInfo}/>
              </Panel>*/}
              {/*<Panel header="物流发货信息（厂方直发）" key="6">
                <DeliveryFactoryInfo info={blockInfo}/>
              </Panel>*/}
              <Panel header="物流发货信息（仓库直发）" key="7">
                <DeliveryWarehouseInfo info={blockInfo}/>
              </Panel>
              <Panel header="物流收货信息" key="8">
                <ReceiveGoodsInfo info={blockInfo}/>
              </Panel>
              <Panel header="回款信息" key="9">
                <ReturnedMoneyInfo info={blockInfo}/>
              </Panel>
            </>
          </YtCollapse>
        </div>
      </div>
    </>
  )
}
export default AssetInfo;
