import { Form,Row,Col,Select,Input,Button } from 'antd';
import { Link } from 'react-router-dom';
import { BaseEditForm, YtBtn } from 'common';
import HeadFormCard from '../HeadFormCard';
import PopoverMod from './components/PopoverMod';

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
                  <Form.Item label="融资编号" name="name">
                    <Input autoComplete="off"   placeholder="请输入" disabled/>
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="行业" name="code">
                    <Input autoComplete="off"   placeholder="请输入" disabled/>
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="融资企业">
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
                        <PopoverMod dataSource={[]}/>
                      </Col>
                    </Row>
                  </Form.Item>
                </Col>
              </Row>
          </HeadFormCard>
          <HeadFormCard title="银行信息">
              <p className="form-row-title">资金方收款账户【监管户】</p>
              <Row>
                <Col {...this.colspans}>
                  <Form.Item label="收款方式" name="name">
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
                  <Form.Item label="收款银行账户" name="code" rules={[{ required: true, message: '请选择收款银行账户'}]}>
                    <Select placeholder="请选择" allowClear={true} onChange={this.onChangeCategoryCode}>
                      <Select.Option value="建设银行" key="建设银行">建设银行</Select.Option>
                      <Select.Option value="民生银行" key="民生银行">民生银行</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="收款账户名" name="code" rules={[{ required: true, message: '请输入收款账户名'}]}>
                    <Input autoComplete="off"   placeholder="请输入" disabled/>
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="收款账号" name="code" rules={[{ required: true, message: '请输入收款账号'}]}>
                    <Input autoComplete="off"   placeholder="请输入" disabled/>
                  </Form.Item>
                </Col>
              </Row>
              <p className="form-row-title">融资方收款账户</p>
              <Row>
                <Col {...this.colspans}>
                  <Form.Item label="收款方式" name="name">
                    <Select placeholder="请选择" allowClear={true} onChange={this.onChangeCategoryCode}>
                      <Select.Option value="银行转账" key="银行转账">电汇</Select.Option>
                      <Select.Option value="银行转账1" key="银行转账1">银行转账</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                <Form.Item label="收款银行账户" name="name" rules={[{ required: true, message: '请选择收款银行账户'}]}>
                  <Select placeholder="请选择" allowClear={true} onChange={this.onChangeCategoryCode}>
                    <Select.Option value="银行转账" key="银行转账">电汇</Select.Option>
                    <Select.Option value="银行转账1" key="银行转账1">银行转账</Select.Option>
                  </Select>
                </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="收款账户名" name="code" rules={[{ required: true, message: '请输入收款账户名'}]}>
                    <Input autoComplete="off"   placeholder="请输入"/>
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="收款账号" name="code" rules={[{ required: true, message: '请输入收款账号'}]}>
                    <Input autoComplete="off"   placeholder="请输入"/>
                  </Form.Item>
                </Col>
              </Row>
          </HeadFormCard>
          <HeadFormCard title="联系方式">
              <p className="form-row-title">资金方</p>
              <Row>
                <Col {...this.colspans}>
                  <Form.Item label="融资企业" name="name">
                    <Input autoComplete="off"   placeholder="请输入" disabled/>
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="法人代表" name="code">
                    <Input autoComplete="off"   placeholder="请输入" disabled/>
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="电话" name="code">
                    <Input autoComplete="off"   placeholder="请输入" disabled/>
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="传真" name="code">
                    <Input autoComplete="off"   placeholder="请输入" disabled/>
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="地址" name="code">
                    <Input autoComplete="off"   placeholder="请输入" disabled/>
                  </Form.Item>
                </Col>
              </Row>
              <p className="form-row-title">融资方</p>
              <Row>
                <Col {...this.colspans}>
                  <Form.Item label="融资企业" name="name">
                    <Input autoComplete="off"   placeholder="请输入" disabled/>
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="法人代表" name="code">
                    <Input autoComplete="off"   placeholder="请输入" disabled/>
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="电话" name="code">
                    <Input autoComplete="off"   placeholder="请输入" disabled/>
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="传真" name="code">
                    <Input autoComplete="off"   placeholder="请输入" disabled/>
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="地址" name="code">
                    <Input autoComplete="off"   placeholder="请输入" disabled/>
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
