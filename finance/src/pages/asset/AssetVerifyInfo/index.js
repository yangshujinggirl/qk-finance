import { Card, Collapse, Progress, Row, Col, Button } from 'antd';
import { Link } from 'react-router-dom';
import { CloseCircleOutlined, CheckCircleOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';
import { YtTable } from 'common';
import { columnsProtocol,columnsOrder,columnsExpress } from './columns';
import DiyChart from './components/DiyChart';
import { protocolOptions,orderOptions,expressOptions } from './components/chartOptions';
import './index.less';

const { TabPane } = Tabs;

class AssetVerifyInfo  extends React.Component {
  render(){
    const data=[
      {
        code:'code',
        type:'1'
      }
    ]
    return(
      <div className="assetVerify-info-pages">
        <div className="aio-main-part part-same-shadow">
          <div className="box-flex aiom-top">
            <p className="card-hd">资产详情</p>
            <p className="sub-hd"><span className="label">资产编号</span>DD20200520084412</p>
            <p className="sub-hd"><span className="label">所属企业</span>成都众惠农资有限公司</p>
          </div>
          <div className="box-flex aiom-bottom">
            <Tabs defaultActiveKey="1">
              <TabPane tab="长期协议验真" key="1">
                <div>
                  <DiyChart data={protocolOptions} status={1}/>
                  <YtTable columns={columnsProtocol} dataSource={data} title={() => '长期协议验真详情'}/>
                </div>
              </TabPane>
              <TabPane tab="销售合同验真" key="2">
                <div>
                  <DiyChart data={orderOptions} status={2}/>
                  <YtTable columns={columnsOrder} dataSource={[]} title={() => '销售合同验真'}/>
                </div>
              </TabPane>
              <TabPane tab="物流发收货验真" key="3">
                <div>
                  <DiyChart data={expressOptions} status={3} rowNum={3}/>
                  <YtTable columns={columnsExpress} dataSource={[]} title={() => '物流发收货验真详情(厂方直发)'}/>
                </div>
              </TabPane>
            </Tabs>
          </div>
        </div>
      </div>
    )
  }
}

export default AssetVerifyInfo;
