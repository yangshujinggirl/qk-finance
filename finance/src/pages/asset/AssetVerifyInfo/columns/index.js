import { Link } from 'react-router-dom';

const columnsProtocol =[
        {
          title: '序号',
          dataIndex: 'code',
          render:(text,record,index)=> {
            return <Link to="/account">{text}</Link>
          }
        },
        {
          title: '验证项',
          dataIndex: 'code',
        },
        {
          title: '设备账号信息',
          dataIndex: 'type',
        },
        {
          title: '验真源数据',
          dataIndex: 'rq',
        },
        {
          title: '验证结果',
          dataIndex: 'je',
        },
]
const columnsOrder =[
        {
          title: '序号',
          dataIndex: 'code',
          render:(text,record,index)=> {
            return <Link to="/account">{text}</Link>
          }
        },
        {
          title: '验证项',
          dataIndex: 'code',
        },
        {
          title: '企业原始数据',
          dataIndex: 'type',
        },
        {
          title: '验真数据源',
          dataIndex: 'rq',
        },
        {
          title: '验证结果',
          dataIndex: 'je',
        },
]
const columnsExpress =[
        {
          title: '序号',
          dataIndex: 'code',
          render:(text,record,index)=> {
            return <Link to="/account">{text}</Link>
          }
        },
        {
          title: '验证项',
          dataIndex: 'code',
        },
        {
          title: '待验真数据',
          dataIndex: 'type',
        },
        {
          title: '验真数据源',
          dataIndex: 'rq',
        },
        {
          title: '验证结果',
          dataIndex: 'je',
        },
]

export {
  columnsProtocol,columnsOrder,columnsExpress
};
