import { Slider, DatePicker, Radio, InputNumber, Col, Row, Form, Input, Button, Select } from 'antd';
import { BaseFilter, YtBtn } from 'common';
import { RegExpUtil } from 'utils';
import { FormInstance } from 'antd/lib/form';
import './index.less';

const tailLayout = {
  wrapperCol: { offset: 4, span: 16 },
};
const { Option } = Select;
const { RangePicker } =DatePicker;

class FilterForm extends BaseFilter{
  formRef = React.createRef();
  render() {
    return (
      <Form {...this.formItemLayout} ref={this.formRef} className="yt-condition-form">
        <Row gutter={24}>
          <Col {...this.colspans}>
            <Form.Item name="applyLoanStatus" label="资产状态">
              <Select placeholder="请选择" allowClear>
                <Option value="male">全部</Option>
                <Option value="1">未占用</Option>
                <Option value="2">临时占用</Option>
                <Option value="3">已占用</Option>
                <Option value="4">已请款</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col {...this.colspans}>
            <Form.Item name="isMoneyBack" label="回款状态">
              <Select placeholder="请选择" allowClear>
                <Option value="male">全部</Option>
                <Option value="1">未回款</Option>
                <Option value="2">已回款</Option>
                <Option value="3">部分回款</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col {...this.colspans}>
            <Form.Item name="yzstatus" label="验真状态">
              <Select
                placeholder="请选择"
                allowClear>
                <Option value="male">全部</Option>
                <Option value="female">未验真</Option>
                <Option value="other">验真通过</Option>
                <Option value="oter">验真存疑</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col {...this.colspans}>
            <Form.Item name="orderSourceCompany" label="债务方">
              <Input placeholder="请输入" autoComplete="off"/>
            </Form.Item>
          </Col>
          <Col {...this.colspans}>
            <Form.Item label="资产编号" name="assetNo">
              <Input   placeholder="请输入"/>
            </Form.Item>
          </Col>
          <Col {...this.colspans}>
            <Form.Item name="transferStatus" label="是否转让">
              <Select
                placeholder="请选择"
                allowClear>
                <Option value="2">是</Option>
                <Option value="1">否</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col {...this.colspans}>
            <Form.Item label="资产金额" className="two-multi-form-item">
              <Form.Item name="orderAmountMin" rules={[{pattern:RegExpUtil.twoFloat,message:'请输入正整数'}]}>
                <Input placeholder="请输入" autoComplete="off"/>
              </Form.Item>
              <span className="line">---</span>
              <Form.Item
                name="orderAmountMax"
                dependencies={['orderAmountMin']}
                rules={[{pattern:RegExpUtil.twoFloat,message:'请输入正整数'},{ validator:(rule, value)=>this.validatorRangNum(rule, value, "orderAmountMin") }]}>
                <Input placeholder="请输入" autoComplete="off"/>
              </Form.Item>
            </Form.Item>
          </Col>
          <Col {...this.colspans}>
            <Form.Item label="生成日期" name="time" className="two-multi-form-item">
               <RangePicker />
            </Form.Item>
          </Col>
          <Col {...this.colspans}>
            <Form.Item label="资产账期" className="two-multi-form-item">
              <Form.Item name="realDateMin" rules={[{pattern:RegExpUtil.integer,message:'请输入正整数'}]}>
                <Input placeholder="请输入" autoComplete="off"/>
              </Form.Item>
              <span className="line">---</span>
              <Form.Item
                name="realDateMax"
                dependencies={['realDateMin']}
                rules={[{pattern:RegExpUtil.integer,message:'请输入正整数'},{ validator:(rule, value)=>this.validatorRangNum(rule, value, "realDateMin") }]}>
                <Input placeholder="请输入" autoComplete="off"/>
              </Form.Item>
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
