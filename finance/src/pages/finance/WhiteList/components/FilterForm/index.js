import { AutoComplete, DatePicker, Col, Row, Form, Input, Button, Select } from 'antd';
import { BaseFilter, YtBtn } from 'common';
import moment from 'moment';
import { useTypeOption,approveStatusOption,useStatusOption } from '../../option';
import './index.less';

const { RangePicker } = DatePicker;

const { Option } = Select;

class FilterForm extends BaseFilter{
  formRef = React.createRef();
  render() {
    const dateFormat = "YYYY-MM-DD"
    return (
      <Form
        {...this.formItemLayout}
        ref={this.formRef}
        className="yt-condition-form">
        <Row gutter={24}>
          <Col {...this.colspans}>
            <Form.Item name="companyFullName" label="融资企业">
              <Input placeholder="请输入" autoComplete="off"/>
            </Form.Item>
          </Col>
          <Col {...this.colspans}>
            <Form.Item label="用途类型" name="accountUsage">
               <Select
                 placeholder="请选择"
                 allowClear>
                 {
                   useTypeOption.map((el)=>(
                     <Option value={el.key} key={el.key}>{el.value}</Option>
                   ))
                 }
               </Select>
            </Form.Item>
          </Col>
          <Col {...this.colspans}>
            <Form.Item label="审核状态" name="reviewStatus">
               <Select placeholder="请选择" allowClear>
                 {
                   approveStatusOption.map((el)=>(
                     <Option value={el.key} key={el.key}>{el.value}</Option>
                   ))
                 }
               </Select>
            </Form.Item>
          </Col>
          <Col {...this.colspans}>
            <Form.Item label="账户状态" name="accountStatus">
               <Select placeholder="请选择" allowClear>
               {
                 useStatusOption.map((el)=>(
                   <Option value={el.key} key={el.key}>{el.value}</Option>
                 ))
               }
               </Select>
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
