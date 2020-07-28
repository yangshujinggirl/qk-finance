import { Link } from 'react-router-dom';

const columnsList =[
        {
        title: '序列号',
        dataIndex: 'code',
        render: text => <a>{text}</a>,
        },
        {
        title: '验证项',
        className: 'column-money',
        dataIndex: 'name',
        },
        {
        title: '企业原始数据',
        dataIndex: 'amount',
        },
        {
        title: '验真源数据',
        dataIndex: 'amounted',
        },
        {
        title: '验证结果',
        dataIndex: 'zwf',
        },
        {
          title: '操作',
          dataIndex: '操作',
          fixed: 'right',
          render:(text,record,index)=>{
            return <>
              <Link to="/account/financeApprove/info/12" className="operate-link-btn">查看</Link>
            </>
          }
        },
]

export { columnsList };
