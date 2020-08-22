import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

class Contact extends Component {
  render() {

    return (

      <section id="contact" >
        <div className='container'>
        <div className="row">
          <div className="col-sm-7" style={{marginRight:'2rem'}}>
            <h3>Contact</h3>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3883.0209563354842!2d77.59294771491557!3d13.28663099064976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb1de47ffbf5d49%3A0xec91545e88c87ae9!2sGITAM+University%2C+Bangalore!5e0!3m2!1sen!2sin!4v1526122309420" width="100%" height="450" frameborder="0"
            ></iframe>

            <div id="message-warning"> Error boy</div>
            <div id="message-success">
              <i className="fa fa-check"></i>Your message was sent, thank you!<br />
            </div>
          </div>



          <div className="col-sm">
            <br />
            <br />
            <h4>Address and Phone</h4>
            <ul>
              <li><i className="fa fa-user fa-lg" /> Dr.B.Kishor , Dy.Director</li>
              <li><i className="fa fa-phone fa-lg" /><span>080-28098033, 9701516999</span></li>
              <li><i className="fa fa-envelope fa-lg" /></li> <span>gitamblr.tpo@gitam.in /<br /> gitamblr.placements@gitam.in/<br /> gitamblr.training@gitam.in </span>
              <li><i className="fa fa-map-marker fa-lg" ></i></li>
              <span>GITAM(Deemed to be University)<br />
               GITAM School of Technology<br />NH 207, Nagadenehalli<br />
                                        Doddaballapur Taluk<br />
                                        Bengaluru Rural District-561203    <br />
                                        Karnataka, INDIA. </span>
            </ul>

          </div>

        </div>
        </div>
      </section>

    );
  }
}

export default Contact;