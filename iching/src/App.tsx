import {ReactElement} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Result from './pages/Result';
import BrowsePage from './pages/Browse';
import FourOFour from './pages/404';
import './sass/main.scss';
import Explanation from './pages/Explanation';

export default function App (): ReactElement {

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/result/:div/:question?" exact component={Result} />
            <Route path="/browse/:hex" exact component={BrowsePage} />
            <Route path="/explanation" exact component={Explanation} />
            <Route path="/404" component={FourOFour}/>
            <Route component={FourOFour} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
