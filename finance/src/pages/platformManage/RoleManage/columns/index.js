import {Link} from 'react-router-dom';
import {Button} from 'antd';

const typeName = {
    1: '管理后台',
    2: 'Fabric'
}
const columnsIndex = [

    {
        title: '序号',
        dataIndex: 'id',
        render: (text, record, index) => {
            return index + 1
        }
    },
    {
        title: '角色名称',
        dataIndex: 'roleName',
    },
    {
        title: '角色中文名称',
        dataIndex: 'roleFullNameCn',
    },
    {
        title: '用途',
        dataIndex: 'roleUsage',
        render: (text, record, index) => {
            return typeName[text]
        }
    },
    {
        title: '操作',
        dataIndex: '操作',
        render: (text, record, index) => {
            return <>
                <Button type="link" onClick={() => record.onOperateClick('edit')}>编辑</Button>
                <Button type="link" onClick={() => record.onOperateClick('delete')}>删除</Button>
                <Button type="link" onClick={() => record.onOperateClick('auth')}>授予权限</Button>
            </>
        }
    },
];

export {
    columnsIndex
}
