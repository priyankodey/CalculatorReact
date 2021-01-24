import React, { Component } from 'react'
import CalculatorTitle from './components/CalculatorTitle';
import OutputScreen from './components/OutputScreen';
import Button from './components/Button';   

class App extends Component {
  constructor() {
    super()
  
    this.state = {
       question: '',
       answer: ''
    }
    this.clickHandle = this.clickHandle.bind(this)
  }
  
  clickHandle(event) {
    const btnValue = event.target.value;
    //alert(btnValue);
    switch(btnValue){
      case '=': {
        if(this.state.question !== ''){
          var ans='';
          try{
            ans = eval(this.state.question);
          }
          catch(err){
            this.setState({answer:"This is Math Error"});
          }
          if(ans === undefined){
            this.setState({answer:"This is Math Error"});
          }
          else{
            this.setState({answer:ans, question:''});
          }
          break;
        }
        break;
      }
      case '%':{
        if(this.state.question !== ''){
          var answ = '';
          answ = eval(this.state.question);
          answ =answ/100;
        }
        this.setState({question:'',answer:answ});
        break;
      }
      case 'Clear':{
        this.setState({question:'',answer:''});
        break;
      }
      case 'Delete':{
        var str = this.state.question;
            str = str.substr(0,str.length-1);
            this.setState({question:str});
        break;
      }
      default: {
        this.setState({question: this.state.question += btnValue});
        break;
      }
    }
  }


  render() {
    return (
      <div className="full-frame">
        <CalculatorTitle title="Calculator"></CalculatorTitle>
        <div className="Calculator-body">
          <OutputScreen question={this.state.question} answer={this.state.answer}/>
          <div className="button-row">
              <Button clickButton={this.clickHandle} label={'Clear'}/>
              <Button clickButton={this.clickHandle} label={'Delete'}/>
              <Button clickButton={this.clickHandle} label={'%'}/>
              <Button clickButton={this.clickHandle} label={'/'}/>
          </div>
          <div className="button-row">
              <Button clickButton={this.clickHandle} label={'7'}/>
              <Button clickButton={this.clickHandle} label={'8'}/>
              <Button clickButton={this.clickHandle} label={'9'}/>
              <Button clickButton={this.clickHandle} label={'*'} />
          </div>
          <div className="button-row">
              <Button clickButton={this.clickHandle} label={'4'}/>
              <Button clickButton={this.clickHandle} label={'5'}/>
              <Button clickButton={this.clickHandle} label={'6'}/>
              <Button clickButton={this.clickHandle} label={'-'}/>
          </div>
          <div className="button-row">
              <Button clickButton={this.clickHandle} label={'1'}/>
              <Button clickButton={this.clickHandle} label={'2'}/>
              <Button clickButton={this.clickHandle} label={'3'}/>
              <Button clickButton={this.clickHandle} label={'+'}/>
          </div>
          <div className="button-row">
              <Button label={' '}/>
              <Button clickButton={this.clickHandle} label={'0'}/>
              <Button clickButton={this.clickHandle} label={'.'}/>
              <Button clickButton={this.clickHandle} label={'='}/>
                            
          </div>
        </div>
      </div>
    )
  }
}


export default App;
