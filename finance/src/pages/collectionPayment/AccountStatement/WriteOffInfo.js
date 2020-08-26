import {YtCard, YtBaseInfo, YtTable} from 'common';
import {columnsInfo} from './columns';
import './WriteOffInfo.less';
import {getBankStatementDetail, getBankStatementDetaillist} from '../../../api/collectionPayment';

class AccountStatement extends React.Component {
    state = {
        param: {
            pageNow: 1,
            pageSize: 5,
            transactionSerialNumber: this.props.match.params.id,
        },
        totalSize: 1,
        list: [],
        detail: {},
        //核销状态
        writeOffStatusName: {
            1:'未核销',
            2:'部分核销',
            3:'全部核销'
        }
    }

    //初始化数据
    componentDidMount() {
        this.getBankStatementDetails();
    }

    //核销详情
    getBankStatementDetails = () => {
        let {
            transactionSerialNumber
        } = this.state.param;
        let {
            writeOffStatusName
        } = this.state
        getBankStatementDetail(transactionSerialNumber).then(r => {
            let detail = r.data.bankTransactionFlowVO;
            let p = {...this.state, detail}
            this.setState(p, () => {
                this.getBankStatementDetaillists()
            })
        })
    }
    //核销详情列表
    getBankStatementDetaillists = () => {
        getBankStatementDetaillist({...this.state.param}).then(res => {
            let list = res.data.result
            let totalSize = res.data.pagination.totalSize
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
        let {list, detail,writeOffStatusName} = this.state
        return (
            <div className="account-statement-info-wrap">
                <YtCard title="基础信息" bordered={true}>
                    <YtBaseInfo colSpan={12}
                                dataInfo={ [
                                    {key: '流水编号', value: detail.transactionSerialNumber},
                                    {key: '回款客户', value: detail.accountName},
                                    {key: '回款银行', value: detail.bankName},
                                    {key: '回款银行账号', value: detail.accountNumber},
                                    {key: '核销金额', value: detail.writeOffAmount},
                                    {key: '剩余待核销金额', value: detail.surplusAmount},
                                    {key: '核销状态', value: writeOffStatusName[detail.writeOffStatus]},
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
