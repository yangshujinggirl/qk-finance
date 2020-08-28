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
  dataIndex: 'realDate',
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
    dataIndex: 'checkStatus',
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
      let arr=[];
      selectedRows.map((el)=> { arr.push(el.assetNo) })
      props.onSelect(arr);
    }
    const rowSelection = { type: "checkbox", onChange };
    return (
      <div>
        <YtTable
          columns={columns}
          dataSource={dataSource}
          select={true}
          rowSelection={rowSelection}/>
      </div>
    )
  }

  export default EditTable;
