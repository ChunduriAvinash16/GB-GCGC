import React from "react";
import {

  Row,
  Col,

} from "reactstrap";

//import Hyperlink from 'react-native-hyperlink';
//import SocialMediaBar from 'react-social-media-bar';

class Footer extends React.Component {
  render() {
    return (
          <div className="footer">
            <div className="footer1 pt-2">
              <div>Developers</div>
            </div>
            <div className="footer2">
              <div className="container">
                            <div className='row' style={{"justify-cotent":"center"}}>
                              <div className='col-xl-1 col-lg-3 col-md-3 col-xs-12' ><img src={require('../asstes/Siddharth.jpg')} height="70" width="70"></img><br></br><div style={{fontSize:"9px",color:"white"}}><center>Siddharth</center></div></div><p>            </p>
                              <div className='col-xl-1 col-lg-3 col-md-3 col-xs-12' ><img src={require('../asstes/DeviPriya.jpg')} height="70" width="70"></img><br></br><div style={{fontSize:"9px",color:"white"}}><center>Devi Priya</center></div></div>
                              <div className='col-xl-1 col-lg-3 col-md-3 col-xs-12' ><img src={require('../asstes/Avinash.jpg')} height="70" width="70"></img><br></br><div style={{fontSize:"9px",color:"white"}}><center>Avinash</center></div></div>
                              <div className='col-xl-1 col-lg-3 col-md-3 col-xs-12' ><img src={require('../asstes/varsha.jpg')} height="70" width="70"></img><br></br><div style={{fontSize:"9px",color:"white"}}><center>Sree Varsha</center></div></div>
                              <div className='col-xl-1 col-lg-3 col-md-3 col-xs-12' ><img src={require('../asstes/Madhu.JPG')} height="70" width="70"></img><br></br><div style={{fontSize:"9px",color:"white"}}><center>Madhu Priya</center></div></div>
                              <div className='col-xl-1 col-lg-3 col-md-3 col-xs-12' ><img src={require('../asstes/Jain.jpeg')} height="70" width="70"></img><br></br><div style={{fontSize:"9px",color:"white"}}><center>Gulab Jain</center></div></div>
                              <div className='col-xl-1 col-lg-3 col-md-3 col-xs-12' ><img src={require('../asstes/Charan.jpg')} height="70" width="70"></img><br></br><div style={{fontSize:"9px",color:"white"}}><center>Charan</center></div></div>
                              <div className='col-xl-1 col-lg-3 col-md-3 col-xs-12' ><img src={require('../asstes/souji.jpg')} height="70" width="70"></img><br></br><div style={{fontSize:"9px",color:"white"}}><center>Soujanya</center></div></div>
                              <div className='col-xl-1 col-lg-3 col-md-3 col-xs-12' ><img src={require('../asstes/sindhu.jpg')} height="70" width="70"></img><br></br><div style={{fontSize:"9px",color:"white"}}><center>Sindhu</center></div></div>
                              <div className='col-xl-1 col-lg-3 col-md-3 col-xs-12' ><img src={require('../asstes/deepak.jpg')} height="70" width="70"></img><br></br><div style={{fontSize:"9px",color:"white"}}><center>Deepak</center></div></div>
                              <div className='col-xl-1 col-lg-3 col-md-3 col-xs-12' ><img src={require('../asstes/nihanth.jpg')} height="70" width="70"></img><br></br><div style={{fontSize:"9px",color:"white"}}><center>Nihanth</center></div></div>
                          </div>
                          
              </div>
              <br></br>
              <div className="row justify-content-center">
                <div className="col-auto">
                  <p>Copyright GITAM,BENGALURU © 2020. All rights reserved.</p>
                </div>
              </div>
            </div>
          </div>
    );
  }
}

export default Footer;
