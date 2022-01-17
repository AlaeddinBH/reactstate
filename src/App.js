import React, { Component } from 'react'
import "./App.css"
import "./Style.css"

export default class App extends Component {
  state = {
    Person: {fullName:"Alaeddin", bio:"...........", imgSrc:'./img/photo.png', profession:'Automaticien', shows:true},
    time : 0
  }
  
  componentDidMount(){
    setInterval(() => {
      this.seconde()
    }, 1000);
  }

  componentDidUpdate(){
    
  }

  handelShow = () => this.setState({shows: !this.state.shows});
  
  seconde = () => this.setState({time: this.state.time + 1});

  render() {
    return (
      <div className='App'>
        <button className='btn' onClick={this.handelShow}>{this.state.shows ? "Hide" : "Show"}</button>
        <h1 className='heading'>{this.state.time} s</h1>
        {
          this.state.shows&&
        
        <div className='box'>
        <h1 className='heading'><span>Name:</span> {this.state.Person.fullName}</h1>
        <h1 className='heading'><span> Bio:</span> {this.state.Person.bio}</h1>
        <img  src={this.state.Person.imgSrc} alt=''/>
        <h1 className='heading'><span> Profession:</span> {this.state.Person.profession}</h1>
        </div>
        }
        
      </div>
    )
  }
}

