import { Input } from 'antd';
import { Form } from 'antd';

const columns=[
  {
    title: '文件大类',
    dataIndex: 'fileTypeName',
  },
  {
    title: '文件名称',
    dataIndex: 'fileName',
  },
  {
    title: '必要项',
    dataIndex: 'isRequired',
  },
  {
    title: '文件数量',
    dataIndex: 'fileNum',
  },
  {
    title: '文件说明',
    dataIndex: 'fileDesc',
    render:(text,record,index)=>{
      return <>
        {
          record.editing?
          <Form.Item name={['fields',index,'fileDesc']}>
            <Input />
          </Form.Item>
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
        {
          record.fileNum&&
          <span className="operate-link-btn" onClick={()=>record.onOperateClick('download')}>下载</span>
        }

      </>
    }
  },
]
export default columns;
