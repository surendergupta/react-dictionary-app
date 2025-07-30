import { useEffect } from "react";
import { FcSpeaker } from "react-icons/fc";

import './Dictionary.css'

const Dictionary = ({data, audioUrl, playAudio, setAudioUrl}) => {
  if (!data || data.length === 0) return null;
  const word = data[0].word;
  const phonetics = data[0].phonetics;
  const meanings = data[0].meanings;

  useEffect(() => {
    const foundAudio = phonetics.find(p => p.audio)?.audio;
    if (foundAudio) {
      setAudioUrl(foundAudio);
    }
  }, [phonetics, setAudioUrl])

  return (
    <div className="showResults">
      <h2>
        {word}{" "}
        { audioUrl && (
        <button onClick={playAudio}>
          <FcSpeaker size="26px" />
        </button>
        )}
      </h2>
      {meanings.map((meaning, index) => (
        <div key={index} className="meaning-block">
          <h4>Part of Speech:  {meaning.partOfSpeech || 'N/A'}</h4>
          <h4>Definition:</h4>
          <p>{meaning.definitions[0]?.definition || 'N/A'}</p>

          <h4>Example:</h4>
          <p>{meaning.definitions[0]?.example || 'No example available.'}</p>

          <h4>Synonyms:</h4>
          <p>{meaning.synonyms?.slice(0, 5).join(', ') || 'None'}</p>

          <h4>Antonyms:</h4>
          <p>{meaning.antonyms?.slice(0, 5).join(', ') || 'None'}</p>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default Dictionary