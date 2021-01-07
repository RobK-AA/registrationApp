import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: "",
            last_name: "",
            address_1: "",
            address_2: "",
            city: "",
            state: "",
            zip: "",
            country: "",
            errors: {}
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.highlightErrors = this.highlightErrors.bind(this);
    }

    componentDidMount() {
        this.props.fetchUsers();
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ errors: nextProps.errors });
    }

    update(field) {
        return e => {
            if (this.props.errors) this.props.clearErrors();
            this.setState({
                [field]: e.currentTarget.value
            });
        };
    }
    
    handleSubmit(e) {
        e.preventDefault();
        const user = new FormData();
        user.append("user[first_name]", this.state.first_name);
        user.append("user[last_name]", this.state.last_name);
        user.append("user[address_1]", this.state.address_1);
        user.append("user[address_2]", this.state.address_2);
        user.append("user[city]", this.state.city);
        user.append("user[state]", this.state.state);
        user.append("user[zip]", this.state.zip);
        user.append("user[country]", this.state.country);
    
        this.props.createUser(user).then(
            () => {
                return this.props.history.push(`/confirmation`, this.state)
            }
        );
    }

    renderErrors() {
        this.highlightErrors();
        return (
            <ul id="errors-list" className="rendered-errors-list">
                {Object.keys(this.state.errors).map((error, i) => (
                <li className="errors" key={`error-${i}`}>
                    {this.state.errors[error]}
                </li>
                ))}
            </ul>
        );
    }

    highlightErrors() {
        if (Object.keys(this.state.errors).length > 0) {
            $('.input-item').css('background-color', 'rgb(250, 233, 234)');
            $('.country').css('background-color', 'rgb(250, 233, 234)');
        }
        else {
            $('.input-item').css('background-color', '');
            $('.country').css('background-color', '');
        };
    }

    render() {
        const states = [ 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY' ];
        return (
            <div className="form-container">
                <h1>Register Here!</h1>
                <p className="required-field">* = required field</p>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-item">
                        <label>First Name*</label>
                        <div className="input-item">
                            <input onChange={this.update('first_name')} type='text'></input>
                        </div>
                    </div>
                    <div className="form-item">
                        <label>Last Name*</label>
                        <div className="input-item">
                            <input onChange={this.update('last_name')} type='text'></input>
                        </div>
                    </div>
                    <div className="form-item">
                        <label>Address 1*</label>
                        <div className="input-item">
                            <input onChange={this.update('address_1')} type='text'></input>
                        </div>
                    </div>
                    <div className="form-item">
                        <label>Address 2</label>
                        <div className="input-item">
                            <input onChange={this.update('address_2')} type='text'></input>
                        </div>
                    </div>
                    <div className="form-item">
                        <label>City*</label>
                        <div className="input-item">
                            <input onChange={this.update('city')} type='text'></input>
                        </div>
                    </div>
                    <div className="form-item">
                        <label>State*</label>
                            <div className="input-item">
                                <select onChange={this.update('state')}>
                                    <option value="">Select a State or Territory</option>
                                    {states.map((state) => {
                                        return (
                                            <option key={state} value={state}>{state}</option>
                                        )
                                    })}
                                </select>
                            </div>
                    </div>
                    <div className="form-item">
                        <label>Zip Code*</label>
                        <div className="input-item">
                            <input onChange={this.update('zip')} type='text'></input>
                        </div>
                    </div>
                    <div className="country-form-item">
                        <label>Country*</label>
                        <div className="country">
                            <input name="country-radio" onChange={this.update('country')} type='radio' value="US" />US
                            <input name="country-radio" onChange={this.update('country')} type='radio' value="Not US" />Not US
                        </div>
                    </div>
                    {this.renderErrors()}
                    <button type="submit">Register Now!</button>
                </form>
                {/* <h2>Registrant Preview</h2>
                <h4><label>First Name:</label>__
                    {this.state.first_name}</h4>
                <h4><label>Last Name:</label>__
                    {this.state.last_name}</h4>
                <h4><label>Address 1:</label>__
                    {this.state.address_1}</h4>
                <h4><label>Address 2:</label>__
                    {this.state.address_2}</h4>
                <h4><label>City:</label>__
                    {this.state.city}</h4>
                <h4><label>State:</label>__
                    {this.state.state}</h4>
                <h4><label>Zip Code:</label>__
                    {this.state.zip}</h4>
                <h4><label>Country:</label>__
                    {this.state.country}</h4> */}
            </div>
        )
    }
}

export default Form;