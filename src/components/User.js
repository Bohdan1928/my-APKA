import React, {Component} from 'react';

class User extends Component {
    render() {
        let {item} = this.props
        return (
            <div className={"out"}>
                <hr/>
                {item.id} - {item.name} <button className={""} onClick={"sasad"}>User</button> // todo link and style
            </div>
        );
    }
}

export default User;