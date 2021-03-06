import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { PageHeader, Layout, Menu, Breadcrumb, Dropdown } from 'antd';
import { UserOutlined, DownOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import AccountRoutes from '../AccountRoutes';
import { Sessions } from 'utils';
import SiderControll from './components/SiderControll';
import menuList from './components/SiderControll/menuList';
import './index.less';

const { Header, Content, Footer, Sider } = Layout;

const { SubMenu } = Menu;
class MyComponent extends React.Component {
  state = {
    collapsed:false,
    widthStyle:200,
    breadcrumbItems:[]
  };
  toggle =() => {
   let { widthStyle, collapsed } =this.state;
   collapsed = !collapsed;
   widthStyle = collapsed?80:200;
   this.setState({ widthStyle,collapsed });
  };
  onClick = ({ key }) => {
   if(key == 1) {
     Sessions.clear();
     this.props.history.push('/login')
   }
  };
  render() {
    let { widthStyle, collapsed } =this.state;
    const menu = (
        <Menu onClick={this.onClick}>
          <Menu.Item key="1">退出登陆</Menu.Item>
        </Menu>
      );

    return  <div className="home-controller-wrap">
              <Layout>
                <SiderControll collapsed={collapsed} menuList={menuList}/>
                <Layout className="site-layout" style={{ marginLeft: widthStyle }}>
                  <Header className="site-layout-background" style={{width:`calc(100% - ${widthStyle}px)`}}>
                    <div className="box-flex header-content">
                      <div>
                        {
                          collapsed?<MenuUnfoldOutlined className="trigger" onClick={this.toggle}/>
                          :
                          <MenuFoldOutlined className="trigger" onClick={this.toggle}/>
                        }
                      </div>
                      <div>
                        <Dropdown overlay={menu}>
                          <div>
                            <span className="user-pic"><UserOutlined /></span>
                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                              您好,{Sessions.get('userName')}<DownOutlined />
                            </a>
                          </div>
                        </Dropdown>
                      </div>
                    </div>
                  </Header>
                  <Content>
                    <div className="yuntu-pages-controll">
                      <AccountRoutes />
                    </div>
                  </Content>
                </Layout>
              </Layout>
            </div>
  }
}

export default MyComponent;
