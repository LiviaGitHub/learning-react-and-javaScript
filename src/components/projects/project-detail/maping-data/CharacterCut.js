import { getEmoji } from './emojipedia';

export const characterCut = getEmoji.map(function (emojiEntry){
        return emojiEntry.meaning.substring(0, 100);
    }
);

console.log(characterCut);

export const characterCutTwo = getEmoji.map((emojiEntry) => {
  return emojiEntry.meaning.substring(0, 100);
});

console.log(characterCutTwo);