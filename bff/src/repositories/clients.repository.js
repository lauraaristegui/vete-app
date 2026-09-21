const { clients } = require("../data/clients.data");

function getClients() {
  return clients;
}

function getClientById(id) {
  return clients.find((client) => client.id === id);
}

function createClient(clientData) {
  const newClient = {
    id: String(clients.length + 1),
    ...clientData,
    pets: [],
  };

  clients.push(newClient);

  return newClient;
}

function updateClient(id, clientData) {
  const clientIndex = clients.findIndex((client) => client.id === id);

  if (clientIndex === -1) {
    return undefined;
  }

  const updatedClient = {
    ...clients[clientIndex],
    ...clientData,
  };

  clients[clientIndex] = updatedClient;

  return updatedClient;
}

function addPet(clientId, petData) {
  const client = clients.find((client) => client.id === clientId);

  const allPets = clients.flatMap((client) => client.pets);

  const newPet = {
    id: String(allPets.length + 1),
    ...petData,
  };

  client.pets.push(newPet);

  return newPet;
}

module.exports = {
  getClients,
  getClientById,
  createClient,
  updateClient,
  addPet,
};