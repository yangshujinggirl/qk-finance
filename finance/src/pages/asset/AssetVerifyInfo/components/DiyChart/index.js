import { CloseCircleOutlined, CheckCircleOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import rowThrImg from './image/row_thr.png';
import rowTwoImg from './image/row_two.png';
import './index.less';

const statusMap={
  1:'验真通过',
  2:'验真未通过',
  3:'验真存疑',
}

function DiyChart({...props}){
  let rowNum = props.rowNum?props.rowNum:2;
  let { data,status } =props;
  data = data?data:{};
  let IconMod;
  switch(status){
    case 1:
      IconMod = CheckCircleOutlined;
      break;
    case 2:
      IconMod = CloseCircleOutlined;
      break;
    case 3:
      IconMod = ExclamationCircleOutlined;
      break;
  }
  let mfImg = rowNum==2?rowTwoImg:rowThrImg;

  return <div className="diy-charts box-flex">
            <div className="diyc-lf">
              <p className="diyclf-title">{data.title}</p>
              <div className="diyclf-content">
                <IconMod className="status-icon success"/>
                <p>{statusMap[status]}</p>
              </div>
            </div>
            <div className="diyc-mf">
              <img src={mfImg}/>
            </div>
            <div className="diyc-rf">
              {
                data.node&&data.node.map((el) => (
                  <div className="diycrf-item">
                    <p className="diycrf-title">{el.title}</p>
                    {
                      el.list&&el.list.map((item)=> (
                        <p className="diycrf-desc">{item.value}</p>
                      ))
                    }
                  </div>
                ))
              }
            </div>
          </div>
}
export default DiyChart;
