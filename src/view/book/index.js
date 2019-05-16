import React, {
    Component
} from "react";
import PublicCard from '../publicCard';

import data from './data';


class Book extends Component {
    render() {
        return (
            <PublicCard data={data}></PublicCard>
        )
    }
}

export default Book; 