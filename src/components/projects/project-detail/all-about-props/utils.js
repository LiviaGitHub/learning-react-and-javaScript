import { images } from './images';

export function getImageUrls(person) {
  return images[person.imageId];
}
