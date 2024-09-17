import React from 'react';
import { Header } from '../../../../header/index.jsx';
import './index.css';
import { getEmoji } from './emojipedia.js';
import EmojiItem from './EmojiItem';

export const MapingData = () => {
  return (
    <div>
      <Header />
      <div>
        <div className="dictionary">
          {/* Maping the getEmoji array */}
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
    </div>
  );
};
