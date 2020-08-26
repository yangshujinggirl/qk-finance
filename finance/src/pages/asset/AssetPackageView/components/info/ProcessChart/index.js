import './index.less';

function ProcessChart({...props}){
  let { color, data } =props;

  color=['#eaeef9','#d4ddf2','#93a9dd','#5375c9','#2652bb'];
  return <div className="ast-status-process-chart">
          <div className="chart-content">
            {
              data.map((el,index)=>(
                <div className="process-ast" style={{width:el.value,background:color[index]}} key={index}>
                  <span className="pro-num">{el.value}</span>
                </div>
              ))
            }
          </div>
          <div className="chart-toolTip">
            {
              data.map((el,index)=>(
                <p className="tp-item" key={index}>
                  <span className="tpi-icon" style={{background:color[index]}}></span>
                  {el.key}
                </p>
              ))
            }
          </div>
  </div>
}
export default ProcessChart;
