import React, { Component } from 'react'
import Axios from 'axios';
import {Col} from 'reactstrap';
import { useHistory ,Link, Redirect} from 'react-router-dom';
class Login extends Component {
    constructor(props){
    super(props);
    this.state={
        Login_id:"",
        password:"",
        type:"",
        redirect:false
        };

        this.handleSudmit = this.handleSudmit.bind(this);
    }

    handleAddLoginId=async e=>{
        await this.setState({
            Login_id : e.target.value,
        })
    }
    handleAddPassword=async e=>{
        await this.setState({
            password : e.target.value,
        })
    }

    handleSudmit = async (e)=>{
        e.preventDefault();
        const obj = {
            Login_id : this.state.Login_id,
            password:this.state.password
        }
        console.log(this.state.type)
        const url="http://localhost:80/login-backend/login.php"
        Axios.post(url,obj)
        .then((res) =>{
            this.setState({type:res.data[0]['type']});
            if(this.state.type==='user' || this.state.type==='Admin'||this.state.type==='Guest'){
                this.setState({redirect:true})
            }else{
                alert("Invalid")
            }
            this.props.functionCallFromParent(this.state.Login_id);

           // console.log(this.state.type,this.state.redirect)
           /* if(type==='user'){
                this.props.history.push("/Loginpage/")
            }else if(type==='Admin'){
                this.props.history.push('/Adminpage/')
            }else if(type==='Guest'){
                this.props.history.push('/Guestpage/')
            }else{
                alert("Invalid credentials")
            }*/
        })
        .catch(err=>console.log(err));
        //console.log(this.state.type)
    }
    render(){
      if(this.state.redirect && this.state.type==="user"){
            return (<Redirect to="/Dashboard"/>)
        }
        if(this.state.redirect && this.state.type==="Admin"){
            return (<Redirect to="/Adminpage"/>)
        }
        if(this.state.redirect && this.state.type==="Guest"){
            return (<Redirect to="/Guestpage"/>)
        }

        return (
            <header>
            <div className="row banner">
               <div className="banner-text">
                  <h1 className="responsive-headline">GB-GCGC</h1>
                  <h3>GITAM Career Guidance Cell</h3>
                  <hr />
                  <div id="BodyLogin" className='centered'>
                <div className="centered" id="LOGIN">
                    <div className="auth-inner" id="INNER_LOGIN">
                        <div className="auth-wrapper">
                            <form>
                                <h3 style={{"color":"white"}}>Login In</h3><hr/>
                                <div className="form-group">
                                        <h5 style={{"color":"white","text-align":"initial"}}>Login Id</h5>
                                        <input type="text" className="form-control" placeholder="Registration Number" onChange={this.handleAddLoginId}/>
                                </div>
                                <div className="form-group">
                                    <h5 style={{"color":"white","text-align":"initial"}}>Password</h5>
                                    <input type="password" className="form-control" placeholder="Enter password" onChange={this.handleAddPassword}/>
                                </div>
                                <br/>
                                <button type="submit" className="btn btn-danger btn-block"style={{"background-color":"#CC5200"}} onClick={this.handleSudmit} >Submit</button>
                                    <p className="forgot-password text-right">
                                        Forgot <a href="#">password?</a>
                                    </p>
                             </form>
                        </div>
                    </div>
                </div>
            </div>
                  <ul className="social">
                     <li><a href="https://twitter.com/gbplacements"><i className='fa fa-twitter'></i></a></li>
                     <li><a href="https://www.facebook.com/gitamblrplacements"><i className='fa fa-facebook'></i></a></li>
                     <li><a href="https://instagram.com/gbplacements"><i className='fa fa-instagram'></i></a></li>
                     <li><a href="https://www.youtube.com/channel/UCTdcKs5RAOcQ-qm2qOXI2Ng"><i className='fa fa-youtube'></i></a></li>
                     <li><a href="https://www.linkedin.com/in/gitamblrplacements/"><i className='fa fa-linkedin'></i></a></li>
                  </ul>
               </div>
               <p style={{"color":"white"}} >Copyright GITAM,BENGALURU © 2020. All rights reserved.</p>

            </div>

            </header>
         );
    }
}

export default Login;