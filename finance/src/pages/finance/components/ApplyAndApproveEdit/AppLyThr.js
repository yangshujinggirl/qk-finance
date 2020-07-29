import { Form,Row,Col,Select,Input,DatePicker } from 'antd';
import { YtDownLoad, BaseEditForm, YtUpLoadAndDownLoad, YtBtn, YtTable } from 'common';
import { columnsPlan, columnsContract } from './columns';
import HeadFormCard from '../../../components/HeadFormCard';

class ApplyOne extends BaseEditForm {
  formRef = React.createRef();
  onSubmit = async (values) => {
    console.log(values)
  };
  render() {
    const data = [
      {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
      },
      {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
      },
      {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
      },
      {
        key: '4',
        name: 'Disabled User',
        age: 99,
        address: 'Sidney No. 1 Lake Park',
      },
    ];
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
                <Form.Item label="融资编号" name="name">
                  <Input autoComplete="off"   placeholder="请输入" disabled/>
                </Form.Item>
              </Col>
              <Col {...this.colspans}>
                <Form.Item label="行业" name="code">
                  <Input autoComplete="off"   placeholder="请输入" disabled/>
                </Form.Item>
              </Col>
              <Col {...this.colspans}>
                <Form.Item label="融资企业" name="code">
                  <Select placeholder="请选择" allowClear={true} disabled>
                    <Select.Option value="银行转账" key="银行转账">
                      云图项目一期
                    </Select.Option>
                    <Select.Option value="银行转账1" key="银行转账1">
                      云图项目二期
                    </Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              </Row>
          </HeadFormCard>
          <HeadFormCard title="合同列表">
              <YtDownLoad />
              <YtTable
              columns={columnsContract}
              dataSource={data}
              select={true}
              rowSelection={rowSelection}/>
          </HeadFormCard>
          <div className="edit-btn-wrap">
            <YtBtn size="free" onClick={this.handleSubmit}>提交审批</YtBtn>
          </div>
        </Form>
      </div>
    )
  }
}
export default ApplyOne;
