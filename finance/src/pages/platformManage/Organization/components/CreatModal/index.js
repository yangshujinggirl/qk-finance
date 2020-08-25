import {Form, Row, Radio, Col, Modal, Button, Input} from 'antd';
import './index.less';
import {addOrg} from '../../../../../api/platformManage/Organization.js'
import {YtMessage} from 'common';

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
    const {id} = props.data;
    form.setFieldsValue(props.data)
    //确认
    const handleOk = async () => {
        const values = await form.validateFields();
        addOrg({...values, id}).then(res => {
            YtMessage.success('操作成功');
            props.onOk && props.onOk(values);
        }).finally(() => {
            //清空表单
            form.resetFields()
        })
    };
    //取消
    const handleCancel = (e) => {
        props.onCancel()
        //清空表单
        form.resetFields()
    };
    return (
        <Modal getContainer={false}
               width={520}
               title="新增"
               visible={props.visible}
               onOk={handleOk}
               onCancel={handleCancel}
               className="creat-modal"
               footer={null}>
            <Form form={form} name="control-hooks" {...formItemLayout}>
                <Row gutter={24}>
                    <Col span={24}>
                        <Form.Item name="orgName" label="组织名称" rules={[{required: true, message: '请输入'}]}>
                            <Input placeholder="请输入" autoComplete="off"/>
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item name="isRoot" label="是否根组织" rules={[{required: true, message: '请输入'}]}>
                            <Radio.Group>
                                <Radio value={1}>是</Radio>
                                <Radio value={2}>否</Radio>
                            </Radio.Group>
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item name="isValid" label="是否有效" rules={[{required: true, message: '请输入'}]}>
                            <Radio.Group>
                                <Radio value={1}>是</Radio>
                                <Radio value={2}>否</Radio>
                            </Radio.Group>
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
