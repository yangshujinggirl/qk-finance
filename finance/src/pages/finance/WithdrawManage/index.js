import { YtStatistic, YtPagination, YtTable, YtBtn } from 'common';
import FilterForm from './components/FilterForm';
import {columnsIndex} from './columns';
import './index.less'
import { GetLoanManagementList } from 'api/finance/FinanceManagement';

const data = [
  {
    code: '1',
    key: '1',
    name: 'John Brown',
    amount: '300',
    amounted: '+10,000.00',
    amountPocess: '+10,000.00',
    address: 'New York No. 1 Lake Park',
    time0:'2020-08-01',
    time1:'2020-08-01',
    zwf:'民生银行',
    pay:'自贡市金玉农资有限公司',
    paycode:'6226 0101 1010 0456 782'
  },
  {
    code: '2',
    key: '2',
    name: 'Jim Green',
    amount: '300',
    amounted: '10,000.00',
    amountPocess: '10,000.00',
    address: 'London No. 1 Lake Park',
    time0:'2020-08-01',
    time1:'2020-08-01',
    zwf:'民生银行',
    pay:'自贡市金玉农资有限公司',
    paycode:'6226 0101 1010 0456 782',
    test2:'网银导入'
  },
  {
    code: '3',
    key: '3',
    name: 'Joe Black',
    amount: '300',
    amounted: '10,000.00',
    amountPocess: '10,000.00',
    address: 'Sidney No. 1 Lake Park',
    time0:'2020-04-06  11:00:00',
    time1:'2020-08-01',
    zwf:'民生银行',
    pay:'自贡市金玉农资有限公司',
    paycode:'6226 0101 1010 0456 782'
  },
];
class AccountStatement extends React.Component {
		state={
			data: [],
			pagination: {totalSize:100, totalPage:5, pageNow:1, pageSize:15}
		}
		fetchLoanList=()=> {
			GetLoanManagementList({
				"pageNow": this.state.pagination.pageNow,
				"pageSize": this.state.pagination.pageSize,
				"useType": 1,
				"enterpriseName": "",
				"applyStatus": 0,
				"applyTime_Start": "2019-01-01",
				"applyTime_End": "2021-01-01"
			})
			.then((res)=> {
				console.log(res)
				this.state.data = res.data.result;
				this.state.pagination = res.data.pagination;
				this.forceUpdate();
			});
		}
		
		componentWillMount(){		
			this.fetchLoanList();
		}
		onPageChange=(currentPage, pageSize)=> {
			console.log('onPageChange:', currentPage, pageSize);
			this.state.pagination.pageNow = currentPage;
			this.fetchLoanList();
		}
    render() {
      return(
        <div className="yt-common-list-pages-wrap">
            <FilterForm />
            <YtTable
            scroll={{x:1300}}
             columns={columnsIndex}
             dataSource={this.state.data}/>
						<YtPagination data={this.state.pagination} onChange={this.onPageChange}/>
        </div>
      )
    }
}

export default AccountStatement;
