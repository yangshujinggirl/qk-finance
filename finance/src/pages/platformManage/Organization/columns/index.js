import { Link } from 'react-router-dom';
import { Button } from 'antd';

const columnsIndex = [

        {
          title: '序号',
          dataIndex: 'code',
        },
        {
          title: 'UUID',
          dataIndex: 'code',
        },
        {
          title: '组织名称',
          dataIndex: 'lb',
        },
        {
          title: '是否根组织',
          dataIndex: 'time1',
        },
        {
          title: '是否有效',
          dataIndex: 'amounted',
          width: 120,
        },
        {
          title: '操作',
          dataIndex: '操作',
          render:(text,record,index)=>{
            return <>
              <Button type="link" onClick={()=>record.onOperateClick('edit')}>编辑</Button>
              <Button type="link" onClick={()=>record.onOperateClick('delete')}>删除</Button>
            </>
          }
        },
];

export {
  columnsIndex
}
