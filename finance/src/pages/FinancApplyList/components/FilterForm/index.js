import { Slider, DatePicker, Radio, InputNumber, Col, Row, Form, Input, Button, Select } from 'antd';
import { BaseFilter, YtBtn } from 'common';
import moment from 'moment';
import { FormInstance } from 'antd/lib/form';
import './index.less';

const { RangePicker } = DatePicker;

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
    const dateFormat = "YYYY-MM-DD"
    return (
      <Form
        {...this.formItemLayout}
        ref={this.formRef}
        onFinish={this.onFinish}
        className="yt-condition-form">
        <Row gutter={24}>
          <Col {...this.colspans}>
            <Form.Item label="企业名称" name="name">
              <Input   placeholder="请输入"/>
            </Form.Item>
          </Col>
          <Col {...this.colspans}>
            <Form.Item name="payment" label="还款方式" rules={[{ required: true }]}>
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
            <Form.Item label="还款状态" name="size">
               <Radio.Group>
                 <Radio.Button value="small">全部</Radio.Button>
                 <Radio.Button value="default">待审核</Radio.Button>
                 <Radio.Button value="large">审核通过</Radio.Button>
                 <Radio.Button value="sc">审核不通过</Radio.Button>
               </Radio.Group>
            </Form.Item>
          </Col>
          <Col {...this.colspans}>
            <Form.Item label="资产账期" name="time">
            <RangePicker
                defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
                format={dateFormat}
              />
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
