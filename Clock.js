import React from 'react';

export class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  render() {
    return (
	<div><h1>Hi there,  <i>{this.props.name}</i> (&lt;- another prop.name)</h1>
	{this.state.date.toLocaleTimeString()}</div>
	);
  }
  
  startInterval(){

      let delay;
       if(this.props.isPrecise){
          delay = 100;
       }else{
          delay = 1000;
       }

       this.intervalID = setInterval(() => {
      this.setState({ date: new Date() });
      }, delay);

  }
  
  componentDidMount() {
    const oneSecond = 1000;
    this.intervalID = setInterval(() => {
      this.setState({ date: new Date() });
    }, oneSecond);
  }

    componentWillUnmount() {
      clearInterval(this.intervalID);

    }
	
	componentDidUpdate(prevProps) {
      if(this.props.isPrecise === prevProps.isPrecise){
          return;
      }
       clearInterval(this.intervalID);

       this.startInterval();
  
  }
	
	
	
}

export default Clock;