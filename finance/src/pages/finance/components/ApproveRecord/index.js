import {Form, Row, Col, Radio, Input, Select} from 'antd';
import {BaseEditForm, YtBtn, YtTable, YtMessage} from 'common';
import {columnsRecord} from './columns'
import HeadFormCard from '../HeadFormCard';
import './index.less';
import {ApplyAndApproveEdit, GetApproveListApi} from "api/finance/LoanApproveManagement";
import { GetApproveFinceListApi, GetSaveApproveApi } from "api/finance/ApplyAndApproveEdit";

class ApproveRecord extends BaseEditForm {
    formRef = React.createRef();
    state = {
      approveList: [],
    }
    //初始化数据
    componentDidMount() {
        this.getApproveList();
    }
    formatApi=()=>{
      let { pageType } =this.props;
      let submitApi, listApi;
      if(pageType =='loan') {
        submitApi = ApplyAndApproveEdit;
        listApi = GetApproveListApi;
      } else if(pageType == 'fince') {
        submitApi = GetSaveApproveApi;
        listApi = GetApproveFinceListApi;
      }
      return { submitApi, listApi }
    }
    //提交审批
    onSubmit =(values) => {
      let { submitApi } =this.formatApi();
      submitApi({ ...values, loanId: this.props.loanId})
      .then(res => {
          YtMessage.success('操作成功');
          this.getApproveList()
      })
    };
    //审批列表
    getApproveList() {
      let { listApi } =this.formatApi();
      listApi({loanId: this.props.loanId})
      .then(res => {
        let approveList = res.data.comments;
        let p = {...this.state, approveList}
        this.setState(p)
      })
    }

    render() {
        let { approveList } = this.state;
        return (
            <div>
                <Form className="common-edit-pages-form" {...this.formItemLayout} ref={this.formRef}>
                    <div className="record-wrap">
                        <YtTable dataSource={approveList} columns={columnsRecord}/>
                    </div>
                    {this.props.children}
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
