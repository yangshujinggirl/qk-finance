import { Link } from 'react-router-dom';

const columnsList =[
        {
          title: '交易时间',
          dataIndex: 'transactionTime',
          width:200,
        },
        {
          title: '交易哈希值',
          dataIndex: 'transactionHash',
          ellipsis: true,
          width:200,
        },
        {
          title: '区块高度',
          dataIndex: 'blockHeight',
        },
        {
          title: '区块哈希值',
          dataIndex: 'blockHash',
          ellipsis: true,
        },
        {
          title: '业务类型',
          dataIndex: 'type',
          width:200,
          render:()=>{
            return '资产上链'
          }
        },
        {
          title: '状态',
          dataIndex: 'zt',
          render:()=>{
            return '成功'
          }
        },
]

export { columnsList };
