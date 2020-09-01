import {Link} from 'react-router-dom';
import CommonUtils from '../../../../utils/CommonUtils'

const columns = [
    {
        title: '企业名称',
        dataIndex: 'companyName',
    },
    {
        title: '放款总额（万元）',
        dataIndex: 'loanAmount',
        render: (text, record, index) => CommonUtils.formatAmount(text)
    },
    {
        title: '应收回款额',
        dataIndex: 'payBackAmount（万元）',
        render: (text, record, index) => CommonUtils.formatAmount(text)
    },
    // {
    //     title: '操作',
    //     dataIndex: 'action',
    //     render: (text, record, index) => {
    //         return <Link to="/account/asset/financeCompany/view/9">详情</Link>
    //     }
    // },
];
// "warningType": "融资审核",
//     "warningMsg": "未通过",
//     "warningDate": "05-29 19:08:57"
export const management = [
    {
        title: '预警项',
        dataIndex: 'warningMsg',
    },
    {
        title: '预警时间',
        dataIndex: 'warningDate',
    },
    // {
    //     title: '操作',
    //     dataIndex: 'action',
    //     render: (text, record, index) => {
    //         return <Link to="/account/asset/financeCompany/view/9">详情</Link>
    //     }
    // },
];
export default columns;
