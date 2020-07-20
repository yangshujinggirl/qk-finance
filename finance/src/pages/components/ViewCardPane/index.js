import './index.less';

function CardPane({...props}){
  return <div className="finance-card-panel">
            <p className="label-title">{props.label}</p>
            <p className="field-con">{props.num}</p>
            <div className="desc">{props.children}</div>
          </div>
}

export default CardPane;
