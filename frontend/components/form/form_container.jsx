import { connect } from "react-redux";
import Form from './form';
import { createUser, fetchUsers, clearErrors } from '../../actions/user_actions';

const mapStateToProps = ({ errors }) => {
    return {
        errors
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createUser: user => dispatch(createUser(user)),
        fetchUsers: () => dispatch(fetchUsers()),
        clearErrors: () => dispatch(clearErrors())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form)