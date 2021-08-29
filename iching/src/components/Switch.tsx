import {ReactElement} from 'react';

interface Props {
  translator: string
  setTranslator: (t: string) => void
}

export default function Switch({setTranslator, translator}: Props): ReactElement {

  return (
    <div className="switch"> 
        <p>Currently Displaying translation by {translator === 'legge' 
          ? <a href="https://sacred-texts.com/ich/">James Legge</a> 
          : translator === 'wilhelm' 
            ? <a href="http://www.pantherwebworks.com/i_ching/index.html">Richard Wilhelm</a> 
            : <a href="http://grichter.sites.truman.edu/home/">Gregory C. Richter</a>}.</p>
        <p>Show other translations:&nbsp;</p>
        {translator !== 'legge' && <button id="legge" onClick={() => setTranslator('legge')}>Legge</button> }
        {translator !== 'wilhelm' && <button id="wilhelm" onClick={() => setTranslator('wilhelm')}>Wilhelm</button> }
        {translator !== 'richter' && <button id="richter" onClick={() => setTranslator('richter')}>Richter</button> } 
    </div>
  );
}