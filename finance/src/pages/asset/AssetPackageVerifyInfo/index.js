import { Drawer, Table, Descriptions, Popover, Tabs } from 'antd';
import { Link } from 'react-router-dom';
import { PayCircleFilled, ExclamationCircleFilled, CheckCircleFilled } from '@ant-design/icons';
import { YtBreadcrumbName, YtTable, YtBtn, YtPagination, YtCard } from 'common';
import AssetInfoHead from '../components/AssetInfoHead';
import PoverMod from './components/PoverMod';
import SubCrumb from '../components/SubCrumb';
import './index.less';
import iconVer0 from './image/icon_ver0.png';
import iconVer1 from './image/icon_ver1.png';
import iconVer2 from './image/icon_ver2.png';
import iconVer3 from './image/icon_ver3.png';

const { TabPane } = Tabs;

class AssetPackageInfo extends React.Component {
  state={
    currentItem:{},
    selected:false,
    visible:false,
  }
  goInfo=(value)=> {
    this.setState({ currentItem:value, selected:true})
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
    const linkList =[
      {
        url:`/account/asset/packageView/info/${params.id}`,
        key:'1',
        name:'资产包详情'
      },{
        url:`/account/asset/packageView/verifyInfo/${params.id}`,
        key:'2',
        name:'验真详情'
      }]
    return(
      <>
        <YtBreadcrumbName>
          <SubCrumb data={linkList} active="2"/>
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
                <p className="label-name">
                  <CheckCircleFilled className="label-icon-same label-icon-ok"/>
                  <span className="label-text">验真通过资产笔数</span>
                </p>
                <p className="field-val">21</p>
              </div>
              <div className="lab-item">
                <p className="label-name">
                  <ExclamationCircleFilled className="label-icon-sus label-icon-same"/>
                  <span className="label-text">验真存疑资产笔数</span>
                </p>
                <p className="field-val">1</p>
              </div>
              <div className="lab-item">
                <p className="label-name">
                  <PayCircleFilled className="label-icon-sus label-icon-same"/>
                  <span className="label-text">资产存疑资产额</span>
                </p>
                <p className="field-val">36,800.00 <span className="percent">(3.64%)</span></p>
              </div>
            </div>
            <div className="bottom-action">
              <div className="status-list box-flex">
                <div className="sts-item">
                  <span className="line-icon"></span>
                  <span className="sts-text">验真通过</span>
                </div>
                <div className="sts-item">
                  <span className="line-icon"></span>
                  <span className="sts-text">验真存疑</span>
                </div>
                <div className="sts-item">
                  <span className="line-icon"></span>
                  <span className="sts-text">待验真</span>
                </div>
                <div className="sts-item">
                  <span className="sts-icon"><img src={iconVer0} /></span>
                  <span className="sts-text">最高价值</span>
                </div>
                <div className="sts-item">
                  <span className="sts-icon"><img src={iconVer1} /></span>
                  <span className="sts-text">最低价值</span>
                </div>
                <div className="sts-item">
                  <span className="sts-icon"><img src={iconVer2} /></span>
                  <span className="sts-text">最长账期</span>
                </div>
                <div className="sts-item">
                  <span className="sts-icon"><img src={iconVer3} /></span>
                  <span className="sts-text">最短账期</span>
                </div>
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
