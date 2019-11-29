import React from 'react'
import './login-page.css'

export default function LoginPage() {
    return (
        <section className='login-page__container'>
            <div className='login-page__logo'></div>
            <form className='login-page__form__container'>
                    <i className='login-page__form__user-icon'></i>
                    <i className='login-page__form__password-icon'></i>
                    <input className='login-page__form__username' placeholder='USERNAME'></input>
                    <input className='login-page__form__password' placeholder='PASSWORD'></input>
                    <button className='login-page__form__submit-button'>Login</button>
            </form>
        </section>
    )
}
