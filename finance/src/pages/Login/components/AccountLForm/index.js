import { Form, Tabs, Checkbox, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
const FormItem = Form.Item;

function AccountLForm({...props}){
  return <>
            <FormItem name="userName" rules={[{ required: true, message: '请输入用户名' }]}>
               <Input placeholder="请输入用户名" autoComplete="off" prefix={<UserOutlined className="site-form-item-icon" />}/>
             </FormItem>
            <FormItem name="userPassword" rules={[{ required: true, message: '请输入密码' }]}>
               <Input placeholder="请输入密码" type="password" autoComplete="off" prefix={<LockOutlined className="site-form-item-icon" />}/>
             </FormItem>
          </>
}

export default AccountLForm;
