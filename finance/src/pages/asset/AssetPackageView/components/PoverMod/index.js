import NP from 'number-precision';
import { Row, Col } from 'antd';
import { assetStatus, checkStatus } from '../options';
import './index.less';

function PoverMod({...props}){
  const { info } = props;
  info.orderAmount = info.orderAmount?info.orderAmount:0;
  info.assetTotal = info.assetTotal?info.assetTotal:1;

  return <div className="pover-mod-content">
            <Row>
              <Col span={12}>
                <div className="box-flex">
                  <p className="label-name">资产编号：</p>
                  <p>{info.assetNo}</p>
                </div>
              </Col>
              <Col span={12}>
              <div className="box-flex">
                <p className="label-name">资产包金额(元)：</p>
                <p>{info.orderAmount}</p>
              </div>
              </Col>
              <Col span={12}>
              <div className="box-flex">
                <p className="label-name">资产包占比(%)：</p>
                <p>{NP.round(NP.divide(info.orderAmount,info.assetTotal),2)}</p>
              </div>
              </Col>
              <Col span={12}>
              <div className="box-flex">
                <p className="label-name">资产账期(天)：</p>
                <p>{info.realDate}</p>
              </div>
              </Col>
              <Col span={12}>
              <div className="box-flex">
                <p className="label-name">剩余账期(天)：</p>
                <p>{info.realDay}</p>
              </div>
              </Col>
              <Col span={12}>
              <div className="box-flex">
                <p className="label-name">债务方：</p>
                <p>{info.orderSourceCompany}</p>
              </div>
              </Col>
              <Col span={12}>
              <div className="box-flex">
                <p className="label-name">验真状态：</p>
                <p>{checkStatus[info.checkStatus]}</p>
              </div>
              </Col>
              <Col span={12}>
              <div className="box-flex">
                <p className="label-name">资产状态：</p>
                <p>{assetStatus[info.assetStatus]}</p>
              </div>
              </Col>
              <Col span={12}>
              <div className="box-flex">
                <p className="label-name">融资状态：</p>
                <p>{info.loanNo?info.loanNo:'未融资'}</p>
              </div>
              </Col>
              <Col span={12}>
              <div className="box-flex">
                <p className="label-name">资金方选用：</p>
                <p>{info.enterpriseCount}</p>
              </div>
              </Col>
              <Col span={12}>
              <div className="box-flex">
                <p className="label-name">上链节点：</p>
                <p>{info.nodeBlockDate}</p>
              </div>
              </Col>
            </Row>
          </div>
}

export default PoverMod;
