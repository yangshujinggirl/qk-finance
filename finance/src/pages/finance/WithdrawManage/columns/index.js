import {Link} from 'react-router-dom';
import moment from 'moment';
import CommonUtils from '../../../../utils/CommonUtils'

const columnsIndex = [
    {
        title: '序列号',
        dataIndex: 'id',
        width: 80,
    },
    {
        title: '请款单号',
        dataIndex: 'applyNo',
        width: 120,
    },
    {
        title: '请款时间',
        dataIndex: 'applyTime',
        width: 200,
        render: (text, record, index) => {
            return moment(text).format('YYYY-MM-DD')
        }
    },
    {
        title: '融资编号',
        dataIndex: 'loanNo',
        width: 200,
    },
    {
        title: '融资企业',
        dataIndex: 'enterpriseName',
        width: 120,
    },
    {
        title: '融资金额（万元）',
        dataIndex: 'loanAmount',
        width: 100,
        render: (text, record, index) => CommonUtils.formatAmount(text)
    },
    // {
    //     title: '年化利率%',
    //     dataIndex: 'loanRate',
    //     width: 200,
    // },
    {
        title: '用途类型',
        dataIndex: 'useType',
        width: 200,
        render: (text, record, index) => {
            // 请款类型-用途类型：1-再经营，2-还贷 3-提取利润
            let typeName = {
                1: '再经营',
                2: '还贷',
                3: '提取利润',
            }
            return typeName[text]
        }
    },
    {
        title: '请款金额（万元）',
        dataIndex: 'purchaseAmount',
        width: 100,
        render: (text, record, index) => CommonUtils.formatAmount(text)
    },
    {
        title: '收款方',
        dataIndex: 'receiverName',
        width: 100,
    },
    {
        title: '审批状态',
        dataIndex: 'loanStatus',
        width: 100,
        render: (text, record, index) => {
            let typeName = {
                1: '已提交申请审核',
                2: '申请审核未通过',
                3: '待提交放款',
                4: '已提交放款审核',
                5: '放款审核不通过',
                6: '已放款',
                7: '已放款存续中',
                8: '待确认还款审核',
                9: '已结束',
            }
            return typeName[text]
        }
    },
    // {
    //     title: '实际放款时间',
    //     dataIndex: 'payTime',
    //     width: 100,
    //     render: (text, record, index) => {
    //         return moment(text).format('YYYY-MM-DD')
    //     }
    // },
    {
        title: '操作',
        width: 100,
        fixed: 'right',
        render: (text, record, index) => {
            return <>
                <Link to={`/account/withdraw/info/${record.applyId}`} className="operate-link-btn">查看</Link>
                <Link to={`/account/withdraw/edit/${record.applyId}`} className="operate-link-btn">审批</Link>
            </>
        }
    },
];
const columnsVoucher = [
    {
        title: '序号',
        dataIndex: 'key',
        render: (text, record, index) => index + 1
    },
    {
        title: '编号',
        dataIndex: 'contractNo',
    },
    {
        title: '凭证类型',
        dataIndex: 'address',
        render: (text, record, index) => {
            return '文件'
        }
    },
    {
        title: '名称',
        render: (text, record, index) => '预存款合同'
    },
    {
        title: '金额（万元)',
        dataIndex: 'purchaseAmount',
        render: (text, record, index) => CommonUtils.formatAmount(text)
    },
    {
        title: '操作',
        dataIndex: '操作',
        width: 100,
        fixed: 'right',
        render: (text, record, index) => {
            return <>
                <span className="operate-link-btn">预览</span>
            </>
        }
    },
]
const columnsRecord = [
    {
        title: '序号',
        render: (text, record, index) => index + 1
    },
    {
        title: '请款编号',
        dataIndex: 'apply_no',
    },
    {
        title: '请款时间',
        dataIndex: 'apply_time',
    },
    {
        title: '请款类型',
        dataIndex: 'end',
        render: (text, record, index) => {
            // 请款类型（OP(1,"再经营"),RP(2,"偿还融资贷款"),TQ(3,"提取利润")）
            let typeName = {
                1: '再经营',
                2: '偿还融资贷款',
                3: '提取利润',
            }
            return typeName[text]
        }
    },
    // {
    //     title: '关联文件',
    //     dataIndex: 'amount',
    //     key: 'address',
    // },
    {
        title: '本次请款金额（万元)',
        dataIndex: 'loan_amount',
        render: (text, record, index) => CommonUtils.formatAmount(text)
    },
    {
        title: '收款方',
        dataIndex: 'receiver_name',
    },
    // {
    //     title: '本次请款金额',
    //     dataIndex: 'lx',
    //     key: 'address',
    // },
    {
        title: '收款方银行',
        dataIndex: 'receiver_open_bank',
    },
    {
        title: '收款方银行账户名',
        dataIndex: 'receiver_account_name',
    },
    {
        title: '收款方银行账号',
        dataIndex: 'receiver_account_no',
    },
    {
        title: '审核状态',
        dataIndex: 'status',
        render: (text, record, index) => {
            let typeName = {
                1: '已提交申请审核',
                2: '申请审核未通过',
                3: '待提交放款',
                4: '已提交放款审核',
                5: '放款审核不通过',
                6: '已放款',
                7: '已放款存续中',
                8: '待确认还款审核',
                9: '已结束',
            }
            return typeName[text]
        }
    },
    {
        title: '审核意见',
        dataIndex: 'comments',
    },
]
export {
    columnsIndex, columnsVoucher, columnsRecord
}
