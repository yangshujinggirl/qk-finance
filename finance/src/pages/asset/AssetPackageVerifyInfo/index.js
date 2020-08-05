import { Drawer, Table, Descriptions, Popover, Tabs } from 'antd';
import { Link } from 'react-router-dom';
import { YtBreadcrumbName, YtTable, YtBtn, YtPagination, YtCard } from 'common';
import AssetInfoHead from '../components/AssetInfoHead';
import PoverMod from './components/PoverMod';
import './index.less';

const { TabPane } = Tabs;

class AssetPackageInfo extends React.Component {
  state={
    currentItem:{},
    selected:false,
    visible:false,
  }
  goInfo=(value)=> {
    this.setState({ currentItem:value, selected:true})
    // this.setState({ currentItem:value, visible:true })
  }
  goClose=(value)=> {
    this.setState({ currentItem:{}, selected:false, visible:false })
  }
  render(){
    let data=[
      {
        assetStatus:1,
        status1:1,
        status2:1,
      },
      {
        assetStatus:2,
        status1:2,
        status2:2,
      },
      {
        assetStatus:1,
        status1:1,
        status2:1,
      },
      {
        assetStatus:2,
        status1:2,
        status2:2,
      },
      {
        assetStatus:1,
        status1:1,
        status2:1,
      },
      {
        assetStatus:2,
        status1:2,
        status2:2,
      },
      {
        assetStatus:1,
        status1:1,
        status2:1,
      },
      {
        assetStatus:2,
        status1:2,
        status2:2,
      },
    ]
    const { selected, visible } =this.state;
    const { params } =this.props.match;
    return(
      <>
        <YtBreadcrumbName>
          <div className="sub-crumb">
            <Link to={`/account/asset/packageView/info/${params.id}`} className="operate-link-btn">资产包详情</Link>
            <Link to={`/account/asset/packageView/verifyInfo/${params.id}`} className="operate-link-btn">验真详情</Link>
          </div>
        </YtBreadcrumbName>
        <div className="asset-package-verify-pages-wrap">
          <AssetInfoHead />
          <div className="part-two part-same-shadow">
            <div className="top-action box-flex">
              <div className="lab-item">
                <p className="label-name">资产验真笔数</p>
                <p className="field-val">22/<span className="num-low">23</span></p>
              </div>
              <div className="lab-item">
                <p className="label-name">验真通过资产笔数</p>
                <p className="field-val">21</p>
              </div>
              <div className="lab-item">
                <p className="label-name">验真存疑资产笔数</p>
                <p className="field-val">1</p>
              </div>
              <div className="lab-item">
                <p className="label-name">资产存疑资产额</p>
                <p className="field-val">36,800.00 <span className="percent">(3.64%)</span></p>
              </div>
            </div>
            <div className="bottom-action">
              <div className="status-list box-flex">
                <div className="sts-item"><span className="line-icon"></span>验真通过</div>
                <div className="sts-item"><span className="line-icon"></span>验真存疑</div>
                <div className="sts-item"><span className="line-icon"></span>待验真</div>
                <div className="sts-item"><span className="sts-icon"></span>最高价值</div>
                <div className="sts-item"><span className="sts-icon"></span>最低价值</div>
                <div className="sts-item"><span className="sts-icon"></span>最长账期</div>
                <div className="sts-item"><span className="sts-icon"></span>最短账期</div>
              </div>
              <div className="asset-package-list box-flex">
                {
                  data.map((el,index)=> (
                    <div key={index} className={`asset-tem ${el.assetStatus==1?'':'no-pass'}`} onClick={this.goInfo}>
                      <span className="status-line"></span>
                      <Popover className="popover-block" content={<PoverMod />} title={null} placement="bottom">
                        资产{++index}
                      </Popover>
                    </div>
                  ))
                }
              </div>
              <Drawer
                width={640}
                placement="bottom"
                closable={false}
                onClose={this.goClose}
                visible={visible}>
                <div>
                  <p className="close-btn" onClick={this.goClose}>隐藏详情</p>
                  <Descriptions column={2}>
                   <Descriptions.Item label="资产编号">AST_2886795269202004301450453940</Descriptions.Item>
                   <Descriptions.Item label="资产金额(元)">18,000.00</Descriptions.Item>
                   <Descriptions.Item label="资产账期(天)">18,000.00</Descriptions.Item>
                   <Descriptions.Item label="剩余账期(天)">180</Descriptions.Item>
                   <Descriptions.Item label="债务方">1滑县鑫农农资有限公司72</Descriptions.Item>
                   <Descriptions.Item label="还款方">到期还款</Descriptions.Item>
                  </Descriptions>
                </div>
              </Drawer>
              <div className={`info-bottom part-same-shadow ${selected?'selected':''}`}>
                  <p className="close-btn" onClick={this.goClose}>隐藏详情</p>
                  <Descriptions column={2}>
                   <Descriptions.Item label="资产编号">AST_2886795269202004301450453940</Descriptions.Item>
                   <Descriptions.Item label="资产金额(元)">18,000.00</Descriptions.Item>
                   <Descriptions.Item label="资产账期(天)">18,000.00</Descriptions.Item>
                   <Descriptions.Item label="剩余账期(天)">180</Descriptions.Item>
                   <Descriptions.Item label="债务方">1滑县鑫农农资有限公司72</Descriptions.Item>
                   <Descriptions.Item label="还款方">到期还款</Descriptions.Item>
                  </Descriptions>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default AssetPackageInfo;
