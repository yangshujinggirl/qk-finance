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
		this.props.onSearch(values);
  };
  onSubmit =(values)=> {
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
            <Form.Item label="融资企业" name="enterpriseName">
              <Input   placeholder="请输入"/>
            </Form.Item>
          </Col>
          <Col {...this.colspans}>
            <Form.Item label="申请时间" name="time">
            <RangePicker format={dateFormat}/>
            </Form.Item>
          </Col>
          <Col {...this.colspans}>
            <Form.Item label="审核状态" name="loanStatus">
               <Select
                 placeholder="请选择"
                 allowClear>
								<Option value="-1">全部</Option>
								<Option value="0">待提交申请</Option>
								<Option value="1">已提交申请审核</Option>
								<Option value="2">申请审核未通过</Option>
								<Option value="3">待提交放款</Option>
								<Option value="4">已提交放款审核</Option>
								<Option value="5">放款审核不通过</Option>
								<Option value="6">已放款</Option>
								<Option value="7">已放款存续中</Option>
								<Option value="8">待确认还款审核</Option>
								<Option value="9">已结束</Option>
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
