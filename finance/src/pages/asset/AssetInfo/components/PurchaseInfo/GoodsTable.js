import { Table } from 'antd';


const renderContent = (value, record, index) => {
  const obj = {
    children: value,
    props: {},
  };
  if(record.totalIndex) {
    obj.props.colSpan = 0;
    return obj;
  }
  return value;
};
const renderAmount = (value, record, index) => {
  const obj = {
    children: value,
    props: {},
  };
  if (record.totalIndex) {
    obj.children = record.debit;
    return obj;
  }
  return value;
};

const columns = [
  {
    title: '产品名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '单价（元/吨）',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: '数量（吨））',
    dataIndex: 'num',
    key: 'num',
  },
  {
    title: '总价（元）',
    dataIndex: 'amount',
    key: 'amount',
  },
];

function GoodsTable({...props}){

  return <Table dataSource={props.dataSource} columns={columns} bordered pagination={false}/>;
}

export default GoodsTable;
