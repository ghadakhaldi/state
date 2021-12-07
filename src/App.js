import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Component } from "react";
import image from "./img/img.png"
class App extends Component {
  state = {
    person: {
      fullName: "khaldi ghada",
      bio: "Full Stack Developer based in Tunisia",
      imgsrc: {image},
      profession: "web developer",
    },
    isShow: false,
    i: 0,
  };
  handleClick = () => {
    this.setState({ isShow: !this.state.isShow });
  };
  componentDidMount() {
    setInterval(() => {
      this.setState((prevState) => {
        return {
          i: prevState.i + 1,
        };
      });
    }, 1000);
  }
  render() {
    return (
      <div>
        <center>
          <div>
            {this.state.isShow ? (
              <div>
                <div>
                  <div className="card-container">
                    <span className="pro">PRO</span>
                    <img
                      className="round"
                      src={image}
                      alt="user"
                    />
                    <h3>{this.state.person.fullName}</h3>
                  
                    <p>
                    {this.state.person.profession}
                    </p>
                    <p> {this.state.person.bio}</p>
                    <div className="buttons">
                      <button className="primary">Message</button>
                      <button className="primary ghost">Following</button>
                    </div>
                    <div className="skills">
                      <h6>Skills</h6>
                      <ul>
                        
                  
                        <li>Full stuck Development</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Node</li>
                      </ul>
                    </div>
                  </div>
        
                </div>
              </div>
            ) : (
              ""
            )}
            <button className='bt' onClick={this.handleClick}>
              {" "}
              {this.state.isShow ? "hide profile" : "show profile"}{" "}
            </button>
          </div>
          <h1>{this.state.i}</h1>
        </center>
      </div>
    );
  }
}
export default App;


