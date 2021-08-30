import { useState, ReactElement } from 'react';
import {useHistory} from 'react-router-dom';
import Browse from '../components/Browse';

export default function Navbar (): ReactElement {
  const history = useHistory();
  const [hover, setHover] = useState(false);

  return (
    <div className="navbar">
      <button id="home" 
        className="navbar__home navbar__button" 
        onClick={() => history.push('/')}
      >Home</button>
      <div className="navbar__browse"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <button onClick={() => setHover(!hover)} id="browse" className="navbar__button"
        >Browse</button>
        {hover && <Browse />}
      </div>
    </div>
  );
}
