import CardPanel from './components/CardPane';
import OdCardPane from './components/OdCardPane';
import './index.less';

class OperateWorkbench extends React.Component {
  render(){
    return(
      <div className="operateWorkbench-pages-wrap">
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
          <CardPanel
            label="新增融资额(万元)"
            num="520"
            desc="昨日 110"/>
          <div className="card-calendar">
            <p className="calendar">农历四月十四 周五</p>
            <p className="date-con">2020年06月05日</p>
            <p className="solar-terms">芒种</p>
          </div>
        </div>
        <div className="box-flex">
          <OdCardPane />
          <OdCardPane />
          <OdCardPane />
        </div>
      </div>
    )
  }
}

export default OperateWorkbench;
