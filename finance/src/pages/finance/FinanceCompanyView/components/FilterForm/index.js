import { Slider, Radio, InputNumber, Col, Row, Form, Input, Button, Select } from 'antd';
import { BaseFilter, YtBtn } from 'common';
import { RegExpUtil } from 'utils';
import { FormInstance } from 'antd/lib/form';
import './index.less';

const tailLayout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 18 }
}
const { Option } = Select;

class FilterForm extends BaseFilter{
  formRef = React.createRef();
  render() {
    return (
      <Form
        {...this.formItemLayout}
        ref={this.formRef}
        onFinish={this.onFinish}
        className="yt-condition-form">
        <Row gutter={24}>
          <Col {...this.colspans}>
            <Form.Item name="enterpriseName" label="企业名称">
              <Input placeholder="请输入"  autoComplete="off"/>
            </Form.Item>
          </Col>
          <Col {...this.colspans}>
            <Form.Item label="资产金额" className="two-multi-form-item">
              <Form.Item name="assetSizeMin" rules={[{pattern:RegExpUtil.noZeroInteger,message:'请输入正整数'}]}>
                <Input placeholder="请输入" autoComplete="off"/>
              </Form.Item>
              <span className="line">---</span>
              <Form.Item
                name="assetSizeMax"
                dependencies={['assetSizeMin']}
                rules={[{pattern:RegExpUtil.noZeroInteger,message:'请输入正整数'},{ validator:(rule, value)=>this.validatorRangNum(rule, value, "assetSizeMin") }]}>
                <Input placeholder="请输入" autoComplete="off"/>
              </Form.Item>
            </Form.Item>
          </Col>
          <Col {...this.colspans}>
            <Form.Item label="资产笔数" className="two-multi-form-item">
              <Form.Item name="assetsNumMin" rules={[{pattern:RegExpUtil.noZeroInteger,message:'请输入正整数'}]}>
                <Input placeholder="请输入"/>
              </Form.Item>
              <span className="line">---</span>
              <Form.Item
                name="assetsNumMax"
                dependencies={['assetsNumMin']}
                rules={[{pattern:RegExpUtil.noZeroInteger,message:'请输入正整数'},{ validator:(rule, value)=>this.validatorRangNum(rule, value,"assetsNumMin") }]}>
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
