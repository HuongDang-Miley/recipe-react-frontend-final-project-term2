
import React, { Component } from 'react'
import './register.css'

export default class Login extends Component {
    state = {
        email: '',
        password: '',
    }
    onChange = () => {

    }
    render() {
        return (
            <div>
                <img id='hero-img' src='/RegisterImgNoText.jpg' />
                <div className='register-login-wrapper'>
                    <h1 className='register-header'>Welcome To The World "Largest"<br /> Recipes Source </h1>
                    {/* <h1 className='register-header'>Discover The World's Top Recipes!</h1> */}
                    <label className='label-name'>Email</label><br />
                    <input
                        className='input-field'
                        type='text'
                        name='email'>
                    </input><br />
                    <label className='label-name'>Password</label><br />
                    <input
                        className='input-field'
                        type='text'
                        name='password'>
                    </input><br />
                    <button
                    className ="register-login-button"
                    >Register</button>
                    <p className='register-login-link'>Have an account? <span className='register-login-link-span'>Login Here   </span></p>

                </div>
            </div>
        )
    }
}
