import {useState, ReactElement} from 'react';
import {useHistory} from 'react-router-dom';
import { HexNumberDict } from '../interfaces/dictionary';
const hexNumber: HexNumberDict = require('../data/hexnumber.json');

export default function LineSelect(): ReactElement {
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
    const num = hexNumber[lines.reverse().join('')];
    history.push(`/browse/${num}`);
    setLines([0, 0, 0, 0, 0, 0]);
  }

  return (
    <div className="lineselect">
      {lines.map((el, index) => (<div key={index}>{lines[index] === 0 
        ? <>{6 - index}<button className="lineselect__button lineselect__grey" onClick={() => handleClick(7, index)}>&mdash;&mdash;&mdash;</button></>
        : lines[index] === 7 
          ? <>{6 - index}<button className="lineselect__button" onClick={() => handleClick(8, index)} dangerouslySetInnerHTML={{__html: lineNums[el]}}></button></>
          : <>{6 - index}<button className="lineselect__button" onClick={() => handleClick(7, index)} dangerouslySetInnerHTML={{__html: lineNums[el]}}></button></>}</div>))}
    <button className="lineselect__submit" disabled={disable} onClick={handleSubmit}>Submit</button>
    </div>
  )
}
