import './index.less';

function YtCard({...props}){
  return <div className={`yt-common-card ${props.className}`}>
            <p className="label-title">{props.title}</p>
            <div className="card-content">{props.children}</div>
         </div>
}

export default YtCard;
