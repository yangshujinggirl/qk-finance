import { YtPagination, YtTable, YtBtn } from 'common';
import { Link } from 'react-router-dom';

const columns = [
  {
  title: '资产编号',
  dataIndex: 'code',
  width:100,
  fixed:'left',
  },
  {
  title: '资产金额(万元)',
  dataIndex: 'name',
  },
  {
  title: '资产账期(天)',
  dataIndex: 'amount',
  },
  {
  title: '剩余账期(天)',
  dataIndex: 'amounted',
  },
  {
  title: '债务方',
  dataIndex: 'zwf',
  },
  {
  title: '还款方式',
  dataIndex: 'pay',
  },
  {
    title: '资产状态',
    dataIndex: 'status',
  },
  {
    title: '回款状态',
    dataIndex: 'status',
  },
  {
    title: '逾期天数',
    dataIndex: 'status',
  },
  {
    title: '资产分类',
    dataIndex: 'zcfl',
  },
  {
    title: '验真比率',
    dataIndex: 'yzbl',
  },
  {
    title: '多方验真源',
    dataIndex: 'yzy',
  },
  {
    title: '区块ID',
    dataIndex: 'qk',
  },
  {
    title: '上链节点',
    dataIndex: 'sljd',
  },
];

  function EditTable({...props}){
    const { dataSource } = props;
    const onChange=(selectedRowKeys, selectedRows) => {
      props.onSelect(selectedRows);
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    }
    const rowSelection = { type: "checkbox", onChange };
    return (
      <div>
        <YtTable
          columns={columns}
          dataSource={dataSource}
          select={true}
          rowSelection={rowSelection}
          scroll={{ x: 1300 }}/>
          {
            dataSource.length>0&&
            <YtPagination data={{total:500,currentPage:0,limit:15}}/>
          }
      </div>
    )
  }

  export default EditTable;
