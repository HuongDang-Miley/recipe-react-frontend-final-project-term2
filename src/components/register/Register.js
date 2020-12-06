
import React, { Component } from 'react'
import validator from 'validator';
import './register.css'

export default class Login extends Component {
    state = {
        email: '',
        password: '',
        isEmailError: false,
        emailErrorMessage: '',
        isPwError: false,
        pwErrorMessage: '',
        userToken: '',
    }

    handleOnChangeEmail = (event) => {
        if (!validator.isEmail(event.target.value)) {
            this.setState({
                isEmailError: true,
                emailErrorMessage: 'Please type correct email'
            })
        } else {
            this.setState({
                isEmailError: false,
            })
        }

        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnChangePassword = (event) => {
        let password = validator.matches(
            event.target.value,
            "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")
        if (!password) {
            this.setState({
                isPwError: true,
                pwErrorMessage: 'Password must contain: 1 lowercase, 1 uppercase, 1 number, 1 symbol'
            })
        } else {
            this.setState({
                isPwError: false,
            })
        }

        this.setState({
            [event.target.name]: event.target.value
        }, () => {
            console.log(this.state)
        })
    }


    handleOnSubmit = (event) => {
        console.log(this.props)
        event.preventDefault()
        const { isPwError, isEmailError } = this.state
        if (isPwError === false && isEmailError === false) {
            this.setState({
                userToken: 'thisIsAToken'
            }, () => {
                this.props.authorize(this.state.userToken)
                this.props.history.push('/main/all')
            })
        }
    }





    render() {
        const { email, password, isEmailError, emailErrorMessage, isPwError, pwErrorMessage } = this.state
        console.log(this.props)
        return (
            <div>
                <img id='hero-img' src='/RegisterImgNoText.jpg' />
                <div className='register-login-wrapper'>
                    <h1 className='register-header'>Welcome To The World "Largest"<br /> Recipes Source </h1>
                    {/* <h1 className='register-header'>Discover The World's Top Recipes!</h1> */}
                    <form onSubmit={this.handleOnSubmit}>
                        <p className='label-name'>Email</p><br />
                        <input
                            onChange={this.handleOnChangeEmail}
                            className='input-field'
                            type='text'
                            name='email'
                            value={email}
                        >
                        </input><br />
                        {isEmailError ? (<p className="error-message">{emailErrorMessage}</p>) : ''}
                        <p className='label-name'>Password</p><br />
                        <input
                            onChange={this.handleOnChangePassword}
                            className='input-field'
                            type='text'
                            name='password'
                            value={password}
                        >
                        </input><br />
                        {isPwError ? (<p className="error-message">{pwErrorMessage}</p>) : ''}
                        <button
                            // onSubmit={this.onSubmit}
                            type='submit'
                            className="register-login-button"
                        >Register</button>
                    </form>

                    <p className='register-login-link'>Have an account? <span className='register-login-link-span'>Login Here   </span></p>

                </div>
            </div>
        )
    }
}
