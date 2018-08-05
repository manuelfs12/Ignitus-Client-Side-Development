import React from 'react';
import logo from '../../Images/Logos/logo white bg.png';
import loginImg from '../../Images/login.png';
import './Signup.css';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

import axios from 'axios';

class Signup extends React.Component {
 
    state = {
        formData: {
            email: '',
            password1: '',
            password2: ''
        },
    }

    handleChange = (e) => {
        let newFormData = {...this.state.formData}
        newFormData[e.target.name] = e.target.value;
        this.checkValidity(e.target.name,e);
        this.setState({formData: newFormData});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const formData = {...this.state.formData}
        axios.post(/*URL*/,formData)
            .then(response => console.log(response.data))
            .catch(err =>console.log(err))
    }


    render() {

    return (
        <div>
        <Navigation/>
        <div className ="container _container-custom p-5">
            <div className="row shadow">
                {/* Side Image */}
                <div className="col-md-6 p-0 container-image">
                    <img className = "img-fluid _img-login d-block" src={loginImg}/>
                    <div className = 'text-below-image text-center'>
                        <p className ="mb-5">Let's get started</p>
                        <p>Skyrocket your career with best global opportunities</p>
                    </div>
                </div>
                {/* Form */}
                <div className ="col-md-6  _container-form ">
                    <div className = "my-4">
                        <img className = "img-fluid _img mx-auto d-block" src={logo}/>
                    </div> 
                    <form onSubmit = {this.handleSubmit}>
                        <div className ="input-group form-group ">
                            <div className="input-group-prepend">
                               <span className="input-group-text"><i className="fa fa-envelope-o fa-fw"></i></span>
                            </div>
                            <input type="text" name="email"  className = "form-control" placeholder = "Email" onChange={this.handleChange}/>
                        </div> 
                        <div className ="input-group form-group">
                            <div className="input-group-prepend">
                               <span className="input-group-text"><i className="fa fa-key fa-fw"></i></span>
                            </div>
                            <input type ="password" name="password1" className = "form-control" placeholder = "Password"  onChange={this.handleChange} required/>
                        </div>
                        <div className ="input-group form-group">
                            <div className="input-group-prepend">
                               <span className="input-group-text"><i className="fa fa-key fa-fw"></i></span>
                            </div>
                            <input type ="password" name="password2" className = "form-control" placeholder = "Confirm Password" onChange = {this.handleConfirmedPassword}  required/>
                        </div>
                        <div className = "text-center mb-3 mt-3">
                            <button type="submit" className = "btn btn-success px-3 py-2"><b>Sign up</b></button>
                        </div>
                        <div className="_or-seperator"><i className ="text-dark">or sign up with</i></div>
                        <div className="mb-4">
                            <button className="btn btn-primary mx-auto btn-block"><i className="fa fa-linkedin mr-3"></i><b>Linked-in</b></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <Footer/>
        </div>
    )
}
}


export default Signup;


