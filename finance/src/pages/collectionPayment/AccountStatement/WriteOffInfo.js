import {YtCard, YtBaseInfo, YtTable} from 'common';
import {columnsInfo} from './columns';
import './WriteOffInfo.less';
import {getBankStatementDetail} from '../../../api/collectionPayment';

class AccountStatement extends React.Component {
    state = {
        pageNow: 1,
        pageSize: 5,
        loanNo: 1,
        projectName: 1,
        totalSize: 1,
        list: []
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
        } = this.state
        getBankStatementDetail({planId}).then(res => {
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
        let p = {...this.setState, pageNow};
        this.setState(p, () => {
            this.getPayPlanInfo();
        })
    }

    render() {
        return (
            <div className="account-statement-info-wrap">
                <YtCard title="基础信息" bordered={true}>
                    <YtBaseInfo colSpan={12}
                                dataInfo={[
                                    {key: '流水编号', value: '成都市众惠农资有限公司'},
                                    {key: '回款客户', value: '自贡市自流井区舒坪镇上阳村4组(原四川省自贡市五金交电化工公司1#仓库)'},
                                    {key: '回款银行', value: '9151030259995829XY'},
                                    {key: '回款银行账号', value: '6223 1789 7899 1234 0001'},
                                    {key: '核销金额', value: '10000'},
                                    {key: '剩余待核销金额', value: '0'},
                                    {key: '核销状态', value: '全部核销'},
                                ]}/>
                </YtCard>
                <YtCard title="核销详情" bordered={true}>
                    <YtTable
                        columns={columnsInfo}
                        dataSource={list}/>
                </YtCard>
            </div>
        )
    }
}

export default AccountStatement;
