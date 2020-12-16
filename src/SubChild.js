import React, {Component} from 'react';
import SuperSubChild from "./SuperSubChild"

class SubChild extends Component {
    render() {
        let {data} = this.props
        return (
            <div>
                <SuperSubChild data={data}/>
            </div>
        );
    }
}

export default SubChild;