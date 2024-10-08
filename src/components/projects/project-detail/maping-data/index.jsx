import React from 'react';
import { Header } from '../../../header/index.jsx';
import './index.css';
import { getEmoji } from './emojipedia.js';
import { EmojiItem } from './EmojiItem.jsx';

export const MapingDataPage = () => {
  return (
    <div>
      <Header />
      <div className="dictionary">
      {/* The emojiEntry is the name of the variable you are using to represent each object 
      in the getEmoji array when iterating with the .map() method. */}
        {getEmoji.map((emojiEntry) => (
          <EmojiItem 
            key={emojiEntry.id}
            emoji={emojiEntry.emoji}
            name={emojiEntry.name}
            meaning={emojiEntry.meaning}
          />
        ))}
      </div>
    </div>
  );
};
