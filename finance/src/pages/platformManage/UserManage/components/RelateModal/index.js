import {Modal, Button, Table} from 'antd';
import './index.less';
import {relateUser, getRelateUserList} from '../../../../../api/platformManage/UserManage.js'
import {YtMessage, YtPagination, YtTable} from 'common';
import {useState, useEffect} from 'react';

const columns = [
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
        dataIndex: 'userEnabledState',
        render: (text, record, index) => {
            // 1-系统 2-Fabric 3-系统及Fabric
            let typeName = {1: '启用', 0: '停用'}

            return typeName[text]
        }
    },
];

const RelateModal = ({...props}) => {
    const {relatedUser} = props
    const [selectedRowKeys, setSelectedRowKeys] = useState(relatedUser);
    const [relateUserList, setRelateUserList] = useState([]);
    const [totalSize, setTotalSize] = useState(1);
    const [param, setParam] = useState({
        pageNow: 1,
        pageSize: 5,
    });
    const {
        pageNow,
        pageSize,
    } = {...param}
    //表格选中实时回显
    useEffect(() => {
        if (relatedUser.length) {
            setSelectedRowKeys(relatedUser);
        }
    }, [relatedUser]);
    //获取用户数据
    useEffect(() => {
        getRelateUserLists();
    }, []);
    // 角色关联列表API
    const getRelateUserLists = () => {
        getRelateUserList(param).then(res => {
            setTotalSize(res.data.pagination.totalSize)
            res.data.result.forEach(item => {
                item.key = item.roleId;
            })
            setRelateUserList(res.data.result)
        })
    }
    //分页
    const pagination = (pageNow) => {
        let p = {...param, pageNow};
        setParam(p);
        getRelateUserLists(p);
    }
    //确定关联
    const handleOk = async () => {
        let {id, userId} = props.data
        relateUser({
            id,
            roleIds: selectedRowKeys.join(','),
            userId
        }).then(res => {
            YtMessage.success('操作成功');
            setSelectedRowKeys([])
            setTimeout(() => {
                props.onOk && props.onOk();
            }, 500)
        }).finally(() => {
            //清空选择
            setTimeout(() => {
                setSelectedRowKeys([])
            }, 500)
        })
    };
    //取消选择
    const handleCancel = (e) => {
        setSelectedRowKeys([])
        props.onCancel()
    };
    //表格选择配置
    const rowSelection = {
        selectedRowKeys,
        onChange: selectedRowKeys => {
            setSelectedRowKeys(selectedRowKeys)
        },
    };
    return (
        <Modal
            width={520}
            title="角色关联"
            visible={props.visible === 2}
            onOk={handleOk}
            onCancel={handleCancel}
            className="creat-modal">
            <YtTable
                rowSelection={rowSelection}
                columns={columns}
                dataSource={relateUserList}
            />
            <YtPagination data={{totalSize, pageNow, pageSize}}
                          onChange={pagination}/>
        </Modal>
    );
}

export default RelateModal;
