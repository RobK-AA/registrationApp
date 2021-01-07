import { connect } from "react-redux";
import UserIndex from './user_index';
import { createUser, fetchUsers } from '../../actions/user_actions';

const mapStateToProps = ({users}) => {
    return { users }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserIndex);