import {Link} from 'react-router-dom';

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
    },
    {
        title: '帐户状态',
        dataIndex: 'accountStatus',
        width: 200,
    },
    {
        title: '审批状态',
        dataIndex: 'reviewStatus',
        width: 200,
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
    },
    {
        title: '操作',
        dataIndex: '操作',
        width: 100,
        fixed: 'right',
        render: (text, record, index) => {
            return <>
                <Link to={`/account/whiteList/edit/${record.accountId}`} className="operate-link-btn">审核</Link>
                <Link to={`/account/whiteList/info/${record.accountId}`} className="operate-link-btn">查看</Link>
            </>
        }
    },
];


export {
    columnsIndex
}
