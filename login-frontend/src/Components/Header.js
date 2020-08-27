import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
class Header extends Component {
  render() {

    if(this.props.data){
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
       <header>
      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">GB-GCGC</h1>
            <h3>GITAM Career Guidance Cell</h3>
            <hr />
            <ul className="social">
               <li><a href="https://twitter.com/gbplacements"><i className='fa fa-twitter'></i></a></li>
               <li><a href="https://www.facebook.com/gitamblrplacements"><i className='fa fa-facebook'></i></a></li>
               <li><a href="https://instagram.com/gbplacements"><i className='fa fa-instagram'></i></a></li>
               <li><a href="https://www.youtube.com/channel/UCTdcKs5RAOcQ-qm2qOXI2Ng"><i className='fa fa-youtube'></i></a></li>
               <li><a href="https://www.linkedin.com/in/gitamblrplacements/"><i className='fa fa-linkedin'></i></a></li>
            </ul>
         </div>
         <NavLink tag={Link} to='/Login'><button className="Loginbutton">Login</button></NavLink>

      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>
      
   </header>
    );
  }
}

export default Header;
