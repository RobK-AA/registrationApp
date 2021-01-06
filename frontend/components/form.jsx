import React from 'react';

class Form extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <div>
                        <label>First Name</label>
                        <input type='text'></input>
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input type='text'></input>
                    </div>
                    <div>
                        <label>Address 1</label>
                        <input type='text'></input>
                    </div>
                    <div>
                        <label>Address 2</label>
                        <input type='text'></input>
                    </div>
                    <div>
                        <label>City</label>
                        <input type='text'></input>
                    </div>
                    <div>
                        <label>State</label>
                        <input type='text'></input>
                    </div>
                    <div>
                        <label>Zip Code</label>
                        <input type='text'></input>
                    </div>
                    <div>
                        <label>Country</label>
                        <input type='text'></input>
                    </div>
                    <button type="submit">Register Now!</button>
                </form>
            </div>
        )
    }
}

export default Form;