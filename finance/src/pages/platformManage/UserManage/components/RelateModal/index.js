import {Modal, Button, Table} from 'antd';
import './index.less';
import {relateUser, getRelateUserList} from '../../../../../api/platformManage/UserManage.js'
import {YtMessage, YtPagination} from 'common';
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

const CreatModal = ({...props}) => {
    const [relateUserList, setRelateUserList] = useState([]);
    const [selectedRowKeys, setSelectedRowKeys] = useState([1, 2]);
    const [totalSize, setTotalSize] = useState(1);
    const [param, setParam] = useState({
        pageNow: 1,
        pageSize: 5,
    });
    const {
        pageNow,
        pageSize,
    } = {...param}
    // 角色关联列表API
    const getRelateUserLists = () => {
        getRelateUserList(param).then(res => {
            setTotalSize(res.data.pagination.totalSize)
            setRelateUserList(res.data.result)
        })
    }
    //获取用户数据
    useEffect(() => {
        getRelateUserLists();
    }, []);

    //分页
    const pagination = (pageNow) => {
        let p = {...param, pageNow};
        setParam(p);
        getRelateUserLists(p);
    }
    const handleOk = async () => {
        try {
            let {id, userId} = props.data
            //角色关联
            relateUser({
                id,
                roleIds: "F5AYQN706K6CUL7WPJTXQ1JQ9BKX771M,WWL61OLG0FEKQQ7CFOXGLNMOZ7W57O08",
                userId
            }).then(res => {
                YtMessage.success('操作成功');
                props.onOk && props.onOk();
            })
        } catch (errorInfo) {
            YtMessage.error('操作失败');
            console.log("Failed:", errorInfo);
        }
    };
    const handleCancel = (e) => {
        props.onCancel()
    };
    const rowSelection = {
        selectedRowKeys,
        onChange: (idx, e) => {
            let p = {...selectedRowKeys, e}
            setSelectedRowKeys(e)
            console.log(selectedRowKeys);
        },
    };
    return (
        <Modal
            width={520}
            title="角色关联"
            visible={props.visible === 2}
            onOk={handleOk}
            onCancel={handleCancel}
            className="creat-modal"
            footer={null}>
            <div>
                <Table
                    rowSelection={rowSelection}
                    columns={columns}
                    dataSource={relateUserList}
                />
                <YtPagination data={{totalSize, pageNow, pageSize}}
                              onChange={pagination}/>
                <div className="handle-item">
                    <Button onClick={handleCancel} className="reset-btn">取消</Button>
                    <Button type="primary" onClick={handleOk} className="creat-btn">保存</Button>
                </div>
            </div>
        </Modal>
    );
}

export default CreatModal;
