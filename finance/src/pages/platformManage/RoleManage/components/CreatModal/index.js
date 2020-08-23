import { Form, Select, Row, Radio, Col, Modal, Checkbox, Button, Input } from 'antd';
import './index.less';
import { YtMessage } from 'common';
import {addRole} from '../../../../../api/platformManage/RoleManage.js'


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
    const {id}=props.data;

    const handleOk = async() => {
    try {
      const values = await form.validateFields();
      console.log(values)
      addRole({...values,id}).then(res=>{
          YtMessage.success('操作成功');
          props.onOk && props.onOk(values);
      })

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
        visible={props.visible===1}
        onOk={handleOk}
        onCancel={handleCancel}
        className="creat-modal"
        footer={null}>
        <Form form={form} name="control-hooks" {...formItemLayout}>
          <Row gutter={24}>
            <Col span={24}>
              <Form.Item name="roleName" label="角色名称" rules={[{ required: true,message:'请输入' }]}>
                <Input placeholder="请输入" autoComplete="off"/>
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item name="roleFullNameCn" label="角色中文名称" rules={[{ required: true,message:'请输入' }]}>
                <Input placeholder="请输入" autoComplete="off"/>
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item name="roleUsage" label="用途" rules={[{ required: true,message:'请输入' }]}>
                <Select
                  placeholder="请选择"
                  allowClear>
                  <Select.Option value="1">管理后台</Select.Option>
                  <Select.Option value="2">Fabric</Select.Option>
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
