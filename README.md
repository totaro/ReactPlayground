# ReactPlayground
React.js - Testing playground

## App.js:

Testing states and props. Calling this.setState from Another Function. 
Toggles div background color with event trigger on button that calls
event handler function `changeColor()`.

```
changeColor() {
    const newColor = this.state.color === green ? yellow : green;
    this.setState({ color: newColor });
  }

<button onClick = {this.changeColor} >
```

Props from App.js to Clock,js component:
```
<Clock name="Tom"/>

<div><h1>Hi there,  <i>{this.props.name}</i> (&lt;- another prop.name)</h1>
```

App.js also renders all other imported components:
```
import Clock from './Clock.js';
import ColorPicker from './ColorPicker.js';
import ValidPhoneNumber from './ValidPhoneNumber.js';

<Clock name="Tom"/>
<ColorPicker />
<ValidPhoneNumber />
```

## Clock.js:

Testing The Component Lifecycle with class components (Mounting, Updating and Unmounting) with clock example.
Component lifecycle in this example <Clock /> component consist following methods:

```
constructor()
render()
componentDidMount()
componentWillUnmount()
componentDidUpdate()
```



