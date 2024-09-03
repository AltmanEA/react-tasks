import { Person } from "./App";

export function getImageUrl(person: Person, size: string) {
    return (
      'https://i.imgur.com/' +
      person.imageId +
      size +
      '.jpg'
    );
  }