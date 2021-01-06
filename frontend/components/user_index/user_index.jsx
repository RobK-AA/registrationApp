import React from 'react';
import { Link } from 'react-router-dom';

class UserIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h3>User Index</h3>
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