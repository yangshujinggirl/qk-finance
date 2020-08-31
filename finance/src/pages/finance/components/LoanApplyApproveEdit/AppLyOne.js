import {Form, Row, Col, Select, Input} from 'antd';
import {BaseEditForm, YtBtn, YtTable, YtMessage} from 'common';
import {columnsPlan} from './columns';
import HeadFormCard from '../HeadFormCard';
import {ApplyAndApproveEdit, GetApproveDetailApi, GetBankListApi} from '../../../../api/finance/LoanApproveManagement'

class ApplyOne extends BaseEditForm {
    formRef = React.createRef();

    constructor(props) {
        super(props);
        this.state = {
            loanId: props.loanId,
            obj: {},
            currentEnterpriseInfo: {},
            payPlanInfoList: [],
        }
    }

    //初始化数据
    componentDidMount() {
        this.getApproveDetail();
    }

    onSubmit = async (values) => {
        ApplyAndApproveEdit({
            loanId: this.state.loanId,
        }).then(res => {
            YtMessage.success('操作成功');
        })
    };

    //详情
    getApproveDetail() {
        GetApproveDetailApi(this.state.loanId).then(res => {
            let {obj, currentEnterpriseInfo, payPlanInfoList} = res.data;
            let p = {...this.state, obj, currentEnterpriseInfo, payPlanInfoList}
            this.formRef.current.setFieldsValue({...obj, ...currentEnterpriseInfo})
            this.setState(p)
        })
    }

    render() {
        let {payPlanInfoList} = this.state;
        console.log(payPlanInfoList);
        return (
            <div>
                <Form className="common-edit-pages-form" {...this.formItemLayout}
                      ref={this.formRef}>
                    <HeadFormCard title="基本信息">
                        <Row>
                            <Col {...this.colspans}>
                                <Form.Item label="融资编号" name="loanNo">
                                    <Input autoComplete="off" placeholder="请输入" disabled/>
                                </Form.Item>
                            </Col>
                            <Col {...this.colspans}>
                                <Form.Item label="融资企业" name="enterpriseFullName">
                                    <Input autoComplete="off" placeholder="请输入" disabled/>
                                </Form.Item>
                            </Col>
                            <Col {...this.colspans}>
                                <Form.Item label="项目名称" name="projectName">
                                    <Input autoComplete="off" placeholder="请输入" disabled/>
                                </Form.Item>
                            </Col>
                            <Col {...this.colspans}>
                                <Form.Item label="资产包金额" name="packageAmount">
                                    <Input autoComplete="off" placeholder="请输入" disabled suffix="万元"/>
                                </Form.Item>
                            </Col>
                            <Col {...this.colspans}>
                                <Form.Item label="授信金额" name="creditAmount">
                                    <Input autoComplete="off" placeholder="请输入" disabled suffix="万元"/>
                                </Form.Item>
                            </Col>
                            <Col {...this.colspans}>
                                <Form.Item label="融资比例" name="loanPercent">
                                    <Input autoComplete="off" placeholder="请输入" disabled suffix="%"/>
                                </Form.Item>
                            </Col>
                            <Col {...this.colspans}>
                                <Form.Item label="还款方式" name="loanRate">
                                    <Input autoComplete="off" placeholder="请输入" disabled/>
                                </Form.Item>
                            </Col>
                        </Row>
                    </HeadFormCard>
                    <HeadFormCard title="资金收付计划">
                        <YtTable columns={columnsPlan} dataSource={payPlanInfoList}/>
                    </HeadFormCard>
                    <HeadFormCard title="放款信息【监管户】">
                        <Row>
                            <Col {...this.colspans}>
                                <Form.Item label="对方收款银行" name="monitorOpenBank">
                                    <Input autoComplete="off" placeholder="请输入" disabled/>
                                </Form.Item>
                            </Col>
                            <Col {...this.colspans}>
                                <Form.Item label="开户行" name="loanBank">
                                    <Input autoComplete="off" placeholder="请输入" disabled/>
                                </Form.Item>
                            </Col>
                            <Col {...this.colspans}>
                                <Form.Item label="对方收款账户名" name="monitorAccountName">
                                    <Input autoComplete="off" placeholder="请输入" disabled/>
                                </Form.Item>
                            </Col>
                            <Col {...this.colspans}>
                                <Form.Item label="对方收款账号" name="monitorBankAccountNo">
                                    <Input autoComplete="off" placeholder="请输入" disabled/>
                                </Form.Item>
                            </Col>
                        </Row>
                    </HeadFormCard>
                    {
                        this.props.handleType === '1' &&
                        <div className="edit-btn-wrap">
                            <YtBtn size="free" onClick={this.handleSubmit}>提交</YtBtn>
                        </div>
                    }
                </Form>
            </div>
        )
    }
}

export default ApplyOne;
