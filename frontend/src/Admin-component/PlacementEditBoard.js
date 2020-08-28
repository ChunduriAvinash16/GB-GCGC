import React, { Component } from "react";
import { Card, Table } from "react-bootstrap";
import RecordsListPlacement from './RecordsListPlacement';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faPencilAlt,
  faMinusCircle,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import {
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  Jumbotron,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";
import Axios from 'axios';
import {Redirect}  from 'react-router';

class PlacementBoardEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placement:[],
      isModalOpen: false,
      year:2021,
      isNavOpen: false ,
      company:"",
      date:"",
      CTC:"",
      redirect:false
    };
    this.onChangeCTC=this.onChangeCTC.bind(this);
    this.onChangeCompany=this.onChangeCompany.bind(this);
    this.onChangeDate=this.onChangeDate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
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
    Axios.get("http://localhost:80/Admin-backend/PlacementsDashBoardEdit.php")
    .then(response=>{
      this.setState({
        placement:response.data,
      })
      //console.log(this.state.train[1])
    })
    .catch(err=>console.log(err));
  }
  handleSubmit(e){
    e.preventDefault();
    const obj={
      company:this.state.company,
      date:this.state.date,
      CTC:this.state.CTC,
    };
    console.log(obj);
    Axios.post("http://localhost:80/Admin-backend/PlacementDashBoardMore.php",obj)
      .then(res=>alert(res.data+"Sucessfully Added"))
      .catch(err=>console.log(err))
      this.setState({
        company:"",
        date:"",
        CTC:"",
        redirect:true
      })
  }
  userList(){
    return this.state.placement.map(function (object,i){
        return <RecordsListPlacement obj={object} key={i} />
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
            <div className="inline">
              <Card.Title>
                <h3 align="center">
                  Notice Board-Placements
                  <Link onClick={this.toggleModal}>
                    <FontAwesomeIcon icon={faPlus} size="xs" />
                  </Link>
                </h3>
              </Card.Title>
            </div>
            &nbsp;
            <div>
              <Table size="sm" responsive>
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Name of the Company</th>
                    <th>Date</th>
                    <th>CTC</th>
                    <th></th>
                    <th></th>
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
            Add Placement Event
          </ModalHeader>
          <ModalBody>
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
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
export default PlacementBoardEdit;
