import { Component } from "react";
class counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
        j:0, c:0, aff:""
        }
    }

    increment=()=>
    {
        this.setState({
            c:this.state.c+1
        })}
        decrement=()=>{
            if(this.state.c)this.setState({c:this.state.c-1})}
    componentDidMount(){
        this.nj=setInterval(()=>
        {this.setState(prevState=>{
            return{
            j:prevState.j+1,
        };
            });
    },1000);
}
componentWillUnmount()
{clearInterval(this.nj)}
    render() { 
        return ( 
            <div>
                <center>
        <div className="countain">
            <button className="b1"onClick={this.increment}>+</button>
            <h1>
                {this.state.c}</h1>
                <button className="b2" onClick={this.decrement}>-</button>
                </div>
                <input type="text" onChange={(e)=>{this.setState({aff:e.target.value})}}/>
                <h1>{this.state.aff}
            </h1>
            <h1>{this.state.j}</h1>
            </center>
            </div>
        );
    }
}

export default counter;