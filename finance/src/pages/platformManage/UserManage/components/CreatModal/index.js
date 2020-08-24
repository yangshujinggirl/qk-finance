import {Form, Select, Row, Radio, Col, Modal, Checkbox, Button, Input} from 'antd';
import './index.less';
import {addUser, getTreeOrg} from '../../../../../api/platformManage/UserManage.js'
import {YtMessage} from 'common';
import {useState, useEffect} from 'react';

const formItemLayout = {
    labelCol: {
        span: 6
    },
    wrapperCol: {
        span: 14
    }
};
const CreatModal = ({...props}) => {
    const [treeOrgs, setTreeOrgs] = useState([]);
    const {userPassword, id} = props.data;
    props.data.userPassword2 = userPassword
    const [form] = Form.useForm();
    form.setFieldsValue(props.data)
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
    // 角色管理API
    const getTreeOrgs = () => {
        getTreeOrg().then(res => {
            console.log(res.data)
            let arr = []
            res.data.data.forEach(item => {
                arr.push({
                    label: item.text, value: item.id
                })
            })
            setTreeOrgs(arr)
        })
    }
    // 获取角色数据
    useEffect(() => {
        getTreeOrgs();
    }, []);
    return (
        <Modal
            width={520}
            title="新增"
            visible={props.visible === 1}
            onOk={handleOk}
            onCancel={handleCancel}
            className="creat-modal"
            footer={null}>
            <Form form={form} name="control-hooks" {...formItemLayout}>
                <Row gutter={24}>
                    <Col span={24}>
                        <Form.Item name="userName" label="用户名称" rules={[{required: true, message: '请输入'}]}>
                            <Input placeholder="请输入" allowClear autoComplete="off"/>
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item name="userFullNameCn" label="用户中文名称" rules={[{required: true, message: '请输入'}]}>
                            <Input placeholder="请输入" allowClear autoComplete="off"/>
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item name="orgId" label="所属机构" rules={[{required: true, message: '请输入'}]}>
                            <Select options={treeOrgs} placeholder="请输入" allowClear
                                    autoComplete="off"/>
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item name="userPassword" label="密码" rules={[{required: true, message: '请输入'}]}>
                            <Input placeholder="请输入" allowClear autoComplete="off"/>
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item name="userPassword2" label="密码确认" rules={[{required: true, message: '请输入'}]}>
                            <Input placeholder="请输入" allowClear autoComplete="off"/>
                        </Form.Item>
                    </Col>
                </Row>
                <div className="handle-item">
                    <Button onClick={handleCancel} className="reset-btn">取消</Button>
                    <Button type="primary" onClick={handleOk} className="creat-btn">保存</Button>
                </div>
            </Form>
        </Modal>
    );
}

export default CreatModal;
