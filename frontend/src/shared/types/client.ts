export type PetSpecies = "dog" | "cat" | "rabbit";

export type Pet = {
  id: string;
  name: string;
  breed: string;
  age: string;
  species: PetSpecies;
};

export type Client = {
  id: string;
  name: string;
  dni: string;
  phone: string;
  email: string;
  address: string;
  pets: Pet[];
};