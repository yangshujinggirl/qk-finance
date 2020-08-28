import { Select, Input, Tabs, Form, Row, Col } from 'antd';
import { useState, useEffect } from 'react';
import HeadFormCard from '../components/HeadFormCard';
import ApproveRecord from '../components/ApproveRecord';
import withSubscription from '../components/LoanApplyApproveEdit';
import { GetBankListApi } from "api/finance/LoanApproveManagement";

const {TabPane} = Tabs;
const colspans = {
  xs: 24,
  md: 24,
  lg: 12,
  xl: 12,
  xxl: 12
};
class Approve extends React.Component{
  state={
    bankList:[]
  }
  componentDidMount(){
    this.fetchList()
  }
  fetchList=()=> {
      GetBankListApi(this.props.loanId)
      .then(res => {
          let bankList = [];
          res.data.forEach(item => {
              bankList.push({
                  label: item.text,
                  value: item.text
              })
          })
          this.setState({bankList})
      })
  }
  render(){
    const { bankList } =this.state;
    return (
          <ApproveRecord  loanId={this.props.loanId} pageType="loan">
            <HeadFormCard title="打款银行信息">
                <Row>
                    <Col {...colspans}>
                        <Form.Item label="打款银行" name="loanBank"
                                   rules={[{required: true, message: '请输入'}]}>
                            <Select options={bankList} placeholder="请输入" allowClear
                                    autoComplete="off"/>
                        </Form.Item>
                    </Col>
                    <Col {...colspans}>
                        <Form.Item label="开户行" name="loanOpenBank"
                                   rules={[{required: true, message: '请输入'}]}>
                            <Input autoComplete="off" placeholder="请输入"/>
                        </Form.Item>
                    </Col>
                    <Col {...colspans}>
                        <Form.Item label="打款账户名" name="loanAccountName"
                                   rules={[{required: true, message: '请输入'}]}>
                            <Input autoComplete="off" placeholder="请输入"/>
                        </Form.Item>
                    </Col>
                    <Col {...colspans}>
                        <Form.Item label="打款账号" name="loanAccount"
                                   rules={[{required: true, message: '请输入'}]}>
                            <Input autoComplete="off" placeholder="请输入"/>
                        </Form.Item>
                    </Col>
                </Row>
            </HeadFormCard>
          </ApproveRecord>
    )
  }
}
const FinanceApproveEdit = withSubscription('2', Approve);//1:申请2:审批

export default FinanceApproveEdit;
