import { useState  } from 'react';
import {useHistory} from 'react-router-dom';
import LineSelect from './LineSelect';

export default function Navbar () {
  const history = useHistory();
  const [hexNumber, setHexNumber] = useState(1);

  return (
    <div className="navbar">
      <button id="home" className="navbar__home navbar__button" onClick={() => history.push('/')}>Home</button>
      <LineSelect />
      <form className="navbar__browse" onChange={(e) => setHexNumber(e.target.value)} onSubmit={() => history.push(`/browse/${hexNumber}`)}>
        <label className="navbar__label" dangerouslySetInnerHTML={{__html: "<p>Browse by<br />hexagram number</p>"}}></label>
        <input className="navbar__input" required type="number" min="1" max="64" size="10" id="hexinput" placeholder="#"/>
        <button className="navbar__button" type="submit">Submit</button>
      </form>
    </div>
  );
}
