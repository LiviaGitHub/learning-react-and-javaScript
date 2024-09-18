import React from 'react';
import { getEmoji } from './emojipedia';

const CharacterCounter = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Counter Caracteres of Meaning</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {getEmoji.map((emojiEntry) => (
          <li key={emojiEntry.id} style={{ marginBottom: '20px' }}>
            {/* <h2>{emojiEntry.emoji} - {emojiEntry.name}</h2> */}
            <p><strong>Meaning</strong> {emojiEntry.meaning}</p>
            <p><strong>Caracteres of meaning:</strong> {emojiEntry.meaning.length}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterCounter;
