import { Form,Row,Col,Radio, Input } from 'antd';
import { BaseEditForm, YtBtn, YtTable } from 'common';
import { columnsRecord } from './columns'
import HeadFormCard from '../HeadFormCard';
import './index.less';

class ApproveRecord extends BaseEditForm {
  formRef = React.createRef();
  onSubmit = async (values) => {
    console.log(values)
  };
  render() {
    const data =[
      {
        name:'name',
        age:'age',
        ac:'ac',
        key:1
      },
      {
        name:'name',
        age:'age',
        ac:'ac',
        key:2
      },
    ]
    return(
      <div>
        <Form className="common-edit-pages-form" {...this.formItemLayout} ref={this.formRef}>
          <div className="record-wrap">
            <YtTable dataSource={data} columns={columnsRecord}/>
          </div>
          <Row>
            <Col {...this.colspans}>
              <Form.Item label="审批状态" name="name" rules={[{ required: true,message:"请选择" }]}>
                <Radio.Group>
                  <Radio value={1}>不通过</Radio>
                  <Radio value={2}>通过</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item name="customizeGender" label="审批意见" rules={[{ required: true,message:"请输入" }]}>
                <Input.TextArea rows={4}/>
              </Form.Item>
            </Col>
          </Row>
          <div className="edit-btn-wrap">
            <YtBtn size="free" onClick={this.handleSubmit}>确认</YtBtn>
          </div>
        </Form>
      </div>
    )
  }
}
export default ApproveRecord;
