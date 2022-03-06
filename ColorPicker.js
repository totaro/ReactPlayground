// imports the default export and the named export `useState` from the 'react' library
import React, {useState} from 'react';

const colorNames = ['Aquamarine', 'BlueViolet', 'Chartreuse', 
'CornflowerBlue', 'Thistle', 'SpringGreen', 'SaddleBrown', 
'PapayaWhip', 'MistyRose', 'Tomato'];

function ColorPicker() {
  // calls useState and assign its return values to `color` and `setColor`
  const [color, setColor] = useState('Chartreuse');

 const divStyle = {backgroundColor: color};

  return (
    
	<div style={divStyle}>
      <p>Selected color: {color}</p>
      {colorNames.map((colorName)=>(
        <button 
          onClick={() => setColor(colorName)} 
          key={colorName}>
       	     {colorName}
      	</button>
      ))}
    </div>
	
	
  );
}

export default ColorPicker;