import React, { Component } from 'react';

class About extends Component {
  render() {

    

    return (
    <section id="about">
      <div className='container'>
      <div className="row">
         <div className="col-sm-6">
            <img className="profile-pic"  src={require('../asstes/gitamlogo.png')} alt="GITAM" />
         </div>
         <div className="col-sm-6">
          <h2>About GB-GCGC</h2><br />
            <p>{"Gitam Bengaluru - Gitam Career Guidance Cell "}</p>
          </div>
        </div>
       </div> 
   </section>
    );
  }
}

export default About;
