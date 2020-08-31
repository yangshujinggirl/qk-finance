import { Form,Row,Col,Select,Input } from 'antd';
import { BaseEditForm, YtBtn, YtTable } from 'common';
import HeadFormCard from '../../../components/HeadFormCard';
import { GetInfo } from 'api/finance/WhiteList';
import { useStatusOption, useTypeOption } from '../../option';

class ApplyOne extends BaseEditForm {
  formRef = React.createRef();
  state={
    info:{}
  }
  componentDidMount(){
    this.fetchInfo()
  }
  fetchInfo(){
    GetInfo({ accountId:this.props.accountId })
    .then((res) => {
      let { list } =res.data;
      this.setState({ info: list[0]});
      this.formRef.current.setFieldsValue(list[0]);
    })
  }
  render() {
    return(
      <div>
        <Form className="common-edit-pages-form" {...this.formItemLayout} ref={this.formRef}>
          <HeadFormCard title="基本信息">
              <Row>
                <Col {...this.colspans}>
                  <Form.Item label="融资企业" name="companyFullName">
                    <Input autoComplete="off"   placeholder="请输入" disabled/>
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="组织机构代码" name="companyOrgCode">
                    <Input autoComplete="off"   placeholder="请输入" disabled/>
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="账户名称" name="accountName">
                    <Input autoComplete="off"   placeholder="请输入" disabled/>
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="银行账号" name="accountNumber">
                    <Input autoComplete="off"   placeholder="请输入" disabled/>
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="开户行" name="openBankName">
                    <Input autoComplete="off"   placeholder="请输入" disabled/>
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="账户用途" name="accountUsage">
                    <Select placeholder="请选择" allowClear disabled>
                      {
                        useTypeOption.map((el)=>(
                          <Select.Option value={el.key} key={el.key}>{el.value}</Select.Option>
                        ))
                      }
                    </Select>
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="账户状态" name="accountStatus">
                    <Select placeholder="请选择" allowClear disabled>
                    {
                      useStatusOption.map((el)=>(
                        <Select.Option value={el.key} key={el.key}>{el.value}</Select.Option>
                      ))
                    }
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
          </HeadFormCard>
        </Form>
      </div>
    )
  }
}
export default ApplyOne;
