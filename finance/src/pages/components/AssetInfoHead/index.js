import { YtBtn } from 'common';
import './index.less';

function AssetInfoHead({...props}) {
  return <div className="asset-company-content-wrap">
            <div className="fin-item">
              <div className="box-flex row-one">
                <div className="company-info box-flex">
                  <p className="cmy-name">债权方:成都市众惠农资有限公司</p>
                  <p className="status">已封包</p>
                  <p className="pkg-info">资产包名称：<span className="val-sty">ZCB_20191203_009</span></p>
                  <p className="pkg-info">资产包编号：<span className="val-sty">ZCB_20191203_009</span></p>
                  <p className="pkg-info">关联融资订单：<span className="val-sty">未关联</span></p>
                  <p className="pkg-info">封包日期：<span className="val-sty">2020-7-20</span></p>
                </div>
                {props.children}
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
          </div>
}

export default AssetInfoHead;
