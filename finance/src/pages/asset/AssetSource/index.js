import { Card, Collapse, Progress, Row, Col, Button } from 'antd';
import { Link } from 'react-router-dom';
import { Tabs } from 'antd';
import { YtTable } from 'common';
import columns from './columns';
import './index.less';

const { TabPane } = Tabs;

class AssetSource  extends React.Component {
  render(){
    const data=[
      {
        code:'2020-05-20',
        type:'1'
      }
    ]
    return(
      <div className="assetVerify-info-pages">
        <div className="aio-main-part part-same-shadow">
          <div className="box-flex aiom-top">
            <p className="card-hd">资产溯源</p>
            <p className="sub-hd"><span className="label">资产编号</span>DD20200520084412</p>
            <p className="sub-hd"><span className="label">所属企业</span>成都众惠农资有限公司</p>
          </div>
          <div className="box-flex aiom-bottom">
            <YtTable columns={columns} dataSource={data}/>
          </div>
        </div>
      </div>
    )
  }
}

export default AssetSource;
