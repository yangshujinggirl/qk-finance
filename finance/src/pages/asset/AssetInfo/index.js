import { Collapse, Progress, Row, Col, Button } from 'antd';
import { Link } from 'react-router-dom';
import { YtCard, YtBaseInfo, YtCollapse } from 'common';
import CollapseMod from './components/CollapseMod';
import './index.less';

const { Panel } = Collapse;

class AssetInfo extends React.Component {
  render(){
    return(
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
        <div className="aio-bottom-part">
          <div className="common-column-module-wrap aio-verify-wrap">
           <div className="module-equal-two-wrap">
             <YtCard
               title="当前验真源"
               className="aiov-lf part-same-shadow">
               <div className="box-flex">
                  <div className="source-item">
                    <img src="" className="icon-itm"/>
                    <p>云图控股</p>
                  </div>
                  <div className="source-item">
                    <img src="" className="icon-itm"/>
                    <p>一级经销商</p>
                  </div>
                  <div className="source-item">
                    <img src="" className="icon-itm"/>
                    <p>二级经销商</p>
                  </div>
                  <div className="source-item">
                    <img src="" className="icon-itm"/>
                    <p>农资用户</p>
                  </div>
                  <div className="source-item">
                    <img src="" className="icon-itm"/>
                    <p>物流</p>
                  </div>
                  <div className="source-item">
                    <img src="" className="icon-itm"/>
                    <p>银行</p>
                  </div>
                  <div className="source-item">
                    <img src="" className="icon-itm"/>
                    <p>企查查</p>
                  </div>
               </div>
             </YtCard>
           </div>
           <div className="module-equal-two-wrap">
             <YtCard title="当前验真采集数据" className="aiov-rf part-same-shadow">
               <div className="ver-data">
                <div className="verd-row box-flex">
                  <div className="verdr-lf"></div>
                  <div className="verdr-rf">
                    <Button type="primary" ghost  className="status-default-btn">采购付款数据</Button>
                    <Button type="primary" ghost disabled className="status-default-btn">收货物流数据</Button>
                  </div>
                </div>
                <div className="verd-row box-flex">
                  <div className="verdr-lf"></div>
                  <div className="verdr-rf">
                    <Button type="primary" ghost className="status-default-btn">一级采购订单</Button>
                    <Button type="primary" ghost className="status-default-btn">收款数据</Button>
                    <Button type="primary" ghost className="status-default-btn">发票信息</Button>
                    <Button type="primary" ghost className="status-default-btn">发货物流数据</Button>
                  </div>
                </div>
               </div>
             </YtCard>
           </div>
          </div>
          <CollapseMod />
        </div>
      </div>
    )
  }
}
export default AssetInfo;
