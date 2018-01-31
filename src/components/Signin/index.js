import React, { Component } from 'react';

class Signin extends Component {
    constructor(props) {
        super(props);
        console.log(props)
    }
    render() {
        return (
            <div>
                <h1>Login screen</h1>
                <button onClick={() =>
                    this.props.submit({ username: "Zubair", password: 123 })}>
                    Login user
                </button>

                <button onClick={() =>
                    this.props.demoSuccess()}>
                    submit2
                </button>
            </div>
        );
    }
}

export default Signin;