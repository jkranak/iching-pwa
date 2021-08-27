import { useParams, Redirect } from 'react-router-dom';
import hexdict from '../data/hexdict.json'
import Navbar from '../components/Navbar';
import Translation from '../components/Translation';

export default function Browse() {
  const {hex} = useParams();
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
    <Translation hex={hex}/>
    </>
  );
}