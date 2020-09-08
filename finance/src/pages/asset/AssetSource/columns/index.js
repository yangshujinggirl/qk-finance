import { Link } from 'react-router-dom';

const columns =[
        {
          title: '序号',
          dataIndex: 'key',
        },
        {
          title: '更新时间',
          dataIndex: 'updateDate',
          width:200
        },
        {
          title: '更新组织名称',
          dataIndex: 'orgName',
          width:200
        },
        {
          title: '区块交易ID',
          dataIndex: 'txId',
        },
        {
          title: '说明',
          dataIndex: 'explain',
        },
]

export default columns;
