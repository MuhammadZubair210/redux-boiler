import React, { Component } from 'react';

class Signin extends Component {
    constructor(props) {
        super(props);
        console.log(props)

        this.state = {
            username: '',
            password: ''
        }
    }


    change(ev) {
        this.setState({ username: ev.target.value })
    }
    change2(ev) {
        this.setState({ password: ev.target.value })
    }

    render() {
        return (
            <div>
                <h1>Redux Epic Observables</h1>

                <input type="text" onChange={this.change.bind(this)} />
                <input type="password" onChange={this.change2.bind(this)} />

                <button onClick={() =>
                    this.props.submit({ username: this.state.username, password: this.state.password })}>
                    Login user
                </button>

                <button onClick={() =>
                    this.props.getDemo()}>
                    submit2
                </button>

                <button onClick={() =>
                    this.props.seconddemoSuccess({ username: "Zubair Khan", password: 123 })}>
                    seconddemoSuccess
                </button>

            </div >
        );
    }
}

export default Signin;