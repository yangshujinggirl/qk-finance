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
            <Form.Item label="交易时间" name="time">
              <RangePicker
                  defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
                  format={dateFormat}
                />
            </Form.Item>
          </Col>
          <Col {...this.colspans}>
            <Form.Item label="交易流水号" name="transactionSerialNumber">
              <AutoComplete
                options={[]}
                onSelect={this.onSelect}
                onSearch={this.onSearch}
                placeholder="请输入"
              />
            </Form.Item>
          </Col>
          <Col {...this.colspans}>
            <Form.Item label="交易金额" className="two-multi-form-item">
              <Form.Item name="minAmount">
                <Input placeholder="请输入" autoComplete="off"/>
              </Form.Item>
              <span className="line">---</span>
              <Form.Item name="maxAmount">
                <Input placeholder="请输入" autoComplete="off"/>
              </Form.Item>
            </Form.Item>

          </Col>
          <Col {...this.colspans}>
            <Form.Item label="对方账户名" name="reciprocalAccountName">
              <AutoComplete
                options={[]}
                onSelect={this.onSelect}
                onSearch={this.onSearch}
                placeholder="请输入"
              />
            </Form.Item>
          </Col>
          <Col {...this.colspans}>
            <Form.Item label="对方账户号" name="reciprocalAccountNo">
              <AutoComplete
                options={[]}
                onSelect={this.onSelect}
                onSearch={this.onSearch}
                placeholder="请输入"
              />
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
