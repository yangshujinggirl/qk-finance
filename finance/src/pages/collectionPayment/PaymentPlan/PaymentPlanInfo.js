import {Collapse} from 'antd';
import {YtCard, YtBaseInfo, YtTable} from 'common';
import {columnsInfo} from './columns';
import './PaymentPlanInfo.less';
import {getPayPlan, getPayPlanDetailList} from "../../../api/collectionPayment";
import {Spin} from 'antd';

const {Panel} = Collapse;

class AccountStatement extends React.Component {
    state = {
        planId: this.props.match.params.id,
        totalSize: 1,
        list: [],
        detail: {},
        //核销状态
        writeOffStatusName: {
            1: '未核销',
            2: '部分核销',
            3: '全部核销'
        },
        loading: false
    }

    //初始化数据
    componentDidMount() {
        this.getPayPlanInfo();
    }

    //回款计划
    getPayPlanInfo = () => {
        this.setState({...this.state, loading: true});
        getPayPlan(this.state.planId).then(res => {
            let detail = res.data
            let p = {...this.state, detail, loading: false}
            this.setState(p, () => {
                this.getPayPlanLists();
            })
        })
    }
    //回款计列表
    getPayPlanLists = () => {
        getPayPlanDetailList(this.state.planId).then(res => {
            let list = res.data
            let p = {...this.state, list}
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
        let p = {...this.setState, pageNow};
        this.setState(p, () => {
            this.getPayPlanInfo();
        })
    }

    render() {
        let {list, detail, writeOffStatusName,loading} = this.state;
        return (
            <Spin spinning={loading}>
                <div className="account-statement-info-wrap">
                    <YtCard title="基础信息" bordered={true}>
                        <YtBaseInfo colSpan={12} dataInfo={[
                            {key: '融资编号', value: detail.loanNo},
                            {key: '项目名称', value: detail.projectName},
                            {key: '款项类别', value: '贷款本息'},
                            {key: '期次', value: detail.payPeriodNo},
                            {key: '款项金额', value: detail.payAmount},
                            {key: '待回款金额', value: detail.leftPayAmount},
                            {key: '待回款本金', value: detail.leftPayPrincipalAmount},
                            {key: '待回款利息', value: detail.leftPayInterest},
                            {key: '回款状态', value: writeOffStatusName[detail.writeOffStatus]},
                        ]}/>
                    </YtCard>
                    <YtCard title="回款详情" bordered={true}>
                        <YtTable
                            columns={columnsInfo}
                            dataSource={list}/>
                    </YtCard>
                </div>
            </Spin>
        )
    }
}

export default AccountStatement;
