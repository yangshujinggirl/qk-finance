import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Breadcrumb, Button } from "antd";
import routerKeyMap from './routerKeyMap';
import './index.less';

const YtBreadcrumbName = withRouter((props) => {
    const { location } = props;
    console.log(props)
    const pathSnippets = location.pathname.split("/").filter((i) => i);
    let pathObj={};
    let routerKey = null;
    let linkUrl = null;
    let breadcrumbNameMap = [];
    pathSnippets.map((el)=> {
      routerKey = !routerKey?el:`${routerKey}.${el}`;
      linkUrl = !linkUrl?`/${el}`:`${linkUrl}/${el}`;
      pathObj[routerKey] = linkUrl;
    })

    for(let key in pathObj) {
      for(let mapKey in routerKeyMap) {
        if(key == mapKey) {
          let item = {};
          item.path = pathObj[key];
          item.breadcrumbName = routerKeyMap[key];
          breadcrumbNameMap.push(item)
        }
      }
    }
    const goReturn=()=> {
      const { backUrl } =props;//自定义跳转url
      if(backUrl) {
        props.history.push(backUrl);
        return;
      }
      props.history.goBack();
    }
    const extraBreadcrumbItems = breadcrumbNameMap.map((value, index) => {
      let isClick= value.path.split('/').length>3?true:false;
      return (
          <Breadcrumb.Item key={value.path}>
            {
              isClick?
              <Link to={value.path}>{value.breadcrumbName}</Link>
              :
              <span>{value.breadcrumbName}</span>
            }
          </Breadcrumb.Item>
      );
    });

    const breadcrumbItems = [
        <Breadcrumb.Item key="home">
          <Button type="link" onClick={goReturn}>返回</Button>
        </Breadcrumb.Item>
    ].concat(extraBreadcrumbItems);

    return (
        <div className="yt-breadcrumb-wrap box-flex">
          <div>
            <Breadcrumb> {breadcrumbItems}</Breadcrumb>
          </div>
          {props.children}
        </div>
    );
});
export default YtBreadcrumbName;
