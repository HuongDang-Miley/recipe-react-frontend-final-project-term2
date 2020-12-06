
import React, { Component } from 'react'
import validator from 'validator';
import axios from 'axios'
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
            // console.log(this.state)
        })
    }


    handleOnSubmit = async (event) => {
        event.preventDefault()

        const { isPwError, isEmailError } = this.state

        if (isPwError === false && isEmailError === false) {
            // console.log(this.state)
            try {
                let newUser = await axios.post('http://localhost:3001/api/users/create-user', {
                    email: this.state.email,
                    password: this.state.password
                })
                
                // console.log('newUser all object', newUser)
                let userEmail = newUser.data.email
                let twtToken = newUser.data.jwtToken
                // console.log('newUser', newUser.config)
                // console.log('newUser email', JSON.parse(newUser.config.data).email)
                // console.log('jwtToken', JSON.parse(newUser.config.data).jwtToken)
                // console.log('jwtToken', newUser.data.jwtToken)
                // console.log('jwtToken', twtToken)
                localStorage.setItem('jwtToken', twtToken)
                this.setState({
                    userToken: 'thisIsAToken'
                }, () => {
                    this.props.authorize(twtToken, userEmail )
                    this.props.history.push('/main/all')
                })
            }
            catch (e) {
                console.log(e)
            }
        }
    }



    // handleOnSubmit = (event) => {
    //     console.log(this.props)
    //     event.preventDefault()
    //     const { isPwError, isEmailError } = this.state
    //     if (isPwError === false && isEmailError === false) {
    //         this.setState({
    //             userToken: 'thisIsAToken'
    //         }, () => {
    //             this.props.authorize(this.state.userToken)
    //             this.props.history.push('/main/all')
    //         })
    //     }
    // }





    render() {
        const { email, password, isEmailError, emailErrorMessage, isPwError, pwErrorMessage } = this.state
        // console.log(this.props)
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
