import { Slider, Radio, InputNumber, Col, Row, Form, Input, Button, Select } from 'antd';
import { BaseFilter, YtBtn } from 'common';
import { FormInstance } from 'antd/lib/form';
import './index.less';

const tailLayout = {
  wrapperCol: { offset: 4, span: 16 },
};
const { Option } = Select;

class FilterForm extends BaseFilter{
  formRef = React.createRef();
  onGenderChange = value => {
    this.formRef.current.setFieldsValue({
      note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
    });
  };
  onFinish = values => {
    console.log(values);
  };
  onSubmit =(values)=> {
    console.log(values)
  };
  render() {
    return (
      <Form
        {...this.formItemLayout}
        ref={this.formRef}
        onFinish={this.onFinish}
        className="yt-condition-form">
        <Row gutter={24}>
          <Col {...this.colspans}>
            <Form.Item name="name" label="债务方" rules={[{ required: true }]}>
              <Select
                placeholder="请选择"
                onChange={this.onGenderChange}
                allowClear>
                <Option value="male">male</Option>
                <Option value="female">female</Option>
                <Option value="other">other</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col {...this.colspans}>
            <Form.Item label="资产金额">
              <Form.Item
              name="numSt"
              rules={[{ required: true, message: '请输入Street' }]}
              style={{ display: 'inline-block'}}>
                <Input  className="two-multi-form-input" placeholder="请输入"/>
              </Form.Item>
              <span>---</span>
              <Form.Item name="numEt"
              rules={[{ required: true, message: '请输入' }]}
              style={{ display: 'inline-block'}}>
                <Input  className="two-multi-form-input" placeholder="请输入"/>
              </Form.Item>
            </Form.Item>
          </Col>
          <Col {...this.colspans}>
            <Form.Item label="资产账期">
              <Form.Item
              name="payment"
              rules={[{ required: true, message: '请输入Street' }]}
              style={{ display: 'inline-block'}}>
                <Input  className="two-multi-form-input"  placeholder="请输入"/>
              </Form.Item>
              <span>---</span>
              <Form.Item name="numEt"
              rules={[{ required: true, message: '请输入' }]}
              style={{ display: 'inline-block'}}>
                <Input  className="two-multi-form-input"  placeholder="请输入"/>
              </Form.Item>
            </Form.Item>
          </Col>
          <Col {...this.colspans}>
            <Form.Item label="单笔资产金额不大于" name="dbzc">
              <Input   placeholder="请输入"/>
            </Form.Item>
          </Col>
          <Col {...this.colspans}>
            <Form.Item label="单笔资产/总金额不大于" name="dbje">
              <Input   placeholder="请输入"/>
            </Form.Item>
          </Col>
          <Col span={24} offset={10}>
            <YtBtn htmlType="submit" onClick={this.onSubmit}>
              查询
            </YtBtn>
          </Col>
        </Row>
      </Form>
    );
  }
};

export default FilterForm;
