import React, {
    Component
} from "react";
import TxtDetails from './txtDetails';
import ReplyList from './replyList';
import { connect } from 'react-redux';
// import data from './data';
import axios from 'axios';


class Details extends Component {
    constructor(arg) {
        super(arg);
        let id = this.props.match.params.id;
        this.getData(id);
    }



    getData(id) {
        this.props.dispatch((dispatch) => {
            dispatch({
                type: "DETAILS_UPDATA"
            });
            axios.get(`https://cnodejs.org/api/v1/topic/${id}`).then((res) => {
                dispatch({
                    type: "DETAILS_UPDATA_SUCC",
                    data: res.data
                });
            }).catch((error) => {
                dispatch({
                    type: "DETAILS_UPDATA_ERROR",
                    data: error
                });
            })
        })
    }

    render() {
        let { loading, data } = this.props;
        return (
            <div className="wrap">
                <TxtDetails loaing={loading} data={data}></TxtDetails>
                <ReplyList
                    loaing={loading}
                    replies={data.replies}
                    replyCount={data.reply_count}
                ></ReplyList>
            </div>
        )
    }
}

export default connect(state => state.details)(Details);