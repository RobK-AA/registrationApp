import React from 'react';
import { Link } from 'react-router-dom';

class UserIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchUsers();
    }

    render() {
        const users = Object.values(this.props.users).reverse();
        return (
            <div className="report-container">
                <h1>Registered User Report</h1>
                <div>
                <table style={{width:"100%"}}>
                    <tbody>
                    <tr className="top-row">
                        <th>First name</th>
                        <th>Last name</th> 
                        <th>Address 1</th>
                        <th>Address 2</th>
                        <th>City</th>
                        <th>State</th> 
                        <th>Zip Code</th>
                        <th>Country</th>
                        <th>Date Added</th>
                    </tr>
                        {users.map((user) => {
                            return (
                                <tr key={user.id}>
                                    <td>{user.first_name}</td>
                                    <td>{user.last_name}</td>
                                    <td>{user.address_1}</td>
                                    <td>{user.address_2}</td>
                                    <td>{user.city}</td>
                                    <td>{user.state}</td>
                                    <td>{user.zip}</td>
                                    <td>{user.country}</td>
                                    <td>{user.created_at.split('T')[0]}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                </div>
                <button>
                    <Link className="form-link" to="/">
                        Back to form
                    </Link>
                </button>
            </div>
        )
    }
}

export default UserIndex;