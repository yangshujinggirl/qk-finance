import { useState, useEffect } from 'react';
import { Modal, Table, Progress, Tabs } from 'antd';
import columns from '../../../columns';
import { YtMessage, YtTable, YtBtn, YtPagination, YtCard } from 'common';
import CreatModal from '../CreatModal';
import { GetDeleteAssetApi, GetChooseListApi, GetAssetBadListApi, GetAssetListApi } from 'api/asset/AssetPackageInfo';

const { TabPane } = Tabs;

const TableList=({...props})=>{
  const [visible,setVisible] = useState(false);
  const [list,setList] = useState([])
  const [dataPag,setDataPag] = useState({ pageNow:1, pageSize:10, totalSize:0 });
  const [selectedRows, setSelectedRows] = useState([]);
  const [tabKey, setTabKey] =useState(1);
  const { packetId } = props.info;
  const industryTypeCode = 'AGNPK';
  const fetchList=(type,values)=>{
    setTabKey(type);
    setList([]);
    dataPag.pageNow = 1;
    dataPag.pageSize = 10;
    let params = {
      industryTypeCode,
      packetId,
      pageNow:dataPag.pageNow,
      pageSize:dataPag.pageSize,
      ...values
    }
    let api = type == 1?GetAssetListApi:GetAssetBadListApi;
    api(params)
    .then((res)=>{
      const { pagination, result } =res.data;
      const { pageNow, pageSize, totalSize } =pagination;
      result.map((el,index)=>el.key = index)
      setList(result);
      setDataPag({ pageNow, pageSize, totalSize })
    })
  }
  const changePage = (pageNow, pageSize) => {
    fetchList(tabKey, {pageNow, pageSize})
  };
  const goDelete=(key)=> {
    Modal.confirm({
      title: '提示',
      content:'确认删除选中资产吗？',
      onOk:()=>{
        GetDeleteAssetApi({ assetsNoStrs:selectedRows, packetId })
        .then((res)=> {
          console.log(res)
          YtMessage.success('操作成功');
          fetchList(tabKey)
        })
      }
    });

  }
  const goCreat=(key)=> {
    setVisible(true)
  }
  const onOk=()=> {
    setVisible(false)
  }
  const onCancel=()=> {
    setVisible(false)
  }
  const onChange = (selectedRowKeys, selectedRows) => {
    let selArr = selectedRows.map((el) =>{ return el.assetNo })
    let selectStr = selArr.join(',');
    setSelectedRows(selectStr)
  }
  const rowSelection = { type: "checkbox", onChange };
  useEffect(()=>{ fetchList(1) },[packetId]);

  return <div className="tab-list-wrap yt-common-list-pages-wrap">
            <Tabs defaultActiveKey="1" onChange={fetchList}>
               <TabPane tab="资产数据" key="1">
                  <div>
                   <div className="handle-common-action">
                     <YtBtn onClick={goCreat}>新增</YtBtn>
                     <YtBtn onClick={goDelete}>删除</YtBtn>
                   </div>
                   <YtTable
                    rowSelection={rowSelection}
                    select={true}
                    columns={columns}
                    dataSource={list}/>
                  </div>
               </TabPane>
               <TabPane tab="异常数据" key="2">
                 <YtTable
                  rowSelection={rowSelection}
                  select={true}
                  columns={columns}
                  dataSource={list}/>
               </TabPane>
            </Tabs>
            <YtPagination data={dataPag} onChange={changePage}/>
            <CreatModal
              upDateList={()=>fetchList(1)}
              info={props.info}
              industryTypeCode={industryTypeCode}
              visible={visible}
              onOk={onOk}
              onCancel={onCancel}/>
          </div>
}
export default TableList;
