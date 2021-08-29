import {ReactElement} from 'react';
import { useParams, Redirect } from 'react-router-dom';
import {HexDictionary} from '../interfaces/dictionary';
import Navbar from '../components/Navbar';
import Translation from '../components/Translation';
import {ResultI} from '../interfaces/result';
const hexdict: HexDictionary = require('../data/hexdict.json');

interface Params {
  hex: string
}

export default function Browse (): ReactElement {
  const {hex}: Params = useParams();
  const result: ResultI = {numbers: [hex], lines: ['1', '2', '3', '4', '5', '6']}
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
    <div className="browse">
        <div className="browse__infobox">
          <div className="result__hexinfos">
            <div className="result__hexagram" dangerouslySetInnerHTML={{ __html: hexdict[hex]["hexagram"]}}></div>
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