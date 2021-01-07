import React from 'react';
import { Link } from 'react-router-dom';

class Confirmation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="confirmation-container">
                <h2>New User Registered!</h2>
                <button>
                    <Link className="form-link" to="/">
                        Back to form
                    </Link>
                </button>
            </div>
        )
    }
}

export default Confirmation;