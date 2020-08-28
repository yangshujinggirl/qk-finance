import {Form, Select, Row, Col, Modal, Button, Input} from 'antd';
import './index.less';
import {YtMessage} from 'common';
import {addRole} from '../../../../../api/platformManage/RoleManage.js'


const formItemLayout = {
    labelCol: {
        span: 6
    },
    wrapperCol: {
        span: 14
    }
};
const CreatModal = ({...props}) => {
    const [form] = Form.useForm();
    const {id, roleId} = props.data;
    form.setFieldsValue(props.data)

    const handleOk = async () => {
        const values = await form.validateFields();
        addRole({...values, id, roleId}).then(res => {
            YtMessage.success('操作成功');
            //清空表单
            props.onOk && props.onOk(values);
        }).finally(() => {
            //清空表单
            setTimeout(() => {
                form.resetFields()
            }, 500)
        })
    };
    const handleCancel = (e) => {
        props.onCancel()
        //清空表单
        form.resetFields()
        console.log('清空表单');
    };
    return (
        <Modal
            width={520}
            title={props.visible === 1 ? '新增' : '编辑'}
            visible={props.visible === 1 || props.visible === 3}
            onOk={handleOk}
            onCancel={handleCancel}
            className="creat-modal"
            footer={null}>
            <Form form={form} name="control-hooks" {...formItemLayout}>
                <Row gutter={24}>
                    <Col span={24}>
                        <Form.Item name="roleName" label="角色名称" rules={[{required: true, message: '请输入'}]}>
                            <Input placeholder="请输入" autoComplete="off"/>
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item name="roleFullNameCn" label="角色中文名称" rules={[{required: true, message: '请输入'}]}>
                            <Input placeholder="请输入" autoComplete="off"/>
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item name="roleUsage" label="用途" rules={[{required: true, message: '请输入'}]}>
                            <Select
                                placeholder="请选择"
                                allowClear>
                                <Select.Option value={1}>管理后台</Select.Option>
                                <Select.Option value={2}>Fabric</Select.Option>
                            </Select>
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
