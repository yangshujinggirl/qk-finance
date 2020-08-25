import {Collapse} from 'antd';
import {YtCard, YtBaseInfo, YtTable} from 'common';
import {columnsInfo} from './columns';
import './PaymentPlanInfo.less';
import {getPayPlan} from "../../../api/collectionPayment";

const {Panel} = Collapse;

class AccountStatement extends React.Component {
    state = {
        planId: this.props.match.params.id,
        data: []
    }

    //初始化数据
    componentDidMount() {
        this.getPayPlanInfo();
    }

    //回款计划
    getPayPlanInfo = () => {
        getPayPlan({planId: this.state.planId}).then(res => {
            let data = res.data.result
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
        let p = {...this.setState, pageNow};
        this.setState(p, () => {
            this.getPayPlanInfo();
        })
    }

    render() {
        let {data} = this.state
        return (
            <div className="account-statement-info-wrap">
                <YtCard title="基础信息" bordered={true}>
                    <YtBaseInfo colSpan={12} dataInfo={[
                        {key: '融资编号', value: '成都市众惠农资有限公司'},
                        {key: '项目名称', value: '自贡市自流井区舒坪镇上阳村4组(原四川省自贡市五金交电化工公司1#仓库)'},
                        {key: '款项类别', value: '9151030259995829XY'},
                        {key: '期次', value: '6223 1789 7899 1234 0001'},
                        {key: '款项金额', value: '10000'},
                        {key: '待回款金额', value: '0'},
                        {key: '待回款本金', value: '全部核销'},
                        {key: '待回款利息', value: '全部核销'},
                        {key: '回款状态', value: '全部核销'},
                    ]}/>
                </YtCard>
                <YtCard title="回款详情" bordered={true}>
                    <YtTable
                        columns={columnsInfo}
                        dataSource={data}/>
                </YtCard>
            </div>
        )
    }
}

export default AccountStatement;
