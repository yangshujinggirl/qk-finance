import { Link } from 'react-router-dom';
import { Button } from 'antd';

const columnsIndex = [

        {
          title: '序号',
          dataIndex: 'code',
        },
        {
          title: '角色名称',
          dataIndex: 'code',
        },
        {
          title: '角色中文名称',
          dataIndex: 'lb',
        },
        {
          title: '用途',
          dataIndex: 'time1',
        },
        {
          title: '操作',
          dataIndex: '操作',
          render:(text,record,index)=>{
            return <>
              <Button type="link" onClick={()=>record.onOperateClick('edit')}>编辑</Button>
              <Button type="link" onClick={()=>record.onOperateClick('delete')}>删除</Button>
              <Button type="link" onClick={()=>record.onOperateClick('auth')}>授予权限</Button>
            </>
          }
        },
];

export {
  columnsIndex
}
