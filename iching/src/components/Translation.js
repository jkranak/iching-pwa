import { useState } from 'react';
import translations from '../data/translations.json';
import hexdict from '../data/hexdict.json';
import Switch from './Switch';

function Translation({hex, result}) {
  const [translator, setTranslator] = useState('legge');
  const divResult = hex === 0 ? result : {
    numbers: [hex],
    lines: [1, 2, 3, 4, 5, 6]
  };

  return (
    <div className="translation">
    <Switch translator={translator} setTranslator={setTranslator}/>
    <div className="translation__text">
      <h2>Commentary on Hexagram {divResult.numbers[0]} ({hexdict[divResult.numbers[0]]["pinyin"]})</h2>
      {translator === 'wilhelm' && <h2>Judgment</h2>}
      <div>{translations[translator][divResult.numbers[0]].main.map((el, index) => (
          <p className="comments" key={index + 6}>{el}</p>
        ))}
        {translator === 'wilhelm' && 
          <>
            <h2>Image</h2>
            <div>{translations[translator][divResult.numbers[0]].image.map((el, index) => (
              <p className="comments"  key={index + 12}>{el}</p>
            ))}</div>
          </>
        }
        {divResult.lines.length > 0 && 
          <>
            <h2>Line Commentary</h2> 
            <div id="linecomm">{divResult.lines.map((el) => (
              <p className="comments"  key={el + 24}>{el}: {translations[translator][divResult.numbers[0]][el].map((line, index) => (
                <span key={index + 30}>{line}</span>
              ))}</p>
            ))}</div>            
          </>
        }
        {divResult.numbers[1] &&
          <>
            <h2>Commentary on Hexagram {divResult.numbers[1]} ({hexdict[divResult.numbers[1]]["pinyin"]})</h2>
            {translations[translator][divResult.numbers[1]].main.map((el, index) => (
              <p className="comments" key={index + 18}>{el}</p>
            ))}
          </> }
      </div>
    </div>
    </div>
  );
}

export default Translation;