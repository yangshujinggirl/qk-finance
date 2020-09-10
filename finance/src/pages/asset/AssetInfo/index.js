import {Collapse, Progress, Row, Col, Button,Spin} from 'antd';
import {Link} from 'react-router-dom';
import NP from 'number-precision';
import moment from 'moment';
import {useState, useEffect} from 'react';
import {CommonUtils} from 'utils';
import {YtBreadcrumbName, YtCard, YtBaseInfo, YtCollapse} from 'common';
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
import {GetInfoApi} from 'api/asset/AssetInfo';
import {financeStatusMap, assetStatusMap} from './components/option';
import './index.less';


const {Panel} = Collapse;

const AssetInfo = ({...props}) => {
    const {id: assetNo} = props.match.params;
    const [assetsInfo, setAssetsInfo] = useState({});
    const [companyBaseInfo, setCompanyBaseInfo] = useState({});//2.企业信息 ||  3.长协信息
    const [blockInfo, setBlockInfo] = useState({});//区块信息
    const [saleInfo, setSaleInfo] = useState({});//销售信息
    const [shipment, setShipment] = useState({});//发货信息
    const [receiveInfo, setReceiveInfo] = useState({});//收货信息
    const [moneyBack, setMoneyBack] = useState({});//回款信息
    const industryTypeCode = 'AGNPK';
    const fetchInfo = (values) => {
        let params = {industryTypeCode, assetNo}
        GetInfoApi(params)
            .then((res) => {
                const {authStatus, assetsInfo, blockChainInfo, assetDetailVO} = res.data;
                let {shipperType, longTeamInfoVO, salesInfoVO, logisticsSendVO, logisticsReceivingVO, moneyBackVO} = assetDetailVO
                //资产信息
                const surplusPayMent = CommonUtils.formatTimeInterval(assetsInfo.transactionDate, assetsInfo.expectedDate)
                setAssetsInfo({...assetsInfo, surplusPayMent, authStatus, shipperType});
                //1.区块信息
                setBlockInfo(blockChainInfo);
                //longTeamInfoVO 2.企业信息 ||  3.长协信息
                setCompanyBaseInfo(longTeamInfoVO)
                //4. salesInfoVO; // 销售信息
                salesInfoVO = {...salesInfoVO, shipperType};
                setSaleInfo(salesInfoVO);
                //5. logisticsSendVO; // 发货信息
                setShipment(logisticsSendVO);
                //6. logisticsReceivingVO; // 到货信息
                setReceiveInfo(logisticsReceivingVO);
                //7. moneyBackVO; // 回款信息
                setMoneyBack(moneyBackVO)
            })
    }
    const goSource=()=> {
      props.history.push({
        pathname:`/account/asset/financeCompany/source/${assetNo}`,
        query:{
          companyCode:assetsInfo.companyCode,
          orderNo:assetsInfo.orderNo,
          companyFullName:assetsInfo.companyFullName
        }
      })
    }
    useEffect(() => { fetchInfo() }, [assetNo]);
    return (
        <>
            <YtBreadcrumbName/>
            <div className="asset-info-pages-wrap">
                <div className="aio-main-part part-same-shadow">
                    <div className="box-flex aiom-top">
                        <p className="card-hd">资产详情</p>
                        <p className="sub-hd"><span className="label">资产编号</span>{assetsInfo.assetNo}</p>
                        <p className="sub-hd">
                          <span className="label">所属企业</span>
                          {assetsInfo.companyFullName}
                            <Button type="primary" ghost className="link-default-btn">
                                主体验证通过
                                {/*<Link to="/account/creditVerify/12">主体信用</Link>*/}
                            </Button>
                        </p>
                        <p className="sub-hd"><span
                            className="label">创建时间</span>{moment(assetsInfo.dateOfCreate).format('YYYY-MM-DD')}</p>
                    </div>
                    <div className="box-flex aiom-bottom">
                        <div className="info-im">
                            <p className="label-name">资产价值(万元)</p>
                            <p className="label-value">{CommonUtils.formatAmount(assetsInfo.orderAmount)}万</p>
                        </div>
                        <div className="info-im">
                            <p className="label-name">资产账期(天)</p>
                            <p className="label-value">{assetsInfo.expectedDate}</p>
                        </div>
                        <div className="info-im">
                            <p className="label-name">剩余账期(天)</p>
                            <p className="label-value">
                                {assetsInfo.surplusPayMent}
                            </p>
                        </div>
                        <div className="info-im">
                            <p className="label-name">验真状态
                                <Button type="primary" ghost className="link-default-btn">
                                    <Link to="/account/assetVerify/info/12">验真详情</Link>
                                </Button>
                            </p>
                            <p className="label-value">
                                {
                                    assetsInfo.authStatus == 'Yes' ? '已验真' : '未验真'
                                }
                            </p>
                        </div>
                        <div className="info-im">
                            <p className="label-name">
                                资产状态
                                <Button type="primary" ghost className="link-default-btn" onClick={goSource}>
                                  资产溯源
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
                <AssetStepMod info={assetsInfo}/>
                <div className="aio-bottom-part">
                    <VerifySource  />
                    <YtCollapse defaultActiveKey={['1']} expandIconPosition="right">
                        <>
                            <Panel header="区块信息" key="1">
                                <BlockInfo info={blockInfo}/>
                            </Panel>
                            <Panel header="企业基本信息" key="2">
                                <BaseInfo info={companyBaseInfo}/>
                            </Panel>
                            <Panel header="长期供销协议" key="3">
                                <SupplySellInfo info={companyBaseInfo}/>
                            </Panel>
                            <Panel header="销售合同信息" key="4">
                                <SalesInfo info={saleInfo}/>
                            </Panel>
                            {/*<Panel header="进货采购信息" key="5">
                              <PurchaseInfo info={blockInfo}/>
                              </Panel>*/
                            }
                            {/*<Panel header="物流发货信息（厂方直发）" key="6">
                              <DeliveryFactoryInfo info={blockInfo}/>
                              </Panel>*/
                            }
                            {
                                (saleInfo.shipperType === 1) &&
                                <Panel header="物流发货信息（仓库直发）" key="7">
                                    <DeliveryWarehouseInfo info={shipment}/>
                                </Panel>
                            }
                            <Panel header="物流收货信息" key="8">
                                <ReceiveGoodsInfo info={receiveInfo}/>
                            </Panel>
                            {
                                (assetsInfo.applyLoanStatus === 4) &&
                                <Panel header="回款信息" key="9">
                                    <ReturnedMoneyInfo info={moneyBack}/>
                                </Panel>
                            }
                        </>
                    </YtCollapse>
                </div>
            </div>
        </>
    )
}
export default AssetInfo;
