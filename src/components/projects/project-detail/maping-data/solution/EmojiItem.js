import React from 'react';

const EmojiItem = (props) => {
  return (
    <dl className="term">
      <dt>
        <span className="emoji">{props.emoji}</span>
        <span>{props.name}</span>
      </dt>
      <dd>{props.meaning}</dd>
    </dl>
  );
};

export default EmojiItem;

// Named export: Use { EmojiItem } when exporting and importing.
// *** export const EmojiItem = () => {
// *** import { EmojiItem } from './EmojiItem';

// Standard export: Use export default and import directly with EmojiItem.
// *** export default EmojiItem;
// *** import EmojiItem from './EmojiItem';
