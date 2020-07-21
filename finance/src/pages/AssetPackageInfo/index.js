import { Table } from 'antd';
import { Link } from 'react-router-dom';
import { YtTable, YtPagination, YtCard } from 'common';
import './index.less';

class AssetPackageInfo extends React.Component {

  render(){
    return(
      <div className="asset-package-info-pages-wrap common-two-module-wrap">
        <div className="company-content-wrap">
          <div className="fin-item">
            <div className="company-info box-flex">
              <p className="cmy-name">债权方:成都市众惠农资有限公司</p>
              <p className="status">未封包</p>
              <p className="pkg-info">资产包名称：ZCB_20191203_009</p>
              <p className="pkg-info">资产包编号：ZCB_20191203_009</p>
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
        <div className="company-content-wrap">
          <YtPagination data={{total:500,currentPage:0,limit:15}}/>
        </div>
      </div>
    )
  }
}

export default AssetPackageInfo;
