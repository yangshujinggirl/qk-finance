import { Form, Tabs, Checkbox, Input, Button } from 'antd';
import { UserOutlined, MailOutlined } from '@ant-design/icons';
const FormItem = Form.Item;

function AccountLForm({...props}){
  return <>
            <FormItem name="username" rules={[{ required: true, message: '请输入用户名' }]}>
               <Input placeholder="请输入手机号" autoComplete="off" prefix={<UserOutlined className="site-form-item-icon" />}/>
             </FormItem>
          </>
}

export default AccountLForm;
