import { FcSpeaker } from "react-icons/fc";

import './Dictionary.css'

const Dictionary = ({data, playAudio}) => {
  if (!data) return null;
    
  return (
    <div className="showResults">
      <h2>
        {data.word}{" "}
        <button onClick={playAudio}>
          <FcSpeaker size="26px" />
        </button>
      </h2>

      <h4>Parts of speech:</h4>
      <p>{data.meanings[0]?.partOfSpeech || 'N/A'}</p>

      <h4>Definition:</h4>
      <p>{data.meanings[0]?.definitions[0]?.definition || 'N/A'}</p>

      <h4>Example:</h4>
      <p>{data.meanings[0]?.definitions[0]?.example || 'No example available.'}</p>

      <h4>Synonyms:</h4>
      <p>{data.meanings[0]?.synonyms?.[0] || 'None'}</p>

      <h4>Antonyms:</h4>
      <p>{data.meanings[0]?.antonyms?.[0] || 'None'}</p>
    </div>
  );
}

export default Dictionary