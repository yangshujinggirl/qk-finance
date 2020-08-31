import { Link } from 'react-router-dom';

const columnsIndex = [
        {
          title: '组织机构代码',
          dataIndex: 'code',
          width: 80,
        },
        {
          title: '融资企业名称',
          dataIndex: 'companyFullName',
          width: 120,
        },
        {
          title: '账户名',
          dataIndex: 'time0',
          width: 200,
        },
        {
          title: '银行帐户',
          dataIndex: 'time1',
          width:200,
        },
        {
          title: '开户行',
          dataIndex: 'amounted',
          width: 120,
        },
        {
          title: '用途类型',
          dataIndex: 'zwf',
          width: 100,
        },
        {
          title: '帐户状态',
          dataIndex: 'pay',
          width: 200,
        },
        {
          title: '审批状态',
          dataIndex: 'paycode',
          width: 200,
        },
        {
          title: '审批人',
          dataIndex: 'use',
          width: 100,
        },
        {
          title: '审批时间',
          dataIndex: 'test1',
          width: 100,
        },
        {
          title: '操作',
          dataIndex: '操作',
          width: 100,
          fixed: 'right',
          render:(text,record,index)=>{
            return <>
              <Link to="/account/whiteList/edit/12" className="operate-link-btn">审核</Link>
              <Link to="/account/whiteList/info/12" className="operate-link-btn">查看</Link>
            </>
          }
        },
];


export {
  columnsIndex
}
