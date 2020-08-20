import { Radio, InputNumber, Col, Row, Form, Input, Button, Select } from 'antd';
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
      <Form {...this.formItemLayout} ref={this.formRef} onFinish={this.onFinish} className="yt-condition-form">
        <Row gutter={24}>
          <Col {...this.colspans}>
            <Form.Item name="name" label="企业名称">
              <Input placeholder="请输入" autoComplete="off"/>
            </Form.Item>
          </Col>
          <Col {...this.colspans}>
            <Form.Item label="封包状态" name="size">
               <Select
                 placeholder="请选择"
                 allowClear>
                 <Option value="male">全部</Option>
                 <Option value="female">已封包</Option>
                 <Option value="other">未封包</Option>
               </Select>
            </Form.Item>
          </Col>
        </Row>
        <div className="submit-btn-wrap">
          <YtBtn htmlType="submit" onClick={this.onSubmit}>
            查询
          </YtBtn>
        </div>
      </Form>
    );
  }
};

export default FilterForm;
