import React from 'react';
import Clock from './Clock.js';
import ColorPicker from './ColorPicker.js';
import ValidPhoneNumber from './ValidPhoneNumber.js';



const green = '#39D1B4';
const yellow = '#FFD712';

export class App extends React.Component {
	
  constructor(props){
    super(props);
    this.state = {color: green}
    this.changeColor = this.changeColor.bind(this);
  }

  
  changeColor() {
    const newColor = this.state.color === green ? yellow : green;
    this.setState({ color: newColor });
  }

  render() {
    return (
      <div style={{background: this.state.color}}>
        <h1>
          Change &lt;div&gt; color, <i>{this.props.nimi}</i> (&lt;- prop.name)
        </h1>
        <button onClick = {this.changeColor} >
          Change color
        </button>
		<Clock name="Tom"/>
		<ColorPicker />
		<ValidPhoneNumber />
				
      </div>
    );
  }
}

export default App;
