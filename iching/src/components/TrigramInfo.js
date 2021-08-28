import React from 'react'
import tridict from '../data/tridict.json'

export default function TrigramInfo ({trigrams}) {

  return (
    <>
    <h3>Trigrams</h3>
    <div className="trigraminfo">
    <div className="trigraminfo__box">
      <span className="trigraminfo__trigram" dangerouslySetInnerHTML={{__html: tridict[trigrams[0]].trigram}}></span>
      <div className="result__moreinfo">
        <p>{trigrams[0]}</p>
        <p><span dangerouslySetInnerHTML={{__html: tridict[trigrams[0]].chinese}}></span>: {tridict[trigrams[0]]["pinyin"]}</p>
        <p>"{tridict[trigrams[0]].english}"</p>
      </div>
    </div>
    <div className="trigraminfo__box">
      <span className="trigraminfo__trigram" dangerouslySetInnerHTML={{__html: tridict[trigrams[1]].trigram}}></span>
      <div className="result__moreinfo">
        <p>{trigrams[1]}</p>
        <p><span dangerouslySetInnerHTML={{__html: tridict[trigrams[1]].chinese}}></span>: {tridict[trigrams[1]]["pinyin"]}</p>
        <p>"{tridict[trigrams[1]].english}"</p>
      </div>
    </div>
    </div>
    </>
  )
}
