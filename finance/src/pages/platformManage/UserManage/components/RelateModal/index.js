import { Modal,Button,Table} from 'antd';
import './index.less';
import {relateUser, getRelateUserList} from '../../../../../api/platformManage/UserManage.js'
import {YtMessage} from 'common';
import {useState, useEffect} from 'react';

const columns = [
    {
        title: '角色名称',
        dataIndex: 'userName',
    },
    {
        title: '角色中文名称',
        dataIndex: 'orgName',
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
    const {relateUserList, selectedRowKeys} = props;
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };

    const handleOk = async () => {
        try {
            const values = selectedRowKeys;
            //角色关联
            relateUser({
                id: "60305",
                roleIds: "F5AYQN706K6CUL7WPJTXQ1JQ9BKX771M",
                userId: "I4WTC9OC3TX4VNYOXQCUP8TZUHCZK3DB",
            }).then(res => {
                YtMessage.success('操作成功');
                props.onOk && props.onOk(values);
            })
        } catch (errorInfo) {
            YtMessage.error('操作失败');
            console.log("Failed:", errorInfo);
        }
    };
    const handleCancel = (e) => {
        props.onCancel()
    };

    const onSelectChange = (e) => {

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
                    owSelection={rowSelection}
                    columns={columns}
                    dataSource={relateUserList}
                />
                <div className="handle-item">
                    <Button onClick={handleCancel} className="reset-btn">取消</Button>
                    <Button type="primary" onClick={handleOk} className="creat-btn">保存</Button>
                </div>
            </div>
        </Modal>
    );
}

export default CreatModal;
