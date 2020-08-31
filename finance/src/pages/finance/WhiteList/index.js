import {YtStatistic, YtPagination, YtTable, YtBtn} from 'common';
import FilterForm from './components/FilterForm';
import {columnsIndex} from './columns';
import './index.less'
import {GetWhiteList} from '../../../api/finance/WhiteList';

class AccountStatement extends React.Component {
    state = {
        data: [],
        totalSize:1,
        param: {
            "pageNow": 1,
            "pageSize": 10,
            "accountType": "",
            "accountUsageArr": "",
            "companyFullName": "",
            "accountUsage": "",
            "reviewStatus": ""
        }
    }

    fetchLoanList = () => {
        GetWhiteList(this.state.param)
            .then((res) => {
                console.log(res)
                this.state.data = res.data.list;
                this.state.totalSize = res.data.totalSize;
                this.forceUpdate();
            });
    }

    componentWillMount() {
        this.fetchLoanList();
    }

    onPageChange = (pageNow) => {
        this.state.pagination.pageNow = pageNow;
        this.fetchLoanList();
    }
    //查询
    search = (param) => {
        let p = {...this.state.param, ...param};
        this.setState(p, () => {
            fetchLoanList(p);
        });
    }

    render() {
        let {totalSize} = this.state
        let {pageNow, pageSize} = this.state.param
        return (
            <div className="yt-common-list-pages-wrap">
                <FilterForm onSubmit={this.search}/>
                <YtTable
                    scroll={{x: 1300}}
                    columns={columnsIndex}
                    dataSource={this.state.data}/>
                <YtPagination data={{totalSize, pageNow, pageSize}} onChange={this.onPageChange}/>
            </div>
        )
    }
}

export default AccountStatement;
