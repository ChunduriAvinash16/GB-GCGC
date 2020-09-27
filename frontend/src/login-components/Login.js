import React, { Component } from 'react'
import Axios from 'axios';
import {Col,Row} from 'reactstrap';
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
        this.handleAddLoginId=this.handleAddLoginId.bind(this);
        this.handleAddPassword=this.handleAddPassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    handleSubmit = async (e)=>{
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
            return (<Redirect to="/home"/>)
        }
        if(this.state.redirect && this.state.type==="Guest"){
            return (<Redirect to="/Guestpage"/>)
        }
        

        return (
            <header>
                 <div className="row banner">
                    <div className="banner-text">
                            <h1 style={{"font-size":"150px"}}className="responsive-headline">GB-GCGC</h1>
                            <h2 style={{"color":"white"}}>GITAM Career Guidance Cell</h2>
                            <hr />
                        <div id="BodyLogin" className='centered container-fluid'>
                        <div className="centered" id="LOGIN">
                            <div className="auth-inner" id="INNER_LOGIN">
                                <div className="auth-wrapper">
                                    <form onSubmit={this.handleSubmit}>
                                        <Row>
                                            <Col sm="12" md="4" >   
                                                <div className="form-group">
                                                <input type="text" className="form-control" placeholder="LoginId" value={this.state.Login_id} onChange={this.handleAddLoginId} required/>
                                                </div>
                                            </Col>
                                            <Col sm="12" md="4">
                                                <div className="form-group">
                                                    <input type="password" className="form-control" placeholder="Password"value={this.state.password} onChange={this.handleAddPassword} required/>
                                                </div>    
                                            </Col>
                                            <Col sm="12" md="4" style={{"text-align":"intial"}}>
                                                <div className="form-group" style={{"text-align":"-webkit-center"}}>
                                                    <button type="submit" className="btn btn-danger btn-block"style={{"backgroundColor":"#CC5200" ,"width": "100px","text-align": "center"}}>Submit</button>
                                                </div> 
                                            </Col>
                                    </Row>
                                </form>
                            </div>
                        </div>
                    </div>
                        </div>
                        <footer>
                            <ul className="social container-fluid">
                                <li><a href="https://twitter.com/gbplacements"><i className='fa fa-twitter'></i></a></li>
                                <li><a href="https://www.facebook.com/gitamblrplacements"><i className='fa fa-facebook'></i></a></li>
                                <li><a href="https://instagram.com/gbplacements"><i className='fa fa-instagram'></i></a></li>
                                <li><a href="https://www.youtube.com/channel/UCTdcKs5RAOcQ-qm2qOXI2Ng"><i className='fa fa-youtube'></i></a></li>
                                <li><a href="https://www.linkedin.com/in/gitamblrplacements/"><i className='fa fa-linkedin'></i></a></li>
                            </ul>
                            <p style={{"color":"white"}} >Copyright GITAM,BENGALURU © 2020. All rights reserved.</p>
                        </footer>
                    </div>
                </div>
            </header>
         );
    }
}

export default Login;