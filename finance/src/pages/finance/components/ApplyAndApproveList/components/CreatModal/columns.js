import { Input } from 'antd';

const columns=[
  {
    title: '文件大类',
    dataIndex: 'code',
  },
  {
    title: '文件名称',
    dataIndex: 'code',
  },
  {
    title: '必要项',
    dataIndex: 'code',
  },
  {
    title: '文件数量',
    dataIndex: 'code',
  },
  {
    title: '文件说明',
    dataIndex: 'code',
    render:(text,record,index)=>{
      return <>
        {
          record.editing?
          <Input />
          :
          text
        }
      </>
    }
  },{
    title: '操作',
    dataIndex: '操作',
    fixed: 'right',
    width: 100,
    render:(text,record,index)=>{
      return <>
        {
          record.editing?
          <span className="operate-link-btn" onClick={()=>record.onOperateClick('save')}>保存</span>
          :
          <span className="operate-link-btn" onClick={()=>record.onOperateClick('edit')}>编辑</span>
        }
        <span className="operate-link-btn" onClick={()=>record.onOperateClick('download')}>下载</span>
      </>
    }
  },
]
export default columns;
