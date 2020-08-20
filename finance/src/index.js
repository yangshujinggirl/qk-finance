
import {
  HashRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';
import { Sessions } from 'utils';
import ReactDOM from 'react-dom';
import zhCN from 'antd/es/locale/zh_CN';
import {ConfigProvider } from 'antd';
import moment from 'moment';
import 'moment/locale/zh-cn';

import 'antd/dist/antd.less';
import './common/common.less';
import HomeController from './pages/HomeController';
import Login from './pages/Login';


ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <Router>
      <Route path="/"  render={({location})=> {
        let routeName = location.pathname;
        let sessionKey = Sessions.get('token');
        if(routeName == '/login') {
          return <Route exact path="/login" component={Login}/>
        } else {
          if(sessionKey) {
            return <div>
                    <Route component={HomeController}  path="/account" />
                    <Route  path="/login" component={Login}/>
                    <Route  component={HomeController}  exact path="/"/>
                  </div>
          } else {
            return <Redirect to="/login"/>
          }
        }
      }}/>
    </Router>
  </ConfigProvider>,
  document.getElementById('root')
);
