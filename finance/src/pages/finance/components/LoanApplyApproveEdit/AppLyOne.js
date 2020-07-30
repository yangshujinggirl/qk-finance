import { Form,Row,Col,Select,Input } from 'antd';
import { BaseEditForm, YtBtn, YtTable } from 'common';
import { columnsPlan } from './columns';
import HeadFormCard from '../HeadFormCard';

class ApplyOne extends BaseEditForm {
  formRef = React.createRef();
  onSubmit = async (values) => {
    console.log(values)
  };
  render() {
    return(
      <div>
        <Form className="common-edit-pages-form" {...this.formItemLayout} ref={this.formRef}>
          <HeadFormCard title="基本信息">
              <Row>
                <Col {...this.colspans}>
                  <Form.Item label="融资企业" name="name">
                    <Input autoComplete="off"   placeholder="请输入" disabled/>
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="融资编号" name="name">
                    <Input autoComplete="off"   placeholder="请输入" disabled/>
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="资产包编号" name="code">
                    <Input autoComplete="off"   placeholder="请输入" disabled/>
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="资产包金额" name="code">
                    <Input autoComplete="off"   placeholder="请输入" disabled suffix="万元"/>
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="授信金额" name="code">
                    <Input autoComplete="off"   placeholder="请输入" disabled suffix="万元"/>
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="融资比例" name="code">
                    <Input autoComplete="off"   placeholder="请输入" disabled suffix="%"/>
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="还款方式" name="payment">
                    <Input autoComplete="off"   placeholder="请输入" disabled/>
                  </Form.Item>
                </Col>
              </Row>
          </HeadFormCard>
          <HeadFormCard title="资金收付计划">
              <YtTable columns={columnsPlan} data={[]}/>
          </HeadFormCard>
          <HeadFormCard title="放款信息【监管户】">
              <Row>
                <Col {...this.colspans}>
                  <Form.Item label="对方收款银行" name="bkname">
                    <Input autoComplete="off"   placeholder="请输入" disabled/>
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="对方收款账户名" name="bknum">
                    <Input autoComplete="off"   placeholder="请输入" disabled/>
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="对方收款账号" name="bgcode">
                    <Input autoComplete="off"   placeholder="请输入" disabled/>
                  </Form.Item>
                </Col>
              </Row>
          </HeadFormCard>
          <HeadFormCard title="打款银行信息">
              <Row>
                <Col {...this.colspans}>
                  <Form.Item label="打款银行" name="bkname">
                    <Input autoComplete="off"   placeholder="请输入"/>
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="打款账户名" name="bknum">
                    <Input autoComplete="off"   placeholder="请输入"/>
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="打款账号" name="bgcode">
                    <Input autoComplete="off"   placeholder="请输入"/>
                  </Form.Item>
                </Col>
              </Row>
          </HeadFormCard>
          <div className="edit-btn-wrap">
            <YtBtn size="free" onClick={this.handleSubmit}>确认并下一步</YtBtn>
          </div>
        </Form>
      </div>
    )
  }
}
export default ApplyOne;
