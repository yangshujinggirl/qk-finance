import { Table, Progress, Tabs } from 'antd';
import { Link } from 'react-router-dom';
import { YtBreadcrumbName, YtTable, YtBtn, YtPagination, YtCard } from 'common';
import AssetChangeChart from './components/AssetChangeChart';
import AssetPaymentChart from './components/AssetPaymentChart';
import AssetStatusChart from './components/AssetStatusChart';
import AssetInfoHead from '../components/AssetInfoHead';
import SubCrumb from '../components/SubCrumb';
import ProcessChart from './components/ProcessChart';
import CreatModal from './components/CreatModal';
import columns from './columns';
import './index.less';

const { TabPane } = Tabs;



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
  state={
    visible:false
  }
  callback=(key)=> {
    console.log(key);
  }
  goDelete=(key)=> {
    console.log(key);
  }
  goCreat=(key)=> {
    this.setState({ visible:true })
  }
  onOk=()=> {
    this.setState({ visible:false })
  }
  onCancel=()=> {
    this.setState({ visible:false })
  }
  render(){
    const rowSelection = {
      type: "checkbox",
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
    };
    const { params } =this.props.match;
    const { visible } =this.state;
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
          <SubCrumb data={linkList} active="1"/>
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
                     <YtBtn onClick={this.goDelete}>删除</YtBtn>
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
        <CreatModal  visible={visible} onOk={this.onOk} onCancel={this.onCancel}/>
      </>
    )
  }
}

export default AssetPackageInfo;
