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
    console.log(props.data);
    const [treeOrgs, setTreeOrgs] = useState([]);
    const {userPassword, id, userId} = props.data;
    const [form] = Form.useForm();
    form.setFieldsValue({...props.data, userPassword2: props.data.userPassword})

    //确认操作
    const handleOk = async () => {
        const values = await form.validateFields();
        if (values.userPassword2 !== values.userPassword) {
            YtMessage.error('密码不一致');
            return;
        }
        delete values.userPassword2
        addUser({...values, id, userId}).then(res => {
            YtMessage.success('操作成功');
            props.onOk && props.onOk(values);
        }).finally(() => {
            //清空表单
            setTimeout(() => {
                form.resetFields()
            }, 500)
        })
    };
    //取消操作
    const handleCancel = (e) => {
        //清空表单
        form.resetFields()
        props.onCancel()
    };
    // 角色管理API
    const getTreeOrgs = () => {
        getTreeOrg().then(res => {
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
            title={props.visible === 1 ? '新增' : '编辑'}
            visible={props.visible === 1 || props.visible === 3}
            onOk={handleOk}
            onCancel={handleCancel}
            forceRender
            className="creat-modal"
            footer={null}>
            <Form form={form}
                  name="control-hooks" {...formItemLayout}>
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
