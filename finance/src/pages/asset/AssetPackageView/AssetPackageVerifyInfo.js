import { Modal, Table, Descriptions, Popover, Tabs } from 'antd';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { DeleteOutlined, PayCircleFilled, ExclamationCircleFilled, CheckCircleFilled } from '@ant-design/icons';
import { YtMessage, YtBreadcrumbName, YtTable, YtBtn, YtPagination, YtCard } from 'common';
import AssetInfoHead from './components/AssetInfoHead';
import PoverMod from './components/PoverMod';
import SubCrumb from '../components/SubCrumb';
import { GetInfoApi, GetAssetListApi, GetDeleteAssetApi } from 'api/asset/AssetPackageInfo';
import './AssetPackageVerifyInfo.less';
import iconVer0 from './image/icon_ver0.png';
import iconVer1 from './image/icon_ver1.png';
import iconVer2 from './image/icon_ver2.png';
import iconVer3 from './image/icon_ver3.png';

const { TabPane } = Tabs;

const Info=({...props})=>{
  const [totalData,setTotalData] = useState({});
  const [list,setList] = useState([])
  const { id:packetId } = props.match.params;
  const industryTypeCode = 'AGNPK';

  const fetchInfo=()=>{
    GetInfoApi({packetId})
    .then((res)=>{
      setTotalData(res.data.result);
    })
  }
  const fetchList=()=>{
    let params = {
      industryTypeCode,
      packetId,
      pageSize:999,
    }
    GetAssetListApi(params)
    .then((res)=>{
      const { pagination, result } =res.data;
      const { pageNow, pageSize, totalSize } =pagination;
      result.map((el,index)=>el.key = index)
      setList(result);
    })
  }
  const goDelete=(value)=> {
    Modal.confirm({
      title: '提示',
      content:'确认删除选中资产吗？',
      onOk:()=>{
        GetDeleteAssetApi({ assetsNoStrs:value, packetId })
        .then((res)=> {
          console.log(res)
          YtMessage.success('操作成功');
          fetchList()
        })
      }
    });

  }
  const linkList =[
    {
      url:`/account/asset/packageView/info/${packetId}`,
      key:'1',
      name:'资产包详情'
    },{
      url:`/account/asset/packageView/verifyInfo/${packetId}`,
      key:'2',
      name:'验真详情'
    }];
  const formatCls=(val)=>{
    let cls=''
    switch(val){
      case 1:
        cls = 'wait';
        break;
      case 2:
        cls = 'pass';
        break;
      case 3:
        cls = 'nop';

    }
    return cls;
  }
  useEffect(()=>{
    fetchList();
    fetchInfo()
  },[packetId]);

  return(
    <>
      <YtBreadcrumbName>
        <SubCrumb data={linkList} active="2"/>
      </YtBreadcrumbName>
      <div className="asset-package-verify-pages-wrap">
        <AssetInfoHead data={totalData}/>
        <div className="part-two part-same-shadow">
          <div className="top-action box-flex">
            <div className="lab-item">
              <p className="label-name">资产验真笔数</p>
              <p className="field-val">{totalData.assetCount}/<span className="num-low">{totalData.assetCount}</span></p>
            </div>
            <div className="lab-item">
              <p className="label-name">
                <CheckCircleFilled className="label-icon-same label-icon-ok"/>
                <span className="label-text">验真通过资产笔数</span>
              </p>
              <p className="field-val">{totalData.assetCount}</p>
            </div>
            <div className="lab-item">
              <p className="label-name">
                <ExclamationCircleFilled className="label-icon-sus label-icon-same"/>
                <span className="label-text">验真存疑资产笔数</span>
              </p>
              <p className="field-val">0</p>
            </div>
            <div className="lab-item">
              <p className="label-name">
                <PayCircleFilled className="label-icon-sus label-icon-same"/>
                <span className="label-text">资产存疑资产额</span>
              </p>
              <p className="field-val">0 <span className="percent"></span></p>
            </div>
          </div>
          <div className="bottom-action">
            <div className="status-list box-flex">
              <div className="sts-item">
                <span className="line-icon"></span>
                <span className="sts-text">验真通过</span>
              </div>
              <div className="sts-item">
                <span className="line-icon"></span>
                <span className="sts-text">验真存疑</span>
              </div>
              <div className="sts-item">
                <span className="line-icon"></span>
                <span className="sts-text">待验真</span>
              </div>
              <div className="sts-item">
                <span className="sts-icon"><img src={iconVer0} /></span>
                <span className="sts-text">最高价值</span>
              </div>
              <div className="sts-item">
                <span className="sts-icon"><img src={iconVer1} /></span>
                <span className="sts-text">最低价值</span>
              </div>
              <div className="sts-item">
                <span className="sts-icon"><img src={iconVer2} /></span>
                <span className="sts-text">最长账期</span>
              </div>
              <div className="sts-item">
                <span className="sts-icon"><img src={iconVer3} /></span>
                <span className="sts-text">最短账期</span>
              </div>
            </div>
            <div className="asset-package-list box-flex">
              {
                list.map((el,index)=> (
                  <div key={index} className={`asset-tem ${formatCls(el.checkStatus)}`}>
                    <span className="status-line"></span>
                    <div className="box-flex apt-row">
                      <Popover className="popover-block" content={<PoverMod info={{...el,assetTotal:totalData.assetTotal}}/>} title={null} placement="bottom">
                        <p>资产{++index}</p>
                      </Popover>
                      <div>
                        {
                          el.realDate==totalData.maxRealDate&&
                          <img src={iconVer0} className="icon-status"/>
                        }
                        {
                          el.realDate==totalData.minRealDate&&
                          <img src={iconVer1} className="icon-status"/>
                        }
                        {
                          el.orderAmount==totalData.maxAsset&&
                          <img src={iconVer2} className="icon-status"/>
                        }
                        {
                          el.orderAmount==totalData.minAsset&&
                          <img src={iconVer3} className="icon-status"/>
                        }
                      </div>
                    </div>
                    <DeleteOutlined className="icon-dele" onClick={()=>goDelete(el.assetNo)}/>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Info;
