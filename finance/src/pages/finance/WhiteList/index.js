import { YtStatistic, YtPagination, YtTable, YtBtn } from 'common';
import FilterForm from './components/FilterForm';
import {columnsIndex} from './columns';
import './index.less'
import { GetWhiteList } from '../../../api/finance/WhiteList';

class AccountStatement extends React.Component {
		state={
			data: [],
			pagination: {totalSize:100, totalPage:5, pageNow:1, pageSize:15}
		}

		fetchLoanList=()=> {
			GetWhiteList({
				"pageNow": this.state.pagination.pageNow,
				"pageSize": this.state.pagination.pageSize,
				"accountType": "1",
				"accountUsageArr": "2,3,4",
				"companyFullName": "",
				"accountUsage": "",
				"reviewStatus": ""
			})
			.then((res)=> {
				console.log(res)
				this.state.data = res.data.list;
				this.state.pagination.totalSize = res.data.totalSize;
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
