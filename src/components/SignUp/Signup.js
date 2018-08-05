import React from 'react';
import logo from '../../Images/Logos/logo white bg.png';
import './Signup.css';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';


class Signup extends React.Component{

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
        axios.post('',formData)
            .then(response => console.log(response.data))
            .catch(err =>console.log(err))
    }

   render () {
    return (
        <div>
        <Navigation/>
        <div className ="container-fluid">
            <div className="row">
                <div className="col-xs-4"></div>
                <div className ="container _container rounded mt-5 col-xs-4-">
                    <div className = "my-4">
                        <img className = "img-fluid _img mx-auto d-block" src={logo}/>
                    </div>
                    <form>
                        <div className ="input-group form-group">
                            <div className="input-group-prepend">
                               <span className="input-group-text"><i className="fa fa-envelope-o fa-fw"></i></span>
                            </div>
                            <input type="text" iname= "email" className = "form-control" placeholder = "Email"/>
                        </div> 
                        <div className ="input-group form-group">
                            <div className="input-group-prepend">
                               <span className="input-group-text"><i className="fa fa-key fa-fw"></i></span>
                            </div>
                            <input type ="password" name ="password1" className = "form-control" placeholder = "Password" required/>
                        </div>
                        <div className ="input-group form-group">
                            <div className="input-group-prepend">
                               <span className="input-group-text"><i className="fa fa-key fa-fw"></i></span>
                            </div>
                            <input type ="password" name ="password2" className = "form-control" placeholder = "Confirm Password" required/>
                        </div>
                        <div className = "text-center mb-3 mt-3">
                            <button type="submit" className = "btn btn-success px-3 py-2"><b>Sign up</b></button>
                        </div>
                        <div className="_or-seperator"><i className ="text-dark">or sign up with</i></div>
                        <div className="mb-4">
                            <button className="btn btn-primary mx-auto btn-block"><i className="fa fa-linkedin mr-3"></i><b>LinkedIn</b></button>
                        </div>
                    </form>
                </div>
                <div className = "col-xs-4"></div> 
            </div>
        </div>
        <Footer/>
        </div>
    )
}
}


export default Signup;


