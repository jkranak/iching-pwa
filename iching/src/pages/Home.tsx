import { useState, ReactElement, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import {hexagram} from '../services/divination';
import Navbar from '../components/Navbar';
import QuestionInfo from '../components/QuestionInfo';
import MethodInfo from '../components/MethodInfo';

export default function Home (): ReactElement {
  const history = useHistory();
  const [question, setQuestion] = useState('');
  const [questHover, setQuestHover] = useState(false);
  const [methodHover, setMethodHover] = useState(false);

  function handleSubmit (event: FormEvent) {
    event.preventDefault();
    const divResult = hexagram((event.target as HTMLInputElement).id);
    history.push(`/result/${divResult}/${question}`)
  }

  return (
    <>
    <Navbar/>
      <div className="home">
        <div className="home__title">
          <h1>The I Ching</h1>
          <h2>&#x2630; &#x2631; &#x2632; &#x2633; &#x2634; &#x2635; &#x2636; &#x2637;</h2>
        </div>
        <p className="home__p">Ask a question (optional)</p>
        <form className="home__form">
          <input className="home__input" type="text" name="question" onChange={(e) => setQuestion(e.target.value)} placeholder="Enter your question..." />
          <button className="home__infobutton" onMouseEnter={() => setQuestHover(true)} onMouseLeave={() => setQuestHover(false)} onClick={() => setQuestHover(!questHover)}>?</button>
          <div className="home__info">
            {questHover && <QuestionInfo />}
          </div>
          <div>
            <button id="yarrow" className="home__button" onClick={handleSubmit}>Yarrow-Stalk Method</button>
            <button id="coin" className="home__button" onClick={handleSubmit}>Three-Coin Method</button>
            <button className="home__infobutton" onMouseEnter={() => setMethodHover(true)} onMouseLeave={() => setMethodHover(false)} onClick={() => history.push('/explanation')}>?</button>
            <div className="home__info">
              {methodHover && <MethodInfo />}
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
