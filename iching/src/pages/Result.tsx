import {useState, ReactElement} from 'react';
import { Redirect, useParams } from 'react-router-dom';
import {HexDictionary} from '../interfaces/dictionary';
import { otherInfo } from '../services/divination';
import Navbar from '../components/Navbar';
import Translation from '../components/Translation';
import TrigramInfo from '../components/TrigramInfo';
import {ResultI} from '../interfaces/result';
const hexdict: HexDictionary = require('../data/hexdict.json');

interface Params {
  div: string
  question: string
}
export default function Result (): ReactElement {
  const {div, question}: Params = useParams();
  const result: ResultI = otherInfo(div, question);
  const [onLeftHover, setOnLeftHover] = useState(false);
  const [onRightHover, setOnRightHover] = useState(false);
  
  function lineRender (num: string): string {
    if (num === '7') return '—————';
    if (num === '8') return '——&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;——';
    if (num === '6') return '——X——';
    if (num === '9') return '——O——';
    else return '';
  }

  if (result.numbers[0] === '') {
    return (
      <div>
        <Redirect to={'/404'}/>
      </div>
    )
  }

  return (
    <>
      <Navbar />
      <div className="result">
        <div className="result__body">
          <table className="result__table">
            <thead className="result__head">
              <tr>
                <td className="result__linenum">line numbers</td>
                <td className="result__hexlines">Hexagram</td>
              </tr>
            </thead>
            <tbody>

              {result["divination"].map((el, index) => (
              <tr key={index + 30}>
                <td className="result__linenum">{6 - index}</td>
                <td className="result__hexlines result__lines" dangerouslySetInnerHTML={{__html: lineRender(el)}}></td>
              </tr>
              ))}
            </tbody>
          </table>
          {result["question"] && <><h3>Your question:</h3> <p className="result__questiontext">{result["question"]}</p></>}
            <div className="result__infobox">
              <div className="result__lefttrigram">
                {onLeftHover && <TrigramInfo trigrams={hexdict[result["numbers"][0]].trigrams}/>}
              </div>
            <div className="result__hexinfos">
              <button className="result__hexagram" dangerouslySetInnerHTML={{ __html: hexdict[result["numbers"][0]]["hexagram"]}}
              onMouseEnter={() => setOnLeftHover(true)}
              onMouseLeave={() => setOnLeftHover(false)}
              onClick={() => setOnLeftHover(!onLeftHover)}
              ></button>
              <div className="result__moreinfo">
                <h1>{result["numbers"][0]}</h1>
                <p><span dangerouslySetInnerHTML={{ __html: hexdict[result["numbers"][0]]["chinese"]}}></span>:&nbsp;
                  <span>{hexdict[result["numbers"][0]]["pinyin"]}</span></p>
                <p>"{hexdict[result["numbers"][0]]["english"]}"</p>
              </div>
              {result["numbers"][1] && 
                <>
                  <div className="result__changing">
                    <p>changing</p>
                    <p>into</p>
                    <h1>&#8594;</h1>
                  </div>
                  <div className="result__righttrigram">
                    {onRightHover && <TrigramInfo trigrams={hexdict[result["numbers"][1]].trigrams}/>}
                  </div>
                  <div className="result__hexinfos">
                    <button className="result__hexagram" dangerouslySetInnerHTML={{ __html: hexdict[result["numbers"][1]]["hexagram"]}}
                      onMouseEnter={() => setOnRightHover(true)}
                      onMouseLeave={() => setOnRightHover(false)}
                      onClick={() => setOnRightHover(!onRightHover)}
                    ></button>
                    <div className="result__moreinfo">
                      <h1>{result["numbers"][1]} </h1>
                      <p><span dangerouslySetInnerHTML={{ __html: hexdict[result["numbers"][1]]["chinese"]}}></span>: 
                        <span>{hexdict[result["numbers"][1]]["pinyin"]}</span></p>
                      <p>"{hexdict[result["numbers"][1]]["english"]}"</p>
                    </div>
                  </div>
                </>
              }
          </div>
          </div>
        </div>
      </div>
      <Translation hex={'0'} result={result} />
    </>
  );
}