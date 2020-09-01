import { Button, Form,Row,Col,Select,Input,DatePicker } from 'antd';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { BaseEditForm, YtUpLoadAndDownLoad, YtBtn, YtTable } from 'common';
import { columnsReceivable, columnsPlan } from './columns';
import HeadFormCard from '../HeadFormCard';
import ChangeModal from './components/ChangeModal';
import { GetReceiTotalCountApi, GetSavePayMent, GetPayPlanApi, GetDeleteApi, GetCountPayApi, GetPayInfo, GetReceivablesListApi } from 'api/finance/ApplyAndApproveEdit';
import './AppLyTwo.less';

class ApplyOne extends BaseEditForm {
  formRef = React.createRef();
  state={
    debtors:[],//债务人
    visible:false,
    receivablesList:[],//转让应账款列表
    payList:[],//还款测算列表
    info:{}
  }
  componentDidMount(){
    this.fetchInfo();
  }
  fetchInfo=()=>{
    GetPayInfo({ currentStatus:this.props.currentStatus, loanId: this.props.loanId })
    .then((res)=> {
      let { obj, debtors, tranferAmount, tranferCount } =res.data;
      let { startDate, finishDate, loanDate } =obj;
      startDate = startDate?moment(startDate):'';
      finishDate = finishDate?moment(finishDate):'';
      loanDate = loanDate?moment(loanDate):'';
      obj = {
        ...obj,tranferAmount, tranferCount,startDate, finishDate, loanDate
      }
      this.setState({ info:obj, debtors:debtors });
      this.formRef.current.setFieldsValue(obj);
      this.fetchReceivables(obj);
      this.fetchReceivablesTotal(obj);
      this.fetchPayPlan(obj);
    })
  }
  //还款计划列表
  fetchPayPlan=(values)=>{
    GetPayPlanApi({ loanId: this.props.loanId })
    .then((res)=> {
      let { data } =res;
      this.setState({ payList:data });
    })
  }
  //转账列表总条数
  fetchReceivablesTotal=(values)=>{
    GetReceiTotalCountApi({
      packetId:values.packageId,
      transferStatus: 2,
      industryTypeCode:values.typeCode
    })
    .then((res)=> {
      let { currentAssetAmount, currentAssetNum } =res.data;
      let { info } =this.state;
      info = {...info, currentAssetAmount, currentAssetNum };
      this.setState({ info })

    })
  }
  //转让应收列表
  fetchReceivables=(values)=>{
    GetReceivablesListApi({
      packetId:values.packageId,
      transferStatus: 2,
      industryTypeCode:values.typeCode
    })
    .then((res)=> {
      let { data } =res;
      this.setState({ receivablesList:data })
    })
  }
  //移除转让应收列表
  onOperateClick = ({item, type}) => {
    GetDeleteApi({ id: item.id })
    .then((res) => {
      console.log(res);
    })
  };
  //还款测算
  countPayment= async()=>{
    try {
      const values = await this.formRef.current.validateFields(['creditAmount','loanRate','repayMethod','startDate','finishDate']);
      let { startDate, finishDate, loanDate, ...val } =values;
      val = {
        ...val,
        loanId: this.props.loanId,
        startDate:moment(startDate).format('YYYY-MM-DD'),
        finishDate:moment(finishDate).format('YYYY-MM-DD'),
        loanDate:moment(loanDate).format('YYYY-MM-DD')
      }
      GetCountPayApi(val)
      .then((res)=> {
        this.fetchPayPlan({loanId: this.props.loanId})
      })
    } catch (errorInfo) {
      console.log("Failed:", errorInfo);
    }

  }
  //选择资产
  goChange=()=>{
    this.setState({ visible:true })
  }
  onOk=()=>{
    let { packageId, typeCode } =this.state.info;
    this.fetchReceivables({ packageId, typeCode })
    this.setState({ visible:false })
  }
  onCancel=()=>{
    this.setState({ visible:false })
  }
  onSubmit = async (values) => {
    try {
      const values = await this.formRef.current.validateFields();
      const { info } =this.state;
      let { startDate, finishDate, loanDate, ...val } =values;
      val = {
        ...val,
        enterpriseId:info.enterpriseId,
        loanId: this.props.loanId,
        packageId:'zcb1597117027316',
        startDate:startDate?moment(startDate).format('YYYY-MM-DD'):null,
        finishDate:finishDate?moment(finishDate).format('YYYY-MM-DD'):null,
        loanDate:loanDate?moment(loanDate).format('YYYY-MM-DD'):null
      }
      GetSavePayMent(val)
      .then((res)=> {
        this.props.upDateKey('contract')
      })
    } catch (errorInfo) {
      console.log("Failed:", errorInfo);
    }
  };
  render() {
    const { debtors, info, visible, receivablesList, payList} =this.state;
    const { handleStatus,handleType } =this.props;
    let extra=(handleType=='1'&&handleStatus!='view')?<YtBtn size="free" onClick={this.countPayment}>还款测算</YtBtn>:null;
    let isCanEdit = handleType=='2'||handleStatus=="view";
    return(
      <div>
        <Form className="common-edit-pages-form" {...this.formItemLayout} ref={this.formRef}>
          <HeadFormCard title="基本信息">
              <Row>
                <Col {...this.colspans}>
                  <Form.Item label="融资企业" name="enterpriseName" rules={[{ required: true, message: '请选择融资企业'}]}>
                    <Input autoComplete="off"   placeholder="请输入" disabled/>
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="资产包">
                    <Row gutter={8}>
                      <Col span={18}>
                        <Form.Item name="packetName">
                          <Input autoComplete="off"   placeholder="请输入" disabled/>
                        </Form.Item>
                      </Col>
                      <Col span={6}>
                        <Link to="/account/assetPackage/info/12" className="link-tips">资产池明细</Link>
                      </Col>
                    </Row>
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="资产包金额" name="packageAmount">
                    <Input autoComplete="off"   placeholder="请输入"  suffix="万元" disabled/>
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="授信金额" name="creditAmount" rules={[{ required: true, message: '请输入'}]}>
                    <Input autoComplete="off"   placeholder="请输入" suffix="万元" disabled={isCanEdit}/>
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="融资比例" name="loanPercent">
                    <Input autoComplete="off"   placeholder="请输入" suffix="%" disabled/>
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="首付款金额" name="firstPayAmount">
                    <Input autoComplete="off"   placeholder="请输入" suffix="万元" disabled={isCanEdit}/>
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="保证金金额" name="depositAmount">
                    <Input autoComplete="off"   placeholder="请输入" suffix="万元" disabled={isCanEdit}/>
                  </Form.Item>
                </Col>
              </Row>
          </HeadFormCard>
          <HeadFormCard title="利率设计">
              <p className="form-row-title">资金方收款账户【监管户】</p>
              <Row>
                <Col {...this.colspans}>
                  <Form.Item label="利率类型" name="rateType" rules={[{ required: true, message: '请选择'}]}>
                    <Select placeholder="请选择" allowClear={true} disabled={isCanEdit}>
                      <Select.Option value="1" key="1">明示利率</Select.Option>
                      <Select.Option value="2" key="2">隐含利率</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="融资利率" name="loanRate" rules={[{ required: true, message: '请输入'}]}>
                    <Input autoComplete="off"   placeholder="请输入" suffix="%" disabled={isCanEdit}/>
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="宽期期利率" name="gracePeriodRate">
                    <Input autoComplete="off"   placeholder="请输入" suffix="万元" disabled={isCanEdit}/>
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="罚息利率" name="penaltyRate" rules={[{ required: true, message: '请输入'}]}>
                    <Input autoComplete="off"   placeholder="请输入" suffix="万元" disabled={isCanEdit}/>
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="宽限期天数" name="gracePeriodDays" rules={[{ required: true, message: '请输入'}]}>
                    <Input autoComplete="off"   placeholder="请输入" suffix="天" disabled={isCanEdit}/>
                  </Form.Item>
                </Col>
              </Row>
          </HeadFormCard>
          <HeadFormCard title="还款方式">
              <Row>
                <Col {...this.colspans}>
                  <Form.Item label="还款方式" name="repayMethod" rules={[{ required: true, message: '请选择'}]}>
                    <Select placeholder="请选择" allowClear={true} disabled={isCanEdit}>
                      <Select.Option value="3" key="3">等额本金</Select.Option>
                      <Select.Option value="4" key="4">等额本息</Select.Option>
                      <Select.Option value="5" key="5">平息</Select.Option>
                      <Select.Option value="2" key="2">先息后本</Select.Option>
                      <Select.Option value="1" key="1">到期还本付息</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="融资期限" name="loanPeriod" rules={[{ required: true, message: '请输入'}]}>
                    <Input autoComplete="off"   placeholder="请输入" suffix="天" disabled={isCanEdit}/>
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="融资开始日期" name="startDate" rules={[{ required: true, message: '请选择'}]}>
                    <DatePicker disabled={isCanEdit}/>
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="融资结束日期" name="finishDate" rules={[{ required: true, message: '请选择'}]}>
                    <DatePicker disabled={isCanEdit}/>
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="放款日" name="loanDate">
                    <DatePicker disabled={isCanEdit}/>
                  </Form.Item>
                </Col>
                {/*<Col {...this.colspans}>
                  <Form.Item label="还款间隔" name="payPeriod">
                    <Select placeholder="请选择" allowClear={true} onChange={this.onChangeCategoryCode} disabled={handleStatus=="view"}>
                      <Select.Option value="银行转账1" key="银行转账1">按月</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="还款次数" name="payPeriodNum">
                    <Input autoComplete="off"   placeholder="请输入" disabled={isCanEdit}/>
                  </Form.Item>
                </Col>*/}
              </Row>
          </HeadFormCard>
          <HeadFormCard title="还款计划"  extra={extra}>
              <YtTable columns={columnsPlan} dataSource={payList}/>
          </HeadFormCard>
          <HeadFormCard title="转让应收账款">
              <>
                <div className="box-flex receivable-row">
                  <div>应收帐款条数<span className="pointerSty">{info.currentAssetNum}条</span>，应收帐款金额<span className="pointerSty">{info.currentAssetAmount}</span></div>
                  { (handleType=='1'&&handleStatus!='view')&&
                      <YtBtn onClick={this.goChange}>选择资产</YtBtn>
                  }
                </div>
                <YtTable columns={columnsReceivable} dataSource={receivablesList}/>
              </>
          </HeadFormCard>
          {
            (handleType=='1'&&handleStatus!='view')&&
            <div className="edit-btn-wrap">
              <YtBtn size="free" onClick={this.handleSubmit} onOperateClick={this.onOperateClick}>确认并下一步</YtBtn>
            </div>
          }
        </Form>
        {
          visible&&
          <ChangeModal
            debtors={debtors}
            info={info}
            visible={visible}
            onOk={this.onOk}
            onCancel={this.onCancel}/>
        }
      </div>
    )
  }
}
export default ApplyOne;
