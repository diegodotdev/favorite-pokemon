export interface Pokemon {
  species: {
    name: string;
  };
  sprites: {
    front_default: string;
  };
}

export interface Data {
  id: number;
  name: string;
  image: string;
}
