import { useState, useEffect } from 'react';
import { YtStatistic, YtPagination, YtTable, YtBtn } from 'common';
import FilterForm from './components/FilterForm';
import CreatModal from './components/CreatModal';
import {columnsIndex} from './columns';
import './index.less'
import {getOrgList,deleteOrg} from '../../../api/platformManage/Organization.js';
import { YtMessage } from 'common';
import { Modal} from 'antd';

const Index=({...props})=>{
    const [visible,setVisible] = useState(false);
    const [currentItem, setCurrentItem] = useState({});
    const [totalSize, setTotalSize] = useState(1);
    const [param, setParam] = useState({
        orgName: '',
        pageNow: 1,
        pageSize: 1,
    });
    const [list, setList] = useState([]);
    const {
        pageNow,
        pageSize,
        orgName
    } = {...param}
    //组织管理API
    const getOrgLists = (param) => {
        getOrgList(param).then(res => {
            setTotalSize(res.data.pagination.totalSize)
            setList(res.data.result)
            console.log(res)
        })
    }
    //获取组织数据
    useEffect(() => {
        getOrgLists(param);
    },[]);
    const goCreat=()=>{
      setVisible(true);
    }
    const onOk=()=>{
      setVisible(false);
      getOrgLists(param);
    }
    const onCancel=()=>{
      setCurrentItem({})
      setVisible(false);
    }
    //查询
    const search=({orgName})=>{
        let p = {...param, orgName };
        console.log(p)
        setParam(p);
        getOrgLists(p);
    }
    //分页
    const pagination=(pageNow)=>{
        let p = {...param, pageNow };
        setParam(p);
        getOrgLists(p);
    }
    const onOperateClick=({type,item})=>{
      switch(type){
        case 'edit':
          setVisible(true);
          setCurrentItem(item);
          break;
        case 'delete':
          handleDelete(item)
          break;
      }
    }
    //删除
    const handleDelete=(record)=> {
        Modal.confirm({
            title: '提示',
            content: '是否确认删除？',
            okText: '确认',
            cancelText: '取消',
            onOk:()=>{
            deleteOrg(record.orgId).then(res=>{
                YtMessage.success('操作成功');
            })
        }
    });
      console.log(record)
    }
    return(
      <div className="account-organization-wrap yt-common-list-pages-wrap">
          <FilterForm onSubmit={search} />
          <div className="handle-common-action">
            <YtBtn onClick={goCreat}>新增</YtBtn>
          </div>
          <YtTable
           columns={columnsIndex}
           dataSource={list}
           onOperateClick={onOperateClick}/>
          <YtPagination data={{totalSize,pageNow,pageSize}} onChange={pagination}/>
          <CreatModal data={currentItem} visible={visible} onOk={onOk} onCancel={onCancel}/>
      </div>
    )
}

export default Index;
