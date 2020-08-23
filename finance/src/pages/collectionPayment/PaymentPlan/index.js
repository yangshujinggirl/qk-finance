import {YtStatistic, YtPagination, YtTable, YtBtn} from 'common';
import FilterForm from './components/FilterForm';
import {columnsIndex} from './columns';
import './index.less'
import {getPayPlanList} from '../../../api/collectionPayment';
import {YtMessage} from 'common';

class AccountStatement extends React.Component {
    state = {
        pageNow: 1,
        pageSize: 5,
        loanNo: 1,
        projectName: 1,
        totalSize: 1,
        list: []
    }

    componentDidMount() {
        //初始化数据
        this.getPayPlanInfo();
    }

    //回款计划
    getPayPlanInfo = () => {
        let {
            pageNow,
            pageSize,
            loanNo,
            projectName,
        } = this.state
        getPayPlanList({
            pageNow,
            pageSize,
            loanNo,
            projectName,
        }).then(res => {
            let list = res.data.result
            let totalSize = res.data.condition.totalSize
            let p = {...this.state, list, totalSize}
            this.setState(p)
        })
    }
    //查询
    search = ({loanNo, projectName}) => {
        let p = {...this.state, loanNo, projectName}
        this.setState(p, () => {
            this.getPayPlanInfo();
        })

    }
    //分页
    pagination = (pageNow) => {
        console.log(pageNow);
        let p = {...this.setState, pageNow};
        this.setState(p, () => {
            this.getPayPlanInfo();
        })

    }

    render() {
        let {totalSize, pageNow, pageSize, list} = this.state
        return (
            <div className="yt-common-list-pages-wrap">
                <FilterForm onSubmit={this.search}/>
                <YtTable
                    columns={columnsIndex}
                    dataSource={list}/>
                <YtPagination data={{totalSize, pageNow, pageSize}} onChange={this.pagination}/>
            </div>
        )
    }
}

export default AccountStatement;
