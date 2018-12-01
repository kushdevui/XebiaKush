import React, { Component } from 'react';
import {Container,FormGroup} from 'reactstrap';
import axios from 'axios';
import { base_url , login } from '../../config';
import { withRouter } from 'react-router-dom'

import './loginform.css';

class LoginForm extends Component{
    constructor(props){
        super(props);
        this.props = props;
        this.state={
            userId:'',
            password:'',
            redirectToReferrer:false,
            err: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    renderRedirect = () => {
        this.props.history.push(`/Search:${this.state.userId}`)
    }

    handleSubmit(event){
        event.preventDefault(); 
        var context = {
            userId : this.state.userId,
            password : this.state.password
        }
        axios.get(base_url + login).then((response)=>{
            console.log(response);
            switch(response.status){
                case 200:
                response.data.results.forEach((item,index)=>{
                    if(item.name == this.state.userId && item.birth_year==this.state.password)
                    {
                        this.setState({
                            redirectToReferrer:!this.state.redirectToReferrer
                        }) 
                        localStorage.setItem('userId',item.name);
                        this.renderRedirect()
                    }
                    else if(response.data.results.length == index+1){
                        this.setState({
                            err:"no records found"
                        })
                    }
                })
                default:
                this.setState({
                    err:"no records found"
                })
            }
        })
    }

    handleChange(event){
        event.target.name == "userID" ? 
        this.setState({
            userId:event.target.value
        }) : this.setState({
            password:event.target.value
        })
    }


    render() {
        const show = this.state.redirectToReferrer ? ""  : <span>{this.state.err}</span>;
        const redirect = this.state.redirectToReferrer ? <span className="pull-right anchor-text"> Welcome - {localStorage.getItem('userId')} <span onClick={()=>this.logout()} className="anchor-text">| Logout</span></span>  : "";   
        return(
                <Container>
                    <h2 toggle={this.handleModal}>Sign in to your account</h2>
                    <form onSubmit={this.handleSubmit}>
                        {show}
                        <FormGroup>
                        <label>User Name</label>
                        <input type="text" value={this.state.userId} onChange={this.handleChange} className="form-control inputtext" name="userID"/>
                        </FormGroup>
                        <FormGroup>
                        <label>Password</label>
                        <input type="password" value={this.state.password} onChange={this.handleChange} className="form-control inputtext" name="password" />
                        </FormGroup>
                        <FormGroup>
                        <input type="submit" className="btn w-100 signIn" name="submitButton" value="Sign In" />
                        </FormGroup>
                    </form>
                </Container>
           
        )
    }
}


export default withRouter(LoginForm);