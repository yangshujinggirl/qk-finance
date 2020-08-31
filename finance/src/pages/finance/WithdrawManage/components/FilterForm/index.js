import { AutoComplete, DatePicker, Col, Row, Form, Input, Button, Select } from 'antd';
import { BaseFilter, YtBtn } from 'common';
import moment from 'moment';
import './index.less';

const { RangePicker } = DatePicker;

const { Option } = Select;

class FilterForm extends BaseFilter{
  formRef = React.createRef();
  render() {
    return (
      <Form
        {...this.formItemLayout}
        ref={this.formRef}
        className="yt-condition-form">
        <Row gutter={24}>
          <Col {...this.colspans}>
            <Form.Item name="enterpriseName" label="融资企业">
              <Input placeholder="请输入" autoComplete="off"/>
            </Form.Item>
          </Col>
          <Col {...this.colspans}>
            <Form.Item label="请款类型" name="useType">
               <Select
                 placeholder="请选择"
                 allowClear>
                 <Option value="ALL">全部</Option>
                 <Option value="1">再经营</Option>
                 <Option value="2">偿还融资贷款</Option>
                 <Option value="3">提取利润</Option>
               </Select>
            </Form.Item>
          </Col>
          <Col {...this.colspans}>
            <Form.Item label="审核状态" name="applyStatus">
               <Select placeholder="请选择"  allowClear>
                 <Option value="0">全部</Option>
                 <Option value="1">待审批</Option>
                 <Option value="2">已拒绝</Option>
                 <Option value="3">已审批通过</Option>
                 <Option value="4">已付款</Option>
               </Select>
            </Form.Item>
          </Col>
          <Col {...this.colspans}>
            <Form.Item label="请款时间" name="time">
              <RangePicker/>
            </Form.Item>
          </Col>
        </Row>
        <div className="submit-btn-wrap">
          <YtBtn htmlType="submit" onClick={this.handleSubmit}>
            查询
          </YtBtn>
        </div>
      </Form>
    );
  }
};

export default FilterForm;
