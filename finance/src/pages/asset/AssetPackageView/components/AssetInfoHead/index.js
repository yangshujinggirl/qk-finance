import { YtBtn } from 'common';
import { CommonUtils } from 'utils';
import { statusOption } from '../options';
import './index.less';

function AssetInfoHead({...props}) {
  const { data } =props;
  return <div className="asset-company-content-wrap">
            <div className="fin-item">
              <div className="box-flex row-one">
                <div className="company-info box-flex">
                  <p className="cmy-name">债权方:{data.enterpriseName}</p>
                  <p className="status">
                    {
                      statusOption.map((el)=> (
                          <span key={el.key}>{el.key == data.packetStatus&&el.value}</span>
                      ))
                    }
                  </p>
                  <p className="pkg-info">资产包名称：<span className="val-sty">{data.packetName}</span></p>
                  <p className="pkg-info">资产包编号：<span className="val-sty">{data.packetId}</span></p>
                  <p className="pkg-info">关联融资订单：<span className="val-sty">{data.loanNo?data.loanNo:'未关联'}</span></p>
                  <p className="pkg-info">封包日期：<span className="val-sty">{data.packageDate}</span></p>
                </div>
                {props.children}
              </div>
              <div className="box-flex data-info">
                <div className="info-im">
                  <p className="label-value">{CommonUtils.formatAmount(data.assetTotal)}万</p>
                  <p className="label-name">资产包含金额</p>
                </div>
                <div className="info-im">
                  <p className="label-value">{data.assetCount}笔</p>
                  <p className="label-name">资产笔数</p>
                </div>
                <div className="info-im">
                  <p className="label-value">{data.debtorCount}家</p>
                  <p className="label-name">债务企业</p>
                </div>
                <div className="info-im">
                  <p className="label-value">{data.avgRealDate}天</p>
                  <p className="label-name">平均账期</p>
                </div>
                <div className="info-im">
                  <p className="label-value">{CommonUtils.formatAmount(data.avgAsset)}元</p>
                  <p className="label-name">平均资产金额</p>
                </div>
                <div className="info-im">
                  <p className="label-value">{CommonUtils.formatAmount(data.maxAsset)}</p>
                  <p className="label-name">单笔最高资产金额</p>
                </div>
              </div>
            </div>
          </div>
}

export default AssetInfoHead;
