import CardPanel from './components/CardPane';
import OdCardPane from './components/OdCardPane';
import './index.less';

class OperateWorkbench extends React.Component {
  render(){
    return(
      <div className="financeWorkbench-pages-wrap">
        <div className="box-flex">
          <div className="module-left-wrap">
            <div className="part-row-wrap box-flex">
              <CardPanel
                label="新增销售订单数"
                num="520"
                desc="昨日 110"/>
              <CardPanel
                label="新增收货数量(吨)"
                num="520"
                desc="昨日 110"/>
              <CardPanel
                label="新增收货赊销额(元)"
                num="520"
                desc="昨日 110"/>
              <CardPanel
                label="新增融资订单数"
                num="520"
                desc="昨日 110"/>
            </div>
          </div>
          <div className="module-right-wrap">
            <p className="label-title">融资动态</p>
            <div className="box-flex">
              <div></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default OperateWorkbench;
