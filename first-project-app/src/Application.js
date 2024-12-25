import React, {Component} from 'react';
import HighScore from './HighScore';

class Application extends Component{
  constructor(props){
    super(props);


    this.state = {
      count: 0,
      overTen: false
    }
  }
 

  

  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    });
  }

  componentDidUpdate(props, state){
    if(this.state.count > 10 && this.state.count != state.count && this.state.overTen){
    console.log('updating over ten');
    this.setState({overTen: true});
    }
  }  
  render(){
    let {count} = this.state;
    return (
      <div>
        <h1>you clicked the button {count} times</h1>
        <HighScore />
      
        <span>
        <button onClick={() => this.handleClick()}>Click me</button>
        </span>
      </div>
    );
  }

}

export default Application;