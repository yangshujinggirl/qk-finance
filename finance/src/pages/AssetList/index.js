import { Statistic, Progress } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { YtPagination, YtTable, YtBtn } from 'common';
import ViewCardPane from '../components/ViewCardPane';
import FilterForm from './components/FilterForm';
import CreatModal from './components/CreatModal';
import './index.less'

const columns = [
  {
  title: '资产编号',
  dataIndex: 'code',
  render: text => <a>{text}</a>,
  },
  {
  title: '资产金额(万元)',
  className: 'column-money',
  dataIndex: 'name',
  align: 'right',
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

class FinanceShow extends React.Component {
  state={
    visible:false
  }
  goCreat=()=> {
    this.setState({ visible:true });
  }
  onCancel=()=> {
    this.setState({ visible:false });
  }
  render() {
    const { visible } =this.state;
    return(
      <div className="finance-company-list-wrap common-two-module-wrap">
        <div className="box-flex">
          <ViewCardPane
            label="累计资产总笔数"
            num="520">
            <div className="box-flex">
              <div className="label-itm">
                周同比
                <Statistic
                  title={null}
                  value={12}
                  valueStyle={{ color: '#3f8600' }}
                  prefix={<ArrowUpOutlined />}
                  suffix="%"/>
              </div>
              <div className="label-itm">
                日环比
                <Statistic
                  title={null}
                  value={12}
                  valueStyle={{ color: '#3f8600' }}
                  prefix={<ArrowUpOutlined />}
                  suffix="%"/>
              </div>
              <div className="label-itm">
                本日新增 2笔
              </div>
            </div>
          </ViewCardPane>
          <ViewCardPane
            label="累计资产总额(万元)"
            num="520">
            <div className="box-flex">
              <div className="label-itm">
                周同比
                <Statistic
                  title={null}
                  value={12}
                  valueStyle={{ color: '#3f8600' }}
                  prefix={<ArrowUpOutlined />}
                  suffix="%"/>
              </div>
              <div className="label-itm">
                日环比
                <Statistic
                  title={null}
                  value={12}
                  valueStyle={{ color: '#3f8600' }}
                  prefix={<ArrowUpOutlined />}
                  suffix="%"/>
              </div>
              <div className="label-itm">
                本日新增 15万元
              </div>
            </div>
          </ViewCardPane>
          <ViewCardPane
            label="资产平均账期(天)"
            num="520">
            <div className="box-flex">
              <div className="label-itm">
                周同比
                <Statistic
                  title={null}
                  value={12}
                  valueStyle={{ color: '#3f8600' }}
                  prefix={<ArrowUpOutlined />}
                  suffix="%"/>
              </div>
              <div className="label-itm">
                日环比
                <Statistic
                  title={null}
                  value={12}
                  valueStyle={{ color: '#3f8600' }}
                  prefix={<ArrowUpOutlined />}
                  suffix="%"/>
              </div>
              <div className="label-itm">
                实际账期 50天
              </div>
            </div>
          </ViewCardPane>
          <ViewCardPane
            label="资产验真比率"
            num="520">
            <div className="box-flex">
              <div className="label-itm">
                周同比
                <Statistic
                  title={null}
                  value={12}
                  valueStyle={{ color: '#3f8600' }}
                  prefix={<ArrowUpOutlined />}
                  suffix="%"/>
              </div>
              <div className="label-itm">
                日环比
                <Statistic
                  title={null}
                  value={12}
                  valueStyle={{ color: '#3f8600' }}
                  prefix={<ArrowUpOutlined />}
                  suffix="%"/>
              </div>
            </div>
          </ViewCardPane>
        </div>
        <div className="handle-common-action">
          <YtBtn onClick={this.goCreat}>+资产包创建</YtBtn>
        </div>
        <div className="main-content">
          <FilterForm />
          <YtTable
           columns={columns}
           dataSource={data}/>
          <YtPagination data={{total:500,currentPage:0,limit:15}}/>
        </div>
      </div>
    )
  }
}

export default FinanceShow;
