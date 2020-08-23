import {YtStatistic, YtPagination, YtTable, YtBtn} from 'common';
import FilterForm from './components/FilterForm';
import {columnsIndex} from './columns';
import './index.less'
import {getBankStatement} from '../../../api/collectionPayment';
import {YtMessage} from 'common';
import moment from 'moment';

class AccountStatement extends React.Component {

    state = {
        param: {
            pageNow: 1,
            pageSize: 5,
            bankName: '牧融氏家收款账户',
            bankAccount: '1131080913840182348',
            startDate: '',
            endDate: '',
            transactionSerialNumber: '',
            minAmount: '',
            maxAmount: '',
            reciprocalAccountName: '',
            reciprocalAccountNo: '',
        },
        totalSize: 1,
        list: []
    }

    componentDidMount() {
        //初始化数据
        this.getBankStatements();
    }

    //回款计划
    getBankStatements = () => {
        getBankStatement({...this.state.param}).then(res => {
            let list = res.data.result
            let totalSize = res.data.pagination.totalSize
            let p = {...this.state, list, totalSize}
            this.setState(p)
        })
    }
    //查询
    search = (param) => {
        let [startDate, endDate] = param.time
        param.startDate = moment(startDate).format('YYYY-MM-DD');
        param.endDate = moment(endDate).format('YYYY-MM-DD');
        delete param.time;

        // let p= {...this.state,param}
        let p = Object.assign(this.state, {param})
        console.log(p)
        this.setState(p, () => {
            this.getBankStatements();
        })

    }
    //分页
    pagination = (pageNow) => {
        let p = {...this.setState, pageNow};
        this.setState(p, () => {
            this.getBankStatements();
        })

    }

    render() {
        let {totalSize, list} = {...this.state}
        let {pageNow, pageSize} = {...this.state.param}

        return (
            <div className="yt-common-list-pages-wrap">
                <FilterForm onSubmit={this.search}/>
                <YtTable
                    scroll={{x: 1300}}
                    columns={columnsIndex}
                    dataSource={list}/>
                <YtPagination data={{totalSize, pageNow, pageSize}} onChange={this.pagination}/>
            </div>
        )
    }
}

export default AccountStatement;
