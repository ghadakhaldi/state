import logo from './logo.svg';
import './App.css';
import React from 'react';
import profile from './components'

import image from './img/img.png'

class App extends React.Component{
  constructor (props) {
    super(props)
    this.state = {
      fullName: `${props.firstName} ${props.lastName}`
    };
  }
  render() {
    var fullName = this.state.fullName;
    var picture = this.props.picture;
    var bio = this.state.bio;
    var profession = this.props.profession;

    
    return (
    <div className="App">
        <div>
        <img src={image} />
        <h2>{fullName}</h2>
        h
      </div>
    );
    </div>
  );

  }
}


 //function App() {
  //return (
   // <div className="App">

    //</div>
 // );


export default App;
