import { Table } from 'antd';
let dataSource = [
  {
    code: '1',
    name: '34%嘉施利',
    price: "1,900.00",
    amount: "9,500.00",
    num: '5',
  },
  {
    code: '2',
    name: '34%嘉施利',
    price: "1,900.00",
    amount: "9,500.00",
    num: '5',
  },
  {
    code: '3',
    name: '34%嘉施利',
    price: "1,900.00",
    amount: "9,500.00",
    num: '5',
  },
  {
    code: '4',
    name: '34%嘉施利',
    price: "1,900.00",
    amount: "9,500.00",
    num: '5',
  },
];

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
    title: '序号',
    dataIndex: 'code',
    key: 'code',
    render: (value, record, index) => {
      if (record.totalIndex == "合计") {
        return {
          children: record.totalIndex,
          props: { colSpan: 4 },
        };
      }
      return value;
    }
  },
  {
    title: '产品名称',
    dataIndex: 'name',
    key: 'name',
    render:renderContent
  },
  {
    title: '单价（元/吨）',
    dataIndex: 'price',
    key: 'price',
    render:renderContent
  },
  {
    title: '数量（吨））',
    dataIndex: 'num',
    key: 'num',
    render:renderContent
  },
  {
    title: '总价（元）',
    dataIndex: 'amount',
    key: 'amount',
    render:renderAmount
  },
];

function GoodsTable({...props}){
  const totalRow = [{
      id: 12,
      totalIndex: '合计',
      debit: 1165000,  //应当取从后台返回数据，此处为演示，所以自定义了默认值
    }]
  dataSource = [...dataSource,...totalRow];
  return <Table dataSource={dataSource} columns={columns} bordered pagination={false}/>;
}

export default GoodsTable;
