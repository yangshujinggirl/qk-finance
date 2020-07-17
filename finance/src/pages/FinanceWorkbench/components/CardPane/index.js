import './index.less';

function CardPane({...props}){
  return <div className="card-panel">
            <p className="label-title">{props.label}</p>
            <p className="field-con">{props.num}</p>
            <p className="desc">{props.desc}</p>
          </div>
}

export default CardPane;
