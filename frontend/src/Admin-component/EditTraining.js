import React, { Component } from 'react';
import { Card, Table, Button } from "react-bootstrap";
import {

    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
  } from "reactstrap";
  import {Redirect} from 'react-router';

import Axios from 'axios';
class EditTraining extends Component {
    constructor(props){
        super(props);
        this.state = {
          //  isModalOpen1: false,
          //  isModalOpen: false,
            Year:2020,
            edit:[],
            isNavOpen: false,
            YOP:"",
            from_date:"",
            to_date:"",
            program:"",
            id:"",
          };
      
          this.onChangeFromDate=this.onChangeFromDate.bind(this);
          this.onChangeToDate=this.onChangeToDate.bind(this);
          this.onChangeProgram=this.onChangeProgram.bind(this);
          this.onChangeYOP=this.onChangeYOP.bind(this);
          this.handleSubmit=this.handleSubmit.bind(this);
      
        }

        onChangeProgram(e){
          this.setState({
            program:e.target.value
          });
        }
        onChangeYOP(e){
          this.setState({
            YOP:e.target.value
          });
        }
        onChangeFromDate(e){
          this.setState({
            from_date:e.target.value
          });
        }
        onChangeToDate(e){
          this.setState({
          to_date:e.target.value
          });
        }
        componentDidMount(){
          Axios.get("http://localhost/Admin-backend/EditTraining.php?id="+this.props.match.params.id)
          .then(response=>{
            this.setState({
              edit: response.data,
              YOP: response.data[0].YOP,
              from_date:response.data[0].from_date,
              to_date:response.data[0].to_date,
              program:response.data[0].name_of_the_program
            })
            console.log(this.response.data)
          })
          .catch(err=>console.log(err))
        }
    handleSubmit(e){
        e.preventDefault();
    const obj={
      id:this.props.match.params.id,
      YOP:this.state.YOP,
      program:this.state.program,
      from_date:this.state.from_date,
      to_date:this.state.to_date,
    };
    console.log(obj);
    Axios.post("http://localhost:80/Admin-backend/TrainingBoardUpdate.php",obj)
      .then(res=>alert(res.data+"Updated Sucessfully"))
      .catch(err=>console.log(err))
      this.setState({
        YOP:"",
        program:"",
        from_date:"",
        to_date:""
      })
    }
    render(){
     return (
        <div>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label htmlfor="username">Year Of Passing</Label>
                <Input
                  type="text"
                  id="YOP"
                  value ={this.state.YOP}
                  name="YOP"
                 onChange={this.onChangeYOP}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlfor="program">Name Of The Program</Label>
                <Input type="text" id="program" value={this.state.program} name="program" onChange={this.onChangeProgram} />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="from-date"> From </Label>
                <Input type="date" id="from-date" name="from-date" value={this.state.from_date} onChange={this.onChangeFromDate}/>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="to-date"> To </Label>
                <Input type="date" id="to-date" name="to-date" value={this.state.to_date} onChange={this.onChangeToDate}/>
              </FormGroup>
              <Button type="submit" value="submit" color="primary">
                Submit
              </Button>
            </Form>
        </div>
     )
    }
}

export default EditTraining
