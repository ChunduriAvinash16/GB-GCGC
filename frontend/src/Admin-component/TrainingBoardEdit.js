import React, { Component } from "react";
import { Card, Table, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {

  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import {
  faPlus,
  faPencilAlt,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { Link, Route } from "react-router-dom";
import { Col } from "react-bootstrap";
import Axios from "axios";
import  EditTraining from './EditTraining';
import RecordsList from './RecordList';
import {Redirect} from 'react-router';

class TrainingBoardEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen1: false,
      isModalOpen: false,
      Year:2022,
      edit:[],
      isNavOpen: false,
      YOP:"",
      from_date:"",
      to_date:"",
      program:"",
      id:"",
      redirect:false
    };

   // this.handleonclick=this.handleonclick.bind(this);
    this.onChangeFromDate=this.onChangeFromDate.bind(this);
    this.onChangeToDate=this.onChangeToDate.bind(this);
    this.onChangeProgram=this.onChangeProgram.bind(this);
    this.onChangeYOP=this.onChangeYOP.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.toggleModal1 = this.toggleModal1.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }
  toggleModal1() {
    this.setState({
      isModalOpen1: !this.state.isModalOpen1,
    });
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
    Axios.get("http://localhost/Admin-backend/TrainingBoardEdit.php?id="+this.state.Year)
    .then(response=>{
      this.setState({
        edit: response.data
      })
      console.log(this.state.edit)
    })
    .catch(err=>console.log(err))
  }
  handleSubmit(e){
    e.preventDefault();
    const obj={
      YOP:this.state.YOP,
      program:this.state.program,
      from_date:this.state.from_date,
      to_date:this.state.to_date,
    };
    console.log(obj);
    Axios.post("http://localhost:80/Admin-backend/TrainingBoardMore.php",obj)
      .then(res=>alert(res.data+"Sucessfully Added"))
      .catch(err=>console.log(err))
      this.setState({
        YOP:"",
        program:"",
        from_date:"",
        to_date:"",
        redirect:true
      })
  }

  userList(){
    return this.state.edit.map(function (object,i){
        return <RecordsList obj={object} key={i} />
    })
}

  render() {
    const {redirect} = this.state;
    if(redirect){
      return <Redirect to={"/home"}/>
    }
    return (
      <div>
        <Card>
          <Card.Body>
            <div className="row">
              <Col>
                <Card.Title>
                  <h3 align="center">
                    Notice Board-Training
                    <Link onClick={this.toggleModal}>
                      <FontAwesomeIcon icon={faPlus} size="xs" />
                    </Link>
                  </h3>
                </Card.Title>
              </Col>
            </div>
            &nbsp;
            <div>
              <Table size="sm" responsive>
                <thead>
                  <tr>
                    <th>From</th>
                    <th>To</th>
                    <th>Name of the Programme</th>
                    <th>status</th>
                  </tr>
                </thead>
                <tbody>
                  {this.userList()}
               </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>
            Add Training Event
          </ModalHeader>
          <ModalBody>
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
          </ModalBody>
        </Modal>
       {/* <Modal isOpen={this.state.isModalOpen1} toggle={this.toggleModal1}>
          <ModalHeader toggle={this.toggleModal1}>
              Edit Training Event
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label htmlfor="username">Year Of Passing</Label>
                  <Input
                     type="text" id="YOP" value ={item.YOP} name="YOP" onChange={this.onChangeYOP}
                  />
                  {console.log("item.name_of_the_program"), console.log(index+1)}
              </FormGroup>
              <FormGroup>
                  <Label  htmlfor="program">Name Of The Program</Label>
                  <Input key={index} type="text" id="program" value={item.name_of_the_program} name="program" onChange={this.onChangeProgram} />
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
          </ModalBody>
               </Modal>*/}
      </div>
    );
  }
}
export default TrainingBoardEdit;
//<FontAwesomeIcon icon={faPencilAlt} className="ml-2" />/
//<FontAwesomeIcon icon={faTrash} className="ml-2" />