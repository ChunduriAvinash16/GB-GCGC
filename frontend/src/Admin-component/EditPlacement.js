import React, { Component } from 'react'
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
class EditPlacement extends Component  {
    constructor(props){
    super(props);
    this.state = {
        placement:[],
        year:2020,
        id:"",
        company:"",
        date:"",
        CTC:"",
        redirect:false
      };
      this.onChangeCTC=this.onChangeCTC.bind(this);
      this.onChangeCompany=this.onChangeCompany.bind(this);
      this.onChangeDate=this.onChangeDate.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    toggleModal() {
      this.setState({
        isModalOpen: !this.state.isModalOpen,
      });
    }
    onChangeCompany(e){
      this.setState({
        company:e.target.value
      });
    }
    onChangeDate(e){
      this.setState({
        date:e.target.value
      });
    }
    onChangeCTC(e){
      this.setState({
        CTC:e.target.value
      });
    }
    componentDidMount(){
      Axios.get("http://localhost:80/Admin-backend/PlacementsDashBoardUpdate.php?id="+this.props.match.params.id)
      .then(response=>{
        this.setState({
          placement:response.data,
          company:response.data[0].Company_name,
          date:response.data[0].Date,
          CTC:response.data[0].CTC
        })
        //console.log(this.state.train[1])
      })
      .catch(err=>console.log(err));
    }
    handleSubmit(e){
        e.preventDefault();
        const obj={
            id:this.props.match.params.id,
            company:this.state.company,
            date:this.state.date,
            CTC:this.state.CTC
        }
        Axios.post("http://localhost:80/Admin-backend/PlacementDashBoardUpdateValue.php",obj)
        .then(res=>alert("update Successful"))
        .catch(err=>console.log(err))
        this.setState({
          id:"",
          company:"",
          date:"",
          CTC:"",
          redirect:true
        })
    }
    
    render(){
      const {redirect} = this.state;
      if(redirect){
        return <Redirect to={"/PlacementEditBoard"}/>
      }
        return (
            <div className="container">
              <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label htmlfor="company">Name Of The Company</Label>
                <Input type="text" id="company" name="company"  value={this.state.company} onChange={this.onChangeCompany} />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="date"> From </Label>
                <Input type="date" id="date" name="date" value={this.state.date} onChange={this.onChangeDate} />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="CTC"> CTC </Label>
                <Input type="text" id="ctc" name="ctc" value={this.state.CTC} onChange={this.onChangeCTC}/>
              </FormGroup>
              <Button type="submit" value="submit" color="primary">
                Submit
              </Button>
            </Form>
            </div>
        )
    }
}

export default EditPlacement; 