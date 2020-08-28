import { Form,Row,Col,Select,Input } from 'antd';
import { BaseEditForm, YtBtn, YtTable } from 'common';
import { columnsVoucher,columnsRecord } from '../../columns';
import HeadFormCard from '../../../components/HeadFormCard';
import { GetInfo } from 'api/finance/WithdrawManage';

class ApplyOne extends BaseEditForm {
  formRef = React.createRef();
  state={
    info:{}
  }
  onSubmit = async (values) => {
    console.log(values)
  };
  componentDidMount(){
    this.fetchInfo()
  }
  fetchInfo(){
    const { applyId } =this.props;
    GetInfo({applyId })
    .then((res)=> {
      console.log(res)
    })
  }
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
                  <Form.Item label="授信金额" name="code">
                    <Input autoComplete="off"   placeholder="请输入" disabled suffix="万元"/>
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="融资利率" name="code">
                    <Input autoComplete="off"   placeholder="请输入" disabled suffix="%"/>
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="历史累计请款金额" name="payment">
                    <Input autoComplete="off"   placeholder="请输入" disabled suffix="万元"/>
                  </Form.Item>
                </Col>
              </Row>
          </HeadFormCard>
          <HeadFormCard title="监管户信息">
              <Row>
                <Col {...this.colspans}>
                  <Form.Item label="监管银行" name="yh">
                    <Input autoComplete="off"   placeholder="请输入" disabled/>
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="监管户开户行" name="khh">
                    <Input autoComplete="off"   placeholder="请输入" disabled/>
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="监管账户名" name="zhm">
                    <Input autoComplete="off"   placeholder="请输入" disabled/>
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="监管账号" name="zh">
                    <Input autoComplete="off"   placeholder="请输入" disabled/>
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="监管户资金余额" name="ye">
                    <Input autoComplete="off"   placeholder="请输入" disabled suffix="万元"/>
                  </Form.Item>
                </Col>
              </Row>
          </HeadFormCard>
          <HeadFormCard title="本次请款信息">
              <Row>
                <Col {...this.colspans}>
                  <Form.Item label="请款时间" name="bkname">
                    <Input autoComplete="off"   placeholder="请输入" disabled/>
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="请款人" name="bknum">
                    <Input autoComplete="off"   placeholder="请输入" disabled/>
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="本次请款金额" name="bgcode">
                    <Input autoComplete="off"   placeholder="请输入" disabled suffix="万元"/>
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="请款类型" name="bgcode">
                    <Input autoComplete="off"   placeholder="请输入" disabled/>
                  </Form.Item>
                </Col>
              </Row>
          </HeadFormCard>
          <HeadFormCard title="收款户信息">
              <Row>
                <Col {...this.colspans}>
                  <Form.Item label="收款方" name="bkname">
                    <Input autoComplete="off"   placeholder="请输入"/>
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="收款方账户名" name="bknum">
                    <Input autoComplete="off"   placeholder="请输入"/>
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="收款方开户行" name="bgcode">
                    <Input autoComplete="off"   placeholder="请输入"/>
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="收款方账号" name="bgcode">
                    <Input autoComplete="off"   placeholder="请输入"/>
                  </Form.Item>
                </Col>
              </Row>
          </HeadFormCard>
          <HeadFormCard title="请款凭证">
              <YtTable columns={columnsVoucher} data={[]}/>
          </HeadFormCard>
          <HeadFormCard title="历史请款记录">
              <YtTable columns={columnsRecord} data={[]}/>
          </HeadFormCard>
          {/*<div className="edit-btn-wrap">
            <YtBtn size="free" onClick={this.handleSubmit}>确认并下一步</YtBtn>
          </div>*/}
        </Form>
      </div>
    )
  }
}
export default ApplyOne;
