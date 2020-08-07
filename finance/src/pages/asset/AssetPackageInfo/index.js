import { Table, Progress, Tabs } from 'antd';
import { Link } from 'react-router-dom';
import { YtBreadcrumbName, YtTable, YtBtn, YtPagination, YtCard } from 'common';
import AssetChangeChart from './components/AssetChangeChart';
import AssetPaymentChart from './components/AssetPaymentChart';
import AssetStatusChart from './components/AssetStatusChart';
import AssetInfoHead from '../components/AssetInfoHead';
import ProcessChart from './components/ProcessChart';
import './index.less';

const { TabPane } = Tabs;

const columns = [
  {
  title: '资产编号',
  dataIndex: 'code',
  },
  {
  title: '资产金额(万元)',
  dataIndex: 'name',
  },
  {
  title: '资产账期(天)',
  dataIndex: 'amount',
  },
  {
  title: '剩余账期(天)',
  dataIndex: 'amounted',
  },
  {
  title: '债务方',
  dataIndex: 'zwf',
  },
  {
  title: '还款方式',
  dataIndex: 'pay',
  },
  {
  title: '资产状态',
  dataIndex: 'status',
  },
  {
  title: '资产包选用',
  dataIndex: 'use',
  },
  {
  title: '资金方选用',
  dataIndex: 'finuse',
  },
  ];

const data = [
  {
  code: '1',
  key: '1',
  name: 'John Brown',
  amount: '￥300,000.00',
  amounted: '￥300,000.00',
  amountPocess: '￥300,000.00',
  address: 'New York No. 1 Lake Park',
  },
  {
  code: '2',
  key: '2',
  name: 'Jim Green',
  amount: '￥1,256,000.00',
  amounted: '￥1,256,000.00',
  amountPocess: '￥1,256,000.00',
  address: 'London No. 1 Lake Park',
  },
  {
  code: '3',
  key: '3',
  name: 'Joe Black',
  amount: '￥120,000.00',
  amounted: '￥120,000.00',
  amountPocess: '￥120,000.00',
  address: 'Sidney No. 1 Lake Park',
  },
  ];

class AssetPackageInfo extends React.Component {
  callback=(key)=> {
    console.log(key);
  }
  render(){
    const rowSelection = {
      type: "checkbox",
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
    };
    const { params } =this.props.match;
    const processData=[
      {
        value:'8%',
        key:'损失',
      },
      {
        value:'12%',
        key:'可疑',
      },
      {
        value:'20%',
        key:'次级',
      },
      {
        value:'25%',
        key:'关注',
      },
      {
        value:'35%',
        key:'正常',
      }]
    return(
      <>
        <YtBreadcrumbName>
          <div className="sub-crumb">
            <Link to={`/account/asset/packageView/info/${params.id}`} className="operate-link-btn">资产包详情</Link>
            <Link to={`/account/asset/packageView/verifyInfo/${params.id}`} className="operate-link-btn">验真详情</Link>
          </div>
        </YtBreadcrumbName>
        <div className="asset-package-info-pages-wrap">
          <AssetInfoHead>
            <div><YtBtn size="free">过滤异常数据</YtBtn></div>
          </AssetInfoHead>
          <div className="three-module-wrap common-column-module-wrap">
            <div className="part-same-shadow module-equal-thr-wrap">
              <AssetChangeChart />
            </div>
            <div className="part-same-shadow module-equal-thr-wrap">
              <AssetPaymentChart />
            </div>
            <div className="two-row-mod module-equal-thr-wrap">
               <YtCard title="资产状态" className="part-same-shadow">
                  <ProcessChart data={processData}/>
               </YtCard>
               <YtCard title="资产集中度" className="part-same-shadow" extra={<span>合计90%</span>}>
                  <div className="asset-focus">
                    <div className="process-item">
                      滑县鑫农农资有限公司
                      <Progress percent={30} />
                    </div>
                    <div className="process-item">
                      滑县鑫农农资有限公司
                      <Progress percent={30} />
                    </div>
                    <div className="process-item">
                      滑县鑫农农资有限公司
                      <Progress percent={30} />
                    </div>
                  </div>
               </YtCard>
            </div>
          </div>
          <div className="tab-list-wrap yt-common-list-pages-wrap">
            <Tabs defaultActiveKey="1" onChange={this.callback}>
               <TabPane tab="资产数据" key="1">
                  <div>
                   <div className="handle-common-action">
                     <YtBtn onClick={this.goCreat}>新增</YtBtn>
                     <YtBtn onClick={this.goCreat}>删除</YtBtn>
                   </div>
                     <YtTable
                      rowSelection={rowSelection}
                      select={true}
                      columns={columns}
                      dataSource={data}/>
                  </div>
               </TabPane>
               <TabPane tab="异常数据" key="2">
                 <YtTable
                  rowSelection={rowSelection}
                  select={true}
                  columns={columns}
                  dataSource={data}/>
               </TabPane>
            </Tabs>
            <YtPagination data={{total:500,currentPage:0,limit:15}}/>
          </div>
        </div>
      </>
    )
  }
}

export default AssetPackageInfo;
