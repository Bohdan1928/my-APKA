import React, {Component} from 'react';
import UserService from "../services/UserService";
import User from "../components/User";

class Users extends Component {
    userService = new UserService()

    state = {users:[]}
    async componentDidMount() {
        const users = await this.userService.users();
        this.setState({users})
    }

    render() {
        const {users} = this.state
        return (
            <div>
                {
                    users.map(value => <User item={value} key={value.id}/>)
                }
            </div>
        );
    }
}

export default Users;