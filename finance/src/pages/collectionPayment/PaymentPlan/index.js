import {YtMessage, YtPagination, YtTable} from 'common';
import FilterForm from './components/FilterForm';
import {columnsIndex} from './columns';
import './index.less'
import {getPayPlanList} from '../../../api/collectionPayment';
import {Spin} from 'antd';

class AccountStatement extends React.Component {
    state = {
        pageNow: 1,
        pageSize: 5,
        loanNo: 1,
        projectName: 1,
        totalSize: 1,
        list: [],
        loading: false
    }

    //初始化数据
    componentDidMount() {
        this.getPayPlanInfo();
    }

    //回款计划
    getPayPlanInfo = () => {
        let {
            pageNow,
            pageSize,
            loanNo,
            projectName,
        } = this.state;
        this.setState({...this.state, loading: true});
        getPayPlanList({
            pageNow,
            pageSize,
            loanNo,
            projectName,
        }).then(res => {
            let list = res.data.result
            let totalSize = res.data.condition.totalSize
            let p = {...this.state, list, totalSize, loading: false}
            this.setState(p)
        })
    }
    //查询
    search = ({loanNo, projectName}) => {
        let p = {...this.state, loanNo, projectName, pageNow: 1}
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
        let {totalSize, pageNow, pageSize, list, loading} = this.state
        return (
            <Spin spinning={loading}>
                <div className="yt-common-list-pages-wrap">
                    <FilterForm onSubmit={this.search}/>
                    <YtTable
                        columns={columnsIndex}
                        dataSource={list}/>
                    <YtPagination data={{totalSize, pageNow, pageSize}} onChange={this.pagination}/>
                </div>
            </Spin>
        )
    }
}

export default AccountStatement;
