import { connect } from "react-redux";
import Form from './form';
import { createUser } from '../../actions/user_actions';

const mapDispatchToProps = dispatch => {
    return {
        createUser: user => dispatch(createUser(user))
    }
}
export default connect(null, mapDispatchToProps)(Form)