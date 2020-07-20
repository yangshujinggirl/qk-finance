import './index.less';

function YtCard({...props}){
  return <div className="yt-common-card">
            <p className="label-title">{props.title}</p>
            <div className="card-content">{props.children}</div>
         </div>
}

export default YtCard;
