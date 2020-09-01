import { Slider, DatePicker, Radio, InputNumber, Col, Row, Form, Input, Button, Select } from 'antd';
import { BaseFilter, YtBtn } from 'common';
import moment from 'moment';
import { approveStatusOption } from '../../option';
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
        onFinish={this.props.onSubmit}
        className="yt-condition-form">
        <Row gutter={24}>
          <Col {...this.colspans}>
            <Form.Item label="融资客户" name="enterpriseName">
              <Input   placeholder="请输入"/>
            </Form.Item>
          </Col>
          <Col {...this.colspans}>
            <Form.Item label="项目名称" name="projectName">
              <Input   placeholder="请输入"/>
            </Form.Item>
          </Col>
          <Col {...this.colspans}>
            <Form.Item label="状态" name="loanStatus">
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
            <Form.Item label="融资时间" name="applyTime">
              <RangePicker format={dateFormat}/>
            </Form.Item>
          </Col>
        </Row>
        <div className="submit-btn-wrap">
          <YtBtn htmlType="submit">
            查询
          </YtBtn>
        </div>
      </Form>
    );
  }
};

export default FilterForm;
