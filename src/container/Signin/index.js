import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { browserHistory } from 'react-router';
import { AuthActions } from "../../store/actions/index";
import { Signin } from './../../components/index';

class Login extends Component {

    constructor(props) {
        super();
        console.log(props)
    }
    componentWillReceiveProps(nextProps) {
        console.log(nextProps.authObj.auth.data);
        console.log(123)
    }
    loginSubmit = (user) => {
        this.props.signin(user);
    }
    getDemo = () => {
        this.props.demo()
    }

    seconddemoSuccess = (user) => {
        this.props.seconddemo(user)
    }

    render() {
        return (
            <Signin getDemo={this.getDemo} submit={this.loginSubmit} seconddemoSuccess={this.seconddemoSuccess} />
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
        demo: () => dispatch(AuthActions.demo()),
        seconddemo: (userObj) => dispatch(AuthActions.seconddemo(userObj))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);