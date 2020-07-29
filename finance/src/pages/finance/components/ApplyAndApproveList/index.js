import { Statistic, Progress } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { YtStatistic, YtPagination, YtTable, YtBtn } from 'common';
import ViewCardPane from '../../../components/ViewCardPane';
import FilterForm from './components/FilterForm';
import { columnsList } from './columns';
import './index.less'



const data = [
  {
    code: '1',
    key: '1',
    name: 'John Brown',
    amount: '300',
    amounted: '30',
    amountPocess: '30',
    address: 'New York No. 1 Lake Park',
  },
  {
    code: '2',
    key: '2',
    name: 'Jim Green',
    amount: '300',
    amounted: '30',
    amountPocess: '30',
    address: 'London No. 1 Lake Park',
  },
  {
    code: '3',
    key: '3',
    name: 'Joe Black',
    amount: '300',
    amounted: '30',
    amountPocess: '30',
    address: 'Sidney No. 1 Lake Park',
  },
  ];
function withSubscription(handleType,Mod) {
  return class FinanceShow extends React.Component {
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
      let columns = columnsList(handleType);
      return(
        <div className="finance-company-list-wrap yt-common-pages-wrap">
          <div className="box-flex">
            <ViewCardPane
              label="累计申请融资笔数"
              num="520">
              <div className="box-flex">
                <YtStatistic value={12} type="up">周同比</YtStatistic>
                <YtStatistic value={12} type="down">日环比</YtStatistic>
                <YtStatistic value="2笔">本日新增</YtStatistic>
              </div>
            </ViewCardPane>
            <ViewCardPane
              label="累计申请融资金额(万元)"
              num="520">
              <div className="box-flex">
                <YtStatistic value={12} type="up">周同比</YtStatistic>
                <YtStatistic value={12} type="down">日环比</YtStatistic>
                <YtStatistic value="15万元">本日新增</YtStatistic>
              </div>
            </ViewCardPane>
            <ViewCardPane
              label="已审核融资笔数"
              num="520">
              <div className="box-flex">
                <YtStatistic value={12} type="up">周同比</YtStatistic>
                <YtStatistic value={12} type="down">日环比</YtStatistic>
                <YtStatistic value="2笔">本日新增</YtStatistic>
              </div>
            </ViewCardPane>
            <ViewCardPane
              label="已审核融资金额(万元)"
              num="520">
              <div className="box-flex">
                <YtStatistic value={12} type="up">周同比</YtStatistic>
                <YtStatistic value={12} type="down">日环比</YtStatistic>
                <YtStatistic value="15万元">本日新增</YtStatistic>
              </div>
            </ViewCardPane>
          </div>
          {Mod&&<Mod />}
          <div className="main-content">
            <FilterForm />
            <YtTable
              scroll={{ x: 1300 }}
             columns={columns}
             dataSource={data}/>
            <YtPagination data={{total:500,currentPage:0,limit:15}}/>
          </div>
        </div>
      )
    }
  }
}


export default withSubscription;
