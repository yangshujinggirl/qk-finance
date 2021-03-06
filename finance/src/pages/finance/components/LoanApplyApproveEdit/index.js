import {Tabs} from 'antd';
import {Link} from 'react-router-dom';
import AppLyOne from './AppLyOne.js';

const {TabPane} = Tabs;

function withSubscription(handleType, Mod) {
    return class FinanceApplyEdit extends React.Component {
        state = {
            isEdit: this.props.match.params.id ? true : false,
            loanId: this.props.match.params.id,
        }
        callback = (key) => {
            // console.log(key);
        }

        render() {
            return (
                <div className="yt-common-bg-pages-wrap">
                    <Tabs defaultActiveKey="1" onChange={this.callback}>
                        <TabPane tab="放款申请" key="1" forceRender={false}>
                            <AppLyOne handleType={handleType} loanId={this.state.loanId}/>
                        </TabPane>
                        {
                          Mod&&
                          <TabPane tab="审批记录" key="4" forceRender={false}>
                            <Mod {...this}/>
                          </TabPane>
                        }
                    </Tabs>
                </div>
            )
        }
    }
}


export default withSubscription;
