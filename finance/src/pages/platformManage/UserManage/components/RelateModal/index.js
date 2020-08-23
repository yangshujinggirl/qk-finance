import {Form, Select, Row, Radio, Col, Modal, Checkbox, Button, Input} from 'antd';
import './index.less';
import {addUser, getRelateUserList} from '../../../../../api/platformManage/UserManage.js'
import {YtMessage} from 'common';
import {useState, useEffect} from 'react';
import {Table} from 'antd';

const formItemLayout = {
    labelCol: {
        span: 6
    },
    wrapperCol: {
        span: 14
    }
};

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
    // const [relateUserList, setRelateUserList] = useState([]);
    const [selectionType, setSelectionType] = useState('checkbox');
    const relateUserList = props.data;

    const [form] = Form.useForm();
    const handleOk = async () => {
        try {
            const values = await form.validateFields();
            if (values.userPassword2 !== values.userPassword) {
                YtMessage.error('密码不一致');
                return;
            }
            console.log(values)
            addUser({...values, id}).then(res => {
                console.log(res);
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
                    rowSelection={{
                        // type: selectionType,
                        // ...rowSelection,
                    }}
                    columns={columns}
                    dataSource={relateUserList}
                />
            </div>
        </Modal>
    );
}

export default CreatModal;
