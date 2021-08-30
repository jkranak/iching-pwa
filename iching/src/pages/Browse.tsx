import {ReactElement, useState} from 'react';
import { useParams, Redirect } from 'react-router-dom';
import {HexDictionary} from '../interfaces/dictionary';
import Navbar from '../components/Navbar';
import Translation from '../components/Translation';
import TrigramInfo from '../components/TrigramInfo';
import {ResultI} from '../interfaces/result';
const hexdict: HexDictionary = require('../data/hexdict.json');

interface Params {
  hex: string
}

export default function BrowsePage (): ReactElement {
  const {hex}: Params = useParams();
  const [onHover, setOnHover] = useState(false);
  const result: ResultI = {divination: [''], numbers: [hex], lines: ['1', '2', '3', '4', '5', '6']}
  if (Number(hex) > 64 || Number(hex) < 1) {
    return (
      <div>
        <Redirect to={'/404'}/>
      </div>
    )
  }
  return (
    <>
    <Navbar />
    <div className="browsepage">
        <div className="browsepage__infobox">
        <div className="result__lefttrigram">
                {onHover && <TrigramInfo trigrams={hexdict[result["numbers"][0]].trigrams}/>}
              </div>
          <div className="result__hexinfos">
          <button className="result__hexagram" dangerouslySetInnerHTML={{ __html: hexdict[result["numbers"][0]]["hexagram"]}}
              onMouseEnter={() => setOnHover(true)}
              onMouseLeave={() => setOnHover(false)}
              onClick={() => setOnHover(!onHover)}
              ></button>
            <div className="result__moreinfo">
              <h1>{hex}</h1>
              <p><span dangerouslySetInnerHTML={{ __html: hexdict[hex]["chinese"]}}></span>: 
                <span>{hexdict[hex]["pinyin"]}</span></p>
              <p>"{hexdict[hex]["english"]}"</p>
            </div>
          </div>
      </div>
    </div>
    <Translation hex={hex} result={result}/>
    </>
  );
}