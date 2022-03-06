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





