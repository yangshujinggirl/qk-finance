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
            <Form.Item label="申请时间" name="time">
            <RangePicker
                defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
                format={dateFormat}
              />
            </Form.Item>
          </Col>
          <Col {...this.colspans}>
            <Form.Item label="审核状态" name="size">
               <Select
                 placeholder="请选择"
                 allowClear>
                 <Option value="male">全部</Option>
                 <Option value="female">待审核</Option>
                 <Option value="other">审核通过</Option>
                 <Option value="other">审核不通过</Option>
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
