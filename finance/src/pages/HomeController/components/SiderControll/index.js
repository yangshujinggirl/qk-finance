import { Layout, Menu } from 'antd';
import { Switch, Route, Link } from 'react-router-dom';
import { Sessions } from 'utils';
import menuList from './menuList';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class SiderControll extends React.Component{
  state = {
    collapsed: false,
    selectKeys:this.props.selectKeys,
    defaultSelectedKeys:JSON.parse(Sessions.get('selectedMenuKeys')) || [],
    defaultOpenKeys:JSON.parse(Sessions.get('openMenuKeys')) || "",
  };
  static getDerivedStateFromProps(props, state) {
    if(props.selectKeys!==state.selectKeys) {
      return {
        defaultSelectedKeys:JSON.parse(Sessions.get('selectedMenuKeys')) || [],
        defaultOpenKeys:JSON.parse(Sessions.get('openMenuKeys')) || ""
      }
    }
    return null;
  }
  onOpenChange = openKeys => {
    let { defaultOpenKeys } =this.state;
    const latestOpenKey = openKeys.find(key => defaultOpenKeys.indexOf(key) === -1);
    let openKeyIndex = menuList.findIndex((el)=>el.id == latestOpenKey);
    if (openKeyIndex=='-1') {
      Sessions.set('openMenuKeys',JSON.stringify(openKeys));
      this.setState({ defaultOpenKeys:openKeys,defaultSelectedKeys:[] });
    } else {
      Sessions.set('openMenuKeys',JSON.stringify([latestOpenKey]));
      this.setState({
        defaultSelectedKeys:[],
        defaultOpenKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  };
  handleClick=(e)=> {
    Sessions.set('selectedMenuKeys',JSON.stringify(e.key));
    this.setState({ defaultSelectedKeys: e.key });
  }
   onCollapse = collapsed => {
     this.props.toggleWidth(collapsed)
     this.setState({ collapsed });
   };
  render(){
    const { defaultSelectedKeys, defaultOpenKeys } = this.state;
    return(
      <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={defaultSelectedKeys}
          openKeys={defaultOpenKeys}
          onClick={this.handleClick}
          onOpenChange={this.onOpenChange}
        >
          {
            menuList.length>0&&menuList.map((el,index) => (
              <SubMenu
                icon={el.icon}
                key={el.id}
                title={
                  <span className="diy-menu-title">
                    <span>{el.name}</span>
                  </span>
                }>
                {
                  el.chidrenNode&&el.chidrenNode.length>0&&el.chidrenNode.map((item,idx) => {
                    if(!item.chidrenNode) {
                      return <Menu.Item key={`${item.id}`}>
                              <Link to={`/account/${item.path}`}>{item.name}</Link>
                            </Menu.Item>
                    } else {
                      return <SubMenu
                              data-animal-type={`${item.id}`}
                              key={`${item.id}`}
                              title={item.name}>
                              {
                                item.chidrenNode.length>0&&item.chidrenNode.map((ter,dx) => (
                                  <Menu.Item key={`${ter.id}`}>
                                    <Link to={`/account/${ter.path}`}>{ter.name}</Link>
                                  </Menu.Item>
                                ))
                              }
                      </SubMenu>
                    }
                  })
                }
              </SubMenu>
            ))
          }
        </Menu>
      </Sider>
    )
  }
}

export default SiderControll;
