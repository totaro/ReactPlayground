# ReactPlayground
React.js - Testing playground

##App.js:

Testing states and props. Calling this.setState from Another Function. 
Toggless div background color with event trigger on button that calls
event handler function

`
changeColor() {
    const newColor = this.state.color === green ? yellow : green;
    this.setState({ color: newColor });
  }

<button onClick = {this.changeColor} >
`

Use `git status` to list all new or modified files that haven't yet been committed.
