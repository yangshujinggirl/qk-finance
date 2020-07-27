import { Slider, Radio, InputNumber, Col, Row, Form, Input, Button, Select } from 'antd';
import { BaseFilter, YtBtn } from 'common';
import { FormInstance } from 'antd/lib/form';
import './index.less';

const tailLayout = {
  wrapperCol: { offset: 4, span: 16 },
};
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
          <Col {...this.colspans}>
            <Form.Item label="资产评级" name="level">
               <Radio.Group>
                 <Radio.Button value="small">关注</Radio.Button>
                 <Radio.Button value="default">黄色预警</Radio.Button>
                 <Radio.Button value="large">红色预警</Radio.Button>
                 <Radio.Button value="sc">收藏</Radio.Button>
               </Radio.Group>
            </Form.Item>
          </Col>
          <Col {...this.colspans}>
            <Form.Item label="资产评级">
              <Form.Item name="size">
                 <Radio.Group noStyle>
                   <Radio.Button value="small">北京</Radio.Button>
                   <Radio.Button value="default">上海</Radio.Button>
                   <Radio.Button value="large">江苏</Radio.Button>
                   <Radio.Button value="sc">四川</Radio.Button>
                   <Radio.Button value="other">其他</Radio.Button>
                 </Radio.Group>
              </Form.Item>
              <Form.Item
                noStyle
                shouldUpdate={(prevValues, currentValues) => prevValues.size !== currentValues.size}>
                {({ getFieldValue }) => {
                  return getFieldValue('size') === 'other' ? (
                    <Form.Item name="otherInput" noStyle>
                       <Input className="multi-form-input" />
                    </Form.Item>
                  ) : null;
                }}
              </Form.Item>
            </Form.Item>
          </Col>
          <Col {...this.colspans}>
            <Form.Item name="name" label="企业名称">
              <Input />
            </Form.Item>
          </Col>
          <Col {...this.colspans}>
            <Form.Item label="累计笔数" className="two-multi-form-item">
              <Form.Item name="numSt">
                <Input placeholder="请输入"/>
              </Form.Item>
              <span className="line">---</span>
              <Form.Item name="numEt">
                <Input placeholder="请输入"/>
              </Form.Item>
            </Form.Item>
          </Col>
          <Col {...this.colspans}>
            <Form.Item name="slider" label="资产验真比率">
              <Slider/>
            </Form.Item>
          </Col>
          <Col {...this.colspans}>
            <Form.Item label="累计资产规模">
              <Form.Item name="slider" noStyle>
                <Slider max={500}/>
              </Form.Item>
              <span>500万</span>
            </Form.Item>
          </Col>
          <Col {...this.colspans}>
            <Form.Item name="gender" label="排序">
              <Select
                placeholder="Select a option and change input text above"
                onChange={this.onGenderChange}
                allowClear>
                <Option value="male">male</Option>
                <Option value="female">female</Option>
                <Option value="other">other</Option>
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
