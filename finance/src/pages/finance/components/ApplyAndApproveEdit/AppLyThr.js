import { Form,Row,Col,Select,Input,DatePicker } from 'antd';
import { YtMessage, YtDownLoad, BaseEditForm, YtUpLoadAndDownLoad, YtBtn, YtTable } from 'common';
import { columnsPlan, columnsContract } from './columns';
import { GetSaveContractApi, GetContractInfoApi, GetContractListApi } from 'api/finance/ApplyAndApproveEdit';
import { tradeOption } from './options';
import HeadFormCard from '../HeadFormCard';

class ApplyOne extends BaseEditForm {
  formRef = React.createRef();
  state = {
    list:[],
    info:{}
  }
  componentDidMount(){
    this.fetchInfo();
    this.fetchList();
  }
  fetchList=()=>{
    GetContractListApi({ loanId: this.props.loanId })
    .then((res)=> {
      let { data } =res;
      data = data?data:[]
      this.setState({ list:data });
    })
  }
  fetchInfo=()=>{
    this.setState({ submitLoading:true })
    GetContractInfoApi({ loanId: this.props.loanId, currentStatus:'edit' })
    .then((res)=> {
      let { data } =res;
      this.formRef.current.setFieldsValue(data.obj);
      this.setState({ info:data.obj, submitLoading:false });
    })
  }
  handleSubmit =(values) => {
    GetSaveContractApi({ loanId: this.props.loanId })
    .then((res)=> {
      YtMessage.success('提交成功')
      console.log(res)
    })
  };
  render() {
    const { list, info, submitLoading } =this.state;
    const { handleStatus,handleType } =this.props;
    const rowSelection = {
      type: "checkbox",
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
      getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
      }),
    };
    return(
      <div>
        <Form className="common-edit-pages-form" {...this.formItemLayout} ref={this.formRef}>
          <HeadFormCard title="基本信息">
              <Row>
              <Col {...this.colspans}>
                <Form.Item label="融资编号" name="loanNo">
                  <Input autoComplete="off"   placeholder="请输入" disabled/>
                </Form.Item>
              </Col>
              <Col {...this.colspans}>
                <Form.Item label="行业" name="typeCode">
                  <Select placeholder="请选择" allowClear={true} disabled>
                    {
                      tradeOption.map((el) =>(
                        <Select.Option value={el.key} key={el.key}>{el.value}</Select.Option>
                      ))
                    }
                  </Select>
                </Form.Item>
              </Col>
              <Col {...this.colspans}>
                <Form.Item label="融资企业" name="enterpriseName">
                  <Input autoComplete="off"   placeholder="请输入" disabled/>
                </Form.Item>
              </Col>
              </Row>
          </HeadFormCard>
          <HeadFormCard title="合同列表">
              {/*<YtDownLoad />*/}
              <YtTable
                columns={columnsContract}
                dataSource={list}
                select={true}
                rowSelection={rowSelection}/>
          </HeadFormCard>
          {
            (handleType=='1'&&handleStatus!='view')&&
            <div className="edit-btn-wrap">
              <YtBtn size="free" onClick={this.handleSubmit} loading={submitLoading}>提交审核</YtBtn>
            </div>
          }
        </Form>
      </div>
    )
  }
}
export default ApplyOne;
