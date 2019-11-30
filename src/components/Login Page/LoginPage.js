import React, { Component } from 'react'

import './login-page.css'

export default class LoginPage extends Component{

    constructor(props) {
        super(props)
        this.state={
            userName: '',
            password: ''
        }

        this.handleChange = (e) =>{
            const {name,value} = e.target
            this.setState({
                [name]: value
            })}

        this.handleSubmit= (e) =>{
                e.preventDefault()
               
                    
                }
            }
    
     

    
    

render(){
    
    return (
        <section className='login-page__container'>
            <div className='login-page__logo'></div>
            <form className='login-page__form__container'>
                    <i className='login-page__form__user-icon'></i>
                    <i className='login-page__form__password-icon'></i>

                <input className='login-page__form__username' placeholder='USERNAME' name='userName' value={this.state.userName} onChange={this.handleChange}  type='text' required></input>
                
                <input className='login-page__form__password' placeholder='PASSWORD' name='password' value={this.state.password} onChange={this.handleChange}  type='text' required></input>

                <button className='login-page__form__submit-button'>Login</button>
            </form>
        </section>
    )
}
    
}
