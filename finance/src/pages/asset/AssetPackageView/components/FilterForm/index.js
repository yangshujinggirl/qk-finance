import { Radio, InputNumber, Col, Row, Form, Input, Button, Select } from 'antd';
import { BaseFilter, YtBtn } from 'common';
import { FormInstance } from 'antd/lib/form';
import {statusOption} from '../options';
import './index.less';

const tailLayout = {
  wrapperCol: { offset: 4, span: 16 },
};
const { Option } = Select;

class FilterForm extends BaseFilter{
  formRef = React.createRef();
  render() {
    return (
      <Form {...this.formItemLayout} ref={this.formRef} className="yt-condition-form">
        <Row gutter={24}>
          <Col {...this.colspans}>
            <Form.Item name="enterpriseName" label="企业名称">
              <Input placeholder="请输入" autoComplete="off"/>
            </Form.Item>
          </Col>
          <Col {...this.colspans}>
            <Form.Item label="封包状态" name="packetStatus">
               <Select
                 placeholder="请选择"
                 allowClear>
                 <Option value="male">全部</Option>
                 {
                   statusOption.map((el,idx)=>(
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
