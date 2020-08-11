
function Step({...props}){
  let finishedPro = props.index <= props.current?'step-finished':'';
  let currentPro = props.index == props.current?'step-active':'';
  return <div className={`item-step ${finishedPro} ${currentPro}`}>
            <p className="isp-icon">
              <span className="inner-circle">{props.index}</span>
              <span className="ps-title">{props.title}</span>
            </p>
            <p className="ps-line"></p>
         </div>
}

export default Step;
