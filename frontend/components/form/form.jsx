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
    }

    componentDidMount() {
        this.props.fetchUsers();
    }

    update(field) {
        return e => {
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

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>First Name</label>
                        <input onChange={this.update('first_name')} type='text'></input>
                        *
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input onChange={this.update('last_name')} type='text'></input>
                        *
                    </div>
                    <div>
                        <label>Address 1</label>
                        <input onChange={this.update('address_1')} type='text'></input>
                        *
                    </div>
                    <div>
                        <label>Address 2</label>
                        <input onChange={this.update('address_2')} type='text'></input>
                    </div>
                    <div>
                        <label>City</label>
                        <input onChange={this.update('city')} type='text'></input>
                        *
                    </div>
                    <div>
                        <label>State</label>
                        <input onChange={this.update('state')} type='text'></input>
                        *
                    </div>
                    <div>
                        <label>Zip Code</label>
                        <input onChange={this.update('zip')} type='text'></input>
                        *
                    </div>
                    <div>
                        <label>Country</label>
                        <input name="country-radio" onChange={this.update('country')} type='radio' value="US" />US
                        <input name="country-radio" onChange={this.update('country')} type='radio' value="Not US" />Not US
                        * (Registration only open to US residents)
                    </div>
                    <button type="submit">Register Now!</button>
                </form>
                <h2>Registrant Preview</h2>
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
                    {this.state.country}</h4>
            </div>
        )
    }
}

export default Form;