import { Form, Select, Row, Radio, Col, Modal, Checkbox, Button, Input } from 'antd';
import './index.less';

const formItemLayout = {
  labelCol: {
    span: 6
  },
  wrapperCol: {
    span: 14
  }
};
const CreatModal=({...props})=>{
  const [form] = Form.useForm();
  const handleOk = async() => {
    try {
      const values = await form.validateFields();
      console.log(values)
      props.onOk && props.onOk(values);
    } catch (errorInfo) {
      console.log("Failed:", errorInfo);
    }
  };
  const handleCancel = (e) => {
    props.onCancel()
  };
  return (
      <Modal
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
              <Form.Item name="name1" label="用户名称" rules={[{ required: true,message:'请输入' }]}>
                <Input placeholder="请输入" autoComplete="off"/>
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item name="name1" label="用户中文名称" rules={[{ required: true,message:'请输入' }]}>
                <Input placeholder="请输入" autoComplete="off"/>
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item name="name1" label="所属机构" rules={[{ required: true,message:'请输入' }]}>
                <Input placeholder="请输入" autoComplete="off"/>
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item name="name1" label="密码" rules={[{ required: true,message:'请输入' }]}>
                <Input placeholder="请输入" autoComplete="off"/>
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item name="name1" label="密码确认" rules={[{ required: true,message:'请输入' }]}>
                <Input placeholder="请输入" autoComplete="off"/>
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