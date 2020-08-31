import {Form, Row, Col, Select, Input} from 'antd';
import {BaseEditForm, YtBtn, YtTable} from 'common';
import {columnsVoucher, columnsRecord} from '../../columns';
import HeadFormCard from '../../../components/HeadFormCard';
import {GetInfo} from '../../../../../api/finance/WithdrawManage';

class ApplyOne extends BaseEditForm {
    formRef = React.createRef();
    state = {
        info: {},
        historyList: []
    }
    onSubmit = async (values) => {
        console.log(values)
    };

    componentDidMount() {
        this.fetchInfo()
    }

    fetchInfo() {
        const {applyId} = this.props;
        GetInfo({applyId})
            .then((res) => {
                let {finacing, obj, result} = res.data
                let historyList = result.list;
                let info = {...finacing, ...obj}
                let p = {...this.state, historyList, info}
                this.setState(p)
                this.formRef.current.setFieldsValue(info);
            })
    }

    render() {
        let {historyList, info} = this.state
        console.log('table', historyList, info);
        return (
            <div>
                <Form className="common-edit-pages-form" {...this.formItemLayout} ref={this.formRef}>
                    <HeadFormCard title="基本信息">
                        <Row>
                            <Col {...this.colspans}>
                                <Form.Item label="融资企业" name="enterpriseName">
                                    <Input autoComplete="off" placeholder="请输入" disabled/>
                                </Form.Item>
                            </Col>
                            <Col {...this.colspans}>
                                <Form.Item label="融资编号" name="loanNo">
                                    <Input autoComplete="off" placeholder="请输入" disabled/>
                                </Form.Item>
                            </Col>
                            <Col {...this.colspans}>
                                <Form.Item label="授信金额" name="creditAmount">
                                    <Input autoComplete="off" placeholder="请输入" disabled suffix="万元"/>
                                </Form.Item>
                            </Col>
                            <Col {...this.colspans}>
                                <Form.Item label="融资利率" name="loanRate">
                                    <Input autoComplete="off" placeholder="请输入" disabled suffix="%"/>
                                </Form.Item>
                            </Col>
                            <Col {...this.colspans}>
                                <Form.Item label="历史累计请款金额" name="totalAmountHisotry">
                                    <Input autoComplete="off" placeholder="请输入" disabled suffix="万元"/>
                                </Form.Item>
                            </Col>
                        </Row>
                    </HeadFormCard>
                    <HeadFormCard title="监管户信息">
                        <Row>
                            <Col {...this.colspans}>
                                <Form.Item label="监管银行" name="monitorBank">
                                    <Input autoComplete="off" placeholder="请输入" disabled/>
                                </Form.Item>
                            </Col>
                            <Col {...this.colspans}>
                                <Form.Item label="监管户开户行" name="monitorOpenBank">
                                    <Input autoComplete="off" placeholder="请输入" disabled/>
                                </Form.Item>
                            </Col>
                            <Col {...this.colspans}>
                                <Form.Item label="监管账户名" name="monitorAccountName">
                                    <Input autoComplete="off" placeholder="请输入" disabled/>
                                </Form.Item>
                            </Col>
                            <Col {...this.colspans}>
                                <Form.Item label="监管账号" name="monitorBankAccountNo">
                                    <Input autoComplete="off" placeholder="请输入" disabled/>
                                </Form.Item>
                            </Col>
                            <Col {...this.colspans}>
                                <Form.Item label="监管户资金余额" name="monitorAccountLeftAmount">
                                    <Input autoComplete="off" placeholder="请输入" disabled suffix="万元"/>
                                </Form.Item>
                            </Col>
                        </Row>
                    </HeadFormCard>
                    <HeadFormCard title="本次请款信息">
                        <Row>
                            <Col {...this.colspans}>
                                <Form.Item label="请款时间" name="applyTime">
                                    <Input autoComplete="off" placeholder="请输入" disabled/>
                                </Form.Item>
                            </Col>
                            <Col {...this.colspans}>
                                <Form.Item label="请款人" name="applyUserFullName">
                                    <Input autoComplete="off" placeholder="请输入" disabled/>
                                </Form.Item>
                            </Col>
                            <Col {...this.colspans}>
                                <Form.Item label="本次请款金额" name="loanAmount">
                                    <Input autoComplete="off" placeholder="请输入" disabled suffix="万元"/>
                                </Form.Item>
                            </Col>
                            <Col {...this.colspans}>
                                <Form.Item label="请款类型" name="useType">
                                    <Select placeholder="请选择" disabled>
                                        <Select.Option value={1} key="OP">再经营</Select.Option>
                                        <Select.Option value={2} key="RP">偿还融资贷款</Select.Option>
                                        <Select.Option value={3} key="TQ">提取利润</Select.Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>
                    </HeadFormCard>
                    <HeadFormCard title="收款户信息">
                        <Row>
                            <Col {...this.colspans}>
                                <Form.Item label="收款方" name="receiverName">
                                    <Input autoComplete="off" placeholder="请输入"/>
                                </Form.Item>
                            </Col>
                            <Col {...this.colspans}>
                                <Form.Item label="收款方账户名" name="receiverAccountName">
                                    <Input autoComplete="off" placeholder="请输入"/>
                                </Form.Item>
                            </Col>
                            <Col {...this.colspans}>
                                <Form.Item label="收款方开户行" name="receiverOpenBank">
                                    <Input autoComplete="off" placeholder="请输入"/>
                                </Form.Item>
                            </Col>
                            <Col {...this.colspans}>
                                <Form.Item label="收款方账号" name="receiverAccountNo">
                                    <Input autoComplete="off" placeholder="请输入"/>
                                </Form.Item>
                            </Col>
                        </Row>
                    </HeadFormCard>
                    <HeadFormCard title="请款凭证">
                        <YtTable columns={columnsVoucher} data={[info]}/>
                    </HeadFormCard>
                    <HeadFormCard title="历史请款记录">
                        <YtTable columns={columnsRecord} data={historyList}/>
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
