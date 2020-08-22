import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
    <section id="about">
      <div className='container'>
      <div className="row">
         <div className="col-sm-6">
            <img className="profile-pic"  src={"public/images/profilepic"} alt="GITAM" />
         </div>
         <div className="col-sm-6">
          <h2>About GCGC</h2><br />
            <p>{"Good morning"}</p>
          </div>
        </div>
       </div> 
   </section>
    );
  }
}

export default About;
