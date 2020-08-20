import { AutoComplete, DatePicker, Col, Row, Form, Input, Button, Select } from 'antd';
import { BaseFilter, YtBtn } from 'common';
import moment from 'moment';
import { FormInstance } from 'antd/lib/form';
import './index.less';

const { RangePicker } = DatePicker;

const { Option } = Select;

class FilterForm extends BaseFilter{
  formRef = React.createRef();
  onFinish = values => {
    console.log(values);
  };
  onSubmit =(values)=> {
    console.log(values)
  };
  onSearch = searchText => {
    console.log(searchText)
  };

  onSelect = data => {
    console.log('onSelect', data);
  };

  onChange = data => {
    console.log(data)
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
            <Form.Item name="qy" label="融资企业">
              <Input placeholder="请输入" autoComplete="off"/>
            </Form.Item>
          </Col>
          <Col {...this.colspans}>
            <Form.Item label="用途类型" name="ytlx">
               <Select
                 placeholder="请选择"
                 allowClear>
                 <Option value="male">全部</Option>
                 <Option value="female">再经营</Option>
                 <Option value="other">偿还融资贷款</Option>
                 <Option value="other">提取利润</Option>
               </Select>
            </Form.Item>
          </Col>
          <Col {...this.colspans}>
            <Form.Item label="申请状态" name="sqzt">
               <Select
                 placeholder="请选择"
                 allowClear>
                 <Option value="male">全部</Option>
               </Select>
            </Form.Item>
          </Col>
          <Col {...this.colspans}>
            <Form.Item label="请款时间" name="time">
              <RangePicker format={dateFormat}/>
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
