import React, { Component } from 'react';
import DonutChart from './Donutchart';
class Portfolio extends Component {
  render() {

   

    return (
      <section id="portfolio">
        <div className='container'>
          <div className='row'>
            <h3>Pacements</h3>
            <div className='six columns'>
                <DonutChart/>
        
            </div>
            <div className='six columns'>
                <DonutChart/>
        
            </div>
            <div className='six columns'>
                <DonutChart/>
        
            </div>
            <div className='six columns'>
                <DonutChart/>
        
            </div>
             </div>
        </div>
   </section>
    );
  }
}

export default Portfolio;
