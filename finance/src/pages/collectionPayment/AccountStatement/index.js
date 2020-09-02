import {YtPagination, YtTable, YtMessage} from 'common';
import FilterForm from './components/FilterForm';
import {columnsIndex} from './columns';
import './index.less'
import {getBankStatement} from '../../../api/collectionPayment';
import moment from 'moment';
import {Spin} from 'antd';

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
        list: [],
        loading: false
    }

    //初始化数据
    componentDidMount() {
        this.getBankStatements();
    }

    //银行流水明细
    getBankStatements = () => {
        this.setState({...this.state, loading: true});
        getBankStatement({...this.state.param}).then(res => {
            if (!res.data.result) {
                this.setState({...this.state, loading: false});
                return
            }
            res.data.result.forEach((item, index) => item.key = index + 1)//ant table rowkey
            let list = res.data.result
            let totalSize = res.data.pagination.totalSize
            let p = {...this.state, list, totalSize, loading: false}
            this.setState(p)
        })
    }
    //查询
    search = (values) => {
        if (values.time) {
            let [startDate, endDate] = values.time
            values.startDate = moment(startDate).format('YYYY-MM-DD');
            values.endDate = moment(endDate).format('YYYY-MM-DD');
            delete values.time;//删除多余参数
        }
        let param = {...this.state.param, ...values, pageNow: 1}
        let p = {...this.state, param}
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
        let {totalSize, list, loading} = this.state
        let {pageNow, pageSize} = this.state.param
        return (
            <Spin spinning={loading}>
                <div className="yt-common-list-pages-wrap">
                    <FilterForm onSubmit={this.search}/>
                    <YtTable
                        scroll={{x: 1300}}
                        columns={columnsIndex}
                        dataSource={list}/>
                    <YtPagination data={{totalSize, pageNow, pageSize}} onChange={this.pagination}/>
                </div>
            </Spin>
        )
    }
}

export default AccountStatement;
