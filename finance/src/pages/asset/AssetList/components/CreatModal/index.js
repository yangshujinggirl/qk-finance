import { Form, Row, Col, Modal, Checkbox, Button, Input } from 'antd';
import { useState } from 'react';
import { GetAddApi } from 'api/asset/AssetList';
import { YtMessage } from 'common';
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
  const [loading, setLoading] = useState(false);
  const { enterpriseId } =props;

  const handleOk = async () => {
    try {
      const values = await form.validateFields();
      setLoading(true)
      GetAddApi({...values, enterpriseId })
      .then((res)=> {
        YtMessage.success('创建成功');
        callback()
        setLoading(false);
        props.onOk && props.onOk();
      },err=>{
        console.log(err)
      })
    } catch (errorInfo) {
      console.log("Failed:", errorInfo);
    }
  };
  const callback = e => {
    form.resetFields()
  };
  const handleCancel = e => {
    props.onCancel();
    callback();
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
              <Form.Item name="maxAssetCount" label="资产笔数上限" rules={[{ required: true }]}>
                <Input addonAfter="笔" autoComplete="off"/>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="minAssetCount" label="资产笔数下限" rules={[{ required: true }]}>
                <Input addonAfter="笔" autoComplete="off"/>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="maxAssetAmount" label="资产包金额上限" rules={[{ required: true }]}>
                <Input addonAfter="元" autoComplete="off"/>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="minAssetAmount" label="资产包金额下限" rules={[{ required: true }]}>
                <Input addonAfter="元" autoComplete="off"/>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="maxPayDays" label="资产最长账期" rules={[{ required: true }]}>
                <Input addonAfter="天" autoComplete="off"/>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="minPayDays" label="资产最短账期" rules={[{ required: true }]}>
                <Input addonAfter="天" autoComplete="off"/>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="maxSingleAssetAmount" label="单笔资产金额不大于" rules={[{ required: true }]}>
                <Input addonAfter="元" autoComplete="off"/>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="maxSingleAssetRate" label="单笔资产/总金额不大于" rules={[{ required: true }]}>
                <Input addonAfter="%" autoComplete="off"/>
              </Form.Item>
            </Col>
          </Row>
          <div className="box-flex handle-footer">
            <div className="handle-item">
              <Form.Item name="checkStatus" valuePropName="checked">
                <Checkbox>记住本次筛选条件</Checkbox>
              </Form.Item>
            </div>
            <div className="handle-item">
              <Button onClick={handleCancel} className="reset-btn">重置</Button>
              <Button type="primary" onClick={handleOk} className="creat-btn" loading={loading}>创建</Button>
            </div>
          </div>
        </Form>
      </Modal>
  );
}

export default CreatModal;
