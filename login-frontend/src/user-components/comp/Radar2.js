import React,{Component} from 'react';
import {Radar} from 'react-chartjs-2';
import Axios from 'axios';

export class RadarExample2 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            LogicalAbility:0, EnglishComprehension:0, QuantitativeAbility:0, Automata:0, AutomataFix:0, Domain1:0, Domain2:0,
            student_id:321710306006,
        }
    };
    componentDidMount(){
        Axios.get("http://localhost/login-backend/are_amcat.php?id="+this.state.student_id)
        .then(response => {
            this.setState({
                LogicalAbility:response.data[0]['1_Logical_Ability_900M'],
                EnglishComprehension:response.data[0]['2_English_Comprehension_900M'],
                QuantitativeAbility:response.data[0]['3_Quantitative_Ability_900M'],
                Automata:response.data[0]['4_Automata_100M'],
                AutomataFix:response.data[0]['5_Automata_Fix_100M'],
                Domain1:response.data[0]['6a_domain_1_900M'],
                Domain2:response.data[0]['6b_domain_2_900M'],
            })
            console.log(this.state.LogicalAbility)
        })
        .catch(function(err){
            console.log(err);
        })
    }

  render() {
    return (
      <div>
        <Radar 
        data = {{
            labels: ['Logical Ability', 'English Comprehension', 'Quantitative Ability', 'Automata', 'Automata Fix', 'Domain_1', 'Domain_2'],
            datasets: [
              {
                label: 'AMCAT1',
                backgroundColor: 'rgba(30,144,255,0.2)',
                borderColor: 'rgba(30,144,255,1)',
                pointBackgroundColor: 'rgba(179,181,198,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(179,181,198,1)',
                data: [this.state.LogicalAbility,this.state.EnglishComprehension,this.state.QuantitativeAbility,this.state.Automata,
                this.state.AutomataFix,this.state.Domain1,this.state.Domain2],
              },
              {
                label: 'AMCAT2',
                backgroundColor: 'rgba(50,205,50,0.2)',
                borderColor: 'rgba(50,205,50,1)',
                pointBackgroundColor: 'rgba(255,0,0,1)',
                pointBorderColor: '#ff0000',
                pointHoverBackgroundColor: '#ff0000',
                pointHoverBorderColor: 'rgba(255,0,0,1)',
                data: [0, 0, 0, 0, 0, 0, 0]
              }
            ]
          }}
          />
      </div>
    );
  }
}