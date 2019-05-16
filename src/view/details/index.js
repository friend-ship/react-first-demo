import React, {
    Component
} from "react";
import TxtDetails from './txtDetails';
import ReplyList from './replyList';
import data from './data';


class Details extends Component {
    render() {
        return (
            <div className="wrap">
                <TxtDetails loaing={false} data={data.data}></TxtDetails>
                <ReplyList
                    loaing={false}
                    replies={data.data.replies}
                    replyCount={data.data.reply_count}
                ></ReplyList>
            </div>
        )
    }
}

export default Details;