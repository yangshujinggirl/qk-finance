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
            <Form.Item name="name" label="企业名称" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          </Col>
          <Col {...this.colspans}>
            <Form.Item label="封包状态" name="size">
               <Radio.Group>
                 <Radio.Button value="small">全部</Radio.Button>
                 <Radio.Button value="default">已封包</Radio.Button>
                 <Radio.Button value="large">未封包</Radio.Button>
               </Radio.Group>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    );
  }
};

export default FilterForm;
