import {Link} from 'react-router-dom';
import moment from 'moment';
import {utils}
// 1-未回款待还，2-已回款结清 3-部分待还
const typeName = {
    1: '未回款待还', 2: '已回款结清', 3: '部分待还'
}
const columnsIndex = [

    {
        title: '序号',
        dataIndex: 'key',
        render: (text, record, index) => {
            return index + 1
        }
    },
    {
        title: '项目名称',
        dataIndex: 'projectName',
    },
    // {
    //   title: '款项类别',//
    //   dataIndex: 'lb',
    // },
    {
        title: '期次',
        dataIndex: 'payPeriodNo',
    },
    // {
    //   title: '款项金额',//
    //   dataIndex: 'amounted',
    //   width: 120,
    // },
    {
        title: '回款状态',
        dataIndex: 'isMoneyBack',
        render: (text, record, index) => {
            return typeName[text]
        }
    },
    {
        title: '融资编号',
        dataIndex: 'loanNo',

    },
    {
        title: '还款日期',
        dataIndex: 'payDate',
        render: (text, record, index) => {
            return moment(text).format('YYYY-MM-DD hh:mm:ss')
        }
    },
    {
        title: '本金（万元）',
        dataIndex: 'payPrincipalAmount',
    },
    {
        title: '操作',
        dataIndex: '操作',
        render: (text, record, index) => {
            return <>
                <Link to={`/account/paymentPlan/info/${record.planId}`} className="operate-link-btn">详情</Link>
            </>
        }
    },
];
const columnsInfo = [
    {
        title: '序号',
        dataIndex: 'key',
        render: (text, record, index) => {
            return index + 1
        }
    },
    {
        title: '回款日期',
        dataIndex: 'moneyBackDate',
        render: (text, record, index) => {
            return moment(text).format('YYYY-MM-DD hh:mm:ss')
        }
    },
    {
        title: '回款金额',
        dataIndex: 'payAmount',
    },
    {
        title: '本金回款',
        dataIndex: 'payPrincipalAmount',
    },
    {
        title: '利息回款',
        dataIndex: 'payInterest',
    },
    {
        title: '关联流水',
        dataIndex: 'moneyBackNumber',
    },
];

export {
    columnsIndex, columnsInfo
}
