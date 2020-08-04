import { Slider, Radio, InputNumber, Col, Row, Form, Input, Button, Select } from 'antd';
import { BaseFilter, YtBtn } from 'common';
import { FormInstance } from 'antd/lib/form';
import './index.less';

const tailLayout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 18 }
}
const { Option } = Select;

class FilterForm extends BaseFilter{
  formRef = React.createRef();
  onGenderChange = value => {
    this.formRef.current.setFieldsValue({
      note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
    });
  };
  onFinish = values => {
    console.log(values);
  };
  onSubmit =(values)=> {
    console.log(values)
  };
  render() {
    return (
      <Form
        {...this.formItemLayout}
        ref={this.formRef}
        onFinish={this.onFinish}
        className="yt-condition-form">
        <Row gutter={24}>
          <Col span={24}>
            <Form.Item label="热门地区" {...tailLayout}>
              <Form.Item name="level" noStyle>
                 <Radio.Group>
                   <Radio.Button value="small">全部</Radio.Button>
                   <Radio.Button value="default">内蒙古</Radio.Button>
                   <Radio.Button value="large">滑县</Radio.Button>
                   <Radio.Button value="sc">重庆</Radio.Button>
                   <Radio.Button value="hh">呼和浩特</Radio.Button>
                   <Radio.Button value="gz">广州</Radio.Button>
                   <Radio.Button value="other">其他</Radio.Button>
                 </Radio.Group>
              </Form.Item>
              <Form.Item
                noStyle
                shouldUpdate={(prevValues, currentValues) => prevValues.level !== currentValues.level}>
                {({ getFieldValue }) => {
                  return getFieldValue('level') === 'other' ? (
                    <Form.Item name="otherInput" noStyle>
                       <Input className="multi-form-input" autoComplete="off"/>
                    </Form.Item>
                  ) : null;
                }}
              </Form.Item>
            </Form.Item>
          </Col>
          <Col {...this.colspans}>
            <Form.Item name="name" label="企业名称">
              <Input placeholder="请输入"  autoComplete="off"/>
            </Form.Item>
          </Col>
          <Col {...this.colspans}>
            <Form.Item label="资产金额" className="two-multi-form-item">
              <Form.Item name="numSt">
                <Input placeholder="请输入" autoComplete="off"/>
              </Form.Item>
              <span className="line">---</span>
              <Form.Item name="numEt">
                <Input placeholder="请输入" autoComplete="off"/>
              </Form.Item>
            </Form.Item>
          </Col>
          <Col {...this.colspans}>
            <Form.Item label="资产笔数" className="two-multi-form-item">
              <Form.Item name="numSt">
                <Input placeholder="请输入"/>
              </Form.Item>
              <span className="line">---</span>
              <Form.Item name="numEt">
                <Input placeholder="请输入" autoComplete="off"/>
              </Form.Item>
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
