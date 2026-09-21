const { clients } = require("../data/clients.data");

function getPetById(petId) {
  const pets = clients.flatMap((client) => client.pets);

  return pets.find((pet) => pet.id === petId);
}


function updatePet(petId, petData) {
  const pet = getPetById(petId);

  if (!pet) {
    return undefined;
  }

  Object.assign(pet, petData);

  return pet;
}

module.exports = {
  getPetById,
  updatePet,
};