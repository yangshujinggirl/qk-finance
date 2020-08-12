import { Button, Form,Row,Col,Select,Input,DatePicker } from 'antd';
import { Link } from 'react-router-dom';
import { BaseEditForm, YtUpLoadAndDownLoad, YtBtn, YtTable } from 'common';
import { columnsReceivable, columnsPlan } from './columns';
import HeadFormCard from '../HeadFormCard';
import ChangeModal from './components/ChangeModal';
import './AppLyTwo.less';

class ApplyOne extends BaseEditForm {
  formRef = React.createRef();
  state={
    visible:false
  }
  onSubmit = async (values) => {
    console.log(values)
  };
  goChange=()=>{
    this.setState({ visible:true })
  }
  onOk=()=>{
    this.setState({ visible:false })
  }
  onCancel=()=>{
    this.setState({ visible:false })
  }
  render() {
    const { visible } =this.state;
    return(
      <div>
        <Form className="common-edit-pages-form" {...this.formItemLayout} ref={this.formRef}>
          <HeadFormCard title="基本信息">
              <Row>
                <Col {...this.colspans}>
                  <Form.Item label="融资企业" name="name" rules={[{ required: true, message: '请选择融资企业'}]}>
                    <Input autoComplete="off"   placeholder="请输入" disabled/>
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="资产包" name="code">
                    <Row gutter={8}>
                      <Col span={18}>
                        <Form.Item name="code">
                          <Select placeholder="请选择" allowClear={true}>
                            <Select.Option value="银行转账" key="银行转账">
                              云图项目一期
                            </Select.Option>
                            <Select.Option value="银行转账1" key="银行转账1">
                              云图项目二期
                            </Select.Option>
                          </Select>
                        </Form.Item>
                      </Col>
                      <Col span={6}>
                        <Link to="/account/assetPackage/info/12" className="link-tips">资产包明细</Link>
                      </Col>
                    </Row>
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="资产包金额" name="code">
                    <Input autoComplete="off"   placeholder="请输入"  suffix="万元"/>
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="授信金额" name="code" rules={[{ required: true, message: '请输入授信金额'}]}>
                    <Input autoComplete="off"   placeholder="请输入" suffix="万元"/>
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="融资比例" name="code">
                    <Input autoComplete="off"   placeholder="请输入" suffix="%"/>
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="首付款金额" name="code">
                    <Input autoComplete="off"   placeholder="请输入" suffix="万元"/>
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="保证金金额" name="code">
                    <Input autoComplete="off"   placeholder="请输入" suffix="万元"/>
                  </Form.Item>
                </Col>
              </Row>
          </HeadFormCard>
          <HeadFormCard title="利率设计">
              <p className="form-row-title">资金方收款账户【监管户】</p>
              <Row>
                <Col {...this.colspans}>
                  <Form.Item label="利率类型" name="name" rules={[{ required: true, message: '请选择'}]}>
                    <Select placeholder="请选择" allowClear={true} onChange={this.onChangeCategoryCode}>
                      <Select.Option value="银行转账" key="银行转账">
                        电汇
                      </Select.Option>
                      <Select.Option value="银行转账1" key="银行转账1">
                        银行转账
                      </Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="融资利率" name="code" rules={[{ required: true, message: '请输入'}]}>
                    <Input autoComplete="off"   placeholder="请输入" suffix="%"/>
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="宽期期利率" name="code" rules={[{ required: true, message: '请输入收款账户名'}]}>
                    <Input autoComplete="off"   placeholder="请输入" suffix="万元"/>
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="罚息利率" name="code" rules={[{ required: true, message: '请输入'}]}>
                    <Input autoComplete="off"   placeholder="请输入" suffix="万元"/>
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="宽限期天数" name="code" rules={[{ required: true, message: '请输入收款账号'}]}>
                    <Input autoComplete="off"   placeholder="请输入" suffix="天"/>
                  </Form.Item>
                </Col>
              </Row>
          </HeadFormCard>
          <HeadFormCard title="还款方式">
              <Row>
                <Col {...this.colspans}>
                  <Form.Item label="还款方式" name="name" rules={[{ required: true, message: '请选择'}]}>
                    <Select placeholder="请选择" allowClear={true} onChange={this.onChangeCategoryCode}>
                      <Select.Option value="银行转账" key="银行转账">等额本金</Select.Option>
                      <Select.Option value="银行转账1" key="银行转账1">等额本息</Select.Option>
                      <Select.Option value="银行转账1" key="银行转账1">平息</Select.Option>
                      <Select.Option value="银行转账1" key="银行转账1">先息后本</Select.Option>
                      <Select.Option value="银行转账1" key="银行转账1">到期还本付息</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="融资期限" name="code" rules={[{ required: true, message: '请输入'}]}>
                    <Input autoComplete="off"   placeholder="请输入" disabled suffix="天"/>
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="融资开始日期" name="code" rules={[{ required: true, message: '请选择'}]}>
                    <DatePicker />
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="融资结束日期" name="code" rules={[{ required: true, message: '请选择'}]}>
                    <DatePicker />
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="放款日" name="code">
                    <DatePicker />
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="还款间隔" name="code">
                    <Select placeholder="请选择" allowClear={true} onChange={this.onChangeCategoryCode}>
                      <Select.Option value="银行转账1" key="银行转账1">按月</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="还款次数" name="code">
                    <Input autoComplete="off"   placeholder="请输入"/>
                  </Form.Item>
                </Col>
              </Row>
          </HeadFormCard>
          <HeadFormCard title="还款计划"  extra={<YtBtn size="free">还款测算</YtBtn>}>
              <YtUpLoadAndDownLoad />
              <YtTable columns={columnsPlan} data={[]}/>
          </HeadFormCard>
          <HeadFormCard title="转让应收账款">
              <>
                <div className="box-flex receivable-row">
                  <div>应收帐款条数<span className="pointerSty">200条</span>，应收帐款金额<span className="pointerSty">32000</span></div>
                  <YtBtn onClick={this.goChange}>选择资产</YtBtn>
                </div>
                <YtTable columns={columnsReceivable} data={[]}/>
              </>
          </HeadFormCard>
          <div className="edit-btn-wrap">
            <YtBtn size="free" onClick={this.handleSubmit}>确认并下一步</YtBtn>
          </div>
        </Form>
        <ChangeModal  visible={visible} onOk={this.onOk} onCancel={this.onCancel}/>
      </div>
    )
  }
}
export default ApplyOne;
