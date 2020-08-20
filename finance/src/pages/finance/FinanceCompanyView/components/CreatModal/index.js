import { Form, Row, Col, Modal, Checkbox, Button, Input } from 'antd';
import './index.less';

const formItemLayout = {
  labelCol: {
    span: 10
  },
  wrapperCol: {
    span: 14
  }
};
const CreatModal=({...props})=>{
  const [form] = Form.useForm();
  const handleOk = e => {
    console.log(e);
  };
  const handleCancel = e => {
    console.log(e);
    props.onCancel()
  };
  return (
      <Modal
        width={920}
        title="资产包创建"
        visible={props.visible}
        onOk={handleOk}
        onCancel={handleCancel}
        className="creat-modal"
        footer={null}>
        <Form form={form} name="control-hooks" {...formItemLayout}>
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item name="name1" label="资产笔数上限" rules={[{ required: true }]}>
                <Input addonAfter="笔" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="name2" label="资产笔数下限" rules={[{ required: true }]}>
                <Input addonAfter="笔" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="amount1" label="资产包金额上限" rules={[{ required: true }]}>
                <Input addonAfter="元" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="amount2" label="资产包金额下限" rules={[{ required: true }]}>
                <Input addonAfter="元" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="zq1" label="资产最长账期" rules={[{ required: true }]}>
                <Input addonAfter="天" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="zq2" label="资产最短账期" rules={[{ required: true }]}>
                <Input addonAfter="天" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="db1" label="单笔资产金额不大于" rules={[{ required: true }]}>
                <Input addonAfter="元" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="db2" label="单笔资产/总金额不大于" rules={[{ required: true }]}>
                <Input addonAfter="%" />
              </Form.Item>
            </Col>
          </Row>
          <div className="box-flex handle-footer">
            <div className="handle-item">
              <Form.Item name="checkStatus" rules={[{ required: true }]}>
                <Checkbox>记住本次筛选条件</Checkbox>
              </Form.Item>
            </div>
            <div className="handle-item">
              <Button onClick={handleCancel} className="reset-btn">重置</Button>
              <Button type="primary" onClick={handleOk} className="creat-btn">创建</Button>
            </div>
          </div>
        </Form>
      </Modal>
  );
}

export default CreatModal;
