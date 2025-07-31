import { useEffect, useMemo } from "react";
import { FcSpeaker } from "react-icons/fc";

import './Dictionary.css'

const Dictionary = ({data, audioUrl, playAudio, setAudioUrl}) => {
  const phonetics = useMemo(() => data?.[0]?.phonetics || [], [data]);
  
  useEffect(() => {
    const foundAudio = phonetics.find(p => p.audio)?.audio;
    if (foundAudio) {
      setAudioUrl(foundAudio);
    }
  }, [phonetics, setAudioUrl])
  
  if (!data || data.length === 0) return null;
  const word = data?.[0]?.word;
  const meanings = data?.[0]?.meanings || [];
  
  return (
    <div className="showResults">
      <h2>
        {word}{" "}
        { audioUrl && (
        <button 
          onClick={playAudio} 
          aria-label="Play pronunciation"
          title="Play pronunciation"
        >
          <FcSpeaker size="26px" />
        </button>
        )}
      </h2>
      {meanings.map((meaning, index) => (
        <div key={index} className="meaning-block">
          <h4>Part of Speech: {meaning.partOfSpeech || 'N/A'}</h4>
          <h4>Definition:</h4>
          {meaning.definitions.map((def, i) => (
            <div key={i} style={{ marginBottom: '12px' }}>
              <h4>Definition {i + 1}:</h4>
              <p>{def.definition}</p>

              {def.example && (
                <>
                  <h4>Example:</h4>
                  <p>"{def.example}"</p>
                </>
              )}
            </div>
          ))}
          
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