import { Link } from 'react-router-dom';
import { Button } from 'antd';

const columnsIndex = [

        {
          title: '序号',
          dataIndex: 'code',
        },
        {
          title: '用户名称',
          dataIndex: 'name',
        },
        {
          title: '所属机构',
          dataIndex: 'lb',
        },
        {
          title: '状态',
          dataIndex: 'time1',
        },
        {
          title: '用户类型',
          dataIndex: 'time2',
        },
        {
          title: '创建时间',
          dataIndex: 'time3',
        },
        {
          title: '创建人',
          dataIndex: 'time4',
        },
        {
          title: '操作',
          dataIndex: '操作',
          render:(text,record,index)=>{
            return <>
              <Button type="link" onClick={()=>record.onOperateClick('edit')}>停用</Button>
              <Button type="link" onClick={()=>record.onOperateClick('delete')}>角色关联</Button>
              <Button type="link" onClick={()=>record.onOperateClick('auth')}>编辑</Button>
            </>
          }
        },
];

export {
  columnsIndex
}
