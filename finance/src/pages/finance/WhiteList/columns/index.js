import {Link} from 'react-router-dom';
import {useTypeOption, approveStatusOption, useStatusOption} from '../option';
import moment from 'moment';


const columnsIndex = [
    {
        title: '组织机构代码',
        dataIndex: 'companyOrgCode',
        width: 80,
    },
    {
        title: '融资企业名称',
        dataIndex: 'companyFullName',
        width: 120,
    },
    {
        title: '账户名',
        dataIndex: 'accountName',
        width: 200,
    },
    {
        title: '银行帐户',
        dataIndex: 'accountNumber',
        width: 200,
    },
    {
        title: '开户行',
        dataIndex: 'openBankName',
        width: 120,
    },
    {
        title: '用途类型',
        dataIndex: 'accountUsage',
        width: 100,
        render: (text, record, index) => {
            return <>
                {
                    useTypeOption.map((el) => (
                        <>{el.key == record.accountUsage && el.value}</>
                    ))
                }
            </>
        }
    },
    {
        title: '帐户状态',
        dataIndex: 'accountStatus',
        width: 200,
        render: (text, record, index) => {
            return <>
                {
                    useStatusOption.map((el) => (
                        <>{el.key == record.accountStatus && el.value}</>
                    ))
                }
            </>
        }
    },
    {
        title: '审批状态',
        dataIndex: 'reviewStatus',
        width: 200,
        render: (text, record, index) => {
            return <>
                {
                    approveStatusOption.map((el) => (
                        <>{el.key == record.reviewStatus && el.value}</>
                    ))
                }
            </>
        }
    },
    {
        title: '审批人',
        dataIndex: 'reviewPerson',
        width: 100,
    },
    {
        title: '审批时间',
        dataIndex: 'reviewTime',
        width: 100,
        render: (text, record, index) => {
            return moment(text).format('YYYY-MM-DD')
        }
    },
    {
        title: '操作',
        dataIndex: '操作',
        width: 100,
        fixed: 'right',
        render: (text, record, index) => {
            return <>
                <Link to={`/account/whiteList/edit/${record.id}`} className="operate-link-btn">审核</Link>
                <Link to={`/account/whiteList/info/${record.id}`} className="operate-link-btn">查看</Link>
            </>
        }
    },
];


export {
    columnsIndex
}
