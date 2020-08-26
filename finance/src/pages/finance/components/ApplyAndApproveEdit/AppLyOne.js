import { Form,Row,Col,Select,Input,Button } from 'antd';
import { Link } from 'react-router-dom';
import { BaseEditForm, YtBtn } from 'common';
import HeadFormCard from '../HeadFormCard';
import PopoverMod from './components/PopoverMod';
import { tradeOption, moneyPathOption } from './options'
import {
  GetFinanceDetail,
  GetSaveElement,
  GetCompanyList,
  GetPackageList,
  GetBankList
} from 'api/finance/ApplyAndApproveEdit';

class ApplyOne extends BaseEditForm {
  formRef = React.createRef();
	state = {
		basicInfo: {},
    companyList:[],//融资企业
    packageList:[],//资产包
    packageId:null,//资产包id
    jgBank:[],//监管银行
    fundBank:[],//资金方银行
	}
  componentDidMount(){
		this.fetchBasicInfo();
	}
  onSubmit = (values) => {
    console.log(values)
  };
	fetchBasicInfo=()=> {
		GetFinanceDetail({ loanId: this.props.loanId, currentStatus:'view' })
		.then((res)=> {
      this.setState({ basicInfo: res.data.obj });
		})
	}
  //选择行业
  onChangeTrade=(value)=>{
    GetCompanyList({ typeCode :value})
    .then((res)=> {
      const { data } =res;
      data.map((el)=>el.key = el.id);
      this.setState({ companyList: data });
    })

  }
  //选择企业
  onChangeCompany=(value)=>{
    let item = this.state.companyList.find((el)=>{ return value == el.enterpriseId });
    //请求企业资产包
    GetPackageList({ enterpriseId:value})
    .then((res)=> {
      console.log(res);
      this.setState({ packageList: [] });
    })
    GetBankList({
      accountUsage:1,
      accountType:1,
      accountStatus:2,
      reviewStatus:2,
      companyOrgCode:item.organizationalCode
    })
    .then((res)=> {
      this.setState({ jgBank: [] });
    })
  }
  //选择企业资产包
  changePackge=(value)=>{
    //请求企业资产包
    this.setState({ packageId: '' });
  }
  //选择银行
  onChangeBank=(value)=>{
    // this.setState({ packageId: '' });
  }
  handleSubmit = async () => {
    try {
      const values = await this.formRef.current.validateFields();
      const { loanId } =this.props;
      console.log(values)
      GetSaveElement()
      .then((res)=> {
        console.log(values)
      })
    } catch (errorInfo) {
      console.log("Failed:", errorInfo);
    }
  };

  render() {
    const { companyList, packageList, packageId, jgBank, fundBank } =this.state;
    return(
      <div>
        <Form className="common-edit-pages-form" {...this.formItemLayout} ref={this.formRef}>
          <HeadFormCard title="基本信息">
              <Row>
                <Col {...this.colspans}>
                  <Form.Item label="融资编号" name="loanNo">
                    <Input autoComplete="off" placeholder="请输入" disabled/>
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="行业" name="typeCode">
                    <Select placeholder="请选择" allowClear={true} onSelect={this.onChangeTrade}>
                      {
                        tradeOption.map((el) =>(
                          <Select.Option value={el.key} key={el.key}>{el.value}</Select.Option>
                        ))
                      }
                    </Select>
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="项目名称" name="projectName" rules={[{ required: true, message:'请输入'}]}>
                    <Input autoComplete="off" placeholder="请输入"/>
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="融资企业">
                    <Row gutter={8}>
                      <Col span={18}>
                        <Form.Item name="enterpriseId" rules={[{ required: true,message:'请输入'}]}>
                          <Select placeholder="请选择" allowClear={true} onSelect={this.onChangeCompany} disabled={companyList.length==0}>
                          {
                            companyList.map((el) =>(
                              <Select.Option value={el.enterpriseId} key={el.enterpriseId}>{el.enterpriseFullName}</Select.Option>
                            ))
                          }
                          </Select>
                        </Form.Item>
                      </Col>
                      <Col span={6}>
                        <PopoverMod dataSource={[]}/>
                      </Col>
                    </Row>
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="资产包">
                    <Row gutter={8}>
                      <Col span={18}>
                        <Form.Item name="packageId" rules={[{ required: true, message:'请输入'}]}>
                          <Select placeholder="请选择" allowClear={true} onSelect={this.changePackge} disabled={packageList.length==0}>
                          {
                            packageList.map((el)=>(
                              <Select.Option value={el.key} key={el.key}>{el.value}</Select.Option>
                            ))
                          }
                          </Select>
                        </Form.Item>
                      </Col>
                      {
                        packageId&&
                        <Col span={6}>
                          <Link to={`/account/assetPackage/info/${packageId}`} className="link-tips">资产包明细</Link>
                        </Col>
                      }
                    </Row>
                  </Form.Item>
                </Col>
              </Row>
          </HeadFormCard>
          <HeadFormCard title="银行信息">
              <p className="form-row-title">回款信息【监管户】 </p>
              <Row>
                <Col {...this.colspans}>
                  <Form.Item label="回款路径" name="receiveMoneyMethod" rules={[{ required: true, message: '请选择'}]}>
                    <Select placeholder="请选择" allowClear={true}>
                      {
                        moneyPathOption.map((el) =>(
                          <Select.Option value={el.key} key={el.key}>{el.value}</Select.Option>
                        ))
                      }
                    </Select>
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="监管银行" name="monitorBank" rules={[{ required: true, message: '请选择'}]}>
                    <Select placeholder="请选择" allowClear={true} onSelect={this.onChangeBank} disabled={jgBank.length==0}>
                      {
                        jgBank.map((el)=>(
                          <Select.Option value={el.enterpriseId} key={el.enterpriseId}>{el.enterpriseFullName}</Select.Option>
                        ))
                      }
                    </Select>
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="开户行" name="monitorOpenBank" rules={[{ required: true, message: '请输入'}]}>
                    <Input autoComplete="off" placeholder="请输入" disabled/>
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="账户名称" name="monitorAccountName" rules={[{ required: true, message: '请输入'}]}>
                    <Input autoComplete="off"   placeholder="请输入" disabled/>
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="监管账号" name="monitorBankAccountNo" rules={[{ required: true, message: '请输入'}]}>
                    <Input autoComplete="off"   placeholder="请输入" disabled/>
                  </Form.Item>
                </Col>
              </Row>
              <p className="form-row-title">资金方</p>
              <Row>
                <Col {...this.colspans}>
                  <Form.Item label="收款方式" name="receiveMoneyMethod" rules={[{ required: true, message: '请选择'}]}>
                    <Select placeholder="请选择" allowClear={true}>
                      {
                        moneyPathOption.map((el) =>(
                          <Select.Option value={el.key} key={el.key}>{el.value}</Select.Option>
                        ))
                      }
                    </Select>
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                <Form.Item label="选择银行" name="loanBank" rules={[{ required: true, message: '请选择'}]}>
                  <Select placeholder="请选择" allowClear={true}>
                    {
                      fundBank.map((el)=>(
                        <Select.Option value="建设银行" key="建设银行">建设银行</Select.Option>
                      ))
                    }
                  </Select>
                </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="开户行" name="loanOpenBank" rules={[{ required: true, message: '请输入'}]}>
                    <Input autoComplete="off"   placeholder="请输入" disabled/>
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="账户名称" name="loanAccountName" rules={[{ required: true, message: '请输入'}]}>
                    <Input autoComplete="off"   placeholder="请输入" disabled/>
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="银行账号" name="loanAccount" rules={[{ required: true, message: '请输入'}]}>
                    <Input autoComplete="off"   placeholder="请输入" disabled/>
                  </Form.Item>
                </Col>
              </Row>
          </HeadFormCard>
          <HeadFormCard title="联系方式">
              <p className="form-row-title">融资方</p>
              <Row>
                <Col {...this.colspans}>
                  <Form.Item label="融资企业" name="enterpriseName">
                    <Input autoComplete="off"   placeholder="请输入" disabled/>
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="法人代表" name="legalPerson">
                    <Input autoComplete="off"   placeholder="请输入" disabled/>
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="电话" name="telephone">
                    <Input autoComplete="off"   placeholder="请输入" disabled/>
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="传真" name="faxNo">
                    <Input autoComplete="off"   placeholder="请输入" disabled/>
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="地址" name="enterpriseAddress">
                    <Input autoComplete="off"   placeholder="请输入" disabled/>
                  </Form.Item>
                </Col>
              </Row>
              <p className="form-row-title">资金方</p>
              <Row>
                <Col {...this.colspans}>
                  <Form.Item label="融资企业" name="fundEnterpriseName">
                    <Input autoComplete="off"   placeholder="请输入"/>
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="法人代表" name="fundLegalPerson">
                    <Input autoComplete="off"   placeholder="请输入"/>
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="电话" name="fundTelephone">
                    <Input autoComplete="off"   placeholder="请输入"/>
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="传真" name="fundFaxNo">
                    <Input autoComplete="off"   placeholder="请输入"/>
                  </Form.Item>
                </Col>
                <Col {...this.colspans}>
                  <Form.Item label="地址" name="fundEnterpriseAddress">
                    <Input autoComplete="off"   placeholder="请输入"/>
                  </Form.Item>
                </Col>
              </Row>
          </HeadFormCard>
          {
            this.props.handleType=='1'&&
            <div className="edit-btn-wrap">
              <YtBtn size="free" onClick={this.handleSubmit}>确认并下一步</YtBtn>
            </div>
          }
        </Form>
      </div>
    )
  }
}
export default ApplyOne;
