
export class Card {
  object: string;
  id: string;
  name: string;
  lang: string;
  uri: string;
  image_uris: {[key: string]: string};
  mana_cost: string;
  cmc: number;
  oracleText: string;
  power: string;
  toughness: string;
  colorIdentity: string;
}
