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
    return (
      <Form
        {...this.formItemLayout}
        ref={this.formRef}
        onFinish={this.onFinish}
        className="yt-condition-form">
        <Row gutter={24}>
          <Col {...this.colspans}>
            <Form.Item label="融资编号" name="name">
              <AutoComplete
                options={[]}
                onSelect={this.onSelect}
                onSearch={this.onSearch}
                placeholder="请输入"
              />
            </Form.Item>
          </Col>
          <Col {...this.colspans}>
            <Form.Item label="项目名称" name="name">
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
