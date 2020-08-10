
function Step({...props}){
  return <div className="item-step">
            <p className="isp-icon">{props.index}</p>
            <p className="ps-title">{props.title}</p>
         </div>
}

export default Step;
