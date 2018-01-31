import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { browserHistory } from 'react-router';
import { AuthActions } from "../../store/actions/index";
import { Signin } from './../../components/index';

class Login extends Component {

    constructor(props) {
        super();
        this.state = {

        }
    }
    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        console.log(123)
    }
    loginSubmit = (user) => {
        this.props.signin(user);
    }
    demoSuccess = () => {
        this.props.demo()
    }
    render() {
        return (
            <Signin demoSuccess={this.demoSuccess} submit={this.loginSubmit} />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        authObj: state,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        signin: (userObj) => dispatch(AuthActions.signin(userObj)),
        demo: () => dispatch(AuthActions.demo())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);