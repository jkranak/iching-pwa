import React, {useState} from 'react';

export default function LineSelect() {
  const [lines, setLines] = useState([0, 0, 0, 0, 0, 0])
  
  const handleClick = (number, index) => {
    const newLines = [...lines];
    newLines[index] = number;
    setLines(newLines);
  }

  return (
    <div>
      {lines.map((el, index) => (<div key={index}>{lines[index] === 0 
        ? <button onClick={() => handleClick(7, index)}>{el}</button> 
        : lines[index] === 7 
          ? <button onClick={() => handleClick(8, index)}>{el}</button> 
          : <button onClick={() => handleClick(0, index)}>{el}</button>}</div>))}
    </div>
  )
}
