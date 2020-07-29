import { Link } from 'react-router-dom';

const columns =[
        {
          title: '序号',
          dataIndex: 'code',
          render:(text,record,index)=> {
            return <Link to="/account">{text}</Link>
          }
        },
        {
          title: '更新时间',
          dataIndex: 'code',
        },
        {
          title: '更新组织名称',
          dataIndex: 'type',
        },
        {
          title: '区块链hash值',
          dataIndex: 'rq',
        },
        {
          title: '区块高度',
          dataIndex: 'je',
        },
        {
          title: '说明',
          dataIndex: 'mark',
        },
]

export default columns;
