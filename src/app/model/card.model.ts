
export class Card {
  object: string;
  id: string;
  name: string;
  lang: string;
  uri: string;
  imageUris: {[key: string]: string};
  manaCost: string;
  cmc: number;
  oracleText: string;
  power: string;
  toughness: string;
  colorIdentity: string;
}
