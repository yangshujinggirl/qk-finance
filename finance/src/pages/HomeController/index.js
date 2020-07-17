import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,SettingOutlined,MailOutlined
} from '@ant-design/icons';
import AccountRoutes from '../AccountRoutes';
import './index.less';
import SiderControll from './components/SiderControll'

const { Header, Content, Footer, Sider } = Layout;

const { SubMenu } = Menu;
class MyComponent extends React.Component {
  state = {
    widthStyle:200
  };
   toggleWidth = collapsed => {
     let { widthStyle } =this.state;
     widthStyle = collapsed?80:200;
     this.setState({ widthStyle });
   };
  render() {
    let { widthStyle } =this.state;
    return  <div className="App">
              <Layout>
                <SiderControll toggleWidth={this.toggleWidth}/>
                <Layout className="site-layout" style={{ marginLeft: widthStyle }}>
                  <Header className="site-layout-background" style={{width:`calc(100% - ${widthStyle}px)`}}>我是用户</Header>
                  <Content>
                    <div className="yuntu-pages-controll">
                      <AccountRoutes />
                    </div>
                  </Content>
                  <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
              </Layout>
            </div>
  }
}

export default MyComponent;
