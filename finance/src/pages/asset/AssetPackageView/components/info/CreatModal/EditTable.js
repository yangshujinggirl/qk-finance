import { YtPagination, YtTable, YtBtn } from 'common';
import { Link } from 'react-router-dom';

const columns = [
  {
    title: '资产编号',
    dataIndex: 'assetNo',
  },
  {
    title: '资产金额(万元)',
    dataIndex: 'orderAmount',
  },
  {
    title: '剩余账期(天)',
    dataIndex: 'realDay',
  },
  {
    title: '债务方',
    dataIndex: 'orderSourceCompany',
  },
  {
    title: '资产状态',
    dataIndex: 'assetStatus',
  },
  {
    title: '验真状态',
    dataIndex: 'status',
  },
];

  function EditTable({...props}){
    const { dataSource, dataPag } = props;
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
          rowSelection={rowSelection}/>
          {
            dataSource.length>0&&
            <YtPagination data={dataPag}/>
          }
      </div>
    )
  }

  export default EditTable;
