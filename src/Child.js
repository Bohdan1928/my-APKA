import React, {Component} from 'react';
import SubChild from "./SubChild";

class Child extends Component {
    render() {
        let {data} = this.props
        return (
            <div>
                <SubChild data={data}/>
            </div>
        );
    }
}

export default Child;