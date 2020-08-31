import {Form, Row, Col, Radio, Input, Select} from 'antd';
import {BaseEditForm, YtBtn, YtTable, YtMessage} from 'common';
import {columnsRecord} from './columns'
import HeadFormCard from '../../../components/HeadFormCard';
import './index.less';
import { GetSaveApprove, GetApproveList } from "../../../../../api/finance/WithdrawManage";

class ApproveRecord extends BaseEditForm {
    formRef = React.createRef();
    state = {
      approveList: [],
    }
    //初始化数据
    componentDidMount() {
        this.getApproveList();
    }
    //提交审批
    onSubmit =(values) => {
      GetSaveApprove({
        ...values,
        businessId: this.props.loanId,
      })
      .then(res => {
          YtMessage.success('操作成功');
          this.getApproveList()
      })
    };
    //审批列表
    getApproveList() {
      GetApproveList({loanId: this.props.loanId,currentStatus:'approve'})
      .then(res => {
        // let approveList = res.data.comments;
        // this.setState({approveList})
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
              {
                this.props.handleStatus != 'view'&&
                <>
                  <Row>
                      <Col {...this.colspans}>
                          <Form.Item label="审批状态" name="status"
                                     rules={[{required: true, message: "请选择"}]}>
                              <Radio.Group>
                                  <Radio value={2}>不通过</Radio>
                                  <Radio value={3}>通过</Radio>
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
