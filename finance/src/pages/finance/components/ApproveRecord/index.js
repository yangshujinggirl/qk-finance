import {Form, Row, Col, Radio, Input, Select} from 'antd';
import {BaseEditForm, YtBtn, YtTable, YtMessage} from 'common';
import {columnsRecord} from './columns'
import HeadFormCard from '../HeadFormCard';
import './index.less';
import {ApplyAndApproveEdit, GetBankListApi, GetApproveListApi} from "../../../../api/finance/ApplyAndApproveEdit";

class ApproveRecord extends BaseEditForm {
    formRef = React.createRef();
    state = {
        bankList: [],
        approveList: [],
    }

    //初始化数据
    componentDidMount() {
        this.getBankList();
        this.getApproveList();
    }

    //提交审批
    onSubmit = async (values) => {
        console.log(this.props)
        ApplyAndApproveEdit({
            ...values, loanId: this.props.loanId,
        }).then(res => {
            YtMessage.success('操作成功');
            this.getApproveList()
        })
    };

    //银行列表
    getBankList() {
        GetBankListApi(this.props.loanId).then(res => {
            console.log(res.data);
            let bankList = []
            res.data.forEach(item => {
                bankList.push({
                    label: item.text,
                    value: item.text
                })
            })
            let p = {...this.state, bankList}
            this.setState(p)
        })
    }

    //审批列表
    getApproveList() {
        GetApproveListApi({loanId: this.props.loanId}).then(res => {
            console.log(res.data);
            let approveList = res.data.comments;
            let p = {...this.state, approveList}
            this.setState(p)
        })
    }

    render() {
        let {bankList,approveList} = this.state;
        return (
            <div>
                <Form className="common-edit-pages-form" {...this.formItemLayout} ref={this.formRef}>
                    <div className="record-wrap">
                        <YtTable dataSource={approveList} columns={columnsRecord}/>
                    </div>
                    <HeadFormCard title="打款银行信息">
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
                    {
                        this.props.handleType != '1' &&
                        <>
                            <Row>
                                <Col {...this.colspans}>
                                    <Form.Item label="审批状态" name="isConfirmLoan"
                                               rules={[{required: true, message: "请选择"}]}>
                                        <Radio.Group>
                                            <Radio value={0}>不通过</Radio>
                                            <Radio value={1}>通过</Radio>
                                        </Radio.Group>
                                    </Form.Item>
                                    <Form.Item name="comments" label="审批意见" rules={[{required: true, message: "请输入"}]}>
                                        <Input.TextArea rows={4}/>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <div className="edit-btn-wrap">
                                <YtBtn size="free" onClick={this.handleSubmit}>确认</YtBtn>
                            </div>
                        </>
                    }

                </Form>
            </div>
        )
    }
}

export default ApproveRecord;
