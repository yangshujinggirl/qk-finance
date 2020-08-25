import {Link} from 'react-router-dom';
import {Button} from 'antd';

const typeName = {
    1: '是', 2: '否'
}
const columnsIndex = [

    {
        title: '序号',
        dataIndex: 'key',
        render: (text, record, index) => {
            return index + 1
        }
    },
    {
        title: 'UUID',
        dataIndex: 'orgId',
    },
    {
        title: '组织名称',
        dataIndex: 'orgName',
    },
    {
        title: '是否根组织',
        dataIndex: 'isRoot',
        render: (text, record, index) => {
            return typeName[text]
        }
    },
    {
        title: '是否有效',
        dataIndex: 'isValid',
        width: 120,
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
            </>
        }
    },
];

export {
    columnsIndex
}
