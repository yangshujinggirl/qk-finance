import {Link} from 'react-router-dom';
import {Button} from 'antd';

const columnsIndex = [

    {
        title: '序号',
        dataIndex: 'id',
        render: (text, record, index) => {
            return index + 1
        }
    },
    {
        title: '用户名称',
        dataIndex: 'userName',
    },
    {
        title: '所属机构',
        dataIndex: 'orgName',
    },
    {
        title: '状态',
        dataIndex: 'userEnabledState',
        render: (text, record, index) => {
            // 1-系统 2-Fabric 3-系统及Fabric
            let typeName = {1: '启用', 0: '停用'}

            return typeName[text]
        }
    },
    {
        title: '用户类型',
        dataIndex: 'userType',
        render: (text, record, index) => {
            // 1-系统 2-Fabric 3-系统及Fabric
            let typeName = {1: '系统', 2: 'Fabric', 3: '系统及Fabric'}

            return typeName[text]
        }
    },
    // {
    //     title: '创建时间',
    //     dataIndex: 'time3',
    // },
    // {
    //     title: '创建人',
    //     dataIndex: 'time4',
    // },
    {
        title: '操作',
        dataIndex: '操作',
        render: (text, record, index) => {
            let typeName = {0: '启用', 1: '停用'}
            return <>
                <Button type="link" onClick={() => record.onOperateClick('delete')}>{typeName[record.isValid]}</Button>
                <Button type="link" onClick={() => record.onOperateClick('relate')}>角色关联</Button>
                <Button type="link" onClick={() => record.onOperateClick('edit')}>编辑</Button>
            </>
        }
    },
];

export {
    columnsIndex
}
