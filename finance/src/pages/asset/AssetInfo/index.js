import { Collapse, Progress, Row, Col, Button } from 'antd';
import { Link } from 'react-router-dom';
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
import './index.less';


const { Panel } = Collapse;
const panelArray=[
  {
    key:'1',
    name:'区块信息',
    content:BlockInfo
  },{
    key:'2',
    name:'企业基本信息',
    content:BaseInfo
  },{
    key:'3',
    name:'长期供销协议',
    content:SupplySellInfo
  },{
    key:'4',
    name:'销售合同信息',
    content:SalesInfo
  },{
    key:'5',
    name:'进货采购信息',
    content:PurchaseInfo
  },{
    key:'6',
    name:'物流发货信息（厂方直发）',
    content:DeliveryFactoryInfo
  },{
    key:'7',
    name:'物流发货信息（仓库直发）',
    content:DeliveryWarehouseInfo
  },{
    key:'8',
    name:'物流收货信息',
    content:ReceiveGoodsInfo
  },{
    key:'9',
    name:'回款信息',
    content:ReturnedMoneyInfo
  },
]
class AssetInfo extends React.Component {
  render(){
    return(
      <>
        <YtBreadcrumbName />
        <div className="asset-info-pages-wrap">
          <div className="aio-main-part part-same-shadow">
            <div className="box-flex aiom-top">
              <p className="card-hd">资产详情</p>
              <p className="sub-hd"><span className="label">资产编号</span>DD20200520084412</p>
              <p className="sub-hd"><span className="label">
                所属企业</span>成都众惠农资有限公司
                <Button type="primary" ghost  className="link-default-btn">
                  <Link to="/account/creditVerify/12">主体信用</Link>
                </Button>
              </p>
              <p className="sub-hd"><span className="label">创建时间</span>2020-05-10</p>
            </div>
            <div className="box-flex aiom-bottom">
              <div className="info-im">
                <p className="label-name">资产价值(万元)</p>
                <p className="label-value">100万</p>
              </div>
              <div className="info-im">
                <p className="label-name">预计价值(万元)</p>
                <p className="label-value">200笔</p>
              </div>
              <div className="info-im">
                <p className="label-name">预计账期(天)</p>
                <p className="label-value">2020-05-10</p>
              </div>
              <div className="info-im">
                <p className="label-name">验真状态
                  <Button type="primary" ghost  className="link-default-btn">
                    <Link to="/account/assetVerify/info/12">验真详情</Link>
                  </Button>
                </p>
                <p className="label-value">2020-05-10</p>
              </div>
              <div className="info-im">
                <p className="label-name">
                  资产状态
                  <Button type="primary" ghost  className="link-default-btn">
                    <Link to="/account/asset/source/12">资产溯源</Link>
                  </Button>
                </p>
                <p className="label-value">2020-05-10</p>
              </div>
            </div>
          </div>
          <AssetStepMod />
          <div className="aio-bottom-part">
            <VerifySource />
            <YtCollapse defaultActiveKey={['1']} expandIconPosition="right">
              <>
              {
                panelArray.map((el) =>{
                  let Mod = el.content;
                  return <Panel header={el.name} key={el.key}>
                    <Mod props={{pr:'12333'}}/>
                  </Panel>
                })
              }
              </>
            </YtCollapse>
          </div>
        </div>
      </>
    )
  }
}
export default AssetInfo;
