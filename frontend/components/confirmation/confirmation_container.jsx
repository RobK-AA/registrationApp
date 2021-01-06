import { connect } from "react-redux";
import Confirmation from './confirmation';
import { createUser, fetchUsers } from '../../actions/user_actions';

const mapDispatchToProps = dispatch => {
    return {
        createUser: user => dispatch(createUser(user)),
        fetchUsers: () => dispatch(fetchUsers())
    }
}
export default connect(null, mapDispatchToProps)(Confirmation);