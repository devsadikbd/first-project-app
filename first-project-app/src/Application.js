import React, {Component} from 'react';

class Application extends Component{
  constructor(props){
    super(props);
    this.state = {
      count: 0
    }
  }
 

  

  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    });
  }

  componentDidupdate(props, state){
    if(this.state.count > 10 && this.state.count != state.count && this.state.overTen){
    console.log('updating over ten');
    this.setState({overTen: true});
    }
  }  
  render(){
    let {count} = this.state;
    return (
      <div>
        <h1>you clicked the button{count} times</h1>
        {(this.state.overTen) ?
        <h3>Beat high score of 10!</h3>
        : null
        }
      
      <span>
        <button onClick={() => this.handleClick()}>Click me</button>
      </span>
      </div>
    );
  }

}

export default Application;