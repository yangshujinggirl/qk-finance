import { Table } from 'antd';
import NP from 'number-precision';

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
    dataIndex: 'productName',
    key: 'productName',
    render:renderContent
  },
  {
    title: '单价（元/吨）',
    dataIndex: 'unitPrice',
    key: 'unitPrice',
    render:renderContent
  },
  {
    title: '数量（吨））',
    dataIndex: 'purchaseQuantity',
    key: 'purchaseQuantity',
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
  let { dataSource } =props;
  let sum=0;
  dataSource.map((el)=>{
    el.amount = NP.times(el.purchaseQuantity,el.unitPrice);
    sum = NP.plus(sum, el.amount);
  })

  const totalRow = [{
      id: 12,
      totalIndex: '合计',
      debit: sum,  //应当取从后台返回数据，此处为演示，所以自定义了默认值
    }]
  dataSource = [...dataSource,...totalRow];
  return <Table dataSource={dataSource} columns={columns} bordered pagination={false}/>;
}

export default GoodsTable;
