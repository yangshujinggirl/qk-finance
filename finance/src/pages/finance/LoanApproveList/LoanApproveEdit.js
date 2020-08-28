import { Tabs, Form, Row, Col } from 'antd';
import HeadFormCard from '../components/HeadFormCard';
import recordWithSubscription from '../components/ApproveRecord';
import withSubscription from '../components/LoanApplyApproveEdit';

const {TabPane} = Tabs;

const BankMod=({...props})=>{
  return <HeadFormCard title="打款银行信息">
          <Row>
              <Col {...this.colspans}>
                  <Form.Item label="打款银行" name="loanBank"
                             rules={[{required: true, message: '请输入'}]}>
                      <Select options={bankList} placeholder="请输入" allowClear
                              autoComplete="off"/>
                  </Form.Item>
              </Col>
              <Col {...this.colspans}>
                  <Form.Item label="开户行" name="loanOpenBank"
                             rules={[{required: true, message: '请输入'}]}>
                      <Input autoComplete="off" placeholder="请输入"/>
                  </Form.Item>
              </Col>
              <Col {...this.colspans}>
                  <Form.Item label="打款账户名" name="loanAccountName"
                             rules={[{required: true, message: '请输入'}]}>
                      <Input autoComplete="off" placeholder="请输入"/>
                  </Form.Item>
              </Col>
              <Col {...this.colspans}>
                  <Form.Item label="打款账号" name="loanAccount"
                             rules={[{required: true, message: '请输入'}]}>
                      <Input autoComplete="off" placeholder="请输入"/>
                  </Form.Item>
              </Col>
          </Row>
      </HeadFormCard>
}
const Approve = ({...props}) => {
  let RecordMod = recordWithSubscription('1',BankMod)
    return <TabPane tab="审批记录" key="4">
              <RecordMod loanId={props.loanId} />
          </TabPane>
}
const FinanceApproveEdit = withSubscription('2', Approve);//1:申请2:审批
export default FinanceApproveEdit;
