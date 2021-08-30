import React, {useState, ReactElement } from 'react'
import {useHistory} from 'react-router-dom';
import { HexNumberDict } from '../interfaces/dictionary';
const hexNumber: HexNumberDict = require('../data/hexnumber.json');

export default function Browse(): ReactElement {
  const [hexBrowse, setHexBrowse] = useState('0');
  const [lines, setLines] = useState([0, 0, 0, 0, 0, 0])
  const [disable, setDisable] = useState(true);
  const history = useHistory();

  interface NumDashConvert {
    [index: number]: string
  }

  const lineNums: NumDashConvert = {
    7: '&mdash;&mdash;&mdash;',
    8: '&mdash;&nbsp;&nbsp;&nbsp;&nbsp;&mdash;'
  }

  const handleClick = (number: number, index: number) => {
    const newLines = [...lines];
    newLines[index] = number;
    setLines(newLines);
    if (disable && !newLines.includes(0)) {
      setDisable(false);
    }
  }

  const handleSubmit = () => {
    const num: string = hexNumber[lines.reverse().join('')];
    history.push(`/browse/${num}`);
    setLines([0, 0, 0, 0, 0, 0]);
  }

  return (
    <div className="browse">
      <div className="browse__lineselect">
        <p className="browse__label">Click to select lines</p>
      {lines.map((el, index) => (<div key={index}>{lines[index] === 0 
        ? <div className="browse__linerow">{6 - index}<button className="browse__button browse__grey" onClick={() => handleClick(7, index)}>&mdash;&mdash;&mdash;</button></div>
        : lines[index] === 7 
          ? <div className="browse__linerow">{6 - index}<button className="browse__button" onClick={() => handleClick(8, index)} dangerouslySetInnerHTML={{__html: lineNums[el]}}></button></div>
          : <div className="browse__linerow">{6 - index}<button className="browse__button" onClick={() => handleClick(7, index)} dangerouslySetInnerHTML={{__html: lineNums[el]}}></button></div>}</div>))}
    <button className="browse__submit" disabled={disable} onClick={handleSubmit}>Submit</button>
    </div>
    <div className="browse__number">
      <form className="browse__form" 
        onChange={(e: React.FormEvent<HTMLFormElement>) => setHexBrowse((e.target as HTMLInputElement).value)}
        onSubmit={() => history.push(`/browse/${hexBrowse}`)}>
        <label className="browse__label" 
          dangerouslySetInnerHTML={{__html: "<p>Browse by<br />hexagram number</p>"}}>
        </label>
        <input className="browse__input" required type="number"
          min="1" max="64" id="hexinput" placeholder="#"/>
        <button className="browse__submit" type="submit">Submit</button>
      </form>
      </div>
    </div>
  )
}
