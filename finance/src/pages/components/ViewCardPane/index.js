import './index.less';
import iconOne from 'image/operateWorkbench/icon0.png';

function CardPane({...props}){
  return <div className={`finance-card-panel mt24 ${props.className}`}>
            <div className="label-title">
              <div className='icon-wrap'><img src={iconOne}/></div>
              {props.label}
            </div>
            <p className="field-con">{props.num}</p>
            <div className="desc">{props.children}</div>
          </div>
}

export default CardPane;
