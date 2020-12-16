import React, {Component} from 'react';
import {Consumer} from "./contextService";

class SuperSubChild extends Component {
    render() {
        let {data} = this.props;
        return (
            <Consumer>
                {
                    (value) => {
                return <div>{value}</div>;
                    }
                }
            </Consumer>
        );
    }
}

export default SuperSubChild;