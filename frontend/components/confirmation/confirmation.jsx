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
        return (
            <div>
                <h3>New User Registered!</h3>
                <button>
                    <Link to="/">
                        Back to form
                    </Link>
                </button>
            </div>
        )
    }
}

export default UserIndex;