import React, { Component } from 'react';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Form, Tabs, Checkbox, Input, Button } from 'antd';
import { GoLogin } from 'api/Login';
import { Sessions } from 'utils';
import AccountLForm from './components/AccountLForm';
import PhoneLForm from './components/PhoneLForm';

import './index.less';
import logoImg from '../../image/logo.png';

const { TabPane } = Tabs;
const FormItem = Form.Item;

class Login extends Component {
  formRef = React.createRef();
  state={
    disabled:false,
    loading:false
  }
  handleSubmit = async () => {
    try {
      const values = await this.formRef.current.validateFields();
      this.setState({ disabled:true,loading:true })
      // {"userName":"superadmin","userPassword":"admin123456"}
      GoLogin(values)
      .then((res)=> {
        const { Authorization, userInfo } =res.data;
        Sessions.set('token',Authorization.accessToken)
        Sessions.set('tokenType',Authorization.tokenType)
        Sessions.set('userName',userInfo.userFullNameCn);
        this.setState({ disabled:false, loading:false });
        this.props.history.push('/account')
      },(err)=> {
        this.setState({ disabled:false, loading:false })
      })
    } catch (errorInfo) {
      console.log("Failed:", errorInfo);
    }
  };

  render() {
    const { disabled, loading } =this.state;
    return(
      <div className="login-pages-wrap">
        <div className="lpw-header">
          <img src={logoImg} className="logo-img"></img>
          <span className="palt-name">云图农服科技平台</span>
          <span className='palt-desc'>基于区块链的无担保无抵押融资</span>
        </div>
        <div className="main-content">
          <Form ref={this.formRef} className="login-form-wrap">
            <Tabs defaultActiveKey="1">
              <TabPane tab="账号密码登录" key="1">
                <AccountLForm/>
              </TabPane>
              <TabPane tab="手机号登录" key="2">
                <PhoneLForm/>
              </TabPane>
            </Tabs>
            <div className="common-wrap">
              <Form.Item className="handle-formItem">
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>直接登录</Checkbox>
                </Form.Item>
                <a className="login-form-forgot" href="">忘记密码</a>
              </Form.Item>
              <Button loading={loading}   type="primary" className="login-btn" onClick={this.handleSubmit.bind(this)}>登录</Button>
            </div>
          </Form>
        </div>
      </div>
    )
  }
}

export default Login;
