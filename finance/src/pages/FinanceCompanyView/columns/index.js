import { Link } from 'react-router-dom';

const columnsList =[
  {
  title: '排名',
  dataIndex: 'code',
  render: text => <a>{text}</a>,
  },
  {
  title: '企业名称',
  className: 'column-money',
  dataIndex: 'name',
  },
  {
  title: '资产金额',
  dataIndex: 'amount',
  },
  {
  title: '融资金额',
  dataIndex: 'amounted',
  },
]

export { columnsList };
