import { YtPagination, YtTable, YtBtn } from 'common';
import { Link } from 'react-router-dom';

const columns = [
  {
  title: '资产编号',
  dataIndex: 'code',
  },
  {
  title: '资产金额(万元)',
  dataIndex: 'name',
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
    title: '资产状态',
    dataIndex: 'status',
  },
  {
    title: '验真状态',
    dataIndex: 'status',
  },{
    title: '操作',
    dataIndex: 'action',
    render:(text,record,index)=> {
      return <Link to="">查看</Link>
    }
  }
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
          rowSelection={rowSelection}/>
          {
            dataSource.length>0&&
            <YtPagination data={{total:500,currentPage:0,limit:15}}/>
          }
      </div>
    )
  }

  export default EditTable;
