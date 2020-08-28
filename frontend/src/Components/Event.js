import React, { Component } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);
class Event extends Component {
  render() {
    return (
          <section  id='event'>
            <div className='container'>
              <div className='row'>
                <div className='col-sm-6' >
                          <div><h3 style={{color: 'rgb(36, 30, 30)'}}>Gallery</h3></div>
                          <AutoplaySlider 
                          //style={{height:"400px",width:"400px"} }
                                play={true}
                                cancelOnInteraction={true} // should stop playing on user interaction
                                interval={5000}
                                bullets={false}
                                mobileTouch={false}
                                height={600}
                        >
                        <div data-src={require('../images/1.JPG')} />
                        <div data-src={require('../images/2.JPG')} />
                        <div data-src={require('../images/3.jpg')} />
                        </AutoplaySlider>
                </div>  
                <div className='col-sm' >
                <div><h3 style={{color: 'rgb(36, 30, 30)'}}>Events</h3></div>

                <AutoplaySlider
                //style={{height:"400px",width:"400px" }}
                
                          play={true}
                          cancelOnInteraction={true} // should stop playing on user interaction
                          interval={4000}
                          bullets={false}
                          mobileTouch={false}
                        >
                        <div><iframe id="video_frame"  width="500" height="350"  src="https://www.youtube.com/embed/iEXIccvIADU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                        <div><iframe id="video_frame"  width="500" height="350"  src="https://www.youtube.com/embed/eD9WxIl4F5Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                        <div><iframe id="video_frame"  width="500" height="350"  src="https://www.youtube.com/embed/F7C7uF4lVPk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                        <div><iframe id="video_frame"  width="500" height="350"  src="https://www.youtube.com/embed/pcbhuESCNuI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                        <div><iframe id="video_frame"  width="500" height="350"  src="https://www.youtube.com/embed/9Ts-DZyYPcI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                        
                        </AutoplaySlider>
                </div>
              </div>
          &nbsp;
          </div>
    </section>
    );
  }
}

export default Event;
